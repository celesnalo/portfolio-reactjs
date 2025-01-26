import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold bg-clip-text text-transparent" 
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(173,70,252,1) 74%)'
            }}
            aria-label="Home"
            title="Home"
          >
            CeleSnalo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'}`}
                  aria-label="Home"
                  title="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className={`nav-link ${location.pathname === '/about' ? 'text-blue-400' : 'text-gray-300'}`}
                  aria-label="About Me"
                  title="About Me"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects"
                  className={`nav-link ${location.pathname === '/projects' ? 'text-blue-400' : 'text-gray-300'}`}
                  aria-label="View My Projects"
                  title="View My Projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/experience"
                  className={`nav-link ${location.pathname === '/experience' ? 'text-blue-400' : 'text-gray-300'}`}
                  aria-label="My Experience"
                  title="My Experience"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="/certifications"
                  className={`nav-link ${location.pathname === '/certifications' ? 'text-blue-400' : 'text-gray-300'}`}
                  aria-label="My Certifications"
                  title="My Certifications"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className={`nav-link ${location.pathname === '/contact' ? 'text-blue-400' : 'text-gray-300'}`}
                  aria-label="Contact Me"
                  title="Contact Me"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Home"
              title="Home"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/about' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="About Me"
              title="About Me"
            >
              About
            </Link>
            <Link 
              to="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/projects' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="View My Projects"
              title="View My Projects"
            >
              Projects
            </Link>
            <Link 
              to="/experience"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/experience' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="My Experience"
              title="My Experience"
            >
              Experience
            </Link>
            <Link 
              to="/certifications"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/certifications' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="My Certifications"
              title="My Certifications"
            >
              Certifications
            </Link>
            <Link 
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/contact' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Contact Me"
              title="Contact Me"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;