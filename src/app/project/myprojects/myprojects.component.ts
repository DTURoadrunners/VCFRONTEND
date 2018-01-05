import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PROJECTS } from "./../../mock/mock-projects";

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {
  projects = PROJECTS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cardClick(id: number) {
    this.router.navigate(["/project/"+id]);
  }

}
