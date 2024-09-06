import React, { useState } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { black: '/black.png', color: '/white.png' },
    { black: '/black.png', color: '/white.png' },
    { black: '/black.png', color: '/white.png' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add a new image to the gallery
  const addImage = () => {
    const newImagePath = { black: '/black.png', color: '/white.png' }; // Placeholder for dynamic image URLs
    setImages([...images, newImagePath]);
  };

  // Handle previous and next buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg h-64 overflow-hidden relative">
      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-4 px-6">
        <div className="text-xl font-semibold bg-black py-2 px-4 rounded-full">Gallery</div>
        <button
          onClick={addImage}
          className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 shadow-md"
        >
          + Add Image
        </button>
      </div>

      {/* Image Slider */}
      <div className="relative flex justify-center items-center space-x-4 px-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="bg-gray-800 p-3 rounded-full shadow-lg text-white hover:bg-gray-700 transition duration-200"
        >
          ←
        </button>

        {/* Image Thumbnails */}
        <div className="flex space-x-4 overflow-x-auto w-full">
          {images.map((image, index) => (
            <div className="relative group flex-shrink-0" key={index} style={{ width: '160px', height: '160px' }}>
              <img
                src={image.black}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full rounded-md object-cover cursor-pointer transition-transform duration-200 ${
                  currentIndex === index ? 'border-4 border-white' : 'opacity-70 group-hover:scale-105'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
              <img
                src={image.color}
                alt={`Thumbnail ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full rounded-md object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-gray-800 p-3 rounded-full shadow-lg text-white hover:bg-gray-700 transition duration-200"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default GalleryWidget;
