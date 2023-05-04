import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const initialState = {
  timer: 1,
  timerId: null,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    TIMER_DECREMENT: (state, { payload }) => {
      state.timer -= 1;
    },
    TIMER_SET: (state, { payload }) => {
      state.timer = payload;
    },
    TIMERID_SET: (state, { payload }) => {
      state.timerId = payload;
    },
  },
});

export const { TIMER_DECREMENT, TIMER_SET, TIMERID_SET } = timerSlice.actions;

export default timerSlice.reducer;
