import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TIME, SET_THEME, SET_TYPE } from "../store/preferenceSlice";

export const options = {
  time: [15, 30, 45, 60, 120],
  theme: [
    "default",
    "mkbhd",
    "mocha",
    "coral",
    "ocean",
    "azure",
    "forest",
    "rose-milk",
    "amethyst",
    "amber",
    "terminal",
    "vscode",
    "mountain",
    "pink-sky",
    "red-season",
  ],
  type: ["words", "sentences", "numbers", "javascript", "python"],
};

const Header = () => {
  const { timeLimit, theme, type } = useSelector((state) => state.preference);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Typing Speed</h1>
      <hr />
      {options.time.map((timeChoice, id) => {
        return (
          <button key={id} onClick={() => dispatch(SET_TIME(timeChoice))}>
            {timeChoice}
          </button>
        );
      })}
      <br />
      {options.theme.map((themeChoice, id) => {
        return (
          <button key={id} onClick={() => dispatch(SET_THEME(themeChoice))}>
            {themeChoice}
          </button>
        );
      })}
      <br />
      {options.type.map((typeChoice, id) => {
        return (
          <button key={id} onClick={() => dispatch(SET_TYPE(typeChoice))}>
            {typeChoice}
          </button>
        );
      })}
      <br />
      <h1>Current chosen time: {timeLimit}</h1>
      <h1>Current chosen type: {type}</h1>
      <h1>Current chosen theme: {theme}</h1>
    </div>
  );
};

export default Header;
