import React from "react";
import { Link } from "react-router-dom";

function BigTwo() {
  return (
    <>
      <h2 className="text-[22px] font-poppins font-semibold text-center mt-6">
        Our Other Main Service
      </h2>

      <div className=" w-[90%] mx-auto rounded-3xl h-auto bg-cover bg-center imagebgwall lg:p-8 p-4 mb-6 mt-6">
        <div className="bg-white w-[170px] p-3 flex justify-center items-center mx-auto">
          <h4 className="text-[22px] font-bold">DEMOLITION</h4>
        </div>
        <p className="lg:text-[28px] text-[18px] font-medium text-center text-white">
          Explore customized Demolition solutions designed just for you. Our
          careful planning and expert execution ensure safety and efficiency
          throughout every project.
        </p>
        <Link to="/demolition">
          <div className="bg-[#36A7A7] w-[180px] rounded-md mx-auto mt-3 flex justify-center items-center p-3">
            <button className="font-semibold">View More</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default BigTwo;
