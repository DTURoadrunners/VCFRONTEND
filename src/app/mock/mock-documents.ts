import { Documents } from '../models/documents';

export const DOCUMENTS: Documents[] = [
    {name: 'folder 1', date: new Date(2017, 11, 25), size: '56KB', isFolder: true, documents: [  {name: 'file test', date: new Date(2017, 11, 25), size: '1GB', isFolder: false , documents: null}, {name: '1 folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: [ {name: 'folder 2', date: new Date(2017, 11, 25), size: '56KB', isFolder: true , documents: [ {name: 'file test', date: new Date(2017, 11, 25), size: '56KB', isFolder: false , documents: null}]}]}]},
    {name: 'file.jpg', date: new Date(2017, 11, 25), size: '256KB', isFolder: false , documents: null},
    {name: 'folder 3', date: new Date(2017, 11, 25), size: '256KB', isFolder: true , documents: null},
    {name: 'file.mb', date: new Date(2017, 11, 25), size:  '12MB', isFolder: false , documents: null}
];