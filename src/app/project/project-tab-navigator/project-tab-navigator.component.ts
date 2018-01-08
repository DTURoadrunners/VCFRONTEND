import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-tab-navigator',
  templateUrl: './project-tab-navigator.component.html',
  styleUrls: ['./project-tab-navigator.component.css']
})
export class ProjectTabNavigatorComponent implements OnInit {

  @Input() project: Project;

  overview: boolean = true;
  components: boolean = false;
  memberlist: boolean = false;
  log: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
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

  getProject(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }

}
