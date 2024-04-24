
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function Counter() {
  const formatValue = (value) => `${value}`;
  const [isAnimated, setIsAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  const handleScroll = () => {
    const element = counterRef.current;

    if (element) {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      const isVisible = top < window.innerHeight && bottom >= 0;
      if (isVisible) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const resetAnimation = () => {
    setIsAnimated(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[60%] w-full container mx-auto mt-6">
      <div
        className={`bg-white  rounded-lg p-6 ${isAnimated ? "animate" : ""}`}
        ref={counterRef}
        onClick={resetAnimation}
      >
        <div className="flex justify-center">
          <CountUp
            className="text-[#36A7A7] font-medium text-[50px] mt-3"
            start={0}
            end={150}
            duration={15}
            formattingFn={formatValue}
            redraw={true}
          />
          <p className="mt-[10px] ml-2 text-[#36A7A7] text-[50px]">+</p>
        </div>
        <p className="text-center text-white text-[18px] font-light">
          Estimators Staff
        </p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-center">
          <CountUp
            className=" text-[#36A7A7] font-medium text-[50px] mt-3"
            start={0}
            end={1000}
            duration={15}
            formattingFn={formatValue}
          />
          <p className="mt-[10px] ml-2 text-[#36A7A7] text-[50px]">+</p>
        </div>
        <p className="text-center text-white text-[18px] font-light">Clients</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-center">
          <CountUp
            className=" text-[#36A7A7] font-medium text-[50px] mt-3"
            start={0}
            end={3500}
            duration={15}
            formattingFn={formatValue}
          />
          <p className="mt-[10px] ml-2 text-[#36A7A7] text-[50px]">+</p>
        </div>
        <p className="text-center text-white text-[18px] font-light">
          Projects
        </p>
      </div>
    </div>



  );
}

export default Counter;
