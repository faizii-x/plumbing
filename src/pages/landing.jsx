import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar"
import Text from "../components/text";
import MainServ from "../components/mainServ";
import SlideComp from "../components/slideComp";
import Choose from "../components/choose";
import Image from "../components/image";
import ContactHome from "../components/contactHome";
import Footer from "../components/footer";

function Landing() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Text />
      <MainServ />
      <SlideComp/>
      <Choose/>
      <Image/>
      <ContactHome/>
      <Footer/>
    </>
  );
}

export default Landing;
