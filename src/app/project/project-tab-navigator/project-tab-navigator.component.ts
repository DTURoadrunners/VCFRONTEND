import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// modal
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// project
import { Project } from '../../models/project';
import { ProjectService } from '../../service/project.service';

// project log
import { LogEntry } from '../../models/LogEntry';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'app-project-tab-navigator',
  templateUrl: './project-tab-navigator.component.html',
  styleUrls: ['./project-tab-navigator.component.css']
})
export class ProjectTabNavigatorComponent implements OnInit {

  @Input() project: Project; //Current project
  logEntry: LogEntry[];
  modalRef: BsModalRef;

  //Which tab is visible
  overview: boolean = true;
  componenttype: boolean = false;
  memberlist: boolean = false;
  log: boolean = false;
  selectedLogEntry: LogEntry; //Assigned when the user clicks on a log entry

  constructor(
    private route: ActivatedRoute,
    private logService: LogService,
    private projectService: ProjectService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getProject();
    this.getLatestLog();
  }
  selectOverview(): void {
    this.overview = true; this.componenttype = false; this.memberlist = false; this.log = false; 
  }

  selectComponenttype(): void {
    this.overview = false; this.componenttype = true; this.memberlist = false; this.log = false; 
  }

  selectMemberlist(): void {
    this.overview = false; this.componenttype = false; this.memberlist = true; this.log = false; 
  }

  selectLog(): void {
    this.overview = false; this.componenttype = false; this.memberlist = false; this.log = true; 
  }

  getProject(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }

  getLatestLog(): void{
    this.logService.getLatestProjectLog().subscribe(projectLog => this.logEntry = projectLog);
  }

  /**
   * open the modal with the corresponding HTML template
   * @param template reference to the NG HTML template
   * @param logEntry log entry to be shown in modal
   */
  openModal(template: TemplateRef<any>, logEntry: LogEntry) {
    this.modalRef = this.modalService.show(template);
    this.selectedLogEntry = logEntry;
  }

}
