import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='h-full w-full bg-gray-800 text-white px-4'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home