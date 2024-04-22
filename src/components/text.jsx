import React from "react";
import One from "../../src/assets/png/one.png";
import Choose from "./choose";

function Text(props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3 w-[90%] mx-auto">
        <div className="col-span-2">
          <h3 className="text-[32px] font-poppins font-bold">
            WHO <span className="text-[#36A7A7]">WE ARE</span>?
          </h3>
          {props.text}
          <div className="text-[#36a7a7] flex justify-center items-center w-[20%] mt-6 cursor-pointer hover:text-white rounded-md hover:bg-[#36a7a7] border border-[#36a7a7] p-3">
            <button className="">View More</button>
          </div>
        </div>
        <div className="col-span-1">
          <img src={One} alt="" />
        </div>
      </div>
      <Choose />
    </>
  );
}

export default Text;
