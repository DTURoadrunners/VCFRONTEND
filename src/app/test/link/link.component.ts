import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../mock/mock-categories';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
