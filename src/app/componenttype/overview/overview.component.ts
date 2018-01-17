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

  @Input('model') componenttype: Componenttypes; //current componenttype
  
  modalRef: BsModalRef;
  componenttypeForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private componenttypeService: ComponenttypeService
  ) { }

  ngOnInit() {
    //Initiate input form
    this.componenttypeForm = this.fb.group({
      title: [this.componenttype.name, Validators.required],
      description: [this.componenttype.description], //Optional
      category: [this.componenttype.category], //Optional
      storage: [this.componenttype.storage, Validators.required],
    });

  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /**
   * Grab data from input fields and send it to the componenttypeService for edit
   */
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
