import React from 'react'
import Navbar from '../Components/Navbar'
import videoShoe from'../assets/8457019-hd_1920_1080_25fps.mp4'
import Banner from '../Components/Banner'
import SideBar from '../Components/SideBar'
import ProductsCard from '../Components/ProductsCard'
import Footer from '../Components/Footer'
import { shoeData } from '../assets/assets'
const ShoePage = () => {
  return (
    <div>
        <Navbar/>
        <Banner video={videoShoe} text={"shoes"}/>
        <div className=" flex items-start ">
        <SideBar />
        <div className=" py-10 grid  px-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {shoeData.map((item, index) => (
            <ProductsCard
            path={"shoe"}
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

export default ShoePage