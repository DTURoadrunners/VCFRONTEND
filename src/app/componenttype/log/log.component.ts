import { Component, OnInit, TemplateRef } from '@angular/core';
import { COMPONENTTYPELOG } from '../../mock/mock-componTypeLog';

// modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// log
import { LogEntry } from '../../models/LogEntry'; 
import { LogService } from '../../service/log.service'; 

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logdata: LogEntry[];
  totalItems = this.logdata.length; //Number of logs, used for pages
  currentPage = 1;
  modalRef: BsModalRef;
  selectedLogEntry: LogEntry;

  constructor(
    private modalService: BsModalService,
    private logService: LogService

  ) { }

  ngOnInit() {
    this.logService.getComponenttypeLogs().subscribe(logs => this.logdata = logs);
  }
  
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   */
  openModal(template: TemplateRef<any>, logEntry: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedLogEntry = logEntry;
  }

}
