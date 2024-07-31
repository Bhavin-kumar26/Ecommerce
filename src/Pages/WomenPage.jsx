import React from "react";
import Navbar from "../Components/Navbar";
import videoWomen from "../assets/3205917-hd_1920_1080_25fps.mp4";
import Banner from "../Components/Banner";
import { womenCollections } from "../assets/assets";
import SideBar from "../Components/SideBar";
import ProductsCard from "../Components/ProductsCard";
import Footer from "../Components/Footer";
const WomenPage = () => {
  return (
    <div>
      <Navbar scrollLength={10} />
      <Banner video={videoWomen} text={"women clothes"} />
      <div className=" flex items-start ">
        <SideBar />
        <div className=" w-full py-10 grid place-items-center   px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {womenCollections.map((item, index) => (
            <ProductsCard
              path={"women"}
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

export default WomenPage;
