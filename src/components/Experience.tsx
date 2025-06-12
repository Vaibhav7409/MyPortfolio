import React from 'react';
import { Award, Users, Calendar, Trophy } from 'lucide-react';

const Experience: React.FC = () => {
  const positions = [
    {
      title: 'Co-founder & Event Head',
      organization: 'Vytoflow Community',
      description: 'Led community initiatives and organized tech events to foster learning and collaboration among students and professionals.',
      icon: <Users className="text-purple-500" size={24} />,
      achievements: ['Built community of 500+ members', 'Organized 10+ successful events', 'Mentored 50+ students']
    },
    {
      title: 'Event Head',
      organization: 'Vytoblitz 1.0',
      description: 'Managed end-to-end event planning and execution for a major tech conference, coordinating with multiple stakeholders.',
      icon: <Trophy className="text-blue-500" size={24} />,
      achievements: ['300+ attendees participation', 'Coordinated with 20+ speakers', 'Managed ₹1L budget']
    },
    {
      title: 'Coordinator',
      organization: 'Innocodeathon 2024',
      description: 'Coordinated hackathon activities, managed participant registrations, and facilitated smooth competition flow.',
      icon: <Award className="text-green-500" size={24} />,
      achievements: ['150+ participants registered', 'Organized 48-hour hackathon', '15+ project submissions']
    }
  ];

  const certifications = [
    {
      title: 'Business Analyst Course',
      issuer: 'Analyst Club',
      date: 'Mar 2025',
      description: 'Comprehensive course covering business analysis methodologies, requirements gathering, and stakeholder management.'
    },
    {
      title: 'SQL Basics',
      issuer: 'HackerRank',
      date: 'Feb 2025',
      description: 'Fundamental SQL concepts including queries, joins, aggregations, and database design principles.'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte Australia, Forage',
      date: 'Apr 2025',
      description: 'Hands-on simulation of real-world data analytics projects in a consulting environment.'
    },
    {
      title: 'Business Analysis & Process Management',
      issuer: 'Coursera',
      date: 'Jan 2025',
      description: 'Advanced concepts in business process analysis, optimization, and management strategies.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Experience & <span className="text-primary-blue">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Positions of Responsibility */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Positions of Responsibility
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-xl p-6 border dark:border-dark-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                      {position.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {position.title}
                      </h4>
                      <p className="text-primary-blue font-semibold">
                        {position.organization}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white text-sm">Key Achievements:</h5>
                    {position.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card rounded-xl p-6 border dark:border-dark-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-primary-blue font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
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