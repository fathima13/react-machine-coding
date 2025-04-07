import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
      <div className={`side-menu open`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cbox">CBox</NavLink>
          </li>
          <li>
            <NavLink to="/population">Population</NavLink>
          </li>
          <li>
            <NavLink to="/timer-button">Timer Button</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/carousel">Carousel</NavLink>
          </li>
          <li>
            <NavLink to="/carousel-with-timer">Carousel With Timer</NavLink>
          </li>
          <li>
            <NavLink to="/barchart">Barchart</NavLink>
          </li>
          <li>
            <NavLink to="/progress-bar">ProgressBar</NavLink>
          </li>
          <li>
            <NavLink to="/multiple-timer">MultipleTimer</NavLink>
          </li>
          <li>
            <NavLink to="/progress-bar-with-queue">
              ProgressBar with Queue
            </NavLink>
          </li>
          <li>
            <NavLink to="/folder-explorer">Folder Explorer</NavLink>
          </li>
          <li>
            <NavLink to="/checkbox-nested-tree">Checkbox Nested Tree</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
