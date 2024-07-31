import React from "react";

const SideBarContent = ({ titel1, title2, title3, title4 }) => {
  return (
    <div className=" flex flex-col justify-center items-start gap-4 text-[1.1rem] pt-4">
      <label className=" flex gap-5">
        <input type="checkbox" name="collections" className=" w-5" />
        <span>{titel1}</span>
      </label>
      <label className=" flex gap-5">
        <input type="checkbox" name="collections" className=" w-5" />
        <span>{title2}</span>
      </label>
      <label className=" flex gap-5">
        <input type="checkbox" name="collections" className=" w-5" />
        <span>{title3}</span>
      </label>
      <label className=" flex gap-5">
        <input type="checkbox" name="collections" className=" w-5" />
        <span>{title4}</span>
      </label>
    </div>
  );
};

export default SideBarContent;
