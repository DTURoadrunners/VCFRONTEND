import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// project
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';

// project log
import { ProjectLog } from '../../models/log/project-log';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'app-project-tab-navigator',
  templateUrl: './project-tab-navigator.component.html',
  styleUrls: ['./project-tab-navigator.component.css']
})
export class ProjectTabNavigatorComponent implements OnInit {

  @Input() project: Project;
  projectLog: ProjectLog[];

  overview: boolean = true;
  componenttype: boolean = false;
  memberlist: boolean = false;
  log: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private logService: LogService,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
    this.getLatestLog();
  }
  selectOverview(): void {
    this.overview = true; this.componenttype = false; this.memberlist = false; this.log = false;
  }

  selectComponenttype(): void {
    this.overview = false; this.componenttype = true; this.memberlist = false; this.log = false;
  }

  selectMemberlist(): void {
    this.overview = false; this.componenttype = false; this.memberlist = true; this.log = false;
  }

  selectLog(): void {
    this.overview = false; this.componenttype = false; this.memberlist = false; this.log = true;
  }

  getProject(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }

  getLatestLog(): void{
    this.logService.getLatestProjectLog().subscribe(projectLog => this.projectLog = projectLog);
  }

}
