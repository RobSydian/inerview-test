"use client";

import { useState } from "react";
import styles from "../../styles/counter.module.css";

function Counter() {
  const [numValue, setNumValue] = useState(0);

  const addNumber = () => {
    setNumValue((prevNumValue) => prevNumValue + 1);
  };

  const removeNumber = () => {
    setNumValue((prevNumValue) => {
      if (prevNumValue > 0) {
        return prevNumValue - 1;
      } else {
        return 0;
      }
    });
  };

  const handleChange = (event) => {
    setNumValue(Number(event.target.value));
  };

  return (
    <div className={styles.section}>
      <div className={styles.btnGroup}>
        <div className="btn btn-dark" onClick={addNumber}>
          +
        </div>
        <input type="text" value={numValue} onChange={handleChange} />
        <div className="btn btn-light" onClick={removeNumber}>
          -
        </div>
      </div>
    </div>
  );
}

export default Counter;
