import { Documents } from '../models/documents';

export const DOCUMENTS: Documents[] = [
    {name: 'folder 1', date: new Date(2017, 11, 25), size: '56KB', isFolder: true, documents: [  {name: '1 folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: null}, {name: '1 folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: [ {name: 'folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: [ {name: 'folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: null}]}]}]},
    {name: 'folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: null},
    {name: 'folder 3', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: null},
    {name: 'file.mb', date: new Date(2017, 11, 25), size:  '56KB', isFolder: false , documents: null}
];