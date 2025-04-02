"use client";

import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 py-20 lg:px-30 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-blue-500">Featured</span> Projects
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project: Project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-500 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.company}</p>
                </div>
                <p className="text-gray-400 text-sm mt-2 md:mt-0">{project.period}</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 