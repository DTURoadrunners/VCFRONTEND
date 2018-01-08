import { Injectable } from '@angular/core';
import { _Component } from './../models/component';
import { COMPONENTS } from './../mock/mock-components';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class ComponentService {

  constructor() { }

  public get(id: number, componenttypeId: number): Observable<_Component> {
    return of(COMPONENTS.find(component => component.id === id && component.componenttypeId === componenttypeId));
  }

  public getAll(componenttypeId: number): Observable<_Component[]> {
    var components: _Component[];
    for (var i = 0; i < COMPONENTS.length; i++){
      components.push(COMPONENTS.find(component => component.id === componenttypeId));
    }
    return of(components);
  }

  public create(componenttypeId: number, status: string, comment: string): Observable<_Component[]> {
    var component = { id: COMPONENTS.length, componenttypeId: componenttypeId, status: status, comment: comment, timestamp: new Date(Date.now()) };
    COMPONENTS.push(component);
    return of(COMPONENTS);
  }

  public update(id: number, componenttypeId: number, status: string, comment: string): Observable<_Component[]> {
    COMPONENTS[
      COMPONENTS.findIndex(component => component.id === id && component.componenttypeId === componenttypeId)
    ] = { id: id, componenttypeId: componenttypeId, status: status, comment: comment, timestamp: new Date(Date.now()) };
    return of(COMPONENTS);
  }

  public delete(id: number, componenttypeId: number): Observable<_Component[]> {
    delete COMPONENTS[
      COMPONENTS.findIndex(component => component.id === id && component.componenttypeId === componenttypeId)
    ];
    return of(COMPONENTS);
  }
}
