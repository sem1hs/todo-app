import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskState } from "../types/TaskType";

const initialState: TaskState = [];

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    changeCheck(state, action: PayloadAction<Task>) {
      return state.map((val) =>
        val.id === action.payload.id
          ? { ...val, isChecked: !val.isChecked }
          : val
      );
    },
    changeDelete(state, action: PayloadAction<Task>) {
      return state.filter((val) => val.id !== action.payload.id);
    },
  },
});

export const { addTask, changeCheck, changeDelete } = taskSlice.actions;
export default taskSlice.reducer;
