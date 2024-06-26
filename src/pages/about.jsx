import React, {useEffect} from "react";
import AboutImg from "../components/aboutImg";
import AboutHero from "../components/aboutHero";
import Achievement from "../components/achievement";
import ChooseAbout from "../components/chooseAbout";
import Banner from "../components/banner";
import ContactHome from "../components/contactHome";

function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <AboutImg />
      <AboutHero />
      <Achievement />
      <Banner />
      <ChooseAbout />
      <ContactHome />
    </>
  );
}

export default About;
