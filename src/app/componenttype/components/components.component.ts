import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ComponentService } from './../../service/component.service'
import { _Component } from "../../models/component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  components: _Component[];
  modalRef: BsModalRef;
  componentForm: FormGroup; //call it with [formGroup]="componentForm" in the HTML
  selectedComponent: _Component;

  constructor(
    private fb: FormBuilder,         // inject the formbuilder
    private modalService: BsModalService,
    private componentService: ComponentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getComponents(+this.route.snapshot.paramMap.get('componentypeid')); //using id from url. '+' to parse to number

    this.componentForm = this.fb.group({
      status: [''], //Optional
      comment: [''], //Optional
    });
  }

  openModal(template: TemplateRef<any>, component: _Component) {
    this.modalRef = this.modalService.show(template);
    this.selectedComponent = component;
  }

  getComponents(componentTypeId: number) {
    this.componentService.getAll(+this.route.snapshot.paramMap.get('componentypeid')) //'+' to parse to number
      .subscribe(components => this.components = components);
  }

  onCreateComponent() {
    if (this.componentForm.valid) {
      this.componentService.create(
        +this.route.snapshot.paramMap.get('componentypeid'), //'+' to parse to number
        this.componentForm.value.status,
        this.componentForm.value.comment)
        .subscribe(components => this.components = components); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }

  onUpdateComponent() {
    if (this.componentForm.valid) {
      this.componentService.update(
        this.selectedComponent.id,
        this.selectedComponent.componenttypeId,
        this.componentForm.value.status,
        this.componentForm.value.comment)
        .subscribe(components => this.components = components); //Assign retrieved data to variable
      this.modalRef.hide();
    }
    this.componentForm = this.fb.group({
      status: [''], //Optional
      comment: [''], //Optional
    });
  }

  onDeleteComponent() {
    if (this.componentForm.valid) {
      this.componentService.delete(
        this.selectedComponent.id,
        this.selectedComponent.componenttypeId)
        .subscribe(components => this.components = components); //Assign retrieved data to variable
      this.modalRef.hide();
    }
  }

}
