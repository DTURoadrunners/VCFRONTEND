export class _Component {
  id: number;
  componenttypeId: number;
  projectId: number;
  status: string;
  comment: string;
  timestamp: Date;

  constructor(id: number, componenttypeId: number, projectId: number, status: string,
              comment: string, timestamp: Date){
    this.id = id;
    this.componenttypeId = componenttypeId;
    this.projectId = projectId;
    this.status = status;
    this.comment = comment;
    this.timestamp = timestamp;
}
}

