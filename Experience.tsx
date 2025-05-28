import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 sm:left-16 h-full w-px bg-blue-600 dark:bg-blue-400 group-first:mt-6 group-first:rounded-t-md group-last:rounded-b-md"></div>
            
            {/* Timeline circle */}
            <div className="absolute top-6 left-0 sm:left-16 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 flex items-center justify-center">
              <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            
            {/* Date tag */}
            <time className="absolute top-6 left-0 sm:left-14 transform sm:-translate-x-full flex items-center justify-end w-full sm:w-auto pr-4 sm:pr-8 text-sm font-semibold text-blue-600 dark:text-blue-400">
              June 2024 - Aug 2024
            </time>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Frontend Developer Intern
                </h3>
                <p className="text-md text-blue-600 dark:text-blue-400 mb-4">
                  Mangoesorange Services
                </p>
                <ul className="list-disc list-outside ml-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Contributed to the development of a Procurement Management System using technologies such as HTML, CSS, JS, REACT.
                  </li>
                  <li>
                    Designed the system's user interface in Figma and deployed the application on Vercel for testing and production environments.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to smooth integration and functionality of the system.
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;