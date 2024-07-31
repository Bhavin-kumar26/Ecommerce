import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import DressCards from "./DressCards";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addToCart, toggleStatusTab } from "../store/cart";
import Cart from "../Components/Cart";
import Footer from "./Footer";
import ProductsCard from "./ProductsCard";
const DisplayProductsDetails = ({ CollectionData }) => {
  const { productId } = useParams();
  const dataPhotoo = CollectionData[productId];

  const [mainImg, setMainImg] = useState(dataPhotoo.img);
  const [size, setSize] = useState("S");
  const [count, setCount] = useState(1);

  function handleChange(imgUrl) {
    setMainImg(imgUrl);
  }

  const data = [
    dataPhotoo.img,
    dataPhotoo.sideimg1,
    dataPhotoo.sideimg2,
    dataPhotoo.sideimg3,
  ];

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: dataPhotoo.id,
        quantity: count,
        productType: dataPhotoo.section,
      })
    );
  };

  const handleShowCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div>
      <Navbar scrollLength={-1} />
      <div className="w-full px-5 py-7 md:px-[2rem] flex flex-col md:flex-row gap-5 justify-start items-start md:p-[4rem] mt-16 h-auto">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-5">
          <div className="flex lg:flex-col gap-1 md:gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleChange(item)}
                className={`${
                  item === mainImg ? "border-2" : "border-none"
                } border-[#d2a8a8] rounded`}
              >
                <DressCards img0={item} />
              </div>
            ))}
          </div>
          <div className="relative">
            <img
              className="w-[600px] h-[400px] md:h-[700px] object-cover"
              src={mainImg}
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-start">
            <h2 className="font-bold text-[22px]">{dataPhotoo.name}</h2>
            <div className="flex gap-1 items-center justify-start my-3">
              <FaStar className="text-[#de5330]" size={20} />
              <FaStar className="text-[#de5330]" size={20} />
              <FaStar className="text-[#de5330]" size={20} />
              <FaStar className="text-[#de5330]" size={20} />
              <FaStar className="" size={20} />
              <p className="font-light text-[12px]">(122)</p>
            </div>
            <div className="mb-3">
              <h5 className="font-semibold text-[20px]">Description</h5>
              <p className="max-w-3xl font-light mt-2">{dataPhotoo.text}</p>
            </div>
            <div>
              <h5 className="font-semibold text-[18px]">
                SELECT SIZE : {size}
              </h5>
              <div className="flex gap-4 text-[16px] font-normal">
                <div
                  className="shadow-2xl p-1 bg-[#fff] cursor-pointer"
                  onClick={() => setSize("S")}
                >
                  S
                </div>
                <div
                  className="shadow-2xl p-1 bg-[#fff] cursor-pointer"
                  onClick={() => setSize("M")}
                >
                  M
                </div>
                <div
                  className="shadow-2xl p-1 bg-[#fff] cursor-pointer"
                  onClick={() => setSize("L")}
                >
                  L
                </div>
                <div
                  className="shadow-2xl p-1 bg-[#fff] cursor-pointer"
                  onClick={() => setSize("XL")}
                >
                  XL
                </div>
                <div
                  className="shadow-2xl p-1 bg-[#fff] cursor-pointer"
                  onClick={() => setSize("XXL")}
                >
                  XXL
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-[22px] mt-3">
                ${dataPhotoo.price}{" "}
                <span className="text-[16px] font-normal">
                  (Duties & Tax included)
                </span>
              </h4>
            </div>
            <div className="border-2 border-black w-fit px-4 py-1 flex items-center gap-3 my-3">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="p-1 font-bold text-black"
              >
                -
              </button>
              <span>{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="p-1 font-bold text-black"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="uppercase py-2 px-4 bg-[#ff3232] font-bold text-white mt-3"
              >
                add to cart
              </button>
            </div>
           
        
          </div>
        </div>
      </div>
      <Cart CollectionData={CollectionData} />
      <div className="px-4 md:px-10 flex flex-col justify-center items-start">
        <h5 className=" text-xl font-semibold tracking-widest mb-3">Related Products</h5>
        <div className=" flex justify-center  gap-5 flex-wrap">
          {CollectionData.slice(4,8).map((item, index) => {
            return (
              <div key={index} className=" flex justify-center">
                <ProductsCard img={item.img} size={true} path={"#"} price={dataPhotoo.price} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisplayProductsDetails;
