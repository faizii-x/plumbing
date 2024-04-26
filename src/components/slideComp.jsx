import React from "react";
import Slider from "react-slick";

function SlideComp() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="text-[22px] font-poppins font-semibold text-center mt-6 ">
        We handle projects of all sizes, covering...
      </h2>
      <div className="slider-container ">
        <Slider {...settings}>
          <div className=" w-full h-auto bg-cover bg-center slideImg p-8 mt-4">
            <p className=" bg-[#36A7A7] rounded-md lg:w-[22%] md:w-[40%] w-[60%]  text-white mx-auto text-center text-[28px] font-poppins font-bold ">
              RESIDENTIAL
            </p>
            <p className="text-white mt-3 text-center w-[80%] mx-auto text-[22px]">
              Our demolition and plumbing services cater to residential
              projects, offering comprehensive solutions such as kitchen and
              bathroom gutting, roof demolition, garage and chimney destruction,
              siding elimination, and complete interior house clearing.
            </p>
          </div>
          <div className=" w-full h-auto bg-cover bg-center slideImgg p-8 mt-4">
            <p className=" bg-[#36A7A7] rounded-md lg:w-[22%] md:w-[40%] w-[60%] text-white mx-auto text-center text-[28px] font-poppins font-bold ">
              INDUSTRIAL
            </p>
            <p className="text-white mt-3 text-center w-[80%] mx-auto text-[22px]">
              Our industrial services cover demolition and plumbing needs in
              industrial settings, offering efficient solutions for dismantling
              structures and upgrading plumbing systems in factories and
              warehouses.
            </p>
          </div>
          <div className=" w-full h-auto bg-cover bg-center slideImggg p-8 mt-4">
            <p className=" bg-[#36A7A7] rounded-md lg:w-[22%] md:w-[40%] w-[60%]  text-white mx-auto text-center text-[28px] font-poppins font-bold ">
              COMMERCIAL
            </p>
            <p className="text-white mt-3 text-center w-[80%] mx-auto text-[22px]">
              Our demolition and plumbing services for commercial projects
              encompass various aspects such as demolishing existing structures,
              clearing interior spaces, and addressing plumbing needs specific
              to commercial settings.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SlideComp;
