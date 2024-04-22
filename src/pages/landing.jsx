import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar"
import Text from "../components/text";
import MainServ from "../components/mainServ";
import SlideComp from "../components/slideComp";
import Choose from "../components/choose";

function Landing() {

const text=<p className="text-[20px] font-poppins font-light">
At <span className="text-[#36A7A7]">A1 Demolition & Plumbing</span>,
our top priority is to ensure your satisfaction with our services.
Our dedicated team is committed to meeting your needs and exceeding
your expectations. From start to finish, we strive to make your
experience with us a positive one. Get in touch with us today, and
let us handle your demolition and plumbing needs with expertise and
care.
</p>

  return (
    <>
      <Navbar/>
      <Hero/>
      <Text text={text}/>
      <MainServ/>
      <SlideComp/>
      <Choose/>
    </>
  );
}

export default Landing;
