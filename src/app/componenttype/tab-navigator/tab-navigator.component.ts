import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.css']
})
export class TabNavigatorComponent implements OnInit {
  overview: boolean = true;
  components: boolean = false;
  documents: boolean = false;
  log: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  selectOverview(): void {
    this.overview = true; this.components = false; this.documents = false; this.log = false;
  }

  selectComponents(): void {
    this.overview = false; this.components = true; this.documents = false; this.log = false;
  }

  selectDocuments(): void {
    this.overview = false; this.components = false; this.documents = true; this.log = false;
  }

  selectLog(): void {
    this.overview = false; this.components = false; this.documents = false; this.log = true;
  }
}
