"use client";

import { useState } from "react";

function Clock() {
  const [timeUnit, setTimeUnit] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const intervalIdFn = setInterval(() => {
      console.log("ongoing");
      setTimeUnit((prevTimeUnit) => {
        console.log({ prevTimeUnit });
        prevTimeUnit + 1;
      });
    }, 1000);
    setIntervalId(intervalIdFn);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };
  return (
    <div>
      <h4>Clock Page</h4>
      <div className="box">{timeUnit}</div>
      <button onClick={() => startTimer}>Start</button>
      <button onClick={() => stopTimer}>Stop</button>
    </div>
  );
}

export default Clock;
