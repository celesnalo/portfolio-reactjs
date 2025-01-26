import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/celesnalo' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/celesnalo' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:celersnalor0119@gmail.com' },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.406-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      href: 'https://www.upwork.com/freelancers/~015a937ab5667969a7?mp_source=share'
    }
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
            aria-label={`Visit my ${link.href.includes('github') ? 'GitHub' : link.href.includes('linkedin') ? 'LinkedIn' : link.href.includes('upwork') ? 'Upwork' : 'Email'}`}
            title={`Visit my ${link.href.includes('github') ? 'GitHub' : link.href.includes('linkedin') ? 'LinkedIn' : link.href.includes('upwork') ? 'Upwork' : 'Email'}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="text-gray-400" aria-label="Copyright" title="Copyright">
        © {new Date().getFullYear()} Mthobisi Snalo Cele. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;