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
  totalItems: number; //Number of logs, used for pagination
  currentPage = 1;

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

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   * @param logEntry the logEntry to be shown
   */
  openModal(template: TemplateRef<any>, logEntry: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedLogEntry = logEntry;
  }
}
