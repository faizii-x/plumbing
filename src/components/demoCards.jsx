import React from "react";
import { DEMOLITION_CARDS } from "../data";

function DemoCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto w-[80%] mt-6 mb-6  ">
        {DEMOLITION_CARDS.map((x) => (
          <>
            <div className=" relative hover:opacity-80">
              <img src={x.img} alt="" />
              <div className="bg-[#36A7A7]  absolute top-[130px] w-[150px] p-3">
                <p className="text-white font-medium ">{x.title}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default DemoCards;
