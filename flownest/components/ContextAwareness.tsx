import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Database, User, Target, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'us', name: 'English (US)', flag: '🇺🇸' },
  { code: 'gb', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'cn', name: 'Chinese', flag: '🇨🇳' },
  { code: 'jp', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'sa', name: 'Arabic', flag: '🇸🇦' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'in', name: 'Hindi', flag: '🇮🇳' },
  { code: 'kr', name: 'Korean', flag: '🇰🇷' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'se', name: 'Swedish', flag: '🇸🇪' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'vn', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'gr', name: 'Greek', flag: '🇬🇷' },
  { code: 'pk', name: 'Urdu', flag: '🇵🇰' },
  { code: 'ca', name: 'English (CA)', flag: '🇨🇦' },
  { code: 'my', name: 'Malay', flag: '🇲🇾' },
  { code: 'ph', name: 'Filipino', flag: '🇵🇭' },
];

const ContextAwareness: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Multi-Language Interactive Selector */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#0f0f16] to-transparent border border-white/10 flex flex-col h-full"
        >
           <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
             {t.context.title}
           </h3>
           <p className="text-sm text-gray-400 mb-8 leading-relaxed">
             {t.context.subtitle}
           </p>

           <div className="flex-1 min-h-[300px] bg-[#0B0B14]/50 rounded-2xl border border-white/5 p-4 mb-6 relative overflow-hidden">
               {/* Inner Glow */}
               <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0B0B14] to-transparent z-10 pointer-events-none opacity-50"></div>
               <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0B0B14] to-transparent z-10 pointer-events-none opacity-50"></div>

               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar relative z-0 pb-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`group relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 text-left ${
                        language === lang.code 
                          ? 'bg-brand-600/10 border-brand-500 shadow-[0_0_20px_rgba(124,58,237,0.15)]' 
                          : 'bg-[#15151e]/40 border-white/5 hover:bg-[#1A1A24] hover:border-white/10'
                      }`}
                    >
                      <span className="text-xl filter drop-shadow-md grayscale-[0.2] group-hover:grayscale-0 transition-all">{lang.flag}</span>
                      <div className="flex-1 min-w-0">
                          <div className={`text-xs font-semibold truncate transition-colors ${language === lang.code ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                            {lang.name}
                          </div>
                      </div>
                      {language === lang.code && (
                        <motion.div
                          layoutId="active-check"
                          className="w-4 h-4 rounded-full bg-brand-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/40"
                        >
                           <CheckCircle2 size={10} className="text-white" />
                        </motion.div>
                      )}
                    </button>
                  ))}
               </div>
           </div>
           
           {/* Active Users Mockup */}
           <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center gap-3">
                     <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f0f16] bg-[#1A1A24] overflow-hidden relative">
                                <img src={`https://picsum.photos/32/32?random=${50+i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                            </div>
                        ))}
                     </div>
                     <span className="text-xs text-gray-500">
                         <span className="text-brand-400 font-bold">12k+</span> active chats now
                     </span>
                </div>
                <div className="text-xs text-brand-300 font-medium px-3 py-1 bg-brand-500/10 rounded-full border border-brand-500/20 animate-pulse">
                    Live Translation
                </div>
           </div>
        </motion.div>

        {/* Right: Context Awareness (Existing but styled to match) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-10 text-center bg-gradient-to-bl from-purple-900/10 to-transparent flex flex-col justify-between"
        >
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.context.rightTitle}</h3>
                <p className="text-sm text-gray-400 mb-12">{t.context.rightDesc}</p>

                {/* Context Diagram */}
                <div className="relative h-64 w-full max-w-sm mx-auto mb-8">
                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                        <div className="relative">
                             <div className="absolute inset-0 bg-brand-600 blur-[40px] opacity-40 rounded-full"></div>
                             <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-purple-700 rounded-2xl flex items-center justify-center mb-2 shadow-xl shadow-brand-500/30 border border-white/20 relative z-10">
                                <Database size={32} className="text-white" />
                            </div>
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide">AI Context Engine</span>
                    </div>

                    {/* Orbit Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-gray-700/50 rounded-full animate-spin-slow pointer-events-none"></div>

                    {/* Nodes */}
                    {[
                        { icon: User, label: "User Intent", top: "0%", left: "50%", x: "-50%", y: "0%" },
                        { icon: Globe, label: "Language", bottom: "10%", right: "10%", x: "0%", y: "0%" },
                        { icon: Target, label: "History", bottom: "10%", left: "10%", x: "0%", y: "0%" }
                    ].map((node, i) => (
                         <div 
                            key={i}
                            className="absolute flex flex-col items-center z-20"
                            style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom, transform: `translate(${node.x || 0}, ${node.y || 0})` }}
                         >
                            <div className="w-12 h-12 bg-[#15151e] border border-white/10 rounded-full flex items-center justify-center mb-2 shadow-lg hover:border-brand-500/50 transition-colors">
                                <node.icon size={20} className="text-gray-400" />
                            </div>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold bg-[#0B0B14] px-2 py-0.5 rounded border border-white/5">{node.label}</span>
                         </div>
                    ))}
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                        <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="url(#lineGrad)" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="url(#lineGrad)" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="url(#lineGrad)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7C3AED" />
                                <stop offset="100%" stopColor="#A855F7" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
             
             <div className="flex justify-center">
                <button className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500/30 text-gray-300 hover:text-white font-medium flex items-center gap-2 transition-all">
                    {t.context.button} <ArrowRight size={16} />
                </button>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContextAwareness;