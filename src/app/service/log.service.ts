import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LogEntry } from '../models/LogEntry';
import { PROJECTLOG } from '../mock/mock-projectLog';
import { COMPONENTTYPELOG } from '../mock/mock-componTypeLog';
import { COMPONENTLOG } from '../mock/mock-componentLog';
import { DOCUMENTLOG } from '../mock/mock-documentLog'; 

@Injectable()
export class LogService {

  constructor() { }

  //PROJECT
  getProjectLog(id: number): Observable<LogEntry>{
    return of(PROJECTLOG.find(projectlog => projectlog.id === id));
  }

  getProjectLogs(): Observable<LogEntry[]> {
    return of(PROJECTLOG);
  }

  getLatestProjectLog(): Observable<LogEntry[]> {
    return of(PROJECTLOG.slice(PROJECTLOG.length - 7, PROJECTLOG.length));
  }

  //COMPONENTTYPE
  getLatestComponettypeLog(): Observable<LogEntry[]> {
    return of(COMPONENTTYPELOG.slice(COMPONENTTYPELOG.length - 7, COMPONENTTYPELOG.length));
  }

  getComponenttypeLogs(): Observable<LogEntry[]> {
    return of(COMPONENTTYPELOG);
  }

  //COMPONENT
  getComponentLogs(componentId: number): Observable<LogEntry[]> {
    return of(COMPONENTLOG);
  }

  //DOCUMENT
  getDocumentLogs(documentId: number): Observable<LogEntry[]> {
    return of(DOCUMENTLOG);
  }
}
