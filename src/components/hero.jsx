import React from "react";
import { Link } from "react-router-dom";
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
          <div className=" w-full h-auto bg-cover bg-center imagebg sm:p-[120px] p-[10px]">
            <p className=" bg-white lg:w-[45%] md:w-[70%] md:mt-0 mt-[100px] text-black mx-auto text-center text-[32px] font-poppins font-bold ">
              Expert Demolition Services
            </p>
            <p className="text-white mt-8 text-center mx-auto font-semibold text-[26px]">
              Experience efficient and safe demolition solutions tailored to
              your needs. Our expert team ensures precise execution and
              meticulous site management for every project.
            </p>
            <Link to="/contact">
              <div className="bg-[#36A7A7] flex justify-center items-center mt-6 lg:w-[16%] md:w-[30%] w-[50%] mx-auto p-4 cursor-pointer rounded-lg">
                <button className="font-medium text-white">Get Started</button>
              </div>
            </Link>
          </div>
          <div className=" w-full h-auto bg-cover bg-center imagebgg sm:p-[120px] p-[10px]">
            <p className=" bg-white lg:w-[45%] md:w-[70%] md:mt-0 mt-[100px] text-black mx-auto text-center text-[32px] font-poppins font-bold ">
              <span style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                Reliable Plumbing Solutions
              </span>
            </p>
            <p className="text-white mt-8 text-center font-semibold mx-auto text-[26px]">
              Trust our plumbing specialists to deliver reliable solutions for
              all your plumbing needs. From installations to repairs, we ensure
              your plumbing systems function flawlessly.
            </p>
            <Link to="/contact">
              <div className="bg-[#36A7A7] flex justify-center items-center mt-6 lg:w-[16%] md:w-[30%] w-[50%] mx-auto p-4 cursor-pointer rounded-lg">
                <button className="font-medium text-white">Get Started</button>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hero;
