import React from "react";

const Project = ({ imglink, title }) => {
  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-104 border border-gray-300 p-4 rounded-lg text-center bg-white shadow-md hover:border-gray-400 hover:shadow-lg transition-all">
      <div className="mb-3">
        <img
          className="w-full h-48 md:h-52 rounded-md object-cover"
          src={imglink}
          alt={title}
        />
      </div>
      <div className="flex justify-center items-center mb-3">
        <p className="text-md">{title}</p>
      </div>
      <a
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors block text-center"
        href="https://github.com/AdnanAhmed04"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Code
      </a>
    </div>
  );
};

export default Project;
