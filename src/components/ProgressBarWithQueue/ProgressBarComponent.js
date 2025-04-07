import { useState, useEffect } from "react";

const ProgressBarComponent = ({ id, active, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(id);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <div
        style={{
          width: "80%",
          margin: "10px auto",
          border: "1px solid #ccc",
          padding: "3px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: active ? "blue" : "gray",
            height: "20px",
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
      <h4>
        {progress}%{" "}
        {active
          ? "(Running)"
          : progress === 0
          ? "(Yet to start)"
          : "(Completed)"}
      </h4>
    </div>
  );
};

export default ProgressBarComponent;
