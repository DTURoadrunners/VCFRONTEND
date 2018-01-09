import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { COMPONENTTYPES } from '../mock/mock-componenttypes';
import { Componenttypes } from '../models/componentTypes';

@Injectable()
export class ComponenttypeService {


  constructor() { }

  getComponenttype(id: number):  Observable<Componenttypes>{
    return of(COMPONENTTYPES.find(componenttype => componenttype.id === id));
  }

  getComponenttypes(): Observable<Componenttypes[]>{
    return of(COMPONENTTYPES);
  }

  createComponenttype(name: string, description: string, category: string, storage: number): Observable<Componenttypes[]>{
    var componenttype = {
      id: COMPONENTTYPES.length+1,
      name: name,
      description: description,
      category: category,
      storage: storage
    };

    COMPONENTTYPES.push(componenttype);
    return of(COMPONENTTYPES); 
  }
}
