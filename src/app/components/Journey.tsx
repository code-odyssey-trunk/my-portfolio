"use client";

import { journey } from '@/data/journey';
import { JourneyItem } from '@/types/journey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { motion as m } from 'framer-motion';

const Journey: React.FC = () => {
  return (
    <div id="journey" className="bg-gray-900 py-20 lg:px-30 px-4">
      <div className="container mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          <span className="text-blue-500">More Than Just Code:</span>
          <br className="md:hidden" /> My Journey in Tech
        </m.div>
        <div className="relative">
          <div className="border-l-2 border-blue-500/30 absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          {journey.map((item: JourneyItem, index) => (
            <m.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className={`mb-12 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-col md:flex-row`}
            >
              <div className="order-1 w-full md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-10 h-10 rounded-full mx-auto md:mx-0 transition-transform hover:scale-110 duration-300">
                <h1 className="mx-auto font-bold text-lg text-white">
                  {index + 1}
                </h1>
              </div>
              <m.div
                whileHover={{ scale: 1.02 }}
                className="order-1 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl w-full md:w-5/12 px-8 py-6 text-center mt-4 md:mt-0 mx-6 border border-gray-700/50 transition-colors hover:border-blue-500/50"
              >
                <h3 className="mb-4 font-bold text-blue-500 text-2xl">
                  {item.title}
                </h3>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-blue-500 text-4xl mx-auto transition-transform hover:scale-110 duration-300"
                />
                <p className="text-base leading-relaxed tracking-wide text-gray-300 text-opacity-100 mt-4">
                  {item.description}
                </p>
              </m.div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
