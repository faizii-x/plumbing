import React from "react";

function PlumbImg() {
  return (
    <>
      <div className=" w-full h-auto bg-cover bg-center imagebgplum lg:p-[140px] p-8">
        <div className="flex justify-center items-center bg-white w-[200px] mx-auto mt-8">
          <p className=" text-black text-[33px] font-poppins font-semibold ">
            PLUMBING
          </p>
        </div>
        <p className=" text-white text-[20px] font-poppins font-semibold mt-3 lg:w-[70%] w-full mx-auto">
        Experience tailored plumbing solutions for your needs. Our precise planning and expert execution ensure safety and efficiency in every project."
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

export default PlumbImg;
