import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { PROJECTS } from '../mock/mock-projects'; // simulate data from the database
import { Project } from '../models/project';


@Injectable()
export class ProjectService {

  
  constructor() { }

  getProject() {

  }

  getProjects(): Observable<Project[]>{
    return of(PROJECTS);
  }

  createProject(project: Project): Observable<Project[]> {
    PROJECTS.push(project);
    return of(PROJECTS);
  }

  updateProject(){

  }

  deleteProject(){
    
  }

}
