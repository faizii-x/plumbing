import React from "react";

function Contactinput() {
  return (
    <>
      <div className="bg-[#36A7A7] lg:p-8 p-3 w-[90%] mx-auto mt-6 mb-6">
        <h4 className="text-white text-[24px] font-semibold w-[80%] mx-auto">
          CONTACT US
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 container mx-auto lg:w-[80%] w-full mt-4">
          <div>
            <input type="text" placeholder="Full Name" className="w-full" />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mt-4"
            />
            <textarea
              name=""
              placeholder="Write Your Message"
              id=""
              cols="30"
              rows="4"
              className="w-full resize-none mt-4"
            ></textarea>
            <div className="bg-white w-[140px] p-3 flex justify-center items-center mt-4">
              <button className="text-[#36A7A7]">SEND</button>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Email" className="w-full" />
            <input type="text" placeholder="Subject" className="w-full mt-4" />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Contactinput;
