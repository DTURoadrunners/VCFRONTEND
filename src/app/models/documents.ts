export class Documents {
  id: number;
  componenttypeId: number;
  name: string;
  file: File;
  date: Date;
  size: number;
  isFolder: boolean;
  subDocuments: Documents[];
}
