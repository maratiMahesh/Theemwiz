import React from 'react'

const Hero = () => {
  return (
    <div className='h-full md:h-[-80vh] w-full flex flex-col md:flex-row bg-gray-800 text-white px-4 md:px-16 mt-6'>
        <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-start p-4 sm:p-8 order-2 md:order-first'>
            <p className='text-xl text-orange-600'>Modern Studio</p>
            <h2 className='text-4xl md:text-6xl font-bold mt-2'>We’re Help 
            To Build Your 
             Dream Project</h2>
           
            <p className='text-gray-400 mt-4'>Agency provides a full service range including technical skills, design, business understanding.</p>
            <div className=' flex mt-6'>
                <button className='bg-orange-600 font-weight-extrabold text-white px-2 sm:px-6 py-2 rounded mt-4 hover:bg-orange-500 transition duration-300'>How we work</button>
                <button className=' text-gray-200 px-2 sm:px-6 py-2  ml-4 hover:bg-gray-700 transition duration-300'>Contact Us</button>
            </div>
            <div className='flex mt-16 space-x-6'>
                
                <div className='flex '>
                    <img src="data:image/png;base64,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" alt="Email" className="h-12 w-12 mr-2 rounded-full border border-gray-500" />
                </div>
                <div className='flex flex-col  mr-4'>
                    <p className='text-gray-400'>"Put themselves in the merchant's shoes"</p>
                    <p className='text-white text-lg'>- Mahesh</p>
                </div>
            </div>
        </div>
        <div children='w-full md:w-1/2  p-4 md:p-8 mt-6 order-first md:order-last'>
            <img src="/Images/pic.png" alt="Hero" className="w-full h-full object-contain" />
        </div>
    </div>
  )
}

export default Hero