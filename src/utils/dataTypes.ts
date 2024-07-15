
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

export type { Task, Tasks };