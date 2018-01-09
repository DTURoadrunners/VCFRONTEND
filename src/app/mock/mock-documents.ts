import { Documents } from '../models/documents';

export const DOCUMENTS: Documents[] = [
  { id: 1, componenttypeId: 1, name: 'dokument', date: new Date(2017, 11, 25), size: 1000000000, type: ".pdf" },
  { id: 2, componenttypeId: 1, name: 'rapport', date: new Date(2017, 11, 25), size: 56000, type: ".pdf" },
  { id: 3, componenttypeId: 1, name: 'billede', date: new Date(2017, 11, 25), size: 256000, type: ".jpg" },
  { id: 5, componenttypeId: 1, name: 'file', date: new Date(2017, 11, 25), size: 12000000, type: ".mb" }
];
