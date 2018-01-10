import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { Category } from '../models/category';
import { CATEGORIES } from '../mock/mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]>{
    return of(CATEGORIES);
  }

  createCategory(name: string):  Observable<Category[]> {
      var category = {
        id: CATEGORIES.length+1,
        name: name
      }
        CATEGORIES.push(category);
    
      return of(CATEGORIES);
  } 

}
