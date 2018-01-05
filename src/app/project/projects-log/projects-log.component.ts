import { Component, OnInit } from '@angular/core';
import { PROJECTLOG } from '../../mock/mock-projectLog';

@Component({
  selector: 'app-projects-log',
  templateUrl: './projects-log.component.html',
  styleUrls: ['./projects-log.component.css']
})
export class ProjectsLogComponent implements OnInit {

  logdata = PROJECTLOG;
  totalItems = this.logdata.length;
  currentPage = 1;
  smallnumPages = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.logdata.length)
  }
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

}
