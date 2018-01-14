import { Injectable } from '@angular/core';

import { COMPONENTTYPELOG } from '../mock/mock-componTypeLog';
import { LogEntry } from '../models/LogEntry';


@Injectable()
export class PagerService {

  constructor() { }

  getLogs(): LogEntry[] {
    return COMPONENTTYPELOG;
  }

}
