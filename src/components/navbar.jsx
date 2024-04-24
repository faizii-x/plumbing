import React, { useState } from "react";
import Logo from "../../src/assets/svg/logo.svg";
import Example from "./example";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="bg-opacity-set fixed z-20 w-full h-auto">
        <div className="flex justify-between ml-16 mr-16">
          <div>
            <Link to="/">
              <img src={Logo} alt="" className="w-full h-[60px]" />
            </Link>
          </div>
          <div className="self-center md:block hidden">
            <div className="flex justify-start gap-8 ">
              <Link to="/">
                <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                  Home
                </p>
              </Link>

              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-start">
                  <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                    Services
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mt-[6px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
            
                {isHovered && (
                  <>
                  <div className="absolute bg-[#36A7A7] rounded-md w-[160px] shadow-lg p-8 mt-1 z-10">
                    <Link to="/demolition">
                    <p className="text-[16px] font-medium text-black hover:text-white hover:font-bold">Demolition</p>
                    </Link>
                    <Link to="/plumbing">
                    <p className="text-[16px] font-medium text-black hover:text-white hover:font-bold mt-2">Plumbing</p>
                    </Link>
                  </div>
                  
                  </>
             )}
            
              </div>
              <Link to="/about">
                <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                  About Us
                </p>
              </Link>
              <Link to="/contact">
                <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>

          <div className="visible md:invisible flex justify-center">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center text-[#15A7AD]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Example open={open} setOpen={handleOnClose} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
