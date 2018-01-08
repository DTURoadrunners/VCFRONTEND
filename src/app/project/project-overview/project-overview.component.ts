import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  @Input() project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
    
  }


  getProject(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }

}
