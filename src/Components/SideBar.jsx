import React from "react";
import SideBarContent from "./SideBarContent";

const SideBar = () => {
  return (
    <div className="hidden w-[20%] lg:pl-3  h-auto lg:flex  justify-center items-start py-10">
      <div className=" flex flex-col gap-6">
        <details>
          <summary className=" text-[1.4rem] font-light cursor-pointer">
            Collections
          </summary>
          <SideBarContent
            titel1={"Shirts"}
            title2={"Pants"}
            title3={"Trousers"}
            title4={"T-Shirt"}
          />
        </details>
        <details>
          <summary className=" text-[1.4rem] font-light cursor-pointer">
            Size
          </summary>
          <SideBarContent
            titel1={"S"}
            title2={"M"}
            title3={"L"}
            title4={"XL"}
          />
        </details>
        <details>
          <summary className=" text-[1.4rem] font-light cursor-pointer">
            Price
          </summary>
          <SideBarContent
            titel1={"$0 - $10"}
            title2={"$10 - $20"}
            title3={"$20 - $30"}
            title4={"$30 - $40"}
          />
        </details>
      </div>
    </div>
  );
};

export default SideBar;
