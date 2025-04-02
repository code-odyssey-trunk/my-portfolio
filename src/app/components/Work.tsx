'use client';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { workExperience } from '@/data/experience';
import { skills } from '@/data/topskills';
import { WorkExperience } from '@/types/experience';
import { Skill } from '@/types/skills';

const Work = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null);
  const [relatedSkills, setRelatedSkills] = useState<Skill[]>([]);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Update related skills when selected experience changes
  const updateRelatedSkills = (experience: WorkExperience) => {
    // Find the index of the selected experience
    const experienceIndex = workExperience.findIndex(exp => exp.company === experience.company);
    
    // Filter skills that were used in this experience
    const matchedSkills = skills.filter((skill) => 
      skill.experiences?.includes(experienceIndex)
    );
    
    setRelatedSkills(matchedSkills);
  };

  const handleExperienceClick = (experience: WorkExperience) => {
    setSelectedExperience(experience);
    updateRelatedSkills(experience);

    // Scroll to skills section on mobile
    if (window.innerWidth < 1024) { // lg breakpoint is 1024px
      skillsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="work" className="bg-gray-800 py-20 px-4 lg:px-30">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-bold text-white mb-12 text-center">My Professional Journey</h2> */}
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="text-2xl text-white mb-6 font-semibold border-l-4 border-blue-500 pl-3">Work Experience</div>
            
            <div className="space-y-4">
              {workExperience.map((experience: WorkExperience, index: number) => (
                <div
                  key={index}
                  className={`flex p-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-700 ${
                    selectedExperience?.company === experience.company ? 'bg-gray-700 border-l-4 border-blue-500' : 'border-l-4 border-transparent'
                  }`}
                  onClick={() => handleExperienceClick(experience)}
                >
                  <div className="bg-gray-900 p-3 rounded-lg flex items-center justify-center">
                    <Image
                      className="rounded-lg object-contain h-12 w-12 grayscale-80"
                      src={experience.logo}
                      width={50}
                      height={50}
                      alt={`${experience.company} logo`}
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-medium text-lg">
                      {experience.profession} at <span className="font-bold text-blue-400">{experience.company}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{experience.date}</div>
                    <div className="text-gray-300 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.place}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0" ref={skillsSectionRef}>
            <div className="text-2xl text-white mb-6 font-semibold border-l-4 border-blue-500 pl-3">
              {(selectedExperience && relatedSkills.length > 0) ? `Top Skills at ${selectedExperience.company}` : 'Top Skills'}
            </div>
            
            {(selectedExperience && relatedSkills.length > 0) ? (
              <div className="mb-8 bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl text-white mb-2">About my role at {selectedExperience.company}</h3>
                <p className="text-gray-300">
                  {selectedExperience.description || "I applied my skills in various projects and contributed to the company's success."}
                </p>
              </div>
            ) : (
              <div className="mb-8 bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-300">Over 11 years refining my skills through hands on experience in a variety of projects.
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(relatedSkills.length > 0 ? relatedSkills : skills.filter(skill => skill.type === 'top')).map(
                (skill: Skill, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-700 rounded-lg p-4 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-gray-800 p-2 rounded-lg mr-3">
                        <Image
                          className="object-contain h-8 w-8"
                          src={skill.image}
                          alt={skill.altText}
                          height={30}
                          width={30}
                          loading="lazy"
                        />
                      </div>
                      <div className="text-white font-bold">{skill.name}</div>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1500 ease-out"
                        style={{ width: animationStarted ? skill.percentage : '0%' }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-gray-400">{skill.percentage}</div>
                  </div>
                )
              )}
            </div>
            
            {relatedSkills.length > 0 && (
              <div className="mt-6 text-center">
                <button 
                  onClick={() => {
                    setSelectedExperience(null)
                    setRelatedSkills([])
                  } }
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Show all top skills
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
