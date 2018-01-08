import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Componenttype } from '../../models/componentType';
import { ComponenttypeService }  from '../../service/componenttype.service';

@Component({
  selector: 'app-project-componenttype',
  templateUrl: './project-componenttype.component.html',
  styleUrls: ['./project-componenttype.component.css']
})
export class ProjectComponenttypeComponent implements OnInit {

  componenttypes: Componenttype[];
  projectid: string; // url params are always strings

  constructor(
    private componenttypeService: ComponenttypeService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.getComponenttypes(); 
    this.projectid = this.route.snapshot.paramMap.get('id')
  }





  getComponenttypes(): void {
    this.componenttypeService.getComponenttypes().subscribe(componenttypes => this.componenttypes = componenttypes);
  }
}
