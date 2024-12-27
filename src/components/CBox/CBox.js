import React, { useState, useRef } from "react";
import Box from "./Box";
import "./CBox.css";

export default function App() {
  const [counter, setCounter] = useState(1);
  const [grid, setGrid] = useState([
    { id: 1, isClicked: false, isVissible: true, order: 0 },
    { id: 2, isClicked: false, isVissible: true, order: 0 },
    { id: 3, isClicked: false, isVissible: true, order: 0 },
    { id: 4, isClicked: false, isVissible: true, order: 0 },
    { id: 5, isClicked: true, isVissible: false, order: 0 },
    { id: 6, isClicked: true, isVissible: false, order: 0 },
    { id: 7, isClicked: false, isVissible: true, order: 0 },
    { id: 8, isClicked: false, isVissible: true, order: 0 },
    { id: 9, isClicked: false, isVissible: true, order: 0 },
  ]);

  const handleClicked = (id) => {
    const updatedGrid = [...grid];
    let filterId = updatedGrid.filter((item) => item.id === id)[0];
    filterId["isClicked"] = !filterId["isClicked"];
    setCounter((prev) => prev + 1);
    filterId["order"] = counter;
    setGrid([...updatedGrid]);

    let allClicked = updatedGrid.every((item) => item.isClicked === true);

    if (allClicked) {
      grid.forEach((ele, index) => {
        setTimeout(() => {
          const updatedGrid = [...grid];
          updatedGrid[index]["isClicked"] = false;
          updatedGrid[index]["order"] = 0;
          setGrid([...updatedGrid]);
        }, ele.order * 1000);
      });
    }
  };
  return (
      <div className="container">
        {grid.map((item) => (
          <Box item={item} key={item.id} handleClicked={handleClicked} />
        ))}
      </div>
  );
}
