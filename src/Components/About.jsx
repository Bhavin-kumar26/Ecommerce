import React from "react";
import { BsTruck } from "react-icons/bs";
import truckgif from "../assets/icons8-truck.gif";
import walletgif from "../assets/icons8-wallet.gif";
import lockgif from "../assets/icons8-lock.gif";
import ticgif from "../assets/icons8-tick.gif";
const About = () => {
  const data = [
    {
      title: "free delivery from $100",
      desc: "Lorem ipsum,   consectetur adipisicing elit.  perferendis quasi",
      img: truckgif,
    },
    {
      title: "money back guaranteed",
      desc: "Lorem ipsum,   consectetur adipisicing elit.  perferendis quasi",
      img: walletgif,
    },
    {
      title: "secure payment",
      desc: "Lorem ipsum,   consectetur adipisicing elit.  perferendis quasi",
      img: lockgif,
    },
    {
      title: "authenticity 100% ",
      desc: "Lorem ipsum,   consectetur adipisicing elit.  perferendis quasi",
      img: ticgif,
    },
  ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20 gap-10 p-[3rem] ">
      {data.map((item, index) => (
        <div
          key={index}
          className=" bg-white  w-fit px-6 rounded-md py-10 flex  flex-col justify-center items-center text-center gap-3"
        >
          <img src={item.img} alt="" />
          <h2 className=" uppercase font-bold text-[20px] mt-2">
            {item.title}
          </h2>
          <p className=" font-normal text-[14px] text-[#6d6d6d] ">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default About;
