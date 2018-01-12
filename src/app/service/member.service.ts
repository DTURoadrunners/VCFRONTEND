import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { MEMBERS } from '../mock/mock-members'; // simulate data from the database
import { Member } from '../models/member';

@Injectable()
export class MemberService {

  constructor() { }

  /**
   * Gets a user by id
   * @param memberId
   */
  get(memberId: string): Observable<Member> {
    return of(MEMBERS.find(member => member.id === memberId));
  }

  /**
   * Gets all users related to a project
   * @param projectId
   */
  getAll(projectId: number): Observable<Member[]>{
    var members: Member[] = new Array<Member>();
    for (var i = 0; i < MEMBERS.length; i++) {
      if (MEMBERS[i].projects.includes(projectId)) {
        members.push(MEMBERS[i]);
      }
    }
    return of(members);
  }

  /**
   * Adds a user to a project
   * @param memberId
   * @param projectId
   */
  add(memberId: string, projectId: number): Observable<Member[]> { //TODO: Handle errors
    var newMember: Member;
    this.get(memberId).subscribe(member => newMember = member);
    newMember.projects.push(projectId);
    return this.getAll(projectId);
  }

  /**
   * Removes a user from a project
   * @param memberId
   * @param projectId
   */
  remove(memberId: string, projectId: number): Observable<Member[]> { //TODO: Handle errors
    var newMember: Member;
    this.get(memberId).subscribe(member => newMember = member);
    var index = newMember.projects.indexOf(projectId);
    if (index > -1) {
      newMember.projects.splice(index, 1);
    }
    return this.getAll(projectId);
  }

}
