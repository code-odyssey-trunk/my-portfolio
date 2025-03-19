'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

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
    <nav className="relative bg-gray-900 text-white px-4 py-4 lg:px-30 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between overflow-hidden">
        <div className="w-1/2 flex items-center">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="My Logo"
              width={100}
              height={100}
              priority
            />
          </a>
          <ul
            className={`lg:flex lg:space-x-10 ${isOpen ? 'block' : 'hidden'} w-full absolute top-full right-0 p-4 lg:p-0 z-10 bg-gray-900 lg:static lg:bg-transparent flex flex-col lg:flex-row items-end lg:mx-15 lg:items-center lg:justify-center`}
          >
            <li className="mt-2 lg:mt-0">
              <a
                href="#intro"
                className="hover:text-violet-400 transition-colors"
              >
                About
              </a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a
                href="#skills"
                className="hover:text-violet-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a
                href="#journey"
                className="hover:text-violet-400 transition-colors"
              >
                My Journey
              </a>
            </li>
            <li className="mt-2 lg:mt-0">
              <a
                href="#contact"
                className="hover:text-violet-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="lg:hidden mt-5">
              <a
                className="px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition-colors"
                target="_blank"
                href="/Jasim_Zainudheen_CV_SD.pdf"
              >
                Resume
              </a>
              <a
                className="ml-5 px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition-colors"
                href="#contact"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <div className="mr-15 lg:mr-0">
            <div className="text-xs text-gray-400">Munich, Germany</div>
            <div className="text-xs font-bold text-gray-300">{currentTime}</div>
          </div>
          <div className="hidden lg:block">
            <a
              className="ml-15 px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition-colors"
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
        </div>
        <div className="md:hidden items-center justify-center">
          <button onClick={toggleMenu} className="focus:outline-none">
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
        {/* Fixed social media */}
        <div className="fixed right-6 top-1/3 transform -translate-y-1/2 flex-col space-y-4 items-center opacity-80 md:flex hidden">
          <a
            href="https://www.linkedin.com/in/jasimlz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="1x"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            />
          </a>
          <a
            href="https://github.com/code-odyssey-trunk?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              className="text-gray-400 hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://www.instagram.com/code_odyssey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            />
          </a>
          <a
            href="https://www.youtube.com/@codeodyssey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="1x"
              className="text-red-400 hover:text-red-300 transition-colors"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
