import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/celesnalo' },
    { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/celesnalo' },
    { icon: <FiTwitter size={20} />, href: 'https://twitter.com/snalocele_' },
    { icon: <FiMail size={20} />, href: 'mailto:celersnalor0119@gmail.com' },
  ];

  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#60A5FA' }}
            className="hover:text-blue-400 transition-colors"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="text-gray-400">
        © {new Date().getFullYear()} Mthobisi Snalo Cele. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 