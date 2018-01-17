import { Injectable } from '@angular/core';
import { _Component } from './../models/component';
import { COMPONENTS } from './../mock/mock-components';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

/**
 * Handles components
 */
@Injectable()
export class ComponentService {

  constructor() { }

  /**
   * Returns a component
   * @param id id of the component
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   */
  public get(id: number, componenttypeId: number, projectId: number): Observable<_Component> {
    return of(COMPONENTS.find(component => component.id === id && component.componenttypeId === componenttypeId && component.projectId == projectId));
  }

  /**
   * Returns all components of a componenttype
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   */
  public getAll(componenttypeId: number, projectId: number): Observable<_Component[]> {
    var components: _Component[] = new Array<_Component>();
    for (var i = 0; i < COMPONENTS.length; i++){
      if (COMPONENTS[i].componenttypeId == componenttypeId && COMPONENTS[i].projectId == projectId) {
        components.push(COMPONENTS[i]);
      }
    }
    return of(components);
  }

  /**
   * Creates a new component
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   * @param status status of the component
   * @param comment comment about the component
   */
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

  /**
   * Update a component
   * @param id id of the component to be updated
   * @param componenttypeId id of componenttype
   * @param projectId id of project
   * @param status status of the component
   * @param comment comment about the component
   */
  public update(id: number, componenttypeId: number, projectId: number, status: string, comment: string): Observable<_Component[]> {
    COMPONENTS[
      COMPONENTS.findIndex(component => component.id == id && component.componenttypeId == componenttypeId && component.projectId == projectId)
    ] = { id: id, componenttypeId: componenttypeId, projectId: projectId, status: status, comment: comment, timestamp: new Date(Date.now()) };
    return of(COMPONENTS);
  }

  /**
   * Delete a component
   * @param id id of the component to be deleted
   * @param componenttypeId id of component
   * @param projectId id of project
   */
  public delete(id: number, componenttypeId: number, projectId: number): Observable<_Component[]> {
    var index = COMPONENTS.findIndex(component => component.id === id && component.componenttypeId === componenttypeId && component.projectId == projectId);
    if (index > -1){
      COMPONENTS.splice(index, 1);
    }
    return of(COMPONENTS);
  }
}
