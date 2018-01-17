import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { Category } from '../models/category';
import { CATEGORIES } from '../mock/mock-categories';

/**
 * Handles categories with the API
 */
@Injectable()
export class CategoryService {

  constructor() { }

  /**
   * Returns all categories
   */
  getCategories(): Observable<Category[]>{
    return of(CATEGORIES);
  }

  /**
   * Creates a new category
   * @param name name of the category
   */
  createCategory(name: string):  Observable<Category[]> {
      var category = {
        id: CATEGORIES.length+1,
        name: name
      }
        CATEGORIES.push(category);
    
      return of(CATEGORIES);
  } 

}
