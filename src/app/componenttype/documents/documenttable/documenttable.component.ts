import { Component, OnInit, Input } from '@angular/core';
import { DOCUMENTS } from '../../../mock/mock-documents'; 

@Component({
  selector: 'app-documenttable',
  templateUrl: './documenttable.component.html',
  styleUrls: ['./documenttable.component.css']
})
export class DocumenttableComponent implements OnInit {

  //documents = DOCUMENTS;
  @Input() documents;

  constructor() { }

  ngOnInit() {
  }

}
