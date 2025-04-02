import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialBar = () => {
  return (
    <div className="fixed right-6 top-1/3 transform -translate-y-1/2 flex flex-col space-y-6 items-center opacity-80 md:flex hidden z-50">
      <a
        href="https://www.linkedin.com/in/jasimlz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transform hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="lg"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        />
      </a>
      <a
        href="https://github.com/code-odyssey-trunk?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transform hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="lg"
          className="text-gray-400 hover:text-white transition-colors"
        />
      </a>
      <a
        href="https://www.instagram.com/code_odyssey"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transform hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        />
      </a>
      <a
        href="https://www.youtube.com/@codeodyssey"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:transform hover:scale-110 transition-transform duration-200"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          size="lg"
          className="text-red-400 hover:text-red-300 transition-colors"
        />
      </a>
    </div>
  );
};

export default SocialBar; 