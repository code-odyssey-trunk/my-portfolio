'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-4 lg:px-30 border-b border-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between overflow-hidden">
        <div className="flex-shrink-0">
          <a href="#home">
            <Image
              src="/jz.png"
              alt="My Logo"
              width={100}
              height={100}
              className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] md:w-[45px] md:h-[45px] lg:w-[40px] lg:h-[40px]"
              priority
            />
          </a>
        </div>
        
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-10 md:mx-4">
          <a href="#intro" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#work" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#journey" className="hover:text-blue-400 transition-colors">Journey</a>
          <a href="#projetcs" className="hover:text-blue-400 transition-colors">Projetcs</a>
        </div>
        
        <div className="flex items-center">
          <div className="mr-4 md:mr-6">
            <div className="text-xs text-gray-400">Munich, Germany</div>
            <div className="text-xs font-bold text-gray-300">{currentTime}</div>
          </div>
          
          <div className="hidden lg:block">
            <a
              className="px-4 py-2 bg-blue-400 text-black rounded-lg hover:bg-blue-300 transition-colors"
              target="_blank"
              href="/Jasim_Zainudheen_CV_SD.pdf"
            >
              Resume
            </a>
            <a
              className="ml-5 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
          
          <button onClick={toggleMenu} className="md:hidden focus:outline-none ml-4">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`${isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}`}
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 p-4 z-10">
            <ul className="flex flex-col items-end space-y-2">
              <li><a href="#intro" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#journey" className="hover:text-blue-400 transition-colors">Journey</a></li>
              <li><a href="#projetcs" className="hover:text-blue-400 transition-colors">Projetcs</a></li>
              <li className="mt-5">
                <a
                  className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300 transition-colors"
                  target="_blank"
                  href="/Jasim_Zainudheen_CV_SD.pdf"
                >
                  Resume
                </a>
                <a
                  className="ml-5 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300 transition-colors"
                  href="#contact"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
