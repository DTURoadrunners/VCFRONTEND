
export class Member {
  userId: string;
  projectId: number;
  role: number;

  constructor(userId: string, projectId: number, role: number) {
    this.userId = userId;
    this.projectId = projectId;
    this.role = role;
  }

}
