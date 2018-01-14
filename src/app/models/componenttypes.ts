
export class Componenttypes {
  id: number;
  projectId: number;
  name: string;
  description: string;
  category: string;
  storage: number;

  constructor(id: number, projectId: number, name: string, description: string,
              category: string, storage: number){
    this.id = id;
    this.projectId = projectId;
    this.name = name;
    this.description = description;
    this.category = category;
    this.storage = storage;
  }
}

