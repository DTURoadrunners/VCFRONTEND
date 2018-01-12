import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { MEMBERS } from '../mock/mock-members'; // simulate data from the database
import { Member } from '../models/member';

@Injectable()
export class MemberService {

  constructor() { }

  get(memberId: string): Observable<Member> {
    return of(MEMBERS.find(member => member.id === memberId));
  }

  getAll(projectId: number): Observable<Member[]>{
    var members: Member[] = new Array<Member>();
    for (var i = 0; i < MEMBERS.length; i++) {
      if (MEMBERS[i].projects.includes(projectId)) {
        members.push(MEMBERS[i]);
      }
    }
    return of(members);
  }

  add(memberId: string, projectId: number): Observable<Member[]> { //TODO: Handle error when nonexisting user is given
    var newMember: Member;
    this.get(memberId).subscribe(member => newMember = member);
    newMember.projects.push(projectId);
    return this.getAll(projectId);
  }

  remove(memberId: string, projectId: number): Observable<Member[]> {
    var newMember: Member;
    this.get(memberId).subscribe(member => newMember = member);
    var index = newMember.projects.indexOf(projectId);
    if (index > -1) {
      newMember.projects.splice(index, 1);
    }
    return this.getAll(projectId);
  }

}
