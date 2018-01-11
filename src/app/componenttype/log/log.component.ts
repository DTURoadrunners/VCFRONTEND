import { Component, OnInit, TemplateRef } from '@angular/core';
import { COMPONENTTYPELOG } from '../../mock/mock-componTypeLog';

// modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// log
import { ComponentTypeLog } from '../../models/log/componentTypeLog'; 
import { LogService } from '../../service/log.service'; 

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logdata = COMPONENTTYPELOG;
  totalItems = this.logdata.length;
  currentPage = 1;
  smallnumPages = 0;
  modalRef: BsModalRef;
  selectedComponentTypeLog: ComponentTypeLog;

  constructor(
    private modalService: BsModalService,
    private logService: LogService

  ) { }

  ngOnInit() {
  }

  
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  openModal(template: TemplateRef<any>, componentTypeLog: ComponentTypeLog) {
    this.modalRef = this.modalService.show(template);
    this.selectedComponentTypeLog = componentTypeLog;
  }

}
