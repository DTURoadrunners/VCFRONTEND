import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from "@angular/router";
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';
import { PROJECTS } from "./../../mock/mock-projects";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {
  projects: Project[];
  modalRef: BsModalRef;
  projectForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML
  private formSubmitAttempt: boolean;  // submit flag


  constructor(
    private router: Router, 
    private projectService: ProjectService, 
    private fb: FormBuilder, 
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getProjects();
    this.projectForm = this.fb.group({
      title: ['', Validators.required], //Optional
      description: ['', Validators.required], //Optional
    });
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

  openModal(template: TemplateRef<any>, project: Project) {
    this.modalRef = this.modalService.show(template);
  }


  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.createProject(  
        { id: Math.floor(Math.random() * 1000) + 1  , 
          name: this.projectForm.value.title, 
          description: this.projectForm.value.description }
        ).subscribe(projects => this.projects = projects);
        this.modalRef.hide();
        this.projectForm.value.title = '';
    }
   
    this.formSubmitAttempt = true;             
  }
}
