import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cardClick() {
    this.router.navigate(["/componentype/overview"]);
  }

}
