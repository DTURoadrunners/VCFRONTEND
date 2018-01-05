import { Component, OnInit, TemplateRef } from '@angular/core';
import { DOCUMENTS } from '../../mock/mock-documents'; 
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  modalRef: BsModalRef;

  mydocuments = DOCUMENTS;

  constructor(
    private modalService: BsModalService
  ) { 
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
