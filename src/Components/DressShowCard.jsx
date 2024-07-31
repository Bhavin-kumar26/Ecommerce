import React from "react";

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const DressShowCard = ({img1}) => {
  return (
    <div className=" ">
      <img className=" w-full" src={img1} alt="" />
      <div className=" p-3 bg-white">
        <div className=" flex justify-between">
        <p className=" text-[#6d6d6d] font-light text-[12px]">Dresses</p>
        <FaRegHeart className="text-[#6d6d6d] font-light text-[12px]" />

        </div>
        <h5 className=" font-semibold text-xl">Linen Shirt</h5>
        <h6 className=" my-1 text-[16px]">$20</h6>
        <div className=" flex gap-1">
          <FaStar className=" text-yellow-500" />
          <FaStar className=" text-yellow-500" />
          <FaStar className=" text-yellow-500" />
          <FaStar className=" text-yellow-500" />
          <FaStar className="" />
        </div>
      </div>
    </div>
  );
};

export default DressShowCard;
