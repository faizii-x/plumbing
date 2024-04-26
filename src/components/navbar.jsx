// import React, { useState } from "react";
// import Logo from "../../src/assets/svg/logo.svg";
// import Example from "./example";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const handleOnClose = () => setOpen(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <div className="bg-opacity-set fixed z-20 w-full h-auto hover:bg-white">
//         <div className="flex justify-between ml-16 mr-16">
//           <div>
//             <Link to="/" onClick={() => setActiveLink("home")}>
//               <img src={Logo} alt=""
//                className={`w-full h-[60px]  ${activeLink === "home" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"}`} />
           
//             </Link>
//           </div>
//           <div className="self-center md:visible invisible">
//             <div className="flex justify-start gap-8 ">
//               <Link to="/" onClick={() => setActiveLink("home")}>
//                 <p className={`text-[#252525] text-[16px] font-semibold cursor-pointer ${activeLink === "home" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"}`}>
//                   Home
//                 </p>
//               </Link>

//               <div
//                 className="relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <div className="flex justify-start">
//                   <p className="text-[#252525] text-[16px] font-semibold hover:text-[#36A7A7] cursor-pointer">
//                     Services
//                   </p>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="w-4 h-4 mt-[6px]"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </div>
            
//                 {isHovered && (
//                   <>
//                   <div className="absolute bg-gray-200 rounded-md w-[160px] shadow-lg p-4 border z-10">
//                     <Link to="/demolition" onClick={() => setActiveLink("demolition")} >
//                     <p className={`text-[16px] font-medium text-black ${activeLink === "Demolition" ? "text-black" : "hover:text-[#36A7A7] hover:font-bold"}`}>Demolition</p>
//                     </Link>
//                     <Link to="/plumbing" onClick={() => setActiveLink("plumbing")}>
//                     <p className={`text-[16px] font-medium text-black mt-2 ${activeLink === "plumbing" ? "text-black" : "hover:text-[#36A7A7] hover:font-bold"}`}>Plumbing</p>
//                     </Link>
//                   </div>
                  
//                   </>
//              )}
            
//               </div>
//               <Link to="/about" onClick={() => setActiveLink("about")}>
//                 <p className={`text-[#252525] text-[16px] font-semibold cursor-pointer ${activeLink === "about" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"}`}>
//                   About Us
//                 </p>
//               </Link>
//               <Link to="/contact" onClick={() => setActiveLink("contact")}>
//                 <p className={`text-[#252525] text-[16px] font-semibold cursor-pointer ${activeLink === "contact" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"}`}>
//                   Contact Us
//                 </p>
//               </Link>
//             </div>
          
          
          
          
          
//           </div>

//           <div className="visible md:invisible flex justify-end">
//             <svg
//               onClick={() => setOpen(true)}
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 self-center text-red-600 cursor-pointer"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </div>

          
//           <Example open={open} setOpen={handleOnClose} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/svg/logo.svg";
import Example from "./example";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleOnClose = () => setOpen(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="bg-opacity-set fixed z-20 w-full h-auto hover:bg-white">
      <div className="flex justify-between ml-4 md:ml-16 mr-4 md:mr-16">
        <div>
          <Link to="/" onClick={() => setActiveLink("home")}>
            <img
              src={Logo}
              alt=""
              className={`w-full h-[60px] ${
                activeLink === "home" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"
              }`}
            />
          </Link>
        </div>
        <div className="flex md:hidden self-center">
          <svg
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center text-[#36A7A7] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="hidden md:flex justify-start gap-8 mt-5">
          <Link to="/" onClick={() => setActiveLink("home")}>
            <p
              className={`text-[#252525] text-[16px] font-semibold cursor-pointer ${
                activeLink === "home" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"
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
            <div className="flex justify-start">
              <p className="text-[#252525] text-[16px] font-semibold hover:text-[#36A7A7] cursor-pointer">
                Services
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-[6px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {isHovered && (
              <div className="absolute bg-gray-200 rounded-md w-[160px] h-[80px] shadow-lg  border z-10">
                <Link to="/demolition" onClick={() => setActiveLink("demolition")}>
                  <p
                    className={`text-[16px] font-medium text-black mt-3 text-center ${
                      activeLink === "demolition" ? "text-black" : "hover:text-white hover:bg-[#36A7A7] hover:font-bold"
                    }`}
                  >
                    Demolition
                  </p>
                </Link>
                <Link to="/plumbing" onClick={() => setActiveLink("plumbing")}>
                  <p
                    className={`text-[16px] font-medium text-black text-center mt-1 ${
                      activeLink === "plumbing" ? "text-black" : "hover:text-white hover:bg-[#36A7A7] hover:font-bold"
                    }`}
                  >
                    Plumbing
                  </p>
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" onClick={() => setActiveLink("about")}>
            <p
              className={`text-[#252525] text-[16px] font-semibold cursor-pointer ${
                activeLink === "about" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"
              }`}
            >
              About Us
            </p>
          </Link>
          <Link to="/contact" onClick={() => setActiveLink("contact")}>
            <p
              className={`text-[#252525] text-[16px] font-semibold cursor-pointer ${
                activeLink === "contact" ? "text-[#36A7A7]" : "hover:text-[#36A7A7]"
              }`}
            >
              Contact Us
            </p>
          </Link>
        </div>

        <Example open={open} setOpen={handleOnClose} />
      </div>
    </div>
  );
}

export default Navbar;
