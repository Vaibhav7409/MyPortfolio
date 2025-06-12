import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary-blue">
              Vaibhav Kumar Singh
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Business Analyst passionate about turning data into insights.
              Ready to solve complex problems and drive business growth through analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>vaibhavv.kr.singh@gmail.com</p>

              <p>Greater Noida, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>by Vaibhav Kumar Singh</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>

          <div className="text-center text-gray-500 text-sm mt-6">
            © 2024 Vaibhav Kumar Singh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;