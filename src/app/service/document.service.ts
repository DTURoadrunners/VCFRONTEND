import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Documents } from './../models/documents';
import { DOCUMENTS } from './../mock/mock-documents';

/**
 * Handles documents and file upload/download
 */
@Injectable()
export class DocumentService {

  constructor() { }

  /**
   * Returns a document
   * @param id id of document
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   */
  public getDocument(id: number, componenttypeId: number, projectId: number): Observable<Documents> {
    return of(DOCUMENTS.find(document => document.id === id && document.componenttypeId === componenttypeId && document.projectId === projectId));
  }

  /**
   * Returns all documents of a componenttype
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   */
  public getAllDocuments(componenttypeId: number, projectId: number): Observable<Documents[]> {
    var documents: Documents[] = new Array<Documents>();
    for (var i = 0; i < DOCUMENTS.length; i++) {
      if (DOCUMENTS[i].componenttypeId == componenttypeId && DOCUMENTS[i].projectId === projectId) {
        documents.push(DOCUMENTS[i]);
      }
    }
    return of(documents);
  }

  /**
   * Creates a document and uploads a file
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   * @param file file to be uploaded
   */
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

  /**
   * Updates a document and uploads a file
   * @param id id of document
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   * @param file file to be uploaded
   */
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

  /**
   * Deletes a document
   * @param id id of document
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   */
  public deleteDocument(id: number, componenttypeId: number, projectId: number): Observable<Documents[]> {
    var index = DOCUMENTS.findIndex(document => document.id === id && document.componenttypeId === componenttypeId && document.projectId === projectId);
    if (index > -1) {
      DOCUMENTS.splice(index, 1);
    }
    return of(DOCUMENTS);
  }

  /**
   * Downloads a single file
   * @param documentId id of document
   */
  public downloadFile(documentId : number) {
    console.log("Download: " + documentId);
  }
}
