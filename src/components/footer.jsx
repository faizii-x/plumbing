import React from "react";
import Logo from "../../src/assets/svg/logo.svg";
import Insta from "../../src/assets/svg/insta.svg";
import Linked from "../../src/assets/svg/linked.svg";
import Facebook from "../../src/assets/svg/facebook.svg";
import Locate from "../../src/assets/svg/locate.svg";
import Call from "../../src/assets/svg/call.svg";
import Mess from "../../src/assets/svg/mess.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#071818] mt-2 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] container mx-auto">
          <div className="">
            <img src={Logo} alt="" />
            <p className="text-[14px] font-poppins font-light text-white">
              Bringing Your Demolition and Plumbing Projects to Life. Trust our
              team of skilled professionals to deliver top-quality results,
              whether it's a large commercial project or a smaller residential
              one.
            </p>

            <div className="flex justify-start gap-5 mt-3">
              <p className="text-white font-semibold">Follow Us</p>
              <div className="flex justify-start gap-2">
                <img src={Insta} alt="" className="w-[24px] h-[24px]" />
                <img src={Linked} alt="" className="w-[24px] h-[24px]" />
                <img src={Facebook} alt="" className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-white text-[20px] font-semibold mt-5">
              Quick Links
            </p>
            <div className="mt-6">
              <p className="text-white text-[16px] font-normal underline">
                Home
              </p>
              <p className="text-white text-[16px] font-normal underline mt-3">
                About us
              </p>
              <p className="text-white text-[16px] font-normal underline mt-3">
                Contact us
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-white text-[20px] font-semibold mt-5">
              Our Services
            </p>
            <div className="mt-6">
              <p className="text-white text-[16px] font-normal underline">
                Demolition
              </p>
              <p className="text-white text-[16px] font-normal underline mt-3">
                Plumbing
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-white text-[20px] font-semibold mt-5">
              Contact Us
            </p>
            <div className="mt-6 flex justify-start gap-2">
              <img src={Locate} alt="" className="w-[18px] h-[18px] mt-[1px]" />
              <p className="text-white text-[16px] font-normal ">Location</p>
            </div>
            <div className="mt-6 flex justify-start gap-2">
              <img src={Call} alt="" className="w-[18px] h-[18px] mt-[1px]" />
              <p className="text-white text-[16px] font-normal ">Number</p>
            </div>

            <div className="mt-6 flex justify-start gap-2">
              <img src={Mess} alt="" className="w-[18px] h-[18px] mt-[1px]" />
              <p className="text-white text-[16px] font-normal ">
                Mail@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#787878] flex justify-center">
        <p className="text-white text-center">
          Copyright © 2024 A1 demolition & Plumbing Designed By{" "}
          <span className="cursor-pointer">
          <span className="text-[#008000] font-semibold">MF</span>{" "}
          <span className="text-[#FF6400] font-semibold">Bzone</span>{" "}
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
