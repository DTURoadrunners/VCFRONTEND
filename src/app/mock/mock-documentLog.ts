import { LogEntry } from '../models/LogEntry';

export const DOCUMENTLOG: LogEntry[] = [
  { id: 1, submitter: 'John Doe', timestamp: new Date(2017, 1, 2), comment: "This is a comment", target: null, logtype: "created" },
  { id: 2, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: null, logtype: "deleted" },
  { id: 3, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: null, logtype: "created" },
  { id: 4, submitter: 'John Doe', timestamp: new Date(2017, 1, 4), comment: "This is a comment", target: null, logtype: "created" },
  { id: 5, submitter: 'John Doe', timestamp: new Date(2017, 1, 5), comment: "This is a comment", target: null, logtype: "rollback" },
  { id: 6, submitter: 'John Doe', timestamp: new Date(2017, 1, 6), comment: "This is a comment", target: null, logtype: "updated" }
];
