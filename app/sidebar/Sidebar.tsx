"use client";

import { useState } from "react";

const SideBar = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={`h-screen bg-white p-4 transition-all duration-300 ${
        isExpanded ? "w-1/4" : "w-16"
      }`}
    >
      <button
            onClick={() => setExpanded(!isExpanded)}
            className="flex items-center justify-center w-full p-2 bg-gray-200 hover:bg-gray-300 rounded">
            <svg className  =" animate-bounce w-6 h-6 text-gray-1000 bg:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
                <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
            </svg>
      </button>
      {isExpanded && (
        <div className="mt-4 text-gray-800">
          <p className="text-lg font-bold">Mi nombre: Julian</p>
          <p className="text-sm font-bold">Edad: 21 años</p>
          <p className="text-sm font-bold">Carrera: ISC</p>
        </div>
      )}
    </div>
  );
};

export default SideBar;
