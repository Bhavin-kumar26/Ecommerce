import React from "react";
import { motion } from "framer-motion";
const MarqueeData = ({ marqueeData }) => {
  return (
    <div className=" flex overflow-x-hidden ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="  flex flex-shrink-0 "
      >
        {marqueeData.map((image, index) => {
          return (
            <img
              className=" w-44 object-contain pr-14"
              src={image}
              key={index}
              alt={index}
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="  flex flex-shrink-0 "
      >
        {marqueeData.map((image, index) => {
          return (
            <img
              className=" w-44 object-contain pr-14"
              src={image}
              key={index}
              alt={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeData;
