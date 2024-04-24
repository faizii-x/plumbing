import React from "react";
import Slider from "react-slick";
import Img from "../../src/assets/png/img.png";
import David from "../../src/assets/png/david.png";
import Jenifer from "../../src/assets/png/jennifer.png";
import Jesica from "../../src/assets/png/jesica.png";
import Daniel from "../../src/assets/png/daniel.png";
import Michael from "../../src/assets/png/michael.png";
import YellowStar from "../../src/assets/svg/yellowStar.svg";
import GrayStar from "../../src/assets/svg/grayStar.svg";

function SlideBasic() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
      <div className="slider-container bg-[#98DEDE] mt-8">
        <h2 className="text-[28px] font-roboto font-bold text-center pt-[30px]">
        What Our <span className="text-[#36A7A7] font-bold">Customers</span> have to say
        </h2>
        <div className="p-8 w-[80%] mx-auto">
          <Slider {...settings}>
            <div className="">
              <div className="bg-white rounded-xl p-6 h-auto ">
                <p className="text-[20px] font-roboto font-normal">
                  “<span className="text-darkYellow">SM Electric</span>{" "}
                  surpassed my expectations! Their technician, Mike, was prompt,
                  knowledgeable, and fixed all our electrical issues
                  efficiently. Highly recommend their services!.”
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={Img} alt="" className="w-[70px] h-[70px]"/>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Sarah Thompson
                    </h4>
                    <div className="flex justify-start ">
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={GrayStar} alt="" className="w-[21px] h-[21px]"/>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  “<span className="text-darkYellow">SM Electric</span> was
                  amazing! They were prompt, efficient, and went the extra mile
                  to make sure everything was perfect. Highly recommended their
                  services!"
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={David} alt="" className="w-[70px] h-[70px]"/>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      David Johnson
                    </h4>
                    <div className="flex justify-start ">
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  “I can't thank{" "}
                  <span className="text-darkYellow">SM Electric Corp</span>{" "}
                  enough for their excellent work. They were reliable,
                  courteous, and their attention to detail was impeccable. Truly
                  satisfied with their service!"
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={Michael} alt="" className="w-[70px] h-[70px]"/>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Michael Brown
                    </h4>
                    <div className="flex justify-start ">
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={GrayStar} alt="" className="w-[21px] h-[21px]"/>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  “ Working with{" "}
                  <span className="text-darkYellow">SM Electric Corp</span> was
                  a breeze. They were responsive, professional, and completed
                  the job with utmost precision. I wouldn't hesitate to hire
                  them again!"
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={Jenifer} alt="" className="w-[70px] h-[70px]"/>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Jennifer Taylor
                    </h4>
                    <div className="flex justify-start ">
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  “<span className="text-darkYellow">SM Electric Corp</span>{" "}
                  work was outstanding. Their team was highly professional and
                  cooperative. My entire family was impressed with their work,
                  and we will definitely call them again next time.”
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={Jesica} alt="" className="w-[70px] h-[70px]"/>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Jessica Wilson
                    </h4>
                    <div className="flex justify-start ">
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={GrayStar} alt="" className="w-[21px] h-[21px]"/>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  “<span className="text-darkYellow">SM Electric Corp</span>{" "}
                  provided outstanding service! Their team was professional,
                  efficient, and highly recommended!"
                </p>
                <div className="flex justify-start gap-3 mt-[36px]">
                  <div>
                    <img src={Daniel} alt="" className="w-[70px] h-[70px]"/>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Daniel Thompson
                    </h4>
                    <div className="flex justify-start ">
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                        <img src={YellowStar} alt="" className="w-[25px] h-[25px]"/>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SlideBasic;
