import { LogEntry } from '../models/LogEntry';

export const PROJECTLOG: LogEntry[] = [
  { id: 1, submitter: 'John Doe', timestamp: new Date(2017, 1, 2), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    {id: 2, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: "ComponentType 1", logtype: "deleted"},
    { id: 3, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 4, submitter: 'John Doe', timestamp: new Date(2017, 1, 4), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 5, submitter: 'John Doe', timestamp: new Date(2017, 1, 5), comment: "This is a comment", target: "ComponentType 1", logtype: "rollback"},
    { id: 6, submitter: 'John Doe', timestamp: new Date(2017, 1, 6), comment: "This is a comment", target: "ComponentType 1", logtype: "updated"},
    { id: 1, submitter: 'John Doe', timestamp: new Date(2017, 1, 2), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 2, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: "ComponentType 1", logtype: "deleted"},
    { id: 3, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 4, submitter: 'John Doe', timestamp: new Date(2017, 1, 4), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 5, submitter: 'John Doe', timestamp: new Date(2017, 1, 5), comment: "This is a comment", target: "ComponentType 1", logtype: "rollback"},
    { id: 6, submitter: 'John Doe', timestamp: new Date(2017, 1, 6), comment: "This is a comment", target: "ComponentType 1", logtype: "updated"},
    { id: 1, submitter: 'John Doe', timestamp: new Date(2017, 1, 2), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 2, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: "ComponentType 1", logtype: "deleted"},
    { id: 3, submitter: 'John Doe', timestamp: new Date(2017, 1, 3), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 4, submitter: 'John Doe', timestamp: new Date(2017, 1, 4), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 5, submitter: 'John Doe', timestamp: new Date(2017, 1, 5), comment: "This is a comment", target: "ComponentType 1", logtype: "rollback"},
    { id: 6, submitter: 'John Doe', timestamp: new Date(2017, 1, 17), comment: "This is a comment", target: "ComponentType 1", logtype: "updated"},
    { id: 1, submitter: 'John Doe', timestamp: new Date(), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 2, submitter: 'John Doe', timestamp: new Date(2018, 0, 16), comment: "This is a comment", target: "ComponentType 1", logtype: "deleted"},
    { id: 3, submitter: 'John Doe', timestamp: new Date(2018, 0, 10), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 4, submitter: 'John Doe', timestamp: new Date(2017, 11, 4), comment: "This is a comment", target: "ComponentType 1", logtype: "created"},
    { id: 5, submitter: 'John Doe', timestamp: new Date(2017, 9, 5), comment: "This is a comment", target: "ComponentType 1", logtype: "rollback"},
    { id: 6, submitter: 'John Doe', timestamp: new Date(2016, 8, 6), comment: "This is a comment", target: "ComponentType 1", logtype: "updated"},
    { id: 1, submitter: 'John Doe', timestamp: new Date(2015, 0, 2), comment: "This is a comment", target: "ComponentType 1", logtype: "created"}
];
