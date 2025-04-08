import { useState, useEffect } from "react";
import "./styles.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");
  const lights = ["red", "yellow", "green"];
  const nextActiveLightMapper = {
    red: "yellow",
    yellow: "green",
    green: "red",
  };
  useEffect(() => {
    let timer;
    timer = setTimeout(
      () => setActiveLight(nextActiveLightMapper[activeLight]),
      3000
    ); // Red -> Yellow

    return () => clearTimeout(timer); // Cleanup timeout
  }, [activeLight]);

  return (
    <div className="traffic-light">
      {lights.map((ele) => {
        return (
          <div
            key={ele}
            className={`light ${ele} ${activeLight === ele ? "active" : ""}`}
          ></div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
