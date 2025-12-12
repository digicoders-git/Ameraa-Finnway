import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { RiMenu4Line } from 'react-icons/ri';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const services = [
    'Construction & Real Estate Finance',
    'Growth Advisory',
    'Healthcare Finance',
    'Hospitality Finance',
    'Manufacturing & Industrial Finance',
    'Government Contractors & Bank Guarantees'
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#D4A537] text-white px-4 py-2 z-60"
      >
        Skip to main content
      </a>
      
      <header className="bg-[#0A2740] text-white sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-20" aria-label="Main navigation">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0">
              <img 
                src={logo} 
                alt="Finance Advisory Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => `font-semibold hover:text-[#D4A537] transition-colors duration-200 ${isActive ? 'text-[#D4A537]' : ''}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `font-semibold hover:text-[#D4A537] transition-colors duration-200 ${isActive ? 'text-[#D4A537]' : ''}`}>About Us</NavLink>
              
              <div className="relative group">
                <button 
                  className="flex font-semibold items-center space-x-1 hover:text-[#D4A537] transition-colors duration-200"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-2 w-80 bg-white text-[#0A2740] rounded-lg shadow-xl transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service, idx) => (
                    <NavLink 
                      key={idx}
                      to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-6 py-3 hover:bg-[#A4C8E1] hover:text-[#0A2740] transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink to="/sectors" className={({ isActive }) => `font-semibold hover:text-[#D4A537] transition-colors duration-200 ${isActive ? 'text-[#D4A537]' : ''}`}>Sectors</NavLink>
              <NavLink to="/process" className={({ isActive }) => `font-semibold hover:text-[#D4A537] transition-colors duration-200 ${isActive ? 'text-[#D4A537]' : ''}`}>Process</NavLink>
              <NavLink to="/case-studies" className={({ isActive }) => `font-semibold hover:text-[#D4A537] transition-colors duration-200 ${isActive ? 'text-[#D4A537]' : ''}`}>Case Studies</NavLink>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <NavLink 
                to="/apply" 
                className="bg-[#D4A537] text-white px-6 py-3 rounded-lg hover:bg-[#C29530] transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#D4A537] focus:ring-offset-2 focus:ring-offset-[#0A2740]"
              >
                Apply
              </NavLink>
              <NavLink 
                to="/contact" 
                className="bg-[#D4A537] text-white px-6 py-3 rounded-lg hover:bg-[#C29530] transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#D4A537] focus:ring-offset-2 focus:ring-offset-[#0A2740]"
              >
                Contact
              </NavLink>
            </div>

            <button 
              className="lg:hidden text-white focus:outline-none rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <RiMenu4Line  className="w-8 h-8" />}
            </button>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 border-t border-[#A4C8E1]/20">
              <div className="flex flex-col space-y-4">
                <NavLink to="/" className={({ isActive }) => `hover:text-[#D4A537] transition-colors duration-200 focus:outline-none focus:text-[#D4A537] ${isActive ? 'text-[#D4A537]' : ''}`}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => `hover:text-[#D4A537] transition-colors duration-200 focus:outline-none focus:text-[#D4A537] ${isActive ? 'text-[#D4A537]' : ''}`}>About Us</NavLink>
                
                <div>
                  <button 
                    className="flex items-center justify-between w-full hover:text-[#D4A537] transition-colors duration-200 focus:outline-none focus:text-[#D4A537]"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-label="Toggle services menu"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${servicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {services.map((service, idx) => (
                      <NavLink 
                        key={idx}
                        to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-[#A4C8E1] hover:text-[#D4A537] transition-colors duration-200 text-sm focus:outline-none focus:text-[#D4A537]"
                      >
                        {service}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <NavLink to="/sectors" className={({ isActive }) => `hover:text-[#D4A537] transition-colors duration-200 focus:outline-none focus:text-[#D4A537] ${isActive ? 'text-[#D4A537]' : ''}`}>Sectors</NavLink>
                <NavLink to="/process" className={({ isActive }) => `hover:text-[#D4A537] transition-colors duration-200 focus:outline-none focus:text-[#D4A537] ${isActive ? 'text-[#D4A537]' : ''}`}>Process</NavLink>
                <NavLink to="/case-studies" className={({ isActive }) => `hover:text-[#D4A537] transition-colors duration-200 focus:outline-none focus:text-[#D4A537] ${isActive ? 'text-[#D4A537]' : ''}`}>Case Studies</NavLink>
                <NavLink 
                to="/apply" 
                className="bg-[#D4A537] text-white px-6 py-3 rounded-lg hover:bg-[#C29530] transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#D4A537] focus:ring-offset-2 focus:ring-offset-[#0A2740] text-center"
              >
                Apply
              </NavLink>
                <NavLink 
                  to="/contact" 
                  className="bg-[#D4A537] text-white px-6 py-3 rounded-lg hover:bg-[#C29530] transition-colors duration-200 font-semibold text-center mt-4 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}