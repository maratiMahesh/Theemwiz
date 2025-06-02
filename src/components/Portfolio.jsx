import React from 'react'
import Carosel from './Carosel'

const Portfolio = () => {
  return (
    <div className='bg-gray-800 p-8'>
        <h2 className='text-xl  text-orange-500 text-center uppercase'>Portfolio</h2>

        <ul className=' hidden md:flex justify-center items-center  space-y-4 mt-4 text-white'>

            <li className='px-4 py-2 rounded text-gray-400'>Show All</li>
            <li className='px-4 py-2 rounded text-gray-400'>Design</li>
            <li className='px-4 py-2 rounded text-gray-400'>Illustration</li>
            <li className='px-4 py-2 rounded text-gray-400'>Branding</li>
            <li className='px-4 py-2 rounded text-gray-400'>Motion</li>
        </ul>
        <div className='md:hidden flex justify-center items-center space-x-4 mt-4 text-black px-16'>
            <select className='bg-white w-full px-4 py-2 rounded'>
                <option >Show All</option>
                <option>Design</option>
                <option>Illustration</option>
                <option>Branding</option>
                <option>Motion</option>
            </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mt-8 px-16 '>
            <div className=' relative md:col-span-2'>
                <div className='absolute bottom-8 left-4 bg-opacity-80'>
                    <p className='bg-white text-black rounded-lg opacity-70 px-2 py-1'>Design</p>
                    <h3 className='text-white font-bold uppercase text-2xl'>sofa</h3>
                </div>
                <img src="../src/Images/Bitmap1.png" alt="Portfolio Item" className=' w-full h-60 md:h-80  object-cover rounded-lg shadow-lg' />
                </div>
            <div className='relative md:col-span-3 '>
                <div className='absolute bottom-8 left-4 bg-opacity-80'>
                    <p className='bg-white text-black rounded-lg opacity-70 px-2 py-1'>Branding</p>
                    <h3 className='text-white font-bold uppercase text-2xl'>Key board</h3>
                </div>
                <img src="../src/Images/Bitmap2.png" alt="Portfolio Item" className=' w-full h-60 md:h-80 object-cover rounded-lg shadow-lg' />
                </div>
                <div className='relative md:col-span-3 '>
                    <div className='absolute bottom-8 left-4 bg-opacity-80'>
                    <p className='bg-white text-black rounded-lg opacity-70 px-2 py-1'>Illustration</p>
                    <h3 className='text-white font-bold uppercase text-2xl'>work media</h3>
                </div>
                <img src="../src/Images/Bitmap3.png" alt="Portfolio Item" className=' w-full h-60 md:h-80  object-cover rounded-lg shadow-lg' />
                </div>
                <div className='relative md:col-span-2 '>
                    <div className='absolute bottom-8 left-4 bg-opacity-80'>
                    <p className='bg-white text-black rounded-lg opacity-70 px-2 py-1'>Motion</p>
                    <h3 className='text-white font-bold uppercase text-2xl'>dddone</h3>
                </div>
                <img src="../src/Images/Bitmap4.png" alt="Portfolio Item" className=' w-full h-60 md:h-80 object-cover rounded-lg shadow-lg' />
                </div>
               </div>
               <div className='mt-8 text-center'>
                <button className='border border-gray-600  shadow-sm mx-auto text-white px-6 py-2 rounded-lg mt-4'>Explore More</button>
               </div>
               <div className='m-8  bg-orange-50 grid grid-cols-1 md:grid-cols-3 p-4 space-x-3 rounded-lg'>
                <div className='relative text-left p-4 space-y-2'>
                    <img src="../src/Images/icon.png" alt="Get Started" className=' absolute -top-10 z-20 w-12 h-12 md:w-15 md:h-15 object-contain rounded-lg ' />
                    <p className='text-2xl font-semibold text-orange-500'>Get Started</p>
                    <h3 className='text-gray-800 font-bold text-3xl mt-2'>We Help Companies 
                        Move Faster</h3>
                    <button className='bg-orange-600 font-weight-extrabold text-white px-2 sm:px-6 py-2 rounded mt-4'>Contact Us</button>    
                </div>
                <div className='flex justify-center items-center'>
                    <img src="../src/Images/block.png" alt="Get Started" className='w-25 h-25 object-cover rounded-lg ' />
                </div>
                <div className='md:relative flex justify-center items-center'>
                    <img src="../src/Images/path.png" alt="Get Started" className=' hidden md:absolute w-15 h-15  md:w-full  md:h-full md:object-contain rounded-lg ' />
                    <img src="../src/Images/Bitmap5.png" alt="Get Started" className=' md:absolute -top-10 z-20 w-25 h-25  md:w-full  md:h-full md:object-contain   object-cover rounded-lg ' />
                </div>
               </div>
               <div className='px-4 mt-8'>
                <div>
                    <p className='text-orange-500 uppercase'>Our Team</p>
                    <h3 className='text-3xl font-bold text-white'>Team of Designers <br />
                     and Developers</h3>
                </div>
            
                     <Carosel />
                    
               </div>
    </div>
  )
}

export default Portfolio