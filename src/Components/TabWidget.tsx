import React, { useState } from 'react';

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState('about');
  

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <p>
           I am a web developer skilled in the MERN stack (MongoDB, Express.js, React, Node.js) with hands-on experience in creating various web applications, including a blog app, real estate app, and e-commerce app. I enjoy solving complex coding challenges, such as working with data structures and algorithms like linked lists and graph traversal methods (DFS, BFS).

          I am quick to learn and adapt to new technologies, and I've enhanced my skills through various training programs and an internship where I worked on full-stack development projects. I have a strong sense of design and aim to create dynamic, user-friendly applications. I’m passionate about coding, always eager to learn, and committed to delivering high-quality work in a collaborative environment.
          </p>
        );
      case 'experiences':
        return (
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut 
          </p>
        );
      case 'recommended':
        return (
          <p>
            I am a web developer skilled in the MERN stack (MongoDB, Express.js, React, Node.js) with hands-on experience in creating various web applications, including a blog app, real estate app, and e-commerce app. I enjoy solving complex coding challenges, such as working with data structures and algorithms like linked lists and graph traversal methods (DFS, BFS).

I am quick to learn and adapt to new technologies, and I've enhanced my skills through various training programs and an internship where I worked on full-stack development projects. I have a strong sense of design and aim to create dynamic, user-friendly applications. I’m passionate about coding, always eager to learn, and committed to delivering high-quality work in a collaborative environment.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-lg h-64">
      <div className="flex items-center  justify-center space-x-4 mb-4 bg-gray-800 h-14 w-3/4 rounded-3xl p-2">
        {['about', 'experiences', 'recommended'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-full transition-colors duration-300 ease-in-out ${
              activeTab === tab
                ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="overflow-y-auto h-32 ">{renderContent()}</div>
    </div>
  );
};

export default TabWidget;
