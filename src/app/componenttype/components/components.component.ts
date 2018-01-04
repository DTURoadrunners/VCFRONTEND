import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMPONENTS } from './../../mock/mock-components'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  alerts: any = [];
  components = COMPONENTS;
  modalRef: BsModalRef;
  componentForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
