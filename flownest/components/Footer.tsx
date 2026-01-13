import React from 'react';
import { Mail, Phone, MapPin, Twitter, Github, Instagram, Linkedin, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
    onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNav = (page: string) => {
      if (onNavigate) {
          onNavigate(page);
          window.scrollTo(0, 0);
      }
  };

  return (
    <footer className="bg-[#050508] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div 
                className="flex items-center gap-2 mb-6 cursor-pointer"
                onClick={() => handleNav('home')}
            >
                 <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
                   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                      <path d="M4 19C4 19 8 10 16 6C20 4 22 4 22 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 13C4 13 7 9 11 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                      <circle cx="4" cy="19" r="2.5" fill="currentColor" stroke="none"/>
                   </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">FlowNest</span>
            </div>
            <h3 className="text-lg font-bold mb-4">{t.footer.newsletter}</h3>
            <div className="relative max-w-sm">
                <input type="email" placeholder={t.footer.placeholder} className="w-full bg-[#1A1A24] border border-white/10 rounded-full py-3 px-5 text-sm text-white focus:outline-none focus:border-brand-500" />
                <button className="absolute right-1 top-1 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ArrowRight size={16} />
                </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.product}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li onClick={() => handleNav('platform')} className="hover:text-brand-400 cursor-pointer transition-colors">{t.nav.platform}</li>
                <li onClick={() => handleNav('solutions')} className="hover:text-brand-400 cursor-pointer transition-colors">{t.nav.solutions}</li>
                <li onClick={() => handleNav('pricing')} className="hover:text-brand-400 cursor-pointer transition-colors">{t.nav.pricing}</li>
                <li onClick={() => handleNav('signup')} className="hover:text-brand-400 cursor-pointer transition-colors">{t.nav.getStarted}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li onClick={() => handleNav('about')} className="hover:text-brand-400 cursor-pointer transition-colors">{t.nav.about}</li>
                <li onClick={() => handleNav('about')} className="hover:text-brand-400 cursor-pointer transition-colors">Careers</li>
                <li onClick={() => handleNav('about')} className="hover:text-brand-400 cursor-pointer transition-colors">Blog</li>
                <li onClick={() => handleNav('contact')} className="hover:text-brand-400 cursor-pointer transition-colors">{t.nav.contact}</li>
            </ul>
          </div>

           <div>
            <h4 className="text-white font-bold mb-6">{t.footer.support}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li onClick={() => handleNav('contact')} className="hover:text-brand-400 cursor-pointer transition-colors">Help Center</li>
                <li onClick={() => handleNav('contact')} className="hover:text-brand-400 cursor-pointer transition-colors">Ticket Support</li>
                <li onClick={() => handleNav('login')} className="hover:text-brand-400 cursor-pointer transition-colors">Manage Account</li>
                <li onClick={() => handleNav('contact')} className="flex items-center gap-2 hover:text-brand-400 cursor-pointer transition-colors"><Mail size={14}/> Support</li>
            </ul>
          </div>

          {/* Owner Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Owner</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li className="font-semibold text-white flex items-center gap-2">
                    <User size={14} className="text-brand-400" />
                    MEHRAN ALI
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mehran--ali/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                        <Linkedin size={14} /> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="tel:+93143401418" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                        <Phone size={14} /> +93 143401418
                    </a>
                </li>
                 <li>
                    <a href="mailto:mehran.ali.1418@gmail.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                        <Mail size={14} /> Email Owner
                    </a>
                </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">{t.footer.rights}</p>
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"><Twitter size={14} /></div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"><Github size={14} /></div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"><Instagram size={14} /></div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"><Linkedin size={14} /></div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;