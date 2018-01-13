import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LogEntry } from '../models/LogEntry';
import { PROJECTLOG } from '../mock/mock-projectLog';
import { COMPONENTTYPELOG } from '../mock/mock-componTypeLog'; 

@Injectable()
export class LogService {

  constructor() { }


  getLatestComponettypeLog(): Observable<LogEntry[]>{
    return of(COMPONENTTYPELOG.slice(COMPONENTTYPELOG.length-7, COMPONENTTYPELOG.length));
  }

  getLatestProjectLog(): Observable<LogEntry[]>{
    return of(PROJECTLOG.slice(PROJECTLOG.length-7, PROJECTLOG.length));
  }

  getProjectLogs(): Observable<LogEntry[]>{
    return of(PROJECTLOG);
  }

  getProjectLog(id: number): Observable<LogEntry>{
    return of(PROJECTLOG.find(projectlog => projectlog.id === id));
  }

}
