import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from "@angular/router";
import { PROJECTS } from "./../../mock/mock-projects";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from '../../models/project';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {
  projects = PROJECTS;
  modalRef: BsModalRef;
  projectForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML
  selectedProjectt: Project;

  constructor(
  private router: Router, 
  private fb: FormBuilder,       // inject the formbuilder
  private modalService: BsModalService
  ){}
  
  ngOnInit() {
    this.projectForm = this.fb.group({
      description: [''], //Optional
      comment: [''], //Optional
    });
  }

  cardClick(id: number) {
    this.router.navigate(["/project/"+id]);
  }
  openModal(template: TemplateRef<any>, project: Project) {
    this.modalRef = this.modalService.show(template);
    this.selectedProject = project;
  }
}
