import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LogEntry } from '../models/LogEntry';
import { PROJECTLOG } from '../mock/mock-projectLog';
import { COMPONENTTYPELOG } from '../mock/mock-componTypeLog';
import { COMPONENTLOG } from '../mock/mock-componentLog';
import { DOCUMENTLOG } from '../mock/mock-documentLog'; 

/**
 * Handles all the log for each different process
 */
@Injectable()
export class LogService {

  constructor() { }

  //PROJECT

  /**
   * return the logentry
   * @param id  id of the logentry
   */
  getProjectLog(id: number): Observable<LogEntry>{
    return of(PROJECTLOG.find(projectlog => projectlog.id === id));
  }

  /**
   * return all the logentries
   */
  getProjectLogs(): Observable<LogEntry[]> {
    return of(PROJECTLOG);
  }

  /**
   * get the 7 latest log entries
   */
  getLatestProjectLog(): Observable<LogEntry[]> {
    return of(PROJECTLOG.slice(PROJECTLOG.length - 7, PROJECTLOG.length));
  }

  //COMPONENTTYPE

  /**
   * get the 7 latest logentries
   */
  getLatestComponettypeLog(): Observable<LogEntry[]> {
    return of(COMPONENTTYPELOG.slice(COMPONENTTYPELOG.length - 7, COMPONENTTYPELOG.length));
  }

  /**
   * get the log entries
   */
  getComponenttypeLogs(): Observable<LogEntry[]> {
    return of(COMPONENTTYPELOG);
  }

  //COMPONENT
  /**
   * return the logentries
   * @param componentId componentid of the component log
   */
  getComponentLogs(componentId: number): Observable<LogEntry[]> {
    return of(COMPONENTLOG);
  }

  //DOCUMENT
  /**
   * get the log of document id based on the log id
   * @param documentId document id of the logentry
   */
  getDocumentLogs(documentId: number): Observable<LogEntry[]> {
    return of(DOCUMENTLOG);
  }
}
