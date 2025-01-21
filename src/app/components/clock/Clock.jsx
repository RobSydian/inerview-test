"use client";

import { useState, useEffect } from "react";
import "../../styles/custom-clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerID;
    if (isRunning) {
      timerID = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }

    // Cleanup the interval on component unmount or when stopping
    return () => clearInterval(timerID);
  }, [isRunning]);

  const handleStop = () => setIsRunning(false);
  const handleStart = () => setIsRunning(true);

  return (
    <div id="clockArea">
      <div className="d-flex align-items-center justify-content-end gap-1">
        <div className="clockArea__time">
          <h5>{time}</h5>
        </div>
        <button
          className="btn btn-dark"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="btn btn-dark"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Clock;
