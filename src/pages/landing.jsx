import React, {useEffect} from "react";
import Hero from "../components/hero";
import Text from "../components/text";
import MainServ from "../components/mainServ";
import SlideComp from "../components/slideComp";
import Choose from "../components/choose";
import Image from "../components/image";
import ContactHome from "../components/contactHome";

function Landing() {


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
