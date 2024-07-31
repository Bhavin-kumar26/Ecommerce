import React from 'react'
import Navbar from '../Components/Navbar'
import videoWatch from'../assets/6230465-hd_1920_1080_24fps.mp4'
import Banner from '../Components/Banner'
import SideBar from '../Components/SideBar'
import ProductsCard from '../Components/ProductsCard'
import Footer from '../Components/Footer'
import { watchData } from '../assets/assets'
const WatchPage = () => {
  return (
    <div>
        <Navbar/>
        <Banner video={videoWatch} text={"watch"}/>
        <div className=" flex items-start ">
        <SideBar />
        <div className="w-full place-items-center  py-10 grid  px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {watchData.map((item, index) => (
            <ProductsCard
            path={"watch"}
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
  )
}

export default WatchPage