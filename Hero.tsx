import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-56 w-60 h-60 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in">
            <span className="text-blue-600 dark:text-blue-400">Aman</span> Kumar
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fade-in animation-delay-300">
            Fullstack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 animate-fade-in animation-delay-600">
            Passionate about creating beautiful, user-friendly interfaces and exploring new technologies.
          </p>
          
          <div className="flex space-x-4 mb-12 animate-fade-in animation-delay-900">
            <a href="https://github.com/Believer022" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" icon={<Github size={18} />}>
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/amankumar1234/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" icon={<Linkedin size={18} />}>
                LinkedIn
              </Button>
            </a>
            <a href="mailto:kashyapaman55733@gmail.com">
              <Button variant="primary" icon={<Mail size={18} />}>
                Contact Me
              </Button>
            </a>
          </div>
          
          <div className="animate-bounce mt-8">
            <button 
              onClick={scrollToAbout}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;