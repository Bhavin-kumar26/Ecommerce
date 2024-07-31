import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import videoPerfume from '../assets/1705055-hd_1920_1080_30fps.mp4'
import SideBar from "../Components/SideBar";
import ProductsCard from "../Components/ProductsCard";
import Footer from "../Components/Footer";
import { perfumeData } from "../assets/assets";
const PerfumePage = () => {
  return (
    <div>
      <Navbar />
      <Banner video={videoPerfume} text={"perfume"}/>
      <div className=" flex items-start ">
        <SideBar />
        <div className=" py-10 grid  px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {perfumeData.map((item, index) => (
            <ProductsCard
            path={"perfume"}
              key={index}
              img={item.img}
              alterImage={item.sideimg1}
              id={index}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PerfumePage;
