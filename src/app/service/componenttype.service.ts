import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { COMPONENTTYPES } from '../mock/mock-componenttypes';
import { Componenttypes } from '../models/componentTypes';

@Injectable()
export class ComponenttypeService {


  constructor() { }

  /**
   * get the observable object of componenttypes
   * @param id id of the componenttype
   */
  getComponenttype(id: number):  Observable<Componenttypes>{
    return of(COMPONENTTYPES.find(componenttype => componenttype.id === id));
  }

  /**
   * get a list of all the componenttypes
   * return the observable object
   */
  getComponenttypes(): Observable<Componenttypes[]>{
    return of(COMPONENTTYPES);
  }

  /**
   * create a componenttype and returns the observable list of componenttypes
   * @param name name of the componenttype
   * @param description description of the componenttype
   * @param category category of the componenttype
   * @param storage storage of the componenttype
   */
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
