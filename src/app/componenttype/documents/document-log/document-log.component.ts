import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LogEntry } from "../../../models/LogEntry";
import { LogService } from "../../../service/log.service";

@Component({
  selector: 'app-document-log',
  templateUrl: './document-log.component.html',
  styleUrls: ['./document-log.component.css']
})
export class DocumentLogComponent implements OnInit {

  @Input('documentId') documentId: number; //Selected document to open log for
  logData: LogEntry[];
  modalRef: BsModalRef;
  selectedLogEntry: LogEntry;

  constructor(
    private modalService: BsModalService,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.logService.getDocumentLogs(this.documentId).subscribe(documentLogs => this.logData = documentLogs);
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   * @param logEntry the selected logEntry to show in the modal
   */
  openModal(template: TemplateRef<any>, logEntry: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedLogEntry = logEntry;
  }

  closeModal(): void{
    this.modalRef.hide();
  }
}
