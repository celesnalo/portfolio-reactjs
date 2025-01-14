import { useEffect, useState } from 'react';
import MyPhoto from '../assets/mthobisi.jfif';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techPhrases = [
    'npm install',
    'console.log()',
    '<html>',
    'Mobile First',
    'Grid',
    'Front-End',
    'npm start',
    'className="container"',
    'git commit',
    'useState()',
    'flex',
    'responsive',
    'Frontend',
    'Fullstack',
    'DevOps',
    'CI/CD',
    'Agile',
    'Scrum',
    'Kanban',
    'Unit Testing',
    'Integration Testing',
    'TDD',
    'BDD',
    'Debugging',
    'Debugging Tools',
    'Version Control',
    'Git',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Docker',
    'Kubernetes',
    'Cloud Computing',
    'AWS',
    'Azure',
    'GCP'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a192f] overflow-hidden">
      {/* Background Tech Phrases */}
      <div className="absolute inset-0">
        {techPhrases.map((phrase, index) => (
          <div
            key={index}
            className="absolute text-gray-400/10 font-mono whitespace-nowrap transition-transform duration-[3000ms]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `
                rotate(${Math.random() * 360}deg)
                translate(
                  ${mousePosition.x * 20 - 10}px,
                  ${mousePosition.y * 20 - 10}px
                )
              `,
              fontSize: `${Math.random() * (24 - 14) + 14}px`,
              pointerEvents: 'none'
            }}
          >
            {phrase}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Text Content - Left Side */}
          <div className="text-white md:w-1/2">
            <p className="text-blue-400 mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#63B3ED] via-[#B794F4] to-[#F687B3] bg-clip-text text-transparent">
              Mthobisi Snalo Cele
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl mb-8">
              Software Engineer & Creative Developer
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-400 text-blue-400 hover:border-blue-500 hover:text-blue-500 px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99,179,237,0.2), rgba(183,148,244,0.2))`,
                }}
              />
              <img
                src={MyPhoto}
                alt="Professional portrait"
                className="rounded-full object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;