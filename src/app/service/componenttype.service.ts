import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { COMPONENTTYPES } from '../mock/mock-componenttypes';
import { Componenttypes } from '../models/componentTypes';

/**
 * Handles componenttypes
 */
@Injectable()
export class ComponenttypeService {


  constructor() { }

  /**
   * returns a componenttype
   * @param id id of componenttype
   * @param projectId id of project
   */
  public get(id: number, projectId: number): Observable<Componenttypes> {
    return of(COMPONENTTYPES.find(componenttype => componenttype.id == id && componenttype.projectId == projectId));
  }

  /**
   * returns all componenttypes of a project
   * @param projectId id of project
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
   * Create a componenttype
   * @param projectId id of project
   * @param name name of componenttype
   * @param description description of componenttype
   * @param category componenttype category
   * @param storage storage count of componenttype
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

  /**
   * Update a componenttype
   * @param id id of the componenttype
   * @param projectId id of the project
   * @param name new name
   * @param description new description
   * @param category new category
   * @param storage new storage count
   */
  public update(id: number, projectId: number, name: string, description: string, category: string, storage: number): Observable<Componenttypes[]> {
    COMPONENTTYPES[
      COMPONENTTYPES.findIndex(componenttype => componenttype.id == id && componenttype.projectId == projectId)
    ] = { id: id, projectId: projectId, name: name, description: description, category: category, storage: storage };
    console.log(description);
    return of(COMPONENTTYPES);
  }

  /**
   * Deletes a componenttype
   * @param id id of the componenttype
   * @param projectId id of project
   */
  public delete(id: number, projectId: number): Observable<Componenttypes[]> {
    var index = COMPONENTTYPES.findIndex(componenttype => componenttype.id == id && componenttype.projectId == projectId);
    if (index > -1) {
      COMPONENTTYPES.splice(index, 1);
    }
    return of(COMPONENTTYPES);
  }
}
