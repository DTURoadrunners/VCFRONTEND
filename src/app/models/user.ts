import { Member } from './member';

export class User {
  id: string;
  password: string;
  memberships: number[]; //List of projectIds
  name: string;
  email: string;
  phone: string; //String to be compatible with international numbers
  studyline: string;

  constructor(id: string, password: string, memberships: number[], name: string,
    email: string, phone: string, studyline: string) {
    this.id = id;
    this.password = password;
    this.memberships = memberships;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.studyline = studyline;
  }

}
