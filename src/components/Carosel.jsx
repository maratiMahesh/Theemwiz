import React, { useState } from 'react';

const Carosel = () => {
  const images = [
    { name: "David", type: "Design", image: "/Images/Bitmap6.png" },
    { name: "Key board", type: "Branding", image: "/Images/Bitmap7.png" },
    { name: "Work media", type: "Illustration", image: "/Images/Bitmap8.png" },
    { name: "Ddone", type: "Motion", image: "/Images/Bitmap9.png" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='bg-gray-800 py-10 px-4 relative'>
      {/* Top-right buttons */}
      <div className='absolute top-4 right-6 z-10 flex gap-2'>
        <button onClick={handlePrev} className='bg-gray-700 text-white px-4 py-2 rounded'>Prev</button>
        <button onClick={handleNext} className='bg-gray-700 text-white px-4 py-2 rounded'>Next</button>
      </div>

      {/* Carousel Content */}
      <div className='max-w-6xl mx-auto'>
        {/* On mobile: only active image shown */}
        <div className='block md:hidden'>
          <div className='text-center'>
            <img
              src={images[activeIndex].image}
              alt={images[activeIndex].name}
              className='w-64 h-64 mx-auto object-cover rounded-lg shadow-md border border-gray-600 mt-6'
            />
            <div className='mt-4 text-white'>
              <p className='bg-white text-black rounded px-2 inline-block'>{images[activeIndex].type}</p>
              <h3 className='text-xl font-bold uppercase mt-2'>{images[activeIndex].name}</h3>
            </div>
          </div>
        </div>

        {/* On md and above: show all images in row */}
        <div className='hidden md:grid grid-cols-4 gap-6 mt-8'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`text-center border rounded-lg shadow-md p-4 cursor-pointer ${
                index === activeIndex ? 'border-yellow-400' : 'border-gray-600'
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.image}
                alt={image.name}
                className='w-full h-48 object-cover rounded-lg'
              />
              <div className='mt-4 text-white'>
                <p className='bg-white text-black rounded px-2 inline-block'>{image.type}</p>
                <h3 className='text-lg font-bold uppercase mt-1'>{image.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carosel;
