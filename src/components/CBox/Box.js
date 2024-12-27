import React, { useState } from "react";
import "./CBox.css";

export default function Box({ item, handleClicked }) {
  return item.isVissible ? (
    <div
      className={`box ${
        item.isClicked ? "green-background-color" : "yellow-background-color"
      }`}
      onClick={() => handleClicked(item.id)}
    >
      {item.id}
    </div>
  ) : (
    <div></div>
  );
}
