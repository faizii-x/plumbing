import React, {useEffect} from 'react'
import PlumbImg from '../components/plumbingImg'
import PlumbCards from '../components/plumbCards'
import BigTwo from '../components/bigtwo'
import Banner from '../components/banner'
import SlideBasic from '../components/sliderBasic'
import ContactHome from '../components/contactHome'

function Plumbing() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
    
    <PlumbImg/>
    <PlumbCards/>
    <BigTwo/>
    <Banner/>
    <SlideBasic/>
    <ContactHome/>
    </>
  )
}

export default Plumbing