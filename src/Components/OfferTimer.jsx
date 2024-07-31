import React, { useEffect, useState } from "react";
import img1 from "../assets/offerTimebg.png";
import img2 from "../assets/watchremoved.png";
const OfferTimer = () => {
  const countDownTime = new Date("2024-10-12T23:59:59");
  // console.log(countDownTime);

  const timeLeft = () => {
    const totalTimeLeft = countDownTime - new Date();
    // console.log(totalTimeLeft);
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    // const year = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24 * 365));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeftState, setTimeLeftState] = useState(() => timeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftState(timeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=" w-full h-auto lg:h-[70vh]  flex  text-white p-[1rem] md:p-[3rem]  my-[4rem]  ">
      <div className="offer-Background w-full rounded flex flex-col lg:flex-row  justify-center items-center relative">
        <div className=" flex flex-col h-full items-center py-10 md:px-20 justify-center gap-10 ">
          <div>
            <h2 className="h11 tracking-widest uppercase md:text-[3rem] font-bold text-center">
              {" "}
              spring offers on watch{" "}
            </h2>
          </div>
          <div className=" flex h-fit items-center p-2 gap-5 md:gap-20">
            {Object.entries(timeLeftState).map((item, index) => {
              const label = item[0];
              const value = item[1];
              // console.log(label,value);
              return (
                <div key={index} className=" flex flex-col items-center ">
                  <h1 className="time-text text-[0.8rem] md:text-[3rem] font-bold">{value} </h1>
                  <span className="time-text text-[0.8rem]  font-light">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <img className="  object-cover  w-[350px]" src={img1} alt="" />
      </div>
    </div>
  );
};

export default OfferTimer;
