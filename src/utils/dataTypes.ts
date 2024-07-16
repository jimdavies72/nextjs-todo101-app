
type Task = {
  _id: string;
  taskTitle: string;
  taskDescription: string;
  completed: boolean;
  userId: string;
};

type Tasks = {
  count: number;
  data: Task[];
}; 

type UserProfileData = {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
}
export type { Task, Tasks, UserProfileData };