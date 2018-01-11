import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Documents } from './../models/documents';
import { DOCUMENTS } from './../mock/mock-documents';

@Injectable()
export class DocumentService {

  constructor() { }

  public getDocument(id: number, componenttypeId: number, projectId: number): Observable<Documents> {
    return of(DOCUMENTS.find(document => document.id === id && document.componenttypeId === componenttypeId && document.projectId === projectId));
  }

  public getAllDocuments(componenttypeId: number, projectId: number): Observable<Documents[]> {
    var documents: Documents[] = new Array<Documents>();
    for (var i = 0; i < DOCUMENTS.length; i++) {
      if (DOCUMENTS[i].componenttypeId == componenttypeId && DOCUMENTS[i].projectId === projectId) {
        documents.push(DOCUMENTS[i]);
      }
    }
    return of(documents);
  }

  public createDocument(componenttypeId: number, projectId: number, file: File): Observable<Documents[]> {
    var document = {
      id: DOCUMENTS.length + 1,
      componenttypeId: componenttypeId,
      projectId: projectId,
      name: file.name,
      date: new Date(Date.now()),
      size: file.size,
      type: file.type
    };
    DOCUMENTS.push(document);
    return of(DOCUMENTS);
  }

  public updateDocument(id: number, componenttypeId: number, projectId: number, file: File): Observable<Documents[]> {
    console.log(file.size);
    var document = {
      id: id,
      componenttypeId: componenttypeId,
      projectId : projectId,
      name: file.name,
      date: new Date(Date.now()),
      size: file.size,
      type: file.type
    };
    DOCUMENTS[
      DOCUMENTS.findIndex(document => document.id === id && document.componenttypeId === componenttypeId && document.projectId === projectId)
    ] = document;
    return of(DOCUMENTS);
  }

  public deleteDocument(id: number, componenttypeId: number, projectId: number): Observable<Documents[]> {
    var index = DOCUMENTS.findIndex(document => document.id === id && document.componenttypeId === componenttypeId && document.projectId === projectId);
    if (index > -1) {
      DOCUMENTS.splice(index, 1);
    }
    return of(DOCUMENTS);
  }

  public downloadFile(documentId : number) {
    //TODO: Implement
  }
}
