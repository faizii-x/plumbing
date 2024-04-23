import React from 'react'
import Image1 from "../../src/assets/png/image1.png"
import Image2 from "../../src/assets/png/image2.png"
import Image3 from "../../src/assets/png/image3.png"
import Image4 from "../../src/assets/png/image4.png"
import Image5 from "../../src/assets/png/image5.png"
import Image6 from "../../src/assets/png/image6.png"

function Image() {
  return (
    <>
    
<h2 className="text-[22px] font-poppins font-semibold text-center mt-6">Our Projects</h2>
    
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 w-[90%] mx-auto mt-6'>
        <div className='col-span-1'>
          <div className='md:flex grid justify-start gap-3 mb-3'>
            <img src={Image3} alt="" />
            <img src={Image2} alt="" />
            </div>
            <img src={Image1} alt="" />
        </div>
        <div className='col-span-1'>
        <img src={Image4} alt="" />

        <div className='md:flex grid justify-start gap-4 mt-4'>
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Image