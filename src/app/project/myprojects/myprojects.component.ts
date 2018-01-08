import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';


@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
    this.createProject();
    this.createProject();
  }

  cardClick(id: number) {
    this.router.navigate(["/project/"+id]);
  }


  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  createProject(): void{
    this.projectService.createProject(  { id: 4, name: "VCFRONTEND", description: "Her udvikles frontend til VCAPI" }).subscribe(projects => this.projects = projects);
  }

}
