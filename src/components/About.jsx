import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center px-8 bg-orange-50 py-8'>
      <div>
        <img src="../src/Images/logo1.png" alt="About Us" className="w-full h-64 object-contain" /> 
        <hr className="my-2 border-orange-400 " />
      </div>
      <div className='  w-full mt-4 my-4 flex flex-col items-center space-x-8 space-y-4 md:px-16 text-center md:flex-row md:justify-space-around md:text-left'>
        <div className='h-full w-full md:w-1/2 '>
          <img src="../src/Images/pic1.png" alt="About Us" className="w-full h-full object-contain" />
        </div>
        <div className='wfull md:w-1/2 space-y-4 text-left'>
          <p className='text-lg font-semibold text-orange-500'>About Us</p>
          <h3 className='text-2xl font-extrabold'>An Experienced Design Agency</h3>
          <p className='text-black text-xl mt-4'>
              Provides a full service range
          </p>
          <p className='text-gray-600 mt-4'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
          <button  className='text-black shadow-sm bg-white  px-4 py-2 rounded mt-4 font-extrabold hover:bg-gray-100'>About Us</button>
        </div>
      </div>
      <div className='flex justify-center flex-col  items-center w-full mt-8 md:flex-row p-4'>
        <div className=' md:w-1/4 w-3/5 border p-4 border-orange-300 pl-4   md:text-center'>
          <h3 className='text-2xl font-extrabold text-gray-800'>42%</h3>
          <p className='text-gray-600 mt-4 text-sm'> Years of experience</p>
        </div>
        <div className='border md:w-1/4 w-3/5 p-4 border-orange-300 pl-4 md:text-center'>
          <h3 className='text-2xl font-extrabold text-gray-800'>72+</h3>
          <p className='text-gray-600 mt-4 text-sm'> Agency members</p>
        </div>
        <div className='border md:w-1/4 w-3/5 p-4 border-orange-300 pl-4  md:text-center'>
          <h3 className='text-2xl font-extrabold text-gray-800'>5.000</h3>
          <p className='text-gray-600 mt-4 text-sm '> Projects completed</p>
        </div>
      </div>
      <div className='w-full flex justify-center items-center flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 p-4'>
        <div className='w-full md:w-1/2 p-4 space-y-4 text-left'>
        <p className='text-lg font-semibold text-orange-500'>How we work</p>
        <h3 className='text-2xl font-extrabold text-black'>Making Your Project Look Awesome</h3>
        <p className='text-gray-600 mt-4'>Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
        <p className='text-gray-800 mt-4 text-lg'>Read more..</p>
        </div>
        <div className='w-full md:w-1/2 space-y-8   text-left mt-16'>
           <div  className='flex items-center space-x-4'>
            <h2 className='text-4xl font-extrabold text-black'>1</h2> <span className='text-gray-900'>Full service range including</span>
           </div>
           <div  className='flex items-center space-x-4'>
            <h2 className='text-4xl font-extrabold text-black'>2</h2> <span className='text-gray-900'>Technical skills, design, business</span>
           </div>
           <div  className='flex items-center space-x-4'>
            <h2 className='text-4xl font-extrabold text-black'>3</h2> <span className='text-gray-900'>Themselves in the merchant's</span>
           </div>
        </div>
    </div>
    <hr className="my-8 border-orange-400  w-full" />
     <div className='w-full flex justify-center items-center flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 p-4'>
      <div className='w-full md:w-1/2 md:p-4 md:space-y-4'>
        <img src="../src/Images/Bitmap.png" alt="About Us" className="w-full h-64 object-contain" />
      </div>
      <div className='w-full md:w-1/2 space-y-4 text-left py-6'>
                <p className='text-lg font-semibold text-orange-500 uppercase'>Video Reel</p>
                <h3 className='text-2xl font-extrabold text-black'>Unlock The Greatest Value Possible</h3>
                <p className='text-gray-600 mt-4'>Design, business understanding, ability to put
                   themselves in the merchant's shoes meant to partner.</p>
      </div>
     </div>

    </div>
  )
}

export default About