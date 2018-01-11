import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import mock and model
import { MEMBERS } from '../mock/mock-members'; // simulate data from the database
import { Member } from '../models/member';

@Injectable()
export class MemberService {

  constructor() { }

  getMember(id: number): Observable<Member> {
    return of(MEMBERS.find(member => member.id === id));
  }

  getMembers(): Observable<Member[]>{
    return of(MEMBERS);
  }

  addMember(member: Member): Observable<Member[]> {
    MEMBERS.push(member);
    return of(MEMBERS);
  }

  addMemberToProject(){

  }

  removeMemberFromProject(){

  }

  updateMember(){

  }

  deleteMember(){
    
  }

}
