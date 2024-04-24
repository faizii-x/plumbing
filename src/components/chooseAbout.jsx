import React from "react";
import Groupp from "../../src/assets/png/groupp.png";

function ChooseAbout() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3 w-[90%] mx-auto">
        <div className="col-span-2">
          <h3 className="text-[32px] font-poppins font-bold">
            MEET OUR <span className="text-[#36A7A7]">EXPERT TEAM</span>
          </h3>

          <p className="text-[20px] text-[#414141] font-poppins font-light">
            Collaborating with our skilled demolition and plumbing specialists
            provides invaluable insights into your property's structural and
            plumbing systems. Their expertise ensures prompt identification and
            resolution of potential issues, prioritizing the safety and
            functionality of your space.
          </p>
          <h4 className="text-[20px] text-[#414141] mt-3 font-poppins font-semibold">
            Our team specializes in:
          </h4>
          <li className="text-[20px] text-[#414141] font-poppins font-light">
            Precision Demolition for Homes & Businesses
          </li>
          <li className="text-[20px] text-[#414141] font-poppins font-light">
            Plumbing Solutions for Renovations
          </li>
          <li className="text-[20px] text-[#414141] font-poppins font-light">
            Emergency Plumbing Repairs
          </li>
          <li className="text-[20px] text-[#414141] font-poppins font-light">
            Demolition Debris Disposal
          </li>

          <h4 className="text-[20px] text-[#414141] font-poppins font-semibold">
            Trust us for all your Demolition & Plumbing needs.
          </h4>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
          <img src={Groupp} alt="" />
        </div>
      </div>
            
    </>
  );
}

export default ChooseAbout;
