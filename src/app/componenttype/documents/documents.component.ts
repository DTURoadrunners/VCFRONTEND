import { Component, OnInit } from '@angular/core';
import { DOCUMENTS } from '../../mock/mock-documents'; 



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  

  mydocuments = DOCUMENTS;

  constructor() { 
  }

  ngOnInit() {
  }

}
