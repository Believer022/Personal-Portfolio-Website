import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { Github, ExternalLink, X, Play, Code, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const projectsData = [
    {
      id: 1,
      title: "Motion Cue",
      description: "Gesture-Driven Presentation Web App",
      image: "https://images.pexels.com/photos/7014926/pexels-photo-7014926.jpeg",
      demoVideo: "https://www.youtube.com/embed/your-video-id",
      technologies: ["Python", "NumPy", "cv2", "STREAMLIT", "HTML", "CSS", "JavaScript"],
      detailedDescription: "Motion Cue is a gesture-based presentation system using Python 3, allowing users to control presentations through hand gestures. I implemented hand tracking and analysis algorithms using NumPy and cv2 to ensure smooth and accurate navigation. The user interface was designed with STREAMLIT, HTML, CSS, and JavaScript, providing intuitive interaction and seamless integration.",
      features: [
        "Real-time hand gesture recognition",
        "Smooth presentation navigation",
        "Intuitive user interface",
        "Multiple gesture support",
        "Cross-platform compatibility"
      ],
      github: "https://github.com/Believer022/motion-cue",
      liveDemo: "https://your-demo-url.com"
    }
  ];
  
  const openProjectDetails = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectDetails = () => {
    setSelectedProject(null);
    setIsVideoPlaying(false);
    document.body.style.overflow = 'auto';
  };
  
  const selectedProjectData = selectedProject !== null 
    ? projectsData.find(project => project.id === selectedProject) 
    : null;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Projects" 
          subtitle="Showcasing my technical capabilities"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden group h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openProjectDetails(project.id)}
                    className="transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 p-3 rounded-full hover:scale-110"
                  >
                    <Eye size={24} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="mt-auto flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => openProjectDetails(project.id)}
                    className="flex-1"
                    icon={<Code size={16} />}
                  >
                    View Details
                  </Button>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-3 py-1.5 text-sm font-medium"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Project details modal */}
        {selectedProject !== null && selectedProjectData && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProjectData.title}
                  </h3>
                  <button 
                    onClick={closeProjectDetails} 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="relative aspect-video overflow-hidden rounded-lg mb-6 bg-gray-100 dark:bg-gray-700">
                  {isVideoPlaying ? (
                    <iframe
                      src={selectedProjectData.demoVideo}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative">
                      <img 
                        src={selectedProjectData.image} 
                        alt={selectedProjectData.title} 
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      >
                        <Play size={48} className="text-white transform group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProjectData.detailedDescription}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {selectedProjectData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={selectedProjectData.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Github size={20} className="mr-2" />
                    View on GitHub
                  </a>
                  {selectedProjectData.liveDemo && (
                    <a 
                      href={selectedProjectData.liveDemo}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;