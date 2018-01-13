import { Component, OnInit, TemplateRef } from '@angular/core';

// modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// log
import { LogEntry } from '../../models/LogEntry';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'app-projects-log',
  templateUrl: './projects-log.component.html',
  styleUrls: ['./projects-log.component.css']
})
export class ProjectsLogComponent implements OnInit {

  logdata: LogEntry[];
  modalRef: BsModalRef;
  selectedLogEntry: LogEntry;
  totalItems: number;
  currentPage = 1;
  smallnumPages = 0;

  constructor(
    private logService: LogService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getProjectLogs();
    this.logdata.length
  }
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  getProjectLogs(): void{
    this.logService.getProjectLogs().subscribe(logdata => this.logdata = logdata);
  }
  openModal(template: TemplateRef<any>, logEntry: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedLogEntry = logEntry;
  }
}
