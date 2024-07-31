import React from "react";
import vid1 from "../assets/3205917-hd_1920_1080_25fps.mp4";
import { RiScrollToBottomLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="  hero w-full h-screen relative flex justify-center items-center flex-col ">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="back h-screen w-screen object-cover absolute right-0 top-0 -z-40"
      >
        <source src={vid1} type="video/mp4" />
      </video>
      <div className=" text-center">
        <h1 className=" uppercase text-white text-[2.4rem] md:text-[4rem] font-bold tracking-widest">
          c.l.o.t.h.e.s
        </h1>
        <p className=" text-[#cfb9b9] font-light text-[13px] max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestiae
          voluptate, <br /> autem molestias iusto voluptas. Ex minus non
          consectetur nobis
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center absolute bottom-10 text-xl text-white font-light cursor-pointer gap-2">
        <RiScrollToBottomLine className="animate-bounce" />
        <h3 className=" uppercase  text-center">scroll</h3>
      </div>
    </div>
  );
};

export default Hero;
