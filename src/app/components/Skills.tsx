'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  SiJavascript,
  SiNestjs,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiExpress,
  SiSequelize,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiVercel,
  SiSentry,
  SiSupabase,
  SiFirebase,
  SiRabbitmq,
  SiApollographql,
  SiNodedotjs,
  SiAmazons3,
  SiAmazonec2,
  SiRedis,
  SiElasticsearch,
  SiJest,
  SiWebpack,
  SiBabel,
} from 'react-icons/si';
import { FaCloud, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const skills = [
  {
    name: 'JavaScript',
    icon: <SiJavascript size={60} className="text-yellow-500" />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs size={60} className="text-green-500" />,
  },
  { name: 'NestJS', icon: <SiNestjs size={60} className="text-red-500" /> },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={60} className="text-blue-500" />,
  },
  { name: 'React', icon: <SiReact size={60} className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={60} className="text-black" /> },
  { name: 'MySQL', icon: <SiMysql size={60} className="text-blue-600" /> },
  { name: 'Express', icon: <SiExpress size={60} className="text-gray-500" /> },
  {
    name: 'Sequelize',
    icon: <SiSequelize size={60} className="text-blue-500" />,
  },
  { name: 'MongoDB', icon: <SiMongodb size={60} className="text-green-500" /> },
  {
    name: 'Postgres',
    icon: <SiPostgresql size={60} className="text-blue-500" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={60} className="text-teal-500" />,
  },
  {
    name: 'Microservice',
    icon: <FaCloud size={60} className="text-gray-500" />,
  },
  {
    name: 'RabbitMQ',
    icon: <SiRabbitmq size={60} className="text-orange-500" />,
  },
  {
    name: 'REST API',
    icon: <SiApollographql size={60} className="text-purple-500" />,
  },
  { name: 'Docker', icon: <SiDocker size={60} className="text-blue-500" /> },
  { name: 'AWS', icon: <FaCloud size={60} className="text-orange-500" /> },
  { name: 'Vercel', icon: <SiVercel size={60} className="text-black" /> },
  { name: 'Sentry', icon: <SiSentry size={60} className="text-purple-500" /> },
  {
    name: 'Supabase',
    icon: <SiSupabase size={60} className="text-green-500" />,
  },
  {
    name: 'Firebase',
    icon: <SiFirebase size={60} className="text-yellow-500" />,
  },
  {
    name: 'S3 Bucket',
    icon: <SiAmazons3 size={60} className="text-orange-500" />,
  },
  {
    name: 'AWS EC2',
    icon: <SiAmazonec2 size={60} className="text-orange-500" />,
  },
  { name: 'Redis', icon: <SiRedis size={60} className="text-red-500" /> },
  {
    name: 'Elasticsearch',
    icon: <SiElasticsearch size={60} className="text-yellow-500" />,
  },
  { name: 'Jest', icon: <SiJest size={60} className="text-pink-500" /> },
  { name: 'Webpack', icon: <SiWebpack size={60} className="text-blue-500" /> },
  { name: 'Babel', icon: <SiBabel size={60} className="text-yellow-500" /> },
];

const Skills = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Consider screens smaller than 1024px as mobile
      handleScroll(); // Check arrow visibility on resize
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Render a single skill item
  const renderSkillItem = (skill: typeof skills[0], index: number) => (
    <div
      key={index}
      className="relative group p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-110 animate-bubble flex-shrink-0 snap-center"
      style={{ width: '100px', height: '100px' }}
    >
      <div className="flex justify-center items-center h-full">
        {skill.icon}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-700 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
        {skill.name}
      </div>
    </div>
  );

  return (
    <div id="skills" className="bg-gray-900 py-10 lg:px-30 px-4 relative">
      <div className="container mx-auto">
        <div className="text-3xl text-white text-center mb-10">
          Skill Set Showcase
        </div>
        
        {/* Mobile view with horizontal scrolling */}
        <div className={`${isMobile ? 'block' : 'hidden'} relative`}>
          {showLeftArrow && (
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transform -translate-x-1/2 transition-all duration-300"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transform translate-x-1/2 transition-all duration-300"
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          )}
          
          {/* Scrollable container for mobile */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar py-6 px-8 snap-x snap-mandatory"
            onScroll={handleScroll}
          >
            {skills.map((skill, index) => (
              <div key={index} className="mx-4">
                {renderSkillItem(skill, index)}
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop view with grid layout */}
        <div className={`${isMobile ? 'hidden' : 'block'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
            {skills.map((skill, index) => renderSkillItem(skill, index))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-10px);
          }
          100% {
            transform: translatey(0px);
          }
        }
        .animate-bubble {
          animation: float 3s ease-in-out infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Skills;
