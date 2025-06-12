import React from 'react';
import { Code, Database, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-primary-blue" size={32} />,
      skills: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frameworks & Tools',
      icon: <Database className="text-green-500" size={32} />,
      skills: [
        { name: 'Tableau', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png' },
        { name: 'Power BI', logo: '📈' },
        { name: 'Excel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Matplotlib', logo: '📊' },
        { name: 'Statistics', logo: '📉' }
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Soft Skills',
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      skills: [
        { name: 'Analytical Thinking', logo: '🧠' },
        { name: 'Problem-Solving', logo: '🛠️' },
        { name: 'Communication', logo: '💬' },
        { name: 'Team Collaboration', logo: '🤝' },
        { name: 'Attention to Detail', logo: '🔍' },
        { name: 'Adaptability', logo: '🔄' },
        { name: 'Time Management', logo: '⏰' }
      ],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-primary-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, business intelligence, and problem-solving
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border dark:border-dark-border bg-white dark:bg-dark-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="inline-flex p-4 rounded-full bg-gray-100 dark:bg-gray-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className={`mt-2 w-24 h-1 rounded-full bg-gradient-to-r ${category.color}`}></div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="flex items-center space-x-2 px-4 py-1 text-sm rounded-full bg-primary-blue text-white dark:bg-primary-blue-dark font-medium shadow-sm"
                  >
                    {skill.logo.startsWith('http') ? (
                      <img src={skill.logo} alt={skill.name} className="w-4 h-4" />
                    ) : (
                      <span>{skill.logo}</span>
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
