import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { MEMBERS } from '../mock/mock-members'; // simulate data from the database
import { Member } from '../models/member';
import { USERS } from "../mock/mock-users";


/**
 * Handles the members of the system
 */
@Injectable()
export class MemberService {

  constructor() { }

  /**
   * Gets a user by id
   * @param memberId studentid
   */
  get(id: string): Observable<Member> {
    return of(MEMBERS.find(member => member.userId === id));
  }

  /**
   * Gets all users related to a project
   * @param projectId
   */
  getAll(projectId: number): Observable<Member[]>{
    var members: Member[] = new Array<Member>();
    for (var i = 0; i < MEMBERS.length; i++) {
      if (MEMBERS[i].projectId == projectId) {
        members.push(MEMBERS[i]);
      }
    }
    return of(members);
  }

  /**
   * Adds a user to a project
   * @param id userId
   * @param projectId
   */
  add(id: string, projectId: number, role: number): Observable<Member[]> { //TODO: Handle errors
    MEMBERS.push(new Member(id, projectId, role));
    USERS.find(user => user.id == id).memberships.push(projectId);
    return this.getAll(projectId);
  }

  /**
   * Removes a user from a project
   * @param id
   * @param projectId
   */
  remove(id: string, projectId: number): Observable<Member[]> { //TODO: Handle errors
    var index = MEMBERS.findIndex(member => member.userId == id)
    if (index > -1) {
      MEMBERS.splice(index, 1);
    }
    index = USERS.find(user => user.id == id).memberships.indexOf(projectId);
    if (index > -1) {
      USERS.splice(index, 1);
    }
    return this.getAll(projectId);
  }

}
