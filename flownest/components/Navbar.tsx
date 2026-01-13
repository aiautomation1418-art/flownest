import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
    onNavigate?: (page: string) => void;
    currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.platform, id: 'platform' },
    { name: t.nav.solutions, id: 'solutions' },
    { name: t.nav.pricing, id: 'pricing' },
    { name: t.nav.blog, id: 'blog' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
      e.preventDefault();
      if (onNavigate) {
          onNavigate(id);
      }
      setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={(e) => handleNavClick('home', e)}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                  <path d="M4 19C4 19 8 10 16 6C20 4 22 4 22 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 13C4 13 7 9 11 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  <circle cx="4" cy="19" r="2.5" fill="currentColor" stroke="none"/>
               </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">FlowNest</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`text-sm font-medium transition-colors ${currentPage === link.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
             <button 
                onClick={() => onNavigate && onNavigate('login')}
                className="text-sm font-medium text-white hover:text-brand-300 transition-colors"
             >
              {t.nav.login}
            </button>
            <button 
                onClick={() => onNavigate && onNavigate('signup')}
                className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all backdrop-blur-sm"
            >
              {t.nav.getStarted}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav absolute w-full border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-md ${currentPage === link.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={(e) => handleNavClick(link.id, e)}
              >
                {link.name}
              </a>
            ))}
             <div className="mt-4 flex flex-col gap-3 px-3">
                 <button 
                    onClick={() => { setMobileMenuOpen(false); if(onNavigate) onNavigate('login'); }}
                    className="w-full text-left text-base font-medium text-gray-300 hover:text-white py-2"
                 >
                  {t.nav.login}
                </button>
                <button 
                    onClick={() => { setMobileMenuOpen(false); if(onNavigate) onNavigate('signup'); }}
                    className="w-full py-3 text-base font-medium text-white bg-brand-600 rounded-lg"
                >
                  {t.nav.getStarted}
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;