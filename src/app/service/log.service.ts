import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProjectLog } from '../models/log/project-log';
import { PROJECTLOG } from '../mock/mock-projectLog';

@Injectable()
export class LogService {

  constructor() { }

  getLatestProjectLog(): Observable<ProjectLog[]>{
    return of(PROJECTLOG.slice(PROJECTLOG.length-5, PROJECTLOG.length));
  }

}
