import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { PROJECTS } from '../mock/mock-projects'; // simulate data from the database
import { Project } from '../models/project';

  /**
   * class Project - attributes:
   * id: number;
   * name: string;
   * description: string;
   */

@Injectable()
export class ProjectService {

  
  constructor() { }

  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(project => project.id === id));
  }

  getProjects(): Observable<Project[]>{
    return of(PROJECTS);
  }

  createProject(project: Project): Observable<Project[]> {
    PROJECTS.push(project);
    return of(PROJECTS);
  }

  updateProject(project: Project): Observable<Project>{
    PROJECTS[PROJECTS.findIndex(p => p.id === project.id)] = project;
    return of(PROJECTS.find(p => p.id === project.id));
  }

  deleteProject(){
    
  }

}
