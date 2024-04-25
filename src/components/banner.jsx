import React, { useState } from "react";
import Aboutdiv from "../../src/assets/png/aboutdiv.png";
import ModalBook from "./modalBook";

function Banner() {
  const [hello, setHello] = useState(false);


  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  return (
    <>
      <div className=" w-full lg:h-[390px] h-auto bg-cover bg-center bgimagebanner mt-6 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="col-span-2">
            <img src={Aboutdiv} alt="" />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto self-center">
            <h4 className="text-white text-[36px] font-poppins font-semibold">
              Trustworthy Demolition & Plumbing{" "}
            </h4>
            <p className="text-white text-[20px] mt-2 font-poppins font-medium">
              Feel free to reach out and tell us how we can assist you today.
            </p>
            <div className="btny mt-5 gap-3" onClick={openModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#36A7A7]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <button className="text-[#36A7A7] font-semibold">
                Book an Appointment
              </button>
            </div>
            {hello && <ModalBook closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
