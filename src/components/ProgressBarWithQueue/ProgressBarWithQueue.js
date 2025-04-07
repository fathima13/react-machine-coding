import { useState, useEffect } from "react";
import ProgressBarComponent from "./ProgressBarComponent";

const MAX_CONCURRENT = 3;

const App = () => {
  const [progressBars, setProgressBars] = useState([]);

  // Add new progress bar & start if within limit
  const addProgressBar = () => {
    setProgressBars((prev) => [
      ...prev,
      { id: Date.now(), active: false, completed: false },
    ]);
  };

  // Reset all progress bars
  const resetProgressBars = () => {
    setProgressBars([]);
  };

  // Mark a progress bar as complete
  const updateProgressBar = (id) => {
    setProgressBars((prev) =>
      prev.map((bar) =>
        bar.id === id ? { ...bar, active: false, completed: true } : bar
      )
    );
  };

  // Start the next available progress bar (max 3 running)
  useEffect(() => {
    setProgressBars((prev) => {
      let activeCount = prev.filter((bar) => bar.active).length;
      let pendingBars = prev.filter((bar) => !bar.active && !bar.completed);

      if (activeCount >= MAX_CONCURRENT || pendingBars.length === 0)
        return prev;

      return prev.map((bar) => {
        if (!bar.active && !bar.completed && activeCount < MAX_CONCURRENT) {
          activeCount++;
          return { ...bar, active: true };
        }
        return bar;
      });
    });
  }, [progressBars]); // Runs when progressBars change

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Progress Bar Queue (Max {MAX_CONCURRENT} at a time)</h2>
      <button onClick={addProgressBar}>Add Progress Bar</button>
      <button onClick={resetProgressBars} style={{ marginLeft: "10px" }}>
        Reset
      </button>
      {progressBars.map((bar) => (
        <ProgressBarComponent
          key={bar.id}
          id={bar.id}
          active={bar.active}
          onComplete={updateProgressBar}
        />
      ))}
    </div>
  );
};

export default App;
