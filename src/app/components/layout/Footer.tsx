import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 lg:px-8 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-800 rounded-2xl p-6 lg:p-10 border border-gray-700 shadow-lg">
        {/* Logo and Contact Info */}
        <div className="flex flex-col justify-between">
          <Link href="#intro" className="hover:animate-pulse inline-block mb-6">
            <Image
              src="/jz.png"
              alt="logo"
              width={50}
              height={50}
              loading="lazy"
              className="transition-transform hover:scale-110"
            />
          </Link>
          <div className="text-gray-300 text-sm space-y-3">
            <p className="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-blue-400 group-hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="group-hover:text-blue-400 transition-colors">jasimzainudheen1@gmail.com</span>
            </p>
            <p className="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-blue-400 group-hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="group-hover:text-blue-400 transition-colors">+49 159 049 74791</span>
            </p>
            <p className="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-blue-400 group-hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="group-hover:text-blue-400 transition-colors">Munich, Germany</span>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-semibold text-lg mb-2 border-b border-gray-700 pb-2">Navigation</h3>
          <Link
            href="#intro"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            About Me
          </Link>
          <Link
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Skills
          </Link>
          <Link
            href="#journey"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            My Journey
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-semibold text-lg mb-2 border-b border-gray-700 pb-2">Connect</h3>
          <Link
            href="https://www.linkedin.com/in/jasimlz"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/code-odyssey-trunk?tab=repositories"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <FontAwesomeIcon icon={faGithub} className="text-blue-400 w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            GitHub
          </Link>
          <Link
            href="https://www.instagram.com/code_odyssey"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-blue-400 w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@codeodyssey"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-blue-400 w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            YouTube
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-lg mb-2 border-b border-gray-700 pb-2">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Get latest updates and insights</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center justify-center group"
            >
              Subscribe
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Jasim Zainudheen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
