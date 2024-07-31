import React, { useState } from "react";
import DressShowCard from "./DressShowCard";
import img3 from "../assets/imgnew1.jpg";
import img2 from "../assets/imgnew2.jpg";
import img1 from "../assets/imgnew1.jpg";
import img4 from "../assets/imgnew4.webp";
import img5 from "../assets/imgnew6.webp";
import img6 from "../assets/imgnew7.webp";
import img7 from "../assets/imgnew8.webp";
import img8 from "../assets/imgnew9.jpg";
import { Link } from "react-router-dom";
const TrendingProducts = () => {
  const [index, setIndex] = useState(0);

  const productList = [
    {
      label:"All",
      product: <>
      <DressShowCard img1={img1}/>
      <DressShowCard img1={img2}/>
      <DressShowCard img1={img3}/>
      <DressShowCard img1={img4}/>
      <DressShowCard img1={img5}/>
      <DressShowCard img1={img6}/>
      <DressShowCard img1={img7}/>
      <DressShowCard img1={img8}/>
      </>
    },
    {
      label:"new arrival",
      product: <>
        <DressShowCard img1={img7}/>
        <DressShowCard img1={img8}/>
      <DressShowCard img1={img1}/>
      <DressShowCard img1={img2}/>
     
      </>
    },
    {
      label:"top seller",
      product: <>
      <DressShowCard img1={img1}/>
      <DressShowCard img1={img5}/>
      <DressShowCard img1={img6}/>
      </>
    },
  ];

  const handleShow = (index) => {
    // console.log(index);
    setIndex(index);
  };
  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className=" p-2 md:p-10  flex  gap-10 flex-col justify-center items-center">
      <div>
        <h2 className=" uppercase text-2xl font-semibold">
          {" "}
          our trendy <b>products</b>
        </h2>
      </div>
      <div className=" flex flex-wrap gap-10 justify-center ">
        {productList.map((item, index) => (
          <div key={index} onClick={() => handleShow(index)} className=" relative ">
            <span className="underline1 text-[16px]   md:text-2xl uppercase font-light cursor-pointer text-[#403c3c] hover:text-black">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className=' grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10'>
        {
          productList[index] && productList[index].product
        }
       </div>
      <div className=" relative">
        <Link to={'/men'} onClick={handleTop} className=" uppercase underlinee">discover more</Link>
      </div>
    </div>
  );
};

export default TrendingProducts;
