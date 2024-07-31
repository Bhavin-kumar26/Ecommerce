import React from "react";

import MarqueeData from "./MarqueeData";
import img1 from "../assets/marquee/Adidas New 2022.png";
import img2 from "../assets/marquee/Allen-Solly.png";
import img3 from "../assets/marquee/Chanel.jpg";
import img4 from "../assets/marquee/Christian Dior New.png";
import img5 from "../assets/marquee/Gucci.jpg";
import img6 from "../assets/marquee/Levi's.png";
import img7 from "../assets/marquee/Louis Vuitton.jpg";
import img8 from "../assets/marquee/Peter England.png";
import img9 from "../assets/marquee/Polo Ralph Lauren Black.jpg";
import img10 from "../assets/marquee/Puma.png";
import img11 from "../assets/marquee/Zara New 2020.png";

const Marquee = () => {
  const marqueeData = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];



  return (
    <div className=" container   mx-auto py-10 ">
      <h1 className=" text-center text-3xl font-bold mb-10 ">
        Our Partners{" "}
      </h1>
      <MarqueeData marqueeData={marqueeData} />
    </div>
  );
};

export default Marquee;
