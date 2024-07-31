import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { Link } from "react-router-dom";
const Features = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className=" w-full h-auto lg:h-screen flex py-20 p-[3rem]   gap-10 flex-col lg:flex-row text-start ">
      <Link onClick={handleTop} to={'/women'} className=" featuresbox1 rounded-md   w-full lg:w-1/2 text-white  flex flex-col justify-end items-end md:p-10 p-5 py-10 ">
        <p className=" uppercase font-normal text-[14px]"> hotlist</p>
        <h3 className=" uppercase font-bold text-[25px] tracking-wide">
          {" "}
          <i>women</i> collections
        </h3>
        <span className=" uppercase font-medium">Shop now</span>
      </Link>

      <div className="flex  flex-col  lg:w-[50%]   gap-5">
        <Link onClick={handleTop} to={'/men'} className="featuresbox2 rounded-md  text-white w-full  h-1/2 flex justify-start items-end md:p-10 p-5 py-10 ">
          <div>
            <p className=" uppercase font-normal text-[14px]"> hotlist</p>
            <h3 className=" uppercase font-bold text-[25px] tracking-wide">
              {" "}
              <i>men</i> collections
            </h3>
            <span className=" uppercase font-medium">Shop now</span>
          </div>
        </Link>

        <div className="featuresbox5 rounded-md  text-white w-full  h-1/2 flex flex-col justify-end items-end lg:items-start md:p-8 p-5 py-10 ">
          <Link onClick={handleTop} to={'/shoe'}>
            <p className=" uppercase font-normal text-[14px]"> hotlist</p>
            <h3 className=" uppercase font-bold text-[25px] tracking-wide">
              {" "}
              <i>Shoe</i> collections
            </h3>
            <span className=" uppercase font-medium">Shop now</span>
          </Link>
        </div>
      </div>

      <Link onClick={handleTop} to={'/watch'} className=" featuresbox4 rounded-md   w-full lg:w-1/2 text-white  flex flex-col justify-end items-start md:p-10 p-5 py-10 ">
        <p className=" uppercase font-normal text-[14px]"> hotlist</p>
        <h3 className=" uppercase font-bold text-[25px] tracking-wide">
          {" "}
          <i>watch</i> collections
        </h3>
        <span className=" uppercase font-medium">Shop now</span>
      </Link>
    </div>
  );
};

export default Features;
