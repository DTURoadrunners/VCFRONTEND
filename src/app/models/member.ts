
export class Member {
  id: string;
  projects: number[]; //List of projectIds
  name: string;
  email: string;
  phone: string; //String to be compatible with international numbers
  studyline: string;

  constructor(id: string, projects: number[], name: string,
              email: string, phone: string, studyline: string){
    this.id = id;
    this.projects = projects;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.studyline = studyline;
  }

}
