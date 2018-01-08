import { Component, OnInit } from '@angular/core';
import { MEMBERS } from "./../../mock/mock-members";


@Component({
  selector: 'app-project-memberlist',
  templateUrl: './project-memberlist.component.html',
  styleUrls: ['./project-memberlist.component.css']
})
export class ProjectMemberlistComponent implements OnInit {
  members = MEMBERS;

  constructor() { }

  ngOnInit() {
  }

}
