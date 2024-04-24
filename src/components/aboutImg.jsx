import React from "react";

function AboutImg() {
  return (
    <>
      <div className=" w-full h-auto bg-cover bg-center imagebgabout  lg:p-[140px] p-8">
        <div className="flex justify-center items-center bg-white w-[200px] mx-auto mt-8">
          <p className=" text-black text-[33px] font-poppins font-semibold ">
            ABOUT US
          </p>
        </div>
        <p className=" text-white text-[20px] font-poppins font-normal mt-3 lg:w-[70%] w-full mx-auto">
          Our experienced and highly capable teams have a solid history of
          completing successful projects in various sectors and locations.
        </p>
        <div  className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-16 h-16 text-white mx-auto mt-6 animated-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
        </div>
      </div>
    </>
  );
}

export default AboutImg;
