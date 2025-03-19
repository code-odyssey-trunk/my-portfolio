"use client";
import React from 'react';
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
    SiBabel
} from 'react-icons/si';
import { FaCloud } from 'react-icons/fa'; // Importing a generic cloud icon

const skills = [
    { name: "JavaScript", icon: <SiJavascript size={60} className="text-yellow-500" /> },
    { name: "Node.js", icon: <SiNodedotjs size={60} className="text-green-500" /> }, // Using Node.js icon
    { name: "NestJS", icon: <SiNestjs size={60} className="text-red-500" /> },
    { name: "TypeScript", icon: <SiTypescript size={60} className="text-blue-500" /> },
    { name: "React", icon: <SiReact size={60} className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={60} className="text-black" /> },
    { name: "MySQL", icon: <SiMysql size={60} className="text-blue-600" /> },
    { name: "Express", icon: <SiExpress size={60} className="text-gray-500" /> },
    { name: "Sequelize", icon: <SiSequelize size={60} className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={60} className="text-green-500" /> },
    { name: "Postgres", icon: <SiPostgresql size={60} className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} className="text-teal-500" /> },
    { name: "Microservice", icon: <FaCloud size={60} className="text-gray-500" /> }, // Using a generic cloud icon
    { name: "RabbitMQ", icon: <SiRabbitmq size={60} className="text-orange-500" /> },
    { name: "REST API", icon: <SiApollographql size={60} className="text-purple-500" /> }, // Using Apollo GraphQL icon as a placeholder
    { name: "Docker", icon: <SiDocker size={60} className="text-blue-500" /> },
    { name: "AWS", icon: <FaCloud size={60} className="text-orange-500" /> }, // Using a generic cloud icon
    { name: "Vercel", icon: <SiVercel size={60} className="text-black" /> },
    { name: "Sentry", icon: <SiSentry size={60} className="text-purple-500" /> },
    { name: "Supabase", icon: <SiSupabase size={60} className="text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase size={60} className="text-yellow-500" /> },
    { name: "S3 Bucket", icon: <SiAmazons3 size={60} className="text-orange-500" /> }, // Using S3 icon
    { name: "AWS EC2", icon: <SiAmazonec2 size={60} className="text-orange-500" /> }, // Using EC2 icon
    { name: "Redis", icon: <SiRedis size={60} className="text-red-500" /> },
    { name: "Elasticsearch", icon: <SiElasticsearch size={60} className="text-yellow-500" /> },
    { name: "Jest", icon: <SiJest size={60} className="text-pink-500" /> },
    { name: "Webpack", icon: <SiWebpack size={60} className="text-blue-500" /> },
    { name: "Babel", icon: <SiBabel size={60} className="text-yellow-500" /> },
];

const Skills = () => {
    return (
        <div id="skills" className="bg-gray-900 py-10 lg:px-30 px-4">
            <div className="container mx-auto">
                <div className="text-3xl text-white text-center mb-10">Skill Set Showcase</div>
                <div className="flex flex-wrap justify-center items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative group m-4 p-4 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-110 animate-bubble"
                            style={{ width: '100px', height: '100px' }}
                        >
                            <div className="flex justify-center items-center h-full">
                                {skill.icon}
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-700 text-white text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translatey(0px); }
                    50% { transform: translatey(-10px); }
                    100% { transform: translatey(0px); }
                }
                .animate-bubble {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default Skills; 