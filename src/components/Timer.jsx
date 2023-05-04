import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TIMER_SET, TIMER_DECREMENT, TIMERID_SET } from "../store/timerSlice";

const Timer = () => {
  const { timeLimit } = useSelector((store) => store.preference);
  const { timer } = useSelector((store) => store.timer);
  const dispatch = useDispatch();
  /* 
useEffect(() => {
  dispatch(TIMER_SET(timeLimit));
}, [timeLimit]);

useEffect(() => {
  if (!timer) return;
  
  const interval = setInterval(() => {
    dispatch(TIMER_DECREMENT());
  }, 1000);
  
  return () => clearInterval(interval);
  
}, [timer]);


*/
  return (
    <div>
    <h1>TIMER countdown</h1>
      {/* <h1>Left time: {timer}</h1>
      <button>Start Timer</button> */}
    </div>
  );
};

export default Timer;
