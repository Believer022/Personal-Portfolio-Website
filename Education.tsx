import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background"
        />
        
        <div className="max-w-3xl mx-auto">
          {/* B.TECH */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute top-0 left-0 sm:left-16 h-full w-px bg-blue-600 dark:bg-blue-400 group-first:mt-6 group-first:rounded-t-md"></div>
            <div className="absolute top-6 left-0 sm:left-16 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 flex items-center justify-center">
              <GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <time className="absolute top-6 left-0 sm:left-14 transform sm:-translate-x-full flex items-center justify-end w-full sm:w-auto pr-4 sm:pr-8 text-sm font-semibold text-blue-600 dark:text-blue-400">
              2021 - 2025
            </time>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  B.TECH in Computer Science
                </h3>
                <p className="text-md text-blue-600 dark:text-blue-400 mb-2">
                  Dr. APJ Abdul Kalam Technical University
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Currently pursuing a Bachelor's degree in Computer Science, focusing on software development, algorithms, and web technologies.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Class XII */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute top-0 left-0 sm:left-16 h-full w-px bg-blue-600 dark:bg-blue-400"></div>
            <div className="absolute top-6 left-0 sm:left-16 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 flex items-center justify-center">
              <School size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <time className="absolute top-6 left-0 sm:left-14 transform sm:-translate-x-full flex items-center justify-end w-full sm:w-auto pr-4 sm:pr-8 text-sm font-semibold text-blue-600 dark:text-blue-400">
              2018 - 2020
            </time>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Class XII
                </h3>
                <p className="text-md text-blue-600 dark:text-blue-400 mb-2">
                  Premier Academy, Muzaffarpur
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed senior secondary education with a focus on science and mathematics.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Class X */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute top-0 left-0 sm:left-16 h-full w-px bg-blue-600 dark:bg-blue-400 group-last:h-6 group-last:rounded-b-md"></div>
            <div className="absolute top-6 left-0 sm:left-16 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 flex items-center justify-center">
              <School size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <time className="absolute top-6 left-0 sm:left-14 transform sm:-translate-x-full flex items-center justify-end w-full sm:w-auto pr-4 sm:pr-8 text-sm font-semibold text-blue-600 dark:text-blue-400">
              2017 - 2018
            </time>
            
            <Card className="transform transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Class X
                </h3>
                <p className="text-md text-blue-600 dark:text-blue-400 mb-2">
                  Premier Academy, Muzaffarpur
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Completed secondary education with a strong foundation in core subjects.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;