import React from "react";
import { Link } from "react-router-dom";

const SuitsTimer = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="py-22 p-[1rem] md:p-[3rem] text-white">
      <div className="backgroundSuits rounded bg-center lg:bg-top flex flex-col justify-center items-start px-10 md:px-16 gap-10">
        <h1 className=" uppercase text-[1.5rem] leading-[3rem] md:text-[2.6rem] md:leading-[4rem] font-bold h11 tracking-widest">
          {" "}
          luxuries suits collections <br />
          for men
        </h1>
        <Link to={'/men'} className=" relative">
          <button onClick={handleTop} className=" w-[7rem] h-[3rem]  bg-white text-black font-semibold btnbr">Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default SuitsTimer;