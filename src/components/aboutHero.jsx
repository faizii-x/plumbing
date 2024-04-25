import React from "react";
import Imgg from "../../src/assets/png/imgg.png";
import Tabs from "./tabs";

function AboutHero() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] container mx-auto mt-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <img src={Imgg} alt="" className=""/>
        </div>
        <div className="col-span-2">
          <p className="text-[22px] font-medium">
            We bring together expert demolition and plumbing professionals for
            top-quality work.
          </p>

          <h3 className="text-[32px] font-poppins font-bold">
            A STRONG BACKGROUND IN{" "}
            <span className="text-[#36A7A7]">
              DEMOLITION & PLUMBING SERVICES
            </span>
          </h3>

          <Tabs />
        </div>
      </div>
    </>
  );
}

export default AboutHero;
