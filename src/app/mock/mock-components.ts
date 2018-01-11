import { _Component } from '../models/component';

export const COMPONENTS: _Component[] = [
  { id: 1, componenttypeId: 1, projectId: 1, status: "Good", comment: "This is a component", timestamp: new Date(2018, 0, 4) },
  { id: 2, componenttypeId: 1, projectId: 1, status: "Good", comment: "This is another component", timestamp: new Date(2018, 0, 4) },
  { id: 3, componenttypeId: 1, projectId: 1, status: "Broken", comment: "This is a third component, but broken", timestamp: new Date(2018, 0, 4) }
];


