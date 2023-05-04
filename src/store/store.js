import { configureStore } from "@reduxjs/toolkit";

import preferenceSlice from "./preferenceSlice";
import timerSlice from "./timerSlice";
import wordsSlice from "./wordsSlice";

const store = configureStore({
  reducer: {
    preference: preferenceSlice,
    timer: timerSlice,
    words: wordsSlice
  },
});

export default store;
