import React from "react";

function Demoimg() {       
  return (
    <>
      <div className=" w-full h-auto bg-cover bg-center imagebgdemo lg:p-[54px] p-8">
        <div className="flex justify-center items-center bg-white w-[240px] mx-auto mt-8">
          <p className=" text-black text-[33px] font-poppins font-semibold ">
            DEMOLITION
          </p>
        </div>
        <p className=" text-white text-[26px] text-center font-poppins font-normal mt-8 lg:w-[90%] w-full mx-auto">
          Explore customized Demolition solutions designed just for you. Our
          careful planning and expert execution ensure safety and efficiency
          throughout every project.
        </p>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-16 text-white mx-auto mt-16 animated-icon"
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

export default Demoimg;
