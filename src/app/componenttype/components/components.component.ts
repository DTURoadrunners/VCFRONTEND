import { Component, OnInit } from '@angular/core';
import { COMPONENTS } from './../../mock/mock-components'

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  components = COMPONENTS;

  constructor() { }

  ngOnInit() {
  }
  
}
