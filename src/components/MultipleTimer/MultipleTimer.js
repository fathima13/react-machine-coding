import { useState } from "react";
import Timer from "./Timer";

export default function MultipleTimer() {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    setTimers([...timers, { id: Date.now() }]); // Unique ID for each timer
  };

  const removeTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div>
      <h2>⏳ Multi-Timer App</h2>
      <button onClick={addTimer}>Add Timer</button>
      {timers.map((timer) => (
        <Timer key={timer.id} id={timer.id} removeTimer={removeTimer} />
      ))}
    </div>
  );
}
