import React from "react";

function MainServ() {
  return (
    <>

<h2 className="text-[22px] font-poppins font-semibold text-center mt-6">Our Main Services</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-4">
        <div className="col-span-1">
          <div className=" w-full h-auto bg-cover bg-center backimg p-3">
            <p className=" bg-white lg:w-[50%] md:w-[70%] md:mt-0 mt-[140px] text-black mx-auto text-center text-[32px] font-poppins font-bold ">
              DEMOLITION
            </p>
            <p className="text-white mt-3  mx-auto text-[22px]">
              Our Demolition Services have been integral to numerous projects
              across the UK, collaborating with various private firms and local
              authorities to deliver our comprehensive range of services.
            </p>
            <div className="bg-[#36A7A7] flex justify-center items-center mt-6 w-[150px] mx-auto p-4 cursor-pointer rounded-lg">
              <button className="font-medium text-white">View More</button>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className=" w-full h-auto bg-cover bg-center backimg1 p-3">
            <p className=" bg-white lg:w-[50%] md:w-[70%] md:mt-0 mt-[140px] text-black mx-auto text-center text-[32px] font-poppins font-bold ">
              PLUMBING
            </p>
            <p className="text-white mt-3  mx-auto text-[22px]">
            Our plumbing services have played a key role in numerous projects across the UK, partnering with various private firms and local authorities to provide our comprehensive range of solutions.
            </p>
            <div className="bg-[#36A7A7] flex justify-center items-center mt-6 w-[150px] mx-auto p-4 cursor-pointer rounded-lg">
              <button className="font-medium text-white">View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainServ;
