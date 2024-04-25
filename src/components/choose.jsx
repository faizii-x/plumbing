import React from "react";
import Groupp from "../../src/assets/png/groupp.png";
import Images from "../../src/assets/png/images.png";
import Message from "../../src/assets/png/message.png";
import Call from "../../src/assets/png/call.png";
import { Link } from "react-router-dom";

function Choose() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3 w-[90%] mx-auto">
        <div className="col-span-2">
          <h3 className="text-[32px] font-poppins font-bold">
            Why Choose{" "}
            <span className="text-[#36A7A7]">
              A1 Demolition & Plumbing for Your Project Needs?
            </span>
          </h3>
          <h4 className="text-[20px] font-poppins font-semibold">
            Dedicated Customer Commitment
          </h4>
          <p className="text-[20px] font-poppins font-light">
            Rely on our steadfast dedication to your satisfaction. We are
            committed to fulfilling your requirements and delivering
            unparalleled quality in all our demolition and plumbing services.
          </p>
          <h4 className="text-[20px] font-poppins font-semibold">
            Reliable Quality Control System
          </h4>
          <p className="text-[20px] font-poppins font-light">
            Rely on our meticulous approach to deliver superior demolition and
            plumbing solutions. We prioritize quality at every stage to ensure
            excellence in meeting your requirements.
          </p>
          <h4 className="text-[20px] font-poppins font-semibold">
            Ensured 100% Satisfaction
          </h4>
          <p className="text-[20px] font-poppins font-light">
            Experience assured satisfaction with our premium demolition and
            plumbing solutions. We take pride in delivering excellence in every
            project, ensuring your complete contentment.
          </p>
          <Link to="/about">
          <div className="text-[#36a7a7] flex justify-center items-center lg:w-[20%] md:w-[30%] w-[50%] mt-6 cursor-pointer hover:text-white rounded-md hover:bg-[#36a7a7] border border-[#36a7a7] p-3">
            <button className="">View More</button>
          </div>
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
          <img src={Groupp} alt="" />
        </div>
      </div>
      {/* ............................ */}
      <div className="bg-[#008282] mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="md:col-span-2 col-span-1 lg:col-span-1 p-4">
            <h3 className="lg:text-[52px] text-[42px] font-poppins font-bold text-white">
              DEMOLITION & PLUMBING
            </h3>
            <p className="text-[20px] font-poppins font-light text-white">
              Transform Your Space with Expert Demolition & Plumbing Services!
              Call Now for a Free Consultation and Let Us Renovate Your World.
              Trusted Demolition & Plumbing Solutions! Licensed, certified, and
              insured for your peace of mind.
            </p>

            <div className="button-container text-[#36a7a7] font-bold flex justify-center items-center lg:w-[28%] md:w-[30%] w-[50%] mt-6 cursor-pointer  rounded-3xl ">
              <button className="custom-button">CONTACT TODAY</button>
            </div>
            <div className="flex justify-start gap-4 mt-6">
              <img src={Call} alt="" className="w-[32px] h-[32px]" />
              <p className="text-[16px] font-normal font-poppins text-white mt-1">
                123-456-789
              </p>
            </div>
            <div className="flex justify-start gap-4 mt-3">
              <img src={Message} alt="" className="w-[32px] h-[32px]" />
              <p className="text-[16px] font-normal font-poppins text-white mt-1">
                A1demo&plumb@gmail.com
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center ">
            <img src={Images} alt="" className="w-full h-auto"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
