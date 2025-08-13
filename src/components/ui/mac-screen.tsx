"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
];

const MacScreen = () => {
  return (
    <div className="max-w-4xl mx-auto my-0 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-neutral-800 to-neutral-900">
      {/* Mac window header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-700">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Skills content */}
      <div className="p-3 sm:p-4 md:p-6 overflow-y-auto max-h-[300px]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-300 mb-4 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-2 sm:p-3 bg-neutral-700/40 rounded-lg hover:bg-neutral-700/60 transition duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-1">
                {skill.icon}
              </div>
              <p className="text-white text-xs sm:text-sm font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacScreen;
