import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Trophy, FileText } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Key Achievements" 
          subtitle="Milestones and recognition"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Project Award */}
          <Card className="overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-full flex flex-col">
              <div className="bg-blue-600 dark:bg-blue-700 p-4">
                <Trophy size={32} className="text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Best Project Award
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Won the Best Project Award at a regional showcase organized by Microsoft and SAP for developing 'Motion Cue', a gesture-based control technology.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    Technical Innovation
                  </span>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Research Paper */}
          <Card className="overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-full flex flex-col">
              <div className="bg-teal-600 dark:bg-teal-700 p-4">
                <FileText size={32} className="text-white" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  Research Paper Presentation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Presented a research paper draft at a national conference, demonstrating innovative thinking and contributing to academic discussions.
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                    Academic Achievement
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;