import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    link: 'https://example.com/project-one',
    image: '/path/to/image1.jpg', // Replace with your image path
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    link: 'https://example.com/project-two',
    image: '/path/to/image2.jpg', // Replace with your image path
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    link: 'https://example.com/project-three',
    image: '/path/to/image3.jpg', // Replace with your image path
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 py-10 lg:px-30 px-4">
      <div className="container mx-auto">
        <div className="text-3xl text-white text-center mb-10">My Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-violet-600 transition-colors">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects