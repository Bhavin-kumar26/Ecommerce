import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className=" w-full h-[30vh]  bg-zinc-900 text-white md:container md:mx-auto rounded-2xl my-10 flex justify-center flex-col items-center gap-5">
      <div className=" text-center">
        <h1 className=" uppercase text-[1rem] md:text-[2rem] h11 font-bold tracking-[0.3rem]">
          {" "}
          Subscribe to our emails
        </h1>
        <p className=" font-extralight text-[#b5a3a3]">
          Join our email list for exclusive offers and the latest news.
        </p>
      </div>
      <form className=" flex items-center px-[1rem] py-[0.5rem] border-[1px] justify-between rounded-md ">
        <input
          className=" bg-transparent w-[80%] outline-none "
          type="text"
          placeholder="Email"
        />
        <FaAngleRight />
      </form>
    </div>
  );
};

export default NewsLetter;
