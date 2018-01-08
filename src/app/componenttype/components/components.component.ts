import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ComponentService } from './../../service/component.service'
import { _Component } from "../../models/component";

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
    private componentService: ComponentService
  ) { }

  ngOnInit(): void {
    this.getComponents(1);
    
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
    this.componentService.getAll(1).subscribe(components => this.components = components);
  }
  
  onSubmit() {
    console.log("CREATING COMPONENT");
    if (this.componentForm.valid) {
      this.componentService.create(
        this.selectedComponent.componenttypeId,
        this.componentForm.value.status,
        this.componentForm.value.comment)
        .subscribe(components => this.components = components); //Assign retrieved data to variable
      console.log(this.components.length);
    }
  }

  onUpdateComponent() {
    this.componentService.update(
      this.selectedComponent.id,
      this.selectedComponent.componenttypeId,
      this.componentForm.value.status,
      this.componentForm.value.comment)
      .subscribe(components => this.components = components); //Assign retrieved data to variable
    console.log(this.components.length);
  }

  onDeleteComponent() {
    this.componentService.delete(
      this.selectedComponent.id,
      this.selectedComponent.componenttypeId)
      .subscribe(components => this.components = components); //Assign retrieved data to variable
    console.log(this.components.length);
  }

}
