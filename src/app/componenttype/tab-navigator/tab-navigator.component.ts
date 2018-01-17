import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Componenttypes } from '../../models/componenttypes';
import { ComponenttypeService } from '../../service/componenttype.service';

// modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// log
import { LogEntry } from '../../models/LogEntry';
import { LogService } from '../../service/log.service';



@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.css']
})
export class TabNavigatorComponent implements OnInit {

  @Input() componenttype: Componenttypes; //Current componenttype
  componentTypeLog: LogEntry[]; //Log entries for recent activity
  modalRef: BsModalRef;
  selectedComponentTypeLog: LogEntry; //Is assigned when user clicks on a specific log entry


  //Which tab is visible
  overview: boolean = true;
  components: boolean = false;
  documents: boolean = false;
  log: boolean = false;

  constructor(
    private logService: LogService,
    private route: ActivatedRoute,
    private componenttypeService: ComponenttypeService,
    private location: Location,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.getComponenttype();
    this.getComponentTypeLog();
  }


  selectOverview(): void {
    this.overview = true; this.components = false; this.documents = false; this.log = false;
  }

  selectComponents(): void {
    this.overview = false; this.components = true; this.documents = false; this.log = false;
  }

  selectDocuments(): void {
    this.overview = false; this.components = false; this.documents = true; this.log = false;
  }

  selectLog(): void {
    this.overview = false; this.components = false; this.documents = false; this.log = true;
  }

  
  getComponenttype(): void{
    var componenttypeId = +this.route.snapshot.paramMap.get('componentypeid'); //+ correctly casts the string to a number
    var projectId = +this.route.snapshot.paramMap.get('projectid'); //+ correctly casts the string to a number
    this.componenttypeService.get(componenttypeId, projectId).subscribe(componenttype => this.componenttype = componenttype);
  }

  getComponentTypeLog(): void{
    this.logService.getLatestComponettypeLog().subscribe(componentTypeLog => this.componentTypeLog = componentTypeLog);
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   * @param projectlog the log entry to show in the modal
   */
  openModal(template: TemplateRef<any>, projectlog: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedComponentTypeLog = projectlog;
  }

  
}
