"use client";

import React from 'react';
import { Briefcase, Rocket, Settings } from 'lucide-react';

// You can install lucide-react by running: npm install lucide-react

// Main App Component - Renders the AboutMe section with a background
const About = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center font-sans p-4 bg-cover bg-center"
      style={{ backgroundImage: 'url(http://googleusercontent.com/file_content/1)' }}
    >
      <div className="relative inset-0 bg-black/50"></div>
      <div className="relative z-10 w-full">
        <AboutMe />
      </div>
    </div>
  );
};

// Reusable AboutMe Component, updated to the new design
const AboutMe = () => {
  return (
    <div className="max-w-6xl w-full mx-auto bg-black/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg border border-gray-700/50">
      
      {/* Simplified Header */}
      <header className="p-5 flex items-center justify-between">
        {/* The empty div helps in spacing the settings icon to the far right */}
        <div></div> 
        <button className="text-white/80 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="p-8 md:p-12 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content Section */}
          <div className="text-white order-2 lg:order-1">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="text-green-400" size={20} />
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">ABOUT ME</h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              hey <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Passionate FullStack Web Developer from Bangalore, pushing the boundaries of web technology to create immersive digital experiences.
            </p>

            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="text-green-400" size={20} />
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400">MY MISSION</h3>
            </div>
            <p className="text-lg text-gray-300 mb-8 bg-black/30 p-4 rounded-md italic">
              Bridging the Gap Between Design and Development. Where creativity meets functionality, and innovation drives progress.
            </p>

            <p className="text-green-400 font-medium">
              Keep moving settle. 🚀
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img
              src="http://googleusercontent.com/file_content/0"
              alt="A photo of Suhaib"
              className="w-full max-w-sm h-auto rounded-lg shadow-xl"
              onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src='https://placehold.co/400x500/1a2233/ffffff?text=Suhaib';
              }}
            />
          </div>
        </div>
      </main>
      
      {/* Add this style for the wave animation */}
      <style>{`
        @keyframes wave-animation {
            0% { transform: rotate( 0.0deg) }
           10% { transform: rotate(14.0deg) }
           20% { transform: rotate(-8.0deg) }
           30% { transform: rotate(14.0deg) }
           40% { transform: rotate(-4.0deg) }
           50% { transform: rotate(10.0deg) }
           60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
        .animate-wave {
          animation-name: wave-animation;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default About;
