import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaReact, FaJava, FaPython, FaGitAlt} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFirebase, SiVercel, SiEclipseide, SiPycharm, SiDotnet} from 'react-icons/si';
import { TbBrandVscode, TbBrandCSharp, TbBrandFramerMotion, TbBrandThreejs} from 'react-icons/tb';
import { DiVisualstudio } from "react-icons/di";
import SectionTitle from './SectionTitle';

const About = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Durban, South Africa" },
    { icon: <FaEnvelope />, text: "Personal Email", href: "mailto:celersnalor0119@gmail.com" },
    { icon: <FaPhone />, text: "+27762392923", href: "tel:+27762392923" },
    { icon: <FaLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com/in/celesnalo" },
    { icon: <FaGithub />, text: "GitHub", href: "https://github.com/celesnalo" },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-blue-400"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.406-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      text: "Upwork",
      href: "https://www.upwork.com/freelancers/~015a937ab5667969a7?mp_source=share"
    }
  ];

  const skills = [
    {
      category: "Programming",
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-500" /> },
        { name: ".NET", icon: <SiDotnet className="text-blue-600" /> },
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-pink-500" /> },
        { name: "Three.js", icon: <TbBrandThreejs className="text-gray-200" />}
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
        { name: "PyCharm", icon: <SiPycharm className="text-green-500" /> },
        { name: "Eclipse", icon: <SiEclipseide className="text-orange-300" /> },
        { name: "Visual Studio", icon: <DiVisualstudio className="text-purple-800" /> },
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

  const educationData = [
    {
      title: "Central University of Technology",
      degree: "Diploma in Information Technology (DIP_ICT)",
      graduation: "Currently studying",
      concentrations: ["Information Technology"],
      coursework: ["Information Technology Essentials, Information Technology Mathematics, Problem Solving and Algorithms, Software Development, Internet Programming, Databases, Software Engineering, Graphical Design, Graphical User Interface Design, Technical Programming, Web Content Management, Internet Technologies, Communication Networks, Information Technology and Society",],
      achievements: ["..."],
    },
    {
      title: "African Leadership Experience",
      degree: "Software Engineering",
      graduation: "October 2024",
      concentrations: ["Front-End Web Development"],
      achievements: ["Completed Advanced Front-End Capstone Project"],
      coursework: ["HTML, CSS, JavaScript, React, Tailwind CSS, Git & GitHub"],
    },
    {
      title: "University of KwaZulu-Natal",
      degree: "Bachelor of Science - Stream M",
      graduation: "Studies in Computer Science, 2021 - 2023",
      concentrations: ["Applied Mathematics & Computer Science"],
      achievements: ["UKZN tech society membership certificate"],
      coursework: ["Calculus & Linear Algebra, Discrete Mathematics with Applications, Introduction to Statistics, Operations Research, Computer Organisation and Architecture,  Object Oriented Programming, Data Structures, Algorithms"],
    },
  ];

  const resumeLink = "https://docs.google.com/document/d/1aVuBi2t28xhgvzaeRVyY83gqh_Kg8aGx/edit?usp=sharing&ouid=103560273917564962444&rtpof=true&sd=true"
    
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4">
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
              href={resumeLink}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              title="Download my resume"
            >
              Resume Preview
            </a>
          </div>
          {/* Education */}
          <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-400">{edu.title}</h4>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.graduation}</p>
              <ul className="mt-2 space-y-1 text-gray-300">
                {edu.concentrations && edu.concentrations.map((conc, i) => (
                  <li key={i}>• Concentrations: {conc}</li>
                ))}
                {edu.achievements && edu.achievements.map((ach, i) => (
                  <li key={i}>• Key Achievements: {ach}</li>
                ))}
                {edu.coursework && edu.coursework.map((course, i) => (
                  <li key={i}>• Related Coursework: {course}</li>
                ))}
              </ul>
            </div>
            ))}
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
                  aria-label={`Contact me via ${info.text}`}
                  title={`Contact me via ${info.text}`}
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