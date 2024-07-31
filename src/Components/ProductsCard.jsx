import React from "react";
import img1 from "../assets/imgnew1.jpg";
import { Link } from "react-router-dom";

const ProductsCard = ({ img,id,alterImage,path,price,size }) => {

  function handleTop(){
    window.scrollTo(0, 0);
  }

  return (
    <div onClick={handleTop} className={` ${size ? "w-[18rem] md:w-[20rem]" : "null" }  h-[500px]`}>
      <div className=" w-full  h-[80%] relative">
        <Link to={`/${path}/${id}`}>
          <img className=" w-full h-full object-cover" src={img} alt="" />
          <img style={{transition:"0.6s"}} className=" w-[500px] h-full  object-cover cursor-pointer
           opacity-0  hover:opacity-100 absolute top-0 left-0" src={alterImage} alt="" />
        </Link>
      </div>
      <div className=" w-full h-[20%] py-2  px-1 flex flex-col items-start gap-[0.1rem]">
        <p className="text-[#6a6a6a] text-[10px]"> Dresses</p>
        <h5 className=" text-[18px] tracking-tight">Rene Blue Plain Shirt</h5>
        <p className=" font-light text-[14px] my-1">$ {price}</p>
        <p className=" font-extralight text-[12px] hover:font-normal cursor-pointer">
          S M L XL
        </p>
      </div>
    </div>
  );
};

export default ProductsCard;
