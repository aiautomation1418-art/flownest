import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
    onNavigate: (page: string) => void;
}

const integrations = [
  { name: 'n8n', url: 'https://n8n.io/', domain: 'n8n.io' },
  { name: 'Zapier', url: 'https://zapier.com/', domain: 'zapier.com' },
  { name: 'Make', url: 'https://www.make.com/', domain: 'make.com' },
  { name: 'Airtable', url: 'https://airtable.com/', domain: 'airtable.com' },
  { name: 'FlowVeo', url: 'https://flowveo.com/', domain: 'flowveo.com' },
  { name: 'GoHighLevel', url: 'https://www.gohighlevel.com/', domain: 'gohighlevel.com' },
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 text-brand-400" />
          <span className="text-xs font-medium text-brand-200">{t.hero.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {t.hero.title} <br />
          {t.hero.with} <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-purple-500 to-indigo-500">FlowNest</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button 
            onClick={() => onNavigate('signup')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-600/25"
          >
            {t.hero.cta1} <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
          >
            {t.hero.cta2} <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Floating AI Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
            {/* Background Glow for Dashboard */}
            <div className="absolute inset-0 bg-brand-600/20 blur-[100px] -z-10 rounded-full"></div>

            <div className="glass-card rounded-2xl border border-white/10 p-2 overflow-hidden shadow-2xl shadow-brand-900/40">
                <div className="bg-[#0f0f16] rounded-xl overflow-hidden border border-white/5">
                    {/* Fake Browser Bar */}
                    <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                    </div>
                    
                    {/* Dashboard Content Mock */}
                    <div className="p-6 md:p-8 min-h-[400px] relative">
                         {/* Connection Lines (SVG) */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            <path d="M 200 150 C 300 150, 300 250, 400 250" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M 200 150 C 300 150, 300 50, 400 50" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M 750 200 C 650 200, 650 250, 550 250" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="5,5" />
                         </svg>

                         {/* Mock Boards */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {/* Column 1 */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">To Do</h3>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-500/50 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 text-[10px] bg-purple-500/20 text-purple-300 rounded">Design</span>
                                        <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-brand-400"></div>
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-200 mb-1">Landing Page V2</h4>
                                    <div className="flex items-center gap-2 mt-3">
                                        <div className="flex -space-x-2">
                                            <img src="https://picsum.photos/30/30?random=1" className="w-6 h-6 rounded-full border border-[#0f0f16]" alt="user"/>
                                            <img src="https://picsum.photos/30/30?random=2" className="w-6 h-6 rounded-full border border-[#0f0f16]" alt="user"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-500/50 transition-colors">
                                     <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 text-[10px] bg-blue-500/20 text-blue-300 rounded">Dev</span>
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-200 mb-1">API Integration</h4>
                                </div>
                            </div>

                             {/* Column 2 */}
                             <div className="space-y-4 md:mt-12">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">In Progress</h3>
                                <div className="p-4 bg-gradient-to-br from-brand-900/40 to-white/5 rounded-lg border border-brand-500/30 shadow-lg shadow-brand-900/20 relative">
                                    <div className="absolute top-2 right-2 animate-pulse">
                                         <div className="w-2 h-2 bg-brand-400 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 text-[10px] bg-green-500/20 text-green-300 rounded">AI Task</span>
                                    </div>
                                    <h4 className="text-sm font-medium text-white mb-2">Content Generation</h4>
                                    <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-brand-500 w-2/3 h-full"></div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3 text-xs text-brand-200">
                                        <Zap className="w-3 h-3" /> Processing...
                                    </div>
                                </div>
                            </div>

                             {/* Column 3 */}
                             <div className="space-y-4">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">Complete</h3>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 opacity-70">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 text-[10px] bg-gray-500/20 text-gray-300 rounded">Review</span>
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-1 line-through">User Testing</h4>
                                    <div className="flex justify-end mt-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Integration Partners Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-32 pt-16 border-t border-white/5"
        >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Powering integrations with top platforms</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {integrations.map((company) => (
                    <a 
                        key={company.name}
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 cursor-pointer"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-[#13131a] border border-white/10 p-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] group-hover:border-brand-500/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img 
                                src={`https://logo.clearbit.com/${company.domain}`} 
                                alt={`${company.name} Logo`} 
                                className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                      parent.classList.add('bg-white/5');
                                      const textSpan = document.createElement('span');
                                      textSpan.innerText = company.name;
                                      textSpan.className = "text-[10px] font-bold text-gray-300 text-center leading-tight";
                                      parent.appendChild(textSpan);
                                    }
                                }}
                            />
                        </div>
                        <span className="text-xs font-medium text-gray-500 group-hover:text-brand-300 transition-colors">{company.name}</span>
                    </a>
                ))}
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;