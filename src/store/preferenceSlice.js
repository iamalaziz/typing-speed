import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  timeLimit: 10,
  theme: "default",
  type: "sentences",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    SET_TIME: (state, { payload }) => {
      state.timeLimit = payload;
    },
    SET_TYPE: (state, { payload }) => {
      state.type = payload;
    },
    SET_THEME: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { SET_TIME, SET_THEME, SET_TYPE } = preferenceSlice.actions;

export default preferenceSlice.reducer;
