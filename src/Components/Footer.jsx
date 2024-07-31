import React from "react";

const Footer = () => {
  return (
    <div className=" mt-16 bg-[#f5f5dc5d] px-5 sm:px-0 py-10">
      <div className=" md:gap-10 flex  gap-20 justify-center items-start sm:items-center md:items-start md:justify-evenly flex-col md:flex-row md:px-10">
        <div>
          <h3 className=" font-semibold text-[1.4rem] mb-2">Find Us</h3>
          <ul className=" flex flex-col gap-4 font-light">
            <li className=" hover:font-normal cursor-pointer">About us</li>
            <li className=" hover:font-normal cursor-pointer">Clothes journal</li>
            <li className=" hover:font-normal cursor-pointer">Contact us</li>
            <li className=" hover:font-normal cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold text-[1.4rem] mb-2">Helpful Links</h3>
          <ul className=" flex flex-col gap-4 font-light">
            <li className=" hover:font-normal cursor-pointer">FAQs</li>
            <li className=" hover:font-normal cursor-pointer">POPcoins</li>
            <li className=" hover:font-normal cursor-pointer">Raise a Return/Exchange</li>
            <li className=" hover:font-normal cursor-pointer"> Return & Exchange Policy</li>
            <li className=" hover:font-normal cursor-pointer">Shipping & Return Policy</li>
            <li className=" hover:font-normal cursor-pointer">Terms & Conditions</li>
            <li className=" hover:font-normal cursor-pointer"> Refund Policy</li>
            <li className=" hover:font-normal cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold text-[1.4rem] mb-2">About Clothing</h3>
          <p className=" font-light">
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.<br /> Sint ullam
            possimus veritatis hic 
          </p>
        </div>
        <div>
          <h3 className=" font-semibold text-[1.4rem] mb-2"> Need Help? Reach Out!</h3>
          <p className=" font-light">Have a query?<br /> Click Here to raise a ticket</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
