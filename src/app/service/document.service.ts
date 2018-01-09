import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Documents } from './../models/documents';
import { DOCUMENTS } from './../mock/mock-documents';

@Injectable()
export class DocumentService {

  constructor() { }

  getDocument(id: number, componenttypeId: number) {
    return of(DOCUMENTS.find(document => document.id === id && document.componenttypeId === componenttypeId));
  }

  getAllDocuments(componenttypeId: number) {
    var documents: Documents[] = new Array<Documents>();
    for (var i = 0; i < DOCUMENTS.length; i++) {
      if (DOCUMENTS[i].componenttypeId == componenttypeId) {
        documents.push(DOCUMENTS[i]);
      }
    }
    return of(documents);
  }

  createDocument(componenttypeId: number, name: string, file: File, isFolder: boolean, subDocuments: Documents[]) {
    var document = {
      id: DOCUMENTS.length + 1,
      componenttypeId: componenttypeId,
      name: name,
      file: file,
      date: new Date(Date.now()),
      size: file.size,
      isFolder: isFolder,
      subDocuments: subDocuments
    };
    DOCUMENTS.push(document);
    return of(DOCUMENTS);
  }

  updateDocument(id: number, componenttypeId: number, name: string, file: File, isFolder: boolean, subDocuments: Documents[]) {
  DOCUMENTS[
    DOCUMENTS.findIndex(document => document.id === id && document.componenttypeId === componenttypeId)
    ] = { id: id, componenttypeId: componenttypeId, name: name, file: file, date: new Date(Date.now()), size: file.size, isFolder: false, subDocuments: subDocuments };
    return of(DOCUMENTS);
}

  deleteDocument(id: number, componenttypeId: number) {
  var index = DOCUMENTS.findIndex(document => document.id === id && document.componenttypeId === componenttypeId);
  if (index > -1) {
    DOCUMENTS.splice(index, 1);
  }
  return of(DOCUMENTS);
}
}
