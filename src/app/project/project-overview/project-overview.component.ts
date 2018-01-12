import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// form
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


// project
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  @Input('model') project: Project;
  projectForm: FormGroup; //call it with [formGroup]="projectForm" in the HTML
  private formSubmitAttempt: boolean;  // submit flag

  modalRef: BsModalRef; // modal reference

  constructor(
    private modalService: BsModalService, // modal service from bootstrap
    private projectService: ProjectService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      title: ['', Validators.required], // Required
      description: ['', Validators.required], // Required
    });
  }

  updateProject(): void{
    this.projectService.updateProject(this.project).subscribe();
    this.modalRef.hide();
  }

  /**
   * link the template from the html to the method
   * @param template ng-template from the HTML
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  onSubmit() {
    this.projectService.updateProject(this.project).subscribe();
    this.modalRef.hide();
  }


}
