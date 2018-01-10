import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Componenttypes } from '../../models/componenttypes';
import { ComponenttypeService } from '../../service/componenttype.service'


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input('model') componenttype: Componenttypes;

  alerts: any = [];
  modalRef: BsModalRef;
  componenttypeForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML



  constructor(
    private fb: FormBuilder, // inject the formbuilder
    private modalService: BsModalService,
    private componenttypeService: ComponenttypeService
  ) { }

  ngOnInit() {
    this.componenttypeForm = this.fb.group({
      title: [this.componenttype.name, Validators.required],
      description: [this.componenttype.description], //Optional
      category: [this.componenttype.category], //Optional
      storage: [this.componenttype.storage, Validators.required],
    });

  }

  openModal(template: TemplateRef<any>, component: Component) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.componenttypeForm.valid) {
      this.componenttypeService.update(
        this.componenttype.id,
        this.componenttype.projectId,
        this.componenttypeForm.value.title,
        this.componenttypeForm.value.description,
        this.componenttypeForm.value.category,
        this.componenttypeForm.value.storage);
      this.componenttypeService.get(this.componenttype.id, this.componenttype.projectId)
        .subscribe(componenttype => this.componenttype = componenttype);
      this.modalRef.hide();
    }
    else {
      console.log("Invalid");
    }
  }
}
