import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex justify-between items-center p-4 text-white md:px-16'>
      <div>
        <img src="../src/Images/logo.png" alt="Logo" className="h-12 w-15 object-contain " />
      </div>
      <nav className='hidden md:block'>
        <ul className="flex space-x-8">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
      <div className="flex flex-col md:hidden items-center space-x-4">
        <img src="../src/Images/menu.png" alt="Logo" className="h-10 w-12 object-contain " onClick={handleMenuToggle}/>
      </div>
      <div className={`h-full w-1/2 bg-white text-black p-4 absolute top-0 right-0 transition-transform duration-300 ${isOpen ? 'translate-x-full' : 'translate-x-0'} md:hidden`}>
        <div className='text-2xl md:hidden cursor-pointer mr-2 flex justify-end px-2  ' onClick={handleMenuToggle}>
          X
          </div>
          <div className='block md:hidden p-2'>
            <ul className="flex flex-col space-y-1">
              <li className='hover:bg-gray-500 hover:text-white rounded pl-2 shadow-sm py-2'><a href="#about">About</a></li>
              <li className='hover:bg-gray-500 hover:text-white rounded pl-2 shadow-sm py-2'><a href="#services">Services</a></li>
              <li className='hover:bg-gray-500 hover:text-white rounded pl-2 shadow-sm py-2'><a href="#">Pricing</a></li>
              <li className='hover:bg-gray-500 hover:text-white rounded pl-2 shadow-sm py-2' ><a href="#blog">Blog</a></li>
            </ul>

          </div>

      </div>
      <button className="hidden md:block border text-white px-4 py-2 rounded border-gray-500">Contact Us</button>
    </div>

  )
}

export default Navbar