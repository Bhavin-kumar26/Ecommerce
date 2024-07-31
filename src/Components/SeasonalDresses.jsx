import React from "react";
import SeasonalCard from "./SeasonalCard";
import seasonal1 from '../assets/seasonal1.jpg'
import seasonal3 from '../assets/seasonal3.jpg'
import seasonal4 from '../assets/seasonal4.jpg'
import seasonal5 from '../assets/seasonal5.jpg'
import { Link } from "react-router-dom";
const SeasonalDresses = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className=" w-full py-10  px-10 ">
      <h2 className=" uppercase text-center my-10 font-bold text-2xl"> seasonal Favourites </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 ">
        <Link onClick={handleTop} to={'/men'}>
        <SeasonalCard img={seasonal3} title={"linen shirts"} />
        </Link>
        <Link onClick={handleTop} to={'/women'}>
        <SeasonalCard img={seasonal1} title={"traditional"} />        </Link>
        <Link onClick={handleTop} to={'/men'}>
        <SeasonalCard img={seasonal5} title={"baggy clothes"} />
        </Link>
        <Link onClick={handleTop} to={'/women'}>
        <SeasonalCard img={seasonal4} title={"swim wears"} />
        </Link>
        
      </div>
    </div>
  );
};

export default SeasonalDresses;