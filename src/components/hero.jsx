import React from "react";
import Slider from "react-slick";


function Hero() {
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
    
      <div className="slider-container ">
        <Slider {...settings}>
          <div className=" w-full h-auto bg-cover bg-center imagebg sm:p-[160px] p-[40px]">
            <p className=" bg-white lg:w-[50%] md:w-[70%] md:mt-0 mt-[140px] text-black mx-auto text-center text-[32px] font-poppins font-bold ">
              Expert Demolition Services
            </p>
            <p className="text-white mt-3  mx-auto text-[22px]">
              Experience efficient and safe demolition solutions tailored to
              your needs. Our expert team ensures precise execution and
              meticulous site management for every project.
            </p>
            <div className="bg-[#36A7A7] flex justify-center items-center mt-6 lg:w-[16%] md:w-[30%] full mx-auto p-4 cursor-pointer rounded-lg">
              <button className="font-medium text-white">Get Started</button>
            </div>
          </div>
          <div className=" w-full h-auto bg-cover bg-center imagebgg sm:p-[160px] p-[40px]">
            <p className=" bg-white lg:w-[50%] md:w-[70%] md:mt-0 mt-[140px] text-black mx-auto text-center text-[32px] font-poppins font-bold ">
              Reliable Plumbing Solutions
            </p>
            <p className="text-white mt-3  mx-auto text-[22px]">
            Trust our plumbing specialists to deliver reliable solutions for all your plumbing needs. From installations to repairs, we ensure your plumbing systems function flawlessly.
            </p>
            <div className="bg-[#36A7A7] flex justify-center items-center mt-6 lg:w-[16%] md:w-[30%] full mx-auto p-4 cursor-pointer rounded-lg">
              <button className="font-medium text-white">Get Started</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hero;
