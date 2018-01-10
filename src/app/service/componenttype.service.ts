import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { COMPONENTTYPES } from '../mock/mock-componenttypes';
import { Componenttypes } from '../models/componentTypes';

@Injectable()
export class ComponenttypeService {


  constructor() { }

  /**
   * get the observable object of componenttypes
   * @param id id of the componenttype
   */
  public get(id: number, projectId: number): Observable<Componenttypes> {
    return of(COMPONENTTYPES.find(componenttype => componenttype.id == id && componenttype.projectId == projectId));
  }

  /**
   * get a list of all the componenttypes in a project
   * return the observable object
   */
  public getAll(projectId: number): Observable<Componenttypes[]> {
    var componenttypes: Componenttypes[] = new Array<Componenttypes>();
    for (var i = 0; i < COMPONENTTYPES.length; i++) {
      if (COMPONENTTYPES[i].projectId == projectId) {
        componenttypes.push(COMPONENTTYPES[i]);
      }
    }
    return of(componenttypes);
  }

  /**
   * create a componenttype and returns the observable list of componenttypes
   * @param name name of the componenttype
   * @param description description of the componenttype
   * @param category category of the componenttype
   * @param storage storage of the componenttype
   */
  public create(projectId: number, name: string, description: string, category: string, storage: number): Observable<Componenttypes[]> {
    var componenttype = {
      id: COMPONENTTYPES.length + 1,
      projectId: projectId,
      name: name,
      description: description,
      category: category,
      storage: storage
    };

    COMPONENTTYPES.push(componenttype);
    return of(COMPONENTTYPES);
  }

  public update(id: number, projectId: number, name: string, description: string, category: string, storage: number): Observable<Componenttypes[]> {
    COMPONENTTYPES[
      COMPONENTTYPES.findIndex(componenttype => componenttype.id == id && componenttype.projectId == projectId)
    ] = { id: id, projectId: projectId, name: name, description: description, category: category, storage: storage };
    console.log(description);
    return of(COMPONENTTYPES);
  }

  public delete(id: number, projectId: number): Observable<Componenttypes[]> {
    var index = COMPONENTTYPES.findIndex(componenttype => componenttype.id == id && componenttype.projectId == projectId);
    if (index > -1) {
      COMPONENTTYPES.splice(index, 1);
    }
    return of(COMPONENTTYPES);
  }
}
