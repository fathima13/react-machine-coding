import React from "react";
import Carousel from "./carousel";
import Image1 from "../../assets/image-1.jpg";
import Image2 from "../../assets/image-2.jpg";
import Image3 from "../../assets/image-3.jpg";
import Image4 from "../../assets/image-4.jpg";
import "./carousel.css";

const App = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="m-a-20">
      <h1>React Carousel Component</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;
