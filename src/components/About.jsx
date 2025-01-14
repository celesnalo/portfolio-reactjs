import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaReact, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase, SiVercel, SiEclipseide, SiPycharm } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import resume from '../assets/Snalo SE Resume.docx.pdf';
import SectionTitle from './SectionTitle';

const About = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Durban, South Africa" },
    { icon: <FaEnvelope />, text: "Personal Email", href: "mailto:celersnalor0119@gmail.com" },
    { icon: <FaPhone />, text: "+27762392923", href: "tel:+27762392923" },
    { icon: <FaLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com/in/celesnalo" },
    { icon: <FaGithub />, text: "GitHub", href: "https://github.com/celesnalo" }
  ];

  const skills = [
    {
      category: "Programming",
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
        { name: "PyCharm", icon: <SiPycharm className="text-green-500" /> },
        { name: "Eclipse", icon: <SiEclipseide className="text-orange-300" /> },
      ]
    },
    {
      category: "Platforms",
      items: [
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      ]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - About Info */}
        <div className="space-y-6">
          <SectionTitle title="About Me" />
          
          <div className="space-y-4">
            <p className="text-gray-300">
              Passionate Software Engineer with hands-on experience in frontend development and UI/UX design.
              Adept at collaborating in remote agile teams to deliver seamless, customer-focused solutions.
              I am a dedicated and detail-oriented software engineer with a strong passion for creating innovative and user-friendly web applications.
              I am a problem solver and always find a way to solve the problem.
            </p>
          </div>
          <div className="flex justify-start">
            <a
              href={resume}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
            Resume Preview
            </a>
          </div>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-400">African Leadership Experience</h4>
              <p className="text-gray-400">Software Engineering</p>
              <p className="text-sm text-gray-500">Graduation: October 2024</p>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>• Concentrations: Front-End Web Development</li>
                <li>• Key Achievements: Completed Advanced Front-End Capstone Project</li>
                <li>• Related Coursework: HTML, CSS, JavaScript, React, Tailwind CSS, Git & GitHub</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <span className="text-blue-400">{info.icon}</span>
                  <span>{info.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-8">
          <SectionTitle title="Skills & Tools" />
          
          <div className="grid gap-8">
            {skills.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-blue-400 mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-current rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative text-3xl transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          {skill.icon}
                        </div>
                      </div>
                      <span className="text-sm text-gray-400 opacity-80 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 