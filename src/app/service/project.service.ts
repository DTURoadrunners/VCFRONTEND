import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { PROJECTS } from '../mock/mock-projects'; // simulate data from the database
import { Project } from '../models/project';
import { User } from "../models/user";
import { AuthService } from "./auth.service";

/**
 * Handles all the projects
 */
@Injectable()
export class ProjectService {

  
  constructor(
    private authService: AuthService
  ) { }

  /**
   * return the project model as an observerable object
   * @param id id of the project
   */
  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(project => project.id === id));
  }

  /**
   * return all the projects to the user. The API will handle based on the user who is logged in
   */
  getProjects(): Observable<Project[]>{
    var projects = new Array<Project>();
    this.authService.getCurrentUser
      .subscribe((user: User) => {
        for (var i = 0; i < user.memberships.length; i++) {
          this.getProject(user.memberships[i]).subscribe(proj =>
            projects.push(proj));
        }
      });
    return of(projects);
  }

  /**
   * create a project object it to the database
   * @param project project Object
   */
  createProject(project: Project): Observable<Project[]> {
    PROJECTS.push(project);
    return of(PROJECTS);
  }

  /**
   * update the project by the project object and the id
   * @param project 
   */
  updateProject(project: Project): Observable<Project>{
    PROJECTS[PROJECTS.findIndex(p => p.id === project.id)] = project;
    return of(PROJECTS.find(p => p.id === project.id));
  }

  /**
   * TODO: delte a project and return the project list 
   */
  deleteProject(){
    
  }

}
