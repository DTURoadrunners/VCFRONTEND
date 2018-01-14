
export class CampusnetUser {
  id: string;
  name: string;
  email: string;
  phone: string; //String to be compatible with international numbers
  studyline: string;

  constructor(id: string, name: string, email: string, phone: string, studyline: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.studyline = studyline;
  }
}

