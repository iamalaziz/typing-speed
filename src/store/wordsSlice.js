import { createSlice } from "@reduxjs/toolkit";
import sentences from "../wordlists/sentences.json";

const initialState = {
  words: "Abdulaziz is here",
  correctWords: [],
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
});

export default wordsSlice.reducer;
