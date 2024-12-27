import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CBox from "./components/CBox/CBox";
import Home from "./components/Home/Home";
import Population from "./components/Population/Population";
import TimerButton from "./components/TimerButton/TimerButton";
import Product from "./components/Product/Product";
import Quiz from "./components/Quiz/Quiz";
import Carousel from "./components/Carousel/index";
import CarouselWithTimer from "./components/CarouselWithTimer/carouselWithTimer";
import Barchart from "./components/Barchart/Barchart";
import ProgressBar from "./components/ProgressBar/ProgressBarContainer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cbox" element={<CBox />} />
          <Route path="/population" element={<Population />} />
          <Route path="/timer-button" element={<TimerButton />} />
          <Route path="/product" element={<Product />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/carousel-with-timer" element={<CarouselWithTimer />} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
