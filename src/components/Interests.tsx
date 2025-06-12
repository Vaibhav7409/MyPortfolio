import React from 'react';
import { Gamepad2, BookOpen, PenTool, Youtube, Instagram, FileText } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      title: 'Gaming',
      description:
        'Passionate about strategy games and competitive gaming. Enjoy exploring virtual worlds and tactical gameplay.',
      icon: <Gamepad2 className="text-green-500" size={48} />,
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Reading',
      description:
        'Avid reader of technology, business, and personal development books. Always learning and expanding knowledge.',
      icon: <BookOpen className="text-blue-500" size={48} />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Poetry Writing (Shayari)',
      description:
        'Creative expression through Hindi poetry and shayari. Love crafting verses that capture emotions and experiences.',
      icon: <PenTool className="text-purple-500" size={48} />,
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-primary-blue">Creative Corner</span>
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Beyond my technical journey, I explore art through gaming, storytelling, poetry, and visual media.
          </p>
        </div>

        {/* Hobbies & Interests */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Hobbies & Passions
          </h3>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-dark-card rounded-xl p-8 border dark:border-dark-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex p-6 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300 mb-4">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {interest.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  {interest.description}
                </p>

                <div
                  className={`h-1 bg-gradient-to-r ${interest.color} mx-auto mt-6 rounded-full w-16 group-hover:w-24 transition-all duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Links */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">
            Explore My Creative Work
          </h3>
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <a
              href="/अल्हड़_कविताएँ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-dark-card p-6 rounded-xl border dark:border-dark-border hover:shadow-xl transition"
            >
              <FileText className="mx-auto text-pink-500 mb-3" size={40} />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">My Poetry Book</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">अल्हड़_कविताएँ.pdf</p>
            </a>

            <a
              href="https://www.youtube.com/@TrieyeSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-dark-card p-6 rounded-xl border dark:border-dark-border hover:shadow-xl transition"
            >
              <Youtube className="mx-auto text-red-500 mb-3" size={40} />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">YouTube Channel</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">@TrieyeSpace</p>
            </a>

            <a
              href="https://www.instagram.com/enigmatic.stranger"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-dark-card p-6 rounded-xl border dark:border-dark-border hover:shadow-xl transition"
            >
              <Instagram className="mx-auto text-pink-600 mb-3" size={40} />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Instagram</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">@enigmatic.stranger</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Interests;
