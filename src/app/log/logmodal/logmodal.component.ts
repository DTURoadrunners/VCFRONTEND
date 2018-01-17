import { Component, OnInit, Input, TemplateRef } from '@angular/core';

// import bootstrap modal modules
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// import Log model and the needed service 
import { LogEntry } from '../../models/LogEntry';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'logmodal',
  templateUrl: './logmodal.component.html',
  styleUrls: ['./logmodal.component.css']
})
export class LogmodalComponent implements OnInit {

  @Input('log') log: any; // inheritence from the parrent component, called with [log] = data
  @Input('logModal') modalRef: BsModalRef; // inheritence from the parrent component, called with [logModal] = data
  modalRefChild: BsModalRef; // reference for the modal 

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {

  }

  /**
   * hide the child modal
   */
  hideChildModal(): void {
    this.modalRef.hide();
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   */
  openModal(template: TemplateRef<any>) {
    this.modalRefChild = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  /**
   * click event, will close the HTML modal
   * TODO: rollback the event 
   */
  confirm(): void {
  
    this.modalRefChild.hide();
  }
 
  /**
   * click event, will close the HTML modal
   */
  decline(): void {

    this.modalRefChild.hide();
  }

}
