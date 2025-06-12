import React from 'react';
import { User, Languages, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-primary-blue">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn more about my background, education, and what drives me.
          </p>
          <div className="w-24 h-1 bg-primary-blue mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Personal Summary */}
          <div className="bg-gradient-to-r from-primary-blue/10 to-blue-100 dark:from-primary-blue/20 dark:to-gray-800 p-8 rounded-xl border dark:border-dark-border shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <User className="text-primary-blue" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I am a B.Tech Computer Science graduate from I.T.S Engineering College, Greater Noida, currently awaiting final results.
              Passionate about Business Analysis and Data, I thrive on solving real-world problems and building meaningful insights.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              My skills include Python, SQL, Excel, Tableau, and Power BI, and I continuously grow by learning and applying new technologies.
            </p>
            <div className="flex items-center gap-3">
              <Languages className="text-primary-blue" size={20} />
              <span className="text-gray-800 dark:text-white text-md font-medium">Languages: English, Hindi</span>
            </div>
          </div>

          {/* Right: Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-primary-blue" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>

            {/* Education Card 1 */}
            <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl border dark:border-dark-border shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">I.T.S Engineering College, Greater Noida</p>
              <span className="text-sm text-primary-blue font-medium">2021 - 2025</span>
            </div>

            {/* Education Card 2 */}
            <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl border dark:border-dark-border shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Class 12th - PCM (CBSE)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Maharishi Vidya Mandir, Aligarh</p>
              <span className="text-sm text-primary-blue font-medium">2020</span>
            </div>

            {/* Education Card 3 */}
            <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl border dark:border-dark-border shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Class 10th (CBSE)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Maharishi Vidya Mandir, Aligarh</p>
              <span className="text-sm text-primary-blue font-medium">2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
