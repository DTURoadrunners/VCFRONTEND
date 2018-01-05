import { Component, OnInit, TemplateRef } from '@angular/core';
import { COMPONENTS } from '../../mock/mock-components';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-components',
  templateUrl: './project-components.component.html',
  styleUrls: ['./project-components.component.css']
})
export class ProjectComponentsComponent implements OnInit {

  alerts: any = [];
  components = COMPONENTS;
  modalRef: BsModalRef;
  componentForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML
  selectedComponent: Component;

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.componentForm = this.fb.group({
      status: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  openModal(template: TemplateRef<any>, component: Component) {
    this.modalRef = this.modalService.show(template);
    this.selectedComponent = component;
  }

}
