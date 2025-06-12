import React, { useState } from 'react';
import { ExternalLink, Github, X, BarChart, ShoppingCart, Truck } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  icon: React.ReactNode;
  features: string[];
  challenges: string[];
  outcomes: string[];
  githubLink?: string; // ✅ Added GitHub link support
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'ApnaMandi',
      description: 'A digital marketplace that empowers farmers to sell their crops directly to buyers.',
      fullDescription: 'ApnaMandi is a comprehensive digital marketplace solution built with Flutter and Firebase...',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Firebase Auth'],
      icon: <ShoppingCart className="text-green-500" size={32} />,
      features: [
        'Real-time crop listing and inventory management',
        'Direct farmer-to-buyer communication',
        'Secure payment gateway integration',
        'Price transparency and market analytics',
        'Multi-language support for accessibility',
        'GPS-based location services for delivery'
      ],
      challenges: [
        'Designing user-friendly interface for farmers',
        'Implementing real-time sync',
        'Ensuring secure transactions'
      ],
      outcomes: [
        'Improved farmer income',
        'Enhanced market transparency',
        'Streamlined supply chain'
      ],
      githubLink: 'https://github.com/Vaibhav7409/apna-mandi' // ✅ Added GitHub link
    },
    {
      id: 2,
      title: 'Sales Performance & Call Analysis Dashboard',
      description: 'Dashboard to evaluate sales reps\' performance and track key metrics.',
      fullDescription: 'A comprehensive BI dashboard built using Tableau and Excel...',
      technologies: ['Tableau', 'Excel', 'SQL', 'Data Modeling', 'Advanced Analytics'],
      icon: <BarChart className="text-blue-500" size={32} />,
      features: [
        'Interactive sales performance dashboards',
        'Call analytics',
        'KPI monitoring',
        'Team comparisons',
        'Automated reports',
        'Mobile design'
      ],
      challenges: [
        'Integrating multiple data formats',
        'Visualizing complex datasets',
        'Ensuring accuracy'
      ],
      outcomes: [
        'Increased productivity',
        'Better conversions',
        'Enhanced decision-making'
      ]
    },
    {
      id: 3,
      title: 'Profitability Analysis Dashboard',
      description: 'Interactive dashboard to analyze unprofitable business segments.',
      fullDescription: 'A tool to identify underperforming segments with predictive analytics...',
      technologies: ['Tableau', 'Excel', 'Advanced Analytics', 'Financial Modeling', 'Data Visualization'],
      icon: <BarChart className="text-purple-500" size={32} />,
      features: [
        'Segment-wise analysis',
        'Cost center optimization',
        'Predictive modeling',
        'Drill-down insights',
        'Variance analysis',
        'Executive reports'
      ],
      challenges: [
        'Complex financial modeling',
        'Executive-ready visuals',
        'Forecasting algorithms'
      ],
      outcomes: [
        'Identified $2M in cost savings',
        'Improved margins by 15%',
        'Better strategic decisions'
      ]
    },
    {
      id: 4,
      title: 'MoveItNow – Movers & Packers Platform',
      description: 'Web application to connect clients with reliable moving services.',
      fullDescription: 'MoveItNow is a platform that connects customers with verified movers...',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'SQLite', 'Bootstrap'],
      icon: <Truck className="text-orange-500" size={32} />,
      features: [
        'Provider verification & rating',
        'Real-time quote comparison',
        'GPS tracking',
        'Secure payments',
        'Reviews & feedback',
        'Scheduling & notifications'
      ],
      challenges: [
        'Scalable backend design',
        'Secure authentication',
        'Responsive UI'
      ],
      outcomes: [
        '500+ customers served',
        '60% booking time reduction',
        '95% satisfaction rating'
      ],
      githubLink: 'https://github.com/Vaibhav7409/MoveitNow---Online-movers-and-Packers' // ✅ Added GitHub link
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured <span className="text-primary-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-dark-card rounded-xl p-8 border dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button className="text-primary-blue font-semibold hover:underline transition-all duration-200">
                    View Details →
                  </button>
                  <div className="flex space-x-3">
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-blue hover:text-white transition-all duration-300">
                      <ExternalLink size={16} />
                    </button>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-blue hover:text-white transition-all duration-300"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal code remains unchanged */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-dark-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-dark-card border-b dark:border-dark-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                  {selectedProject.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-primary-blue mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Challenges & Solutions</h4>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Outcomes & Impact</h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
