import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProjectLog } from '../models/log/project-log';
import { PROJECTLOG } from '../mock/mock-projectLog';

import { ComponentTypeLog } from '../models/log/componentTypeLog';
import { COMPONENTTYPELOG } from '../mock/mock-componTypeLog'; 

@Injectable()
export class LogService {

  constructor() { }


  getLatestComponettypeLog(): Observable<ComponentTypeLog[]>{
    return of(COMPONENTTYPELOG.slice(COMPONENTTYPELOG.length-7, COMPONENTTYPELOG.length));
  }

  getLatestProjectLog(): Observable<ProjectLog[]>{
    return of(PROJECTLOG.slice(PROJECTLOG.length-7, PROJECTLOG.length));
  }

  getProjectLogs(): Observable<ProjectLog[]>{
    return of(PROJECTLOG);
  }

  getProjectLog(id: number): Observable<ProjectLog>{
    return of(PROJECTLOG.find(projectlog => projectlog.id === id));
  }

}
