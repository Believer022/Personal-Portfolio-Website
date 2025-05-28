import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square w-64 h-64 overflow-hidden rounded-lg">
                <img 
                  src="/Aman (1) (2).jpg" 
                  alt="Aman Kumar" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Full Stack Developer 
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full-Stack Developer with a strong foundation in modern web technologies and a sharp eye for design. I love creating intuitive, responsive, and visually captivating web applications that deliver a smooth and engaging user experience. With a blend of creativity and technical skill, I bring ideas to life through clean code and thoughtful design.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My recent experience as a Frontend Developer Intern at Mangoesorange Services has strengthened my practical skills in building responsive and interactive web applications using modern technologies. One of the highlights of my journey was contributing to Motion Cue, a gesture-driven presentation web app that earned the Best Project Award at a regional showcase. This project reflects my passion for innovation and my ability to turn creative ideas into functional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                <span>Greater Noida, India</span>
              </div>
              
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                <a href="mailto:kashyapaman55733@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  kashyapaman55733@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                <a href="tel:+916203604696" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 6203604696
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;