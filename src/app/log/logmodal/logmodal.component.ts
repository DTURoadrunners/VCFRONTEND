import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ProjectLog } from '../../models/log/project-log';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'logmodal',
  templateUrl: './logmodal.component.html',
  styleUrls: ['./logmodal.component.css']
})
export class LogmodalComponent implements OnInit {

  @Input('log') log: any;
  @Input('logModal') modalRef: BsModalRef;
  modalRefChild: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {

  }

  hideChildModal(): void {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRefChild = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
  
    this.modalRefChild.hide();
  }
 
  decline(): void {

    this.modalRefChild.hide();
  }

}
