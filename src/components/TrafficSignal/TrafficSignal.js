import { useState, useEffect } from "react";
import "./styles.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    let timer;
    if (activeLight === "red") {
      timer = setTimeout(() => setActiveLight("yellow"), 3000); // Red -> Yellow
    } else if (activeLight === "yellow") {
      timer = setTimeout(() => setActiveLight("green"), 1000); // Yellow -> Green
    } else if (activeLight === "green") {
      timer = setTimeout(() => setActiveLight("red"), 3000); // Green -> Red
    }

    return () => clearTimeout(timer); // Cleanup timeout
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLight;
