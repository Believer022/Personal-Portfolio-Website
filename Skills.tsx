import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Code, Database, PaintBucket, Terminal, GitBranch, Cloud } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <Code size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"]
    },
    {
      title: "Backend & Databases",
      icon: <Database size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Programming Languages",
      icon: <Terminal size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "UI/UX Design",
      icon: <PaintBucket size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: ["Figma", "UI Design", "Responsive Layouts"]
    },
    {
      title: "Version Control & Tools",
      icon: <GitBranch size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: ["Git", "GitHub", "Docker"]
    },
    {
      title: "Deployment & Cloud",
      icon: <Cloud size={20} className="text-blue-600 dark:text-blue-400" />,
      skills: ["Netlify", "Vercel", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Skills" 
          subtitle="Technologies I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;