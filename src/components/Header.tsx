
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', path: '/#work' },
    { name: 'About', path: '/#about' },
    { name: 'Other Work', path: '/other-work' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (path: string) => {
    // Close mobile menu when a link is clicked
    setMobileMenuOpen(false);
    
    // Handle smooth scrolling to sections when on the home page
    if (path.startsWith('/#') && window.location.pathname === '/') {
      const sectionId = path.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Update URL without full page reload
        window.history.pushState(null, '', path);
      }
      return;
    }
    
    // If it's a hash link but we're not on the home page, we need to navigate first
    if (path.includes('#') && window.location.pathname !== '/') {
      // Store the hash to scroll to after navigation
      sessionStorage.setItem('scrollToSection', path.split('#')[1]);
    }
  };

  useEffect(() => {
    // Check if we have a section to scroll to after navigation
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          // Update URL without full page reload
          window.history.pushState(null, '', `/#${scrollToSection}`);
        }, 100);
      }
      sessionStorage.removeItem('scrollToSection');
    }
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        scrolled ? "py-3 bg-white/90 backdrop-blur-sm shadow-sm" : "py-5 bg-white"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-black">
          <img 
            src="/images/logo-handwritten.png" 
            alt="Sebastian's Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="text-sm text-black/80 hover:text-burgundy transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 bg-black transition-all duration-300",
              mobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-black transition-all duration-300",
              mobileMenuOpen ? "opacity-0" : "w-4 opacity-100"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-black transition-all duration-300",
              mobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out flex flex-col justify-center items-center",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Close Button (X) in top-right corner */}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-black" />
        </button>

        <nav>
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className="text-xl font-medium hover:text-burgundy transition-colors"
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
