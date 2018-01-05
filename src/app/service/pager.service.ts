import { Injectable } from '@angular/core';

import { COMPONENTTYPELOG } from '../mock/mock-componTypeLog';
import { ComponentTypeLog } from '../models/log/componentTypeLog';


@Injectable()
export class PagerService {



  constructor() { }

  getLogs() : ComponentTypeLog[] {
    return COMPONENTTYPELOG;
  }

}
