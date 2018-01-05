import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { COMPONENTTYPES } from './../../mock/mock-componenttypes';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  alerts: any = [];
  componenttype = COMPONENTTYPES[0];
  modalRef: BsModalRef;
  componentForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML

  constructor(
    private fb: FormBuilder, // inject the formbuilder
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.componentForm = this.fb.group({
      title: ['', Validators.required],
      description: [''], //Optional
      category: [''], //Optional
      storage: [0, Validators.required],
    });
  }

  openModal(template: TemplateRef<any>, component: Component) {
    this.modalRef = this.modalService.show(template);
  }
}
