import React from 'react'

function ContactHome() {
  return (
    <>
    
    <div className='bg-[#071818] mt-6 p-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto w-[80%]'>
            <div className='col-span-1 self-center lg:text-start text-center'>
                <p className='text-[26px] font-Roboto text-white '>Have any questions?</p>
                <p className='text-[26px] font-Roboto text-white  mb-2'>Feel free to contact us!</p>
            </div>
            <div className='col-span-1 self-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <input type="text" placeholder='Name' className='rounded-md'/>
                <input type="text" placeholder='Email' className='rounded-md'/>
                </div>
                <div className='flex justify-start gap-2 mt-2'>
                <input type="text" placeholder='Message' className='rounded-md lg:w-[80%] w-[70%]'/>
                <div className='lg:w-[20%] w-[30%] mx-auto bg-[#36A7A7] flex justify-center items-center rounded-md cursor-pointer'>
                <button className='font-semibold'>Submit</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default ContactHome