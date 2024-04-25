import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "../../src/assets/svg/logo.svg";
import { Link } from "react-router-dom";

export default function Example({ open, setOpen }) {
  const [activeLink, setActiveLink] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-2 right-3  flex">
                      <button
                        type="button"
                        className="rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex  h-full flex-col overflow-y-scroll bg-[#393A3B] z-999 py-6 shadow-xl">
                    <div className="container grid grid-cols-1 p-3">
                      <img src={Logo} />

                      <Link to="/" onClick={() => setActiveLink("home")}>
                        <p
                          className={`text-white text-[16px] mt-3 font-semibold cursor-pointer ${
                            activeLink === "home"
                              ? "text-[#36A7A7]"
                              : "hover:text-[#36A7A7]"
                          }`}
                        >
                          Home
                        </p>
                      </Link>

                      <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-start mt-4">
                  <p className="text-white text-[16px] font-semibold hover:text-[#36A7A7] cursor-pointer">
                    Services
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mt-[6px] text-white"
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
                    <Link to="/demolition" onClick={() => setActiveLink("demolition")}>
                    <p className={`text-[16px] font-medium text-black ${activeLink === "Demolition" ? "text-black" : "hover:text-white hover:font-bold"}`}>Demolition</p>
                    </Link>
                    <Link to="/plumbing" onClick={() => setActiveLink("plumbing")}>
                    <p className={`text-[16px] font-medium text-black mt-2 ${activeLink === "plumbing" ? "text-black" : "hover:text-white hover:font-bold"}`}>Plumbing</p>
                    </Link>
                  </div>
                  
                  </>
             )}
            
              </div>

                      <Link to="/about" onClick={() => setActiveLink("about")}>
                        <p
                          className={`text-white text-[16px] mt-4 font-semibold cursor-pointer ${
                            activeLink === "about"
                              ? "text-[#36A7A7]"
                              : "hover:text-[#36A7A7]"
                          }`}
                        >
                          About Us
                        </p>
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => setActiveLink("contact")}
                      >
                        <p
                          className={`text-white text-[16px] mt-4 font-semibold cursor-pointer ${
                            activeLink === "contact"
                              ? "text-[#36A7A7]"
                              : "hover:text-[#36A7A7]"
                          }`}
                        >
                          Contact Us
                        </p>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
