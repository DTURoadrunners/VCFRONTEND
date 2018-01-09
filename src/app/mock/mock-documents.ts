import { Documents } from '../models/documents';

export const DOCUMENTS: Documents[] = [
  {
    id: 1, componenttypeId: 1, name: 'folder 1', file: null, date: new Date(2017, 11, 25), size: null, isFolder: true, subDocuments: [
      { id: 5, componenttypeId: 1, name: 'file test', file: null, date: new Date(2017, 11, 25), size: 1000000000, isFolder: false, subDocuments: null },
      {
        id: 6, componenttypeId: 1, name: '1 folder 2', file: null, date: new Date(2017, 11, 25), size: null, isFolder: true, subDocuments: [
          {
            id: 7, componenttypeId: 1, name: 'folder 2', file: null, date: new Date(2017, 11, 25), size: null, isFolder: true, subDocuments: [
              { id: 8, componenttypeId: 1, name: 'file test', file: null, date: new Date(2017, 11, 25), size: 56000, isFolder: false, subDocuments: null }]
          }]
      }]
  },
  { id: 2, componenttypeId: 1, name: 'file.jpg', file: null, date: new Date(2017, 11, 25), size: 256000, isFolder: false, subDocuments: null },
  { id: 3, componenttypeId: 1, name: 'folder 3', file: null, date: new Date(2017, 11, 25), size: null, isFolder: true, subDocuments: null },
  { id: 4, componenttypeId: 1, name: 'file.mb', file: null, date: new Date(2017, 11, 25), size: 12000000, isFolder: false, subDocuments: null }
];
