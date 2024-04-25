import React, {useEffect} from 'react'
import Demoimg from '../components/demoimg'
import DemoCards from '../components/demoCards'
import Bigimage from '../components/bigimage'
import Banner from '../components/banner'
import ContactHome from '../components/contactHome'
import SlideBasic from '../components/sliderBasic'

function Demolition() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <Demoimg/>
    <DemoCards/>
    <Bigimage/>
    <Banner/>
    <SlideBasic/>
    <ContactHome/>
    </>
  )
}

export default Demolition