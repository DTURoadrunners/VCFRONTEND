import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Componenttypes } from '../../models/componenttypes';
import { ComponenttypeService } from '../../service/componenttype.service';



@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.css']
})
export class TabNavigatorComponent implements OnInit {


  @Input() componenttype: Componenttypes;


  overview: boolean = true;
  components: boolean = false;
  documents: boolean = false;
  log: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private componenttypeService: ComponenttypeService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getComponenttype();
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
    const id = +this.route.snapshot.paramMap.get('componentypeid');
    this.componenttypeService.getComponenttype(id).subscribe(componenttype=> this.componenttype = componenttype);
  }


  
}
