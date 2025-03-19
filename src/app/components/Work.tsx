'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { workExperience } from '@/data/experience';
import { skills } from '@/data/topskills';
import { WorkExperience } from '@/types/experience';
import { Skill } from '@/types/skills';

const Work = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="work" className="bg-gray-800 py-20 px-4 lg:px-30">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-20">
          <div className="text-2xl text-white mb-6">Working Experience</div>
          {workExperience.map((experience: WorkExperience, index: number) => (
            <div
              key={index}
              className="flex mt-4 border-b border-gray-700 py-4"
            >
              <Image
                className="rounded-lg object-contain max-h-12 p-3 bg-gray-900"
                src={experience.logo}
                width={50}
                height={50}
                alt="work_logo_1"
                loading="lazy"
              />
              <div className="ml-3">
                <div className="text-white">
                  {experience.profession} at <b>{experience.company}</b>
                </div>
                <div className="text-gray-400 text-sm">{experience.date}</div>
                <div className="text-gray-300 text-sm">{experience.place}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="text-2xl text-white mb-6">Top Skills</div>
          <div className="mt-4">
            {skills.map(
              (skill: Skill, index: number) =>
                skill.type === 'top' && (
                  <div
                    key={index}
                    className="flex items-center rounded-md border-2 relative border-gray-700 overflow-hidden my-2 px-3 h-[40px] z-0"
                  >
                    <div
                      className="absolute inset-0 bg-violet-700 animate-progress-bar"
                      style={
                        {
                          width: animationStarted ? skill.percentage : '0',
                          animation: animationStarted
                            ? `progressAnimation 1.5s ease-out forwards`
                            : 'none',
                          '--final-width': animationStarted
                            ? skill.percentage
                            : '0',
                        } as React.CSSProperties
                      }
                    ></div>
                    <Image
                      className="mr-3 object-contain h-[30px] w-[30px] rounded-lg z-10"
                      src={skill.image}
                      alt={skill.altText}
                      height={30}
                      width={30}
                      loading="lazy"
                    />
                    <div className="text-white font-bold z-10">
                      {skill.name}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
