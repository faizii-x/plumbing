import React from "react";
import Frame from "../../src/assets/png/frame.png";
import Loca from "../../src/assets/svg/loca.svg";
import Calling from "../../src/assets/svg/calling.svg";
import Messaging from "../../src/assets/svg/messaging.svg";
import Linkedin from "../../src/assets/svg/linkedin.svg";
import Face from "../../src/assets/svg/face.svg";
import Twitter from "../../src/assets/svg/twitter.svg";

function Location() {
  return (
    <>
      <h2 className="text-[22px] font-poppins font-semibold text-center mt-6">
        Location
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto">
        <div className="col-span-1">
          <img src={Frame} alt="" />
        </div>
        <div className="col-span-1">
          <h3 className="text-[22px] font-poppins font-semibold mt-6">
            We would love to hear from you...
          </h3>
          <p className="text-[18px] font-poppins font-light mt-2">
            Feel free to contact us and we will get back to you as soon as
            possible. Fill this form or contact us directly.
          </p>

          <div className="flex justify-start gap-2 mt-6">
            <img src={Loca} alt="" className="w-[22px] h-[22px]" />
            <p className="text-[18px] font-normal font-poppins">Location</p>
          </div>
          <div className="flex justify-start gap-2 mt-3">
            <img src={Calling} alt="" className="w-[22px] h-[22px]" />
            <p className="text-[18px] font-normal font-poppins">
              +1 646-552-4444
            </p>
          </div>
          <div className="flex justify-start gap-2 mt-3">
            <img src={Messaging} alt="" className="w-[22px] h-[22px]" />
            <p className="text-[18px] font-normal font-poppins">
              BiddingHelp@planhub.com
            </p>
          </div>
      
      
      <div className="flex justify-start gap-3 mt-6">
        <img src={Linkedin} alt="" className="cursor-pointer"/>
        <img src={Face} alt="" className="cursor-pointer"/>
        <img src={Twitter} alt="" className="cursor-pointer"/>
      </div>
      
      
      
        </div>
      </div>
    </>
  );
}

export default Location;
