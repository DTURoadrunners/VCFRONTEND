import { Injectable } from '@angular/core';
import { _Component } from './../models/component';
import { COMPONENTS } from './../mock/mock-components';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class ComponentService {

  constructor() { }

  public get(id: number, componenttypeId: number, projectId: number): Observable<_Component> {
    return of(COMPONENTS.find(component => component.id === id && component.componenttypeId === componenttypeId && component.projectId == projectId));
  }

  public getAll(componenttypeId: number, projectId: number): Observable<_Component[]> {
    var components: _Component[] = new Array<_Component>();
    for (var i = 0; i < COMPONENTS.length; i++){
      if (COMPONENTS[i].componenttypeId == componenttypeId && COMPONENTS[i].projectId == projectId) {
        components.push(COMPONENTS[i]);
      }
    }
    return of(components);
  }

  public create(componenttypeId: number, projectId: number, status: string, comment: string): Observable<_Component[]> {
    var component = {
      id: COMPONENTS.length + 1,
      componenttypeId: componenttypeId,
      projectId: projectId,
      status: status,
      comment: comment,
      timestamp: new Date(Date.now())
    };
    COMPONENTS.push(component);
    return of(COMPONENTS);
  }

  public update(id: number, componenttypeId: number, projectId: number, status: string, comment: string): Observable<_Component[]> {
    COMPONENTS[
      COMPONENTS.findIndex(component => component.id == id && component.componenttypeId == componenttypeId && component.projectId == projectId)
    ] = { id: id, componenttypeId: componenttypeId, projectId: projectId, status: status, comment: comment, timestamp: new Date(Date.now()) };
    return of(COMPONENTS);
  }

  public delete(id: number, componenttypeId: number, projectId: number): Observable<_Component[]> {
    var index = COMPONENTS.findIndex(component => component.id === id && component.componenttypeId === componenttypeId && component.projectId == projectId);
    if (index > -1){
      COMPONENTS.splice(index, 1);
    }
    return of(COMPONENTS);
  }
}
