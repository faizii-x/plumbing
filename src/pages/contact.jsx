import React , {useEffect} from 'react'
import ContactImg from '../components/contactImg'
import Contactinput from '../components/contactinput'
import Location from '../components/location'

function Contact() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
   <ContactImg/>
    <Contactinput/>
    <Location/>
    </>
  )
}

export default Contact