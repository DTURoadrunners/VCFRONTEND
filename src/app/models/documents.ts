export class Documents {
  id: number;
  componenttypeId: number;
  projectId: number;
  name: string;
  size: number;
  type: string;
  date: Date;

  constructor(id: number, componenttypeId: number, projectId: number, name: string,
              size: number, type: string, date: Date){
    this.id = id;
    this.componenttypeId = componenttypeId;
    this.projectId = projectId;
    this.name = name;
    this.size = size;
    this.type = type;
    this.date = date;
  }
}
