import React, {useState} from "react";
import Logo from "../../src/assets/svg/logo.svg";
import Example from "./example";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  return (
    <>
      <div className="bg-opacity-set fixed z-20 w-full h-auto">
        <div className="flex justify-between ml-16 mr-16">
          <div>
            <img src={Logo} alt="" className="w-full h-[60px]" />
          </div>
          <div className="self-center md:block hidden">
            <div className="flex justify-start gap-8 ">
              <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                Home
              </p>
              <div className="flex justify-start">
                <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                  Services
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mt-[6px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                About Us
              </p>
              <p className="text-[#252525] text-[16px] font-semibold hover:text-[#15A7AD] cursor-pointer">
                Contact Us
              </p>
            </div>
          </div>

          <div className="visible md:invisible flex justify-center">
          <svg
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-center text-[#15A7AD]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Example open={open} setOpen={handleOnClose} />

          </div>

      </div>
    </>
  );
}

export default Navbar;

// import React from "react";
// import "flowbite";

// function Navbar() {
//   return (
//     <>
//       <nav class="bg-white border-gray-200 dark:bg-gray-900">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             class="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               class="h-8"
//               alt="Flowbite Logo"
//             />
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Flowbite
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <div className="">
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Services
//                 </a>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="w-6 h-6"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//                 </div>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   About
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
