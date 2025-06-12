import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ChevronDown, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Aspiring Business Analyst', 'Tech Enthusiast', 'Creative Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Optional Background Dots — Remove if not needed */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-10"></div> */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 animate-fade-in">

          {/* Left Content */}
          <div className="text-center md:text-left flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary-blue to-gray-900 dark:from-white dark:via-primary-blue dark:to-white bg-clip-text text-transparent">
              Vaibhav Kumar Singh
            </h1>

            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 h-8">
              <span className="inline-block min-w-0">
                {roles[currentRole]}
                <span className="animate-typewriter">|</span>
              </span>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              Recent B.Tech (CSE) graduate passionate about turning data into insights.
              Ready to thrive as a Business Analyst with strong analytical and problem-solving skills.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="mailto:vaibhavv.kr.singh@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={18} />
                <span>Email Me</span>
              </a>
              s
              <a
                href="/Vaibhav_Singh_updtRes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-primary-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>📄 Resume</span>
              </a>
            </div>


            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/i-am-vaibhav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-blue hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/vaibhav7409"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-blue hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.instagram.com/i.m.vaibhavv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-blue hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/profile.jpg"
              alt="Vaibhav Kumar Singh"
              className="w-50 object-contain shadow-xl"
            />
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-primary-blue" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
