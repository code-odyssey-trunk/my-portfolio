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
    <footer className="bg-gray-900 px-4 lg:px-30 pb-15">
      <div className="container mx-auto flex flex-col lg:flex-row bg-gray-800 rounded-2xl p-10 lg:p-20 border border-gray-700 shadow-lg">
        <div className="w-full lg:w-1/3 flex flex-col justify-between mb-10 lg:mb-0">
          <Link href="#intro" className="hover:animate-pulse">
            <Image
              src="/jz.png"
              alt="logo"
              width={40}
              height={40}
              loading="lazy"
            />
          </Link>
          <div className="flex flex-col pr-0 lg:pr-10 mt-6 lg:mt-0">
            <div className="text-gray-300 text-sm mb-2">
              <p className="mb-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
                jasimzainudheen1@gmail.com
              </p>
              <p className="mb-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
                +49 159 049 74791
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
                Munich, Germany
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col space-y-3 border-t lg:border-t-0 lg:border-l border-gray-700 pt-10 lg:pt-0 lg:pl-10 text-gray-300">
          <Link
            href="#intro"
            className="hover:text-blue-400 transition-colors"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#journey"
            className="hover:text-blue-400 transition-colors"
          >
            My Journey
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col space-y-3 border-t lg:border-t-0 lg:border-l border-gray-700 pt-10 lg:pt-0 lg:pl-10 text-gray-300">
          <div className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-400" />
            <Link
              href="https://www.linkedin.com/in/jasimlz"
              target="_blank"
              className="ml-2"
            >
              LinkedIn
            </Link>
          </div>
          <div className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faGithub} className="text-gray-400" />
            <Link
              href="https://github.com/code-odyssey-trunk?tab=repositories"
              target="_blank"
              className="ml-2"
            >
              GitHub
            </Link>
          </div>
          <div className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faInstagram} className="text-blue-400" />
            <Link
              href="https://www.instagram.com/code_odyssey"
              target="_blank"
              className="ml-2"
            >
              Instagram
            </Link>
          </div>
          <div className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faYoutube} className="text-red-400" />
            <Link
              href="https://www.youtube.com/@codeodyssey"
              target="_blank"
              className="ml-2"
            >
              YouTube
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col space-y-3 border-t lg:border-t-0 lg:border-l border-gray-700 pt-10 lg:pt-0 lg:pl-10 text-gray-300">
          <h3 className="font-semibold text-white mb-2">
            Subscribe to my newsletter
          </h3>
          <p className="text-sm mb-3">Get latest updates and insights</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-2">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
