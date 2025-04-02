import { journey } from '@/data/journey';
import { JourneyItem } from '@/types/journey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Journey = () => {
  return (
    <div id="journey" className="bg-gray-900 py-10 lg:px-30 px-4">
      <div className="container mx-auto">
        <div className="text-3xl text-white text-center mb-10">
          More Than Just Code: My Journey in Tech
        </div>
        <div className="relative">
          <div className="border-l-2 border-gray-700 absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          {journey.map((item: JourneyItem, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:flex-row`}
            >
              <div className="order-1 w-full md:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-700 shadow-xl w-8 h-8 rounded-full mx-auto md:mx-0">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </div>
              <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 text-center mt-4 md:mt-0 mx-6">
                <h3 className="mb-3 font-bold text-white text-xl">
                  {item.title}
                </h3>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-white text-4xl mx-auto"
                />
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
