import React from 'react';

const Creative = ({ heading, para, img }) => {
  return (
    <div className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <div className="text-5xl text-blue-500 flex items-center justify-center mb-4">
        {img}
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
      <p className="text-gray-600 mt-2">{para}</p>
    </div>
  );
};

export default Creative;