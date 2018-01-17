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
  componentForm: FormGroup;
  selectedComponent: _Component;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private componentService: ComponentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getComponents();

    this.componentForm = this.fb.group({
      status: [''], //Optional
      comment: [''], //Optional
    });
  }

  /**
   * open the modal with the corresponding HTML template
   * @param component the selected component to show in the modal
   */
  openModal(template: TemplateRef<any>, component: _Component) {
    this.modalRef = this.modalService.show(template);
    this.selectedComponent = component;
  }

  /**
   * Close the modal and reset the input form
   */
  closeModal() {
    this.modalRef.hide()
    this.componentForm = this.fb.group({ //Clear the form
      status: [''],
      comment: [''],
    });
  }

  getComponents() {
    this.componentService.getAll(+this.route.snapshot.paramMap.get('componentypeid'), +this.route.snapshot.paramMap.get('projectid')) //'+' to parse to number
      .subscribe(components => this.components = components);
  }

  onCreateComponent() {
    if (this.componentForm.valid) {
      this.componentService.create(
        +this.route.snapshot.paramMap.get('componentypeid'), //'+' to parse to number
        +this.route.snapshot.paramMap.get('projectid'),
        this.componentForm.value.status,
        this.componentForm.value.comment)
        .subscribe(components => this.components = components);
    }
    this.closeModal();
  }

  onUpdateComponent() {
    if (this.componentForm.valid) {
      this.componentService.update(
        this.selectedComponent.id,
        this.selectedComponent.componenttypeId,
        this.selectedComponent.projectId,
        this.componentForm.value.status,
        this.componentForm.value.comment)
        .subscribe(components => this.components = components);
    }
    this.closeModal();
  }

  onDeleteComponent() {
    this.componentService.delete(
      this.selectedComponent.id,
      this.selectedComponent.componenttypeId,
      this.selectedComponent.projectId)
      .subscribe(components => this.components = components);
    this.closeModal();
  }
}
