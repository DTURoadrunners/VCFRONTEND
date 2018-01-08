import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { COMPONENTTYPES } from '../mock/mock-componenttypes';
import { Componenttype } from '../models/componentType';

@Injectable()
export class ComponenttypeService {


  constructor() { }

  getComponenttype(id: number):  Observable<Componenttype>{
    return of(COMPONENTTYPES.find(componenttype => componenttype.id === id));
  }

  getComponenttypes(): Observable<Componenttype[]>{
    return of(COMPONENTTYPES);
  }


}
