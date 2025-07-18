import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  num: number;
};

const initialState: initialStateType = {
  num: 0,
};
const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      console.log(action);
      state.num += 1;
    },
    decrement(state, action: PayloadAction<number>) {
      console.log(action);
      state.num -= 1;
    },
  },
});

export const { increment, decrement } = appSlice.actions;
export default appSlice.reducer;
