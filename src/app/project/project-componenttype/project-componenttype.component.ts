import { Component, OnInit } from '@angular/core';

import { Componenttype } from '../../models/componentType';
import { ComponenttypeService }  from '../../service/componenttype.service';

@Component({
  selector: 'app-project-componenttype',
  templateUrl: './project-componenttype.component.html',
  styleUrls: ['./project-componenttype.component.css']
})
export class ProjectComponenttypeComponent implements OnInit {

  componenttypes: Componenttype[];

  constructor(
    private componenttypeService: ComponenttypeService
  ) { }

  ngOnInit() { 
    this.getComponenttypes();
    console.log(this.componenttypes);  
  }


  getComponenttypes(): void {
    this.componenttypeService.getComponenttypes().subscribe(componenttypes => this.componenttypes = componenttypes);
  }
}
