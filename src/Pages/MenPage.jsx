import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import videoMen from "../assets/3206300-hd_1920_1080_25fps.mp4";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import ProductsCard from "../Components/ProductsCard";
import { dataPhoto } from "../assets/assets";
const MenPage = () => {
  return (
    <div>
      <Navbar scrollLength={10} />
      <Banner video={videoMen} text={"mens clothing"} />
      <div className=" flex items-start ">
        <SideBar />
        <div className=" py-10 grid  px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {dataPhoto.map((item, index) => (
            <ProductsCard
              price={item.price}
              path={"men"}
              key={index}
              img={item.img}
              alterImage={item.sideimg1}
              id={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenPage;
