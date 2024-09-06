import React from 'react';
import TabWidget from './TabWidget';
import GalleryWidget from './GalleryWidget';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex justify-end p-10">
      <div className="flex flex-col space-y-6 w-full md:w-1/2">
        <TabWidget />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default Home;
