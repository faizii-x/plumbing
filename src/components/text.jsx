import React from "react";
import One from "../../src/assets/png/one.png";

function Text() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3 w-[90%] mx-auto">
        <div className="col-span-2">
          <h3 className="text-[32px] font-poppins font-bold">
            WHO <span className="text-[#36A7A7]">WE ARE</span>?
          </h3>
          <p className="text-[20px] font-poppins font-light">
            At <span className="text-[#36A7A7]">A1 Demolition & Plumbing</span>,
            our top priority is to ensure your satisfaction with our services.
            Our dedicated team is committed to meeting your needs and exceeding
            your expectations. From start to finish, we strive to make your
            experience with us a positive one. Get in touch with us today, and
            let us handle your demolition and plumbing needs with expertise and
            care.
          </p>

          <div className="text-[#36a7a7] flex justify-center items-center lg:w-[20%] md:w-[30%] w-[50%] mt-6 cursor-pointer hover:text-white rounded-md hover:bg-[#36a7a7] border border-[#36a7a7] p-3">
            <button className="">View More</button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <img src={One} alt="" />
        </div>
      </div>
      {/* ................................ */}




    </>
  );
}

export default Text;
