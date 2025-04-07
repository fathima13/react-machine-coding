import { useState, useEffect } from "react";

const Timer = ({ id, removeTimer }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div style={{ margin: "10px 0" }}>
      <h4>
        ⏲ Timer {id}: {time}s
      </h4>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
      <button onClick={() => removeTimer(id)}>Delete</button>
    </div>
  );
};

export default Timer;
