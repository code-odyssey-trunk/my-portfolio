import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Journey = () => {

    const journey = [
        {
            title: "The Path to Development",
            description: "From my first website to a developer in Germany, my journey blends curiosity, problem-solving, and learning. With over a decade of experience, I've worked on everything from frontend apps to scalable systems.",
            icon: faCode
        },
        {
            title: "My Work Philosophy & Values",
            description: "I write code that's functional, maintainable, and scalable. Rooted in simplicity and efficiency, I focus on lasting, user-centric solutions, whether for a startup MVP or a large-scale system.",
            icon: faLightbulb
        },
        {
            title: "What Shapes My Approach",
            description: (
                <span>
                    My approach is shaped by diverse experiences. I explore tech&apos;s potential to solve real-world problems through efficient apps and intuitive UI. I share insights on  
                    <a href="https://www.instagram.com/code_odyssey" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300"> Instagram</a> and  
                    <a href="https://www.youtube.com/@codeodyssey" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300"> YouTube</a>.
                </span>
            ),
            icon: faFaceSmile
        },
    ]

    return (
        <div id="journey" className="bg-gray-900 py-10 lg:px-30 px-4">
            <div className="container mx-auto">
                <div className="text-3xl text-white text-center mb-10">More Than Just Code: My Journey in Tech</div>
                <div className="relative">
                    <div className="border-l-2 border-gray-700 absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
                    {journey.map((item, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:flex-row`}>
                            <div className="order-1 w-full md:w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-violet-700 shadow-xl w-8 h-8 rounded-full mx-auto md:mx-0">
                                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                            </div>
                            <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 text-center mt-4 md:mt-0 mx-6">
                                <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                                    <FontAwesomeIcon icon={item.icon} className="text-white text-4xl mx-auto" />
                                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mt-4">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Journey;