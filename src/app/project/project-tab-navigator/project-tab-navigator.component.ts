import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tab-navigator',
  templateUrl: './project-tab-navigator.component.html',
  styleUrls: ['./project-tab-navigator.component.css']
})
export class ProjectTabNavigatorComponent implements OnInit {
  overview: boolean = true;
  components: boolean = false;
  memberlist: boolean = false;
  log: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  selectOverview(): void {
    this.overview = true; this.components = false; this.memberlist = false; this.log = false;
  }

  selectComponents(): void {
    this.overview = false; this.components = true; this.memberlist = false; this.log = false;
  }

  selectMemberlist(): void {
    this.overview = false; this.components = false; this.memberlist = true; this.log = false;
  }

  selectLog(): void {
    this.overview = false; this.components = false; this.memberlist = false; this.log = true;
  }

}
