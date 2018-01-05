import { Component, OnInit } from '@angular/core';
import { COMPONENTTYPELOG } from '../../mock/mock-componTypeLog';


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

  constructor() { }

  ngOnInit() {
    console.log(this.logdata.length)
  }

  
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

}
