import React from "react";
import vid1 from "../assets/3206300-hd_1920_1080_25fps.mp4";
const Banner = ({ video,text }) => {
  return (
    <div className=" banner relative w-full h-[50vh] flex justify-center items-end">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" -z-40 w-full h-[50vh] absolute top-0  object-cover right-0 "
      >
        <source src={video} type="video/mp4" />
      </video>
      <h1 className=" text-white h11 font-bold text-[1rem] md:text-[1.5rem] lg:text-[1.8rem] pb-5 uppercase tracking-widest">{text}</h1>
    </div>
  );
};

export default Banner;
