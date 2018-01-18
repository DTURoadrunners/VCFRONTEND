import { Component, OnInit, TemplateRef } from '@angular/core';

// load angular routing, can be used to navigate to a new link
import { Router } from "@angular/router";

// load project models and service
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';
import { PROJECTS } from "./../mock/mock-projects"; //can be removed, not needed anymore with services

// load bootstrap modal
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

// load angular forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {
  projects: Project[]; // holding all the projects in a array
  modalRef: BsModalRef; // reference to the modal
  projectForm: FormGroup; //call it with [formGroup]="projectForm" in the HTML
  private formSubmitAttempt: boolean;  // submit flag
  isAdmin: boolean;

  constructor(
    private router: Router, 
    private projectService: ProjectService, 
    private fb: FormBuilder, 
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getProjects(); // load the projects on loading this component

    /**
     * build the form, used to know which inputs fields the whole form has and which one of them are required. Their values are set to empty on load
     */
    this.projectForm = this.fb.group({
      title: ['', Validators.required], // Required
      description: ['', Validators.required], // Required
    });
  }
  

  /**
   * navigate the user to the project page according to the id
   * @param id id on the single project
   */
  cardClick(id: number) {
    this.router.navigate(["/project/"+id]);
  }


  /**
   * load all the projects and bind them to the projects array. 
   */
  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  /**
   * dummy method, only used to test if the create projects works, without typing in the fields the whole time. 
   */
  createProject(): void{
    this.projectService.createProject(  { id: 4, name: "VCFRONTEND", description: "Her udvikles frontend til VCAPI" }).subscribe(projects => this.projects = projects);
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /**
   * being called when the function is submitted with (ngSubmit)="onSubmit()"
   * if the form is valied, the projectService will be called a new project will be created with the input fields. 
   * hide the modal afterwards
   */
  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.createProject(  
        { id: Math.floor(Math.random() * 1000) + 1, // TODO don't create random ID  
          name: this.projectForm.value.title, 
          description: this.projectForm.value.description }
        ).subscribe(projects => this.projects = projects);
        this.modalRef.hide();
        this.projectForm.value.title = '';
    }
   
    this.formSubmitAttempt = true;             
  }
  
}
