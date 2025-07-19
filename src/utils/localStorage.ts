import type { Task } from "../types/TaskType";

export const loadTask = (): Task[] | undefined => {
  try {
    const tasks: string | null = localStorage.getItem("taskState");
    if (tasks === null) return undefined;
    return JSON.parse(tasks);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveTask = (tasks: Task[]): void => {
  try {
    const jsonTask: string = JSON.stringify(tasks);
    localStorage.setItem("taskState", jsonTask);
  } catch (error) {
    console.log(error);
  }
};
