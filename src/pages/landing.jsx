import React from "react";
import Hero from "../components/hero";
import Text from "../components/text";
import MainServ from "../components/mainServ";
import SlideComp from "../components/slideComp";
import Choose from "../components/choose";
import Image from "../components/image";
import ContactHome from "../components/contactHome";

function Landing() {

  return (
    <>
     
      <Hero/>
      <Text />
      <MainServ />
      <SlideComp/>
      <Choose/>
      <Image/>
      <ContactHome/>
    
    </>
  );
}

export default Landing;
