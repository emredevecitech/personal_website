import React from 'react';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-80"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM22.24 0l2.83 2.83-1.41 1.41L20.83 1.41V0h1.41zM40 17.17l-2.83 2.83-1.41-1.41 2.83-2.83H40v1.41zM20.83 40l-2.83-2.83 1.41-1.41 2.83 2.83V40h-1.41zM17.17 0l2.83 2.83-1.41 1.41L15.76 1.41V0h1.41zM0 17.17l2.83-2.83 1.41 1.41L1.41 18.59H0v-1.41zM0 0h1.41l2.83 2.83-1.41 1.41L0 1.41V0zm40 40h-1.41l-2.83-2.83 1.41-1.41L40 38.59V40zm0-22.83l-2.83 2.83-1.41-1.41L38.59 15.76H40v1.41zM40 0v1.41l-2.83 2.83-1.41-1.41L38.59 0H40zM20.83 22.24l-1.41 1.41-2.83-2.83 1.41-1.41 2.83 2.83zm-9.9 9.9l-2.83 2.83-1.41-1.41 2.83-2.83 1.41 1.41zm9.9 0l-1.41-1.41 2.83-2.83 1.41 1.41-2.83 2.83zm-9.9-9.9l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zM0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM22.24 0l2.83 2.83-1.41 1.41L20.83 1.41V0h1.41zM40 17.17l-2.83 2.83-1.41-1.41 2.83-2.83H40v1.41zM20.83 40l-2.83-2.83 1.41-1.41 2.83 2.83V40h-1.41zM17.17 0l2.83 2.83-1.41 1.41L15.76 1.41V0h1.41zM0 17.17l2.83-2.83 1.41 1.41L1.41 18.59H0v-1.41zM0 0h1.41l2.83 2.83-1.41 1.41L0 1.41V0zm40 40h-1.41l-2.83-2.83 1.41-1.41L40 38.59V40zm0-22.83l-2.83 2.83-1.41-1.41L38.59 15.76H40v1.41zM40 0v1.41l-2.83 2.83-1.41-1.41L38.59 0H40zM20.83 22.24l-1.41 1.41-2.83-2.83 1.41-1.41 2.83 2.83zm-9.9 9.9l-2.83 2.83-1.41-1.41 2.83-2.83 1.41 1.41zm9.9 0l-1.41-1.41 2.83-2.83 1.41 1.41-2.83 2.83zm-9.9-9.9l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.2
      }}></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          {resumeData.name}
        </h1>
        
        <div className="h-1 w-20 mx-auto bg-blue-600 my-6 rounded-full"></div>
        
        <div className="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-6">
            Data Scientist & Fintech Specialist
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transforming complex data into actionable financial intelligence through advanced analytics,
            machine learning, and strategic insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-transparent hover:bg-gray-800 text-blue-400 font-medium rounded-md border border-blue-400 hover:border-blue-500 transition duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;