import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Award } from 'lucide-react';

interface CertificationProps {
  title: string;
  issuer: string;
  description: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, description }) => {
  return (
    <Card className="h-full transform transition-all duration-300 hover:-translate-y-1">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className="mr-4 mt-1">
            <Award size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm">{issuer}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-auto">{description}</p>
      </div>
    </Card>
  );
};

const Certifications = () => {
  const certificationsData = [
    {
      title: "IR4.0 Foundation Certification",
      issuer: "TechSaksham (Microsoft & SAP)",
      description: "Completed certification under TechSaksham, a joint CSR initiative between Microsoft and SAP, implemented by Edunet Foundation."
    },
    {
      title: "Front-end Web Development",
      issuer: "IBM SkillsBuild and CSRBOX",
      description: "Completed internship training on Front-end Web Development focusing on modern web technologies and best practices."
    },
    {
      title: "AWS Cloud Virtual Internship",
      issuer: "Amazon Web Services",
      description: "Completed a comprehensive 10-week virtual internship focusing on AWS cloud technologies and solutions."
    },
    {
      title: "Network Security Associate",
      issuer: "Fortinet",
      description: "Completed a 10-week internship certification focusing on network security fundamentals and best practices."
    },
    {
      title: "Data Analytic Process Automation",
      issuer: "Alteryx",
      description: "Completed a 10-week internship certification on data analytics and process automation techniques."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional credentials and training"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              description={cert.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;