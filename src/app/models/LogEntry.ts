export class LogEntry {
  id: number;
  submitter: string;
  timestamp: Date;
  comment: string;
  target: string;
  logtype: string;

  constructor(id: number, submitter: string, timestamp: Date,
              comment: string, target: string, logtype: string){
    this.id = id;
    this.submitter = submitter;
    this.timestamp = timestamp;
    this.comment = comment;
    this.target = target;
    this.logtype = logtype;
  }
}
