import React from 'react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience & Education</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Work Experience</h3>
            
            <div className="space-y-12">
              {resumeData.workExperience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-blue-600"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-3">
                      <span className="text-blue-400 font-medium">{job.company}</span>
                      <span className="text-gray-400 text-sm mt-1 sm:mt-0">{job.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{job.location}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Education</h3>
            
            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-700">
                  <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-blue-600"></div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-3">
                      <span className="text-blue-400 font-medium">{edu.institution}</span>
                      <span className="text-gray-400 text-sm mt-1 sm:mt-0">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.location}</p>
                    <p className="text-gray-300 mb-2">
                      <span className="font-medium">Concentrations:</span> {edu.concentrations}
                    </p>
                    <p className="text-gray-300 mb-2">
                      <span className="font-medium">GPA:</span> {edu.gpa}
                    </p>
                    <p className="text-gray-300">
                      <span className="font-medium">Related Coursework:</span> {edu.coursework}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;