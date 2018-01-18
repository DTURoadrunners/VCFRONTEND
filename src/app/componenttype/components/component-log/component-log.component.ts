import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LogEntry } from "../../../models/LogEntry";
import { LogService } from "../../../service/log.service";



@Component({
  selector: 'app-component-log',
  templateUrl: './component-log.component.html',
  styleUrls: ['./component-log.component.css']
})
export class ComponentLogComponent implements OnInit {

  @Input('componentId') componentId: number; //Selected component
  logData: LogEntry[];
  modalRef: BsModalRef;
  selectedLogEntry: LogEntry;

  constructor(
    private modalService: BsModalService,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.logService.getComponentLogs(this.componentId).subscribe(componentLogs => this.logData = componentLogs);
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   * @param logEntry the selected logEntry to be shown
   */
  openModal(template: TemplateRef<any>, logEntry: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedLogEntry = logEntry;
  }

  closeModal(): void {
    this.modalRef.hide();
  }
}
