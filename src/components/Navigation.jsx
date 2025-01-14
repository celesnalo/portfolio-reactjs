import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent" style={{
            backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(173,70,252,1) 74%)'
          }}>
            CeleSnalo
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              About
            </Link>
            <Link 
              to="/projects"
              className={`nav-link ${location.pathname === '/projects' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Projects
            </Link>
            <Link 
              to="/experience"
              className={`nav-link ${location.pathname === '/experience' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Experience
            </Link>
            <Link 
              to="/certifications"
              className={`nav-link ${location.pathname === '/certifications' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Certifications
            </Link>
            <Link 
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
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

        {/* Mobile menu dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/about' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/projects' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/experience"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/experience' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              to="/certifications"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/certifications' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/contact' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
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