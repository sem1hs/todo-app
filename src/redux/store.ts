import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import { loadTask, saveTask } from "../utils/localStorage";
import type { Task } from "../types/TaskType";

const localStorageTask: Task[] | undefined = loadTask();

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
  preloadedState: {
    task: localStorageTask || [],
  },
});

store.subscribe(() => {
  saveTask(store.getState().task);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
