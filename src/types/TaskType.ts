export type Task = {
  id: number;
  title: string;
  isChecked: boolean;
  isDeleted: boolean;
  createdDate: string;
};

export type TaskState = Task[];
