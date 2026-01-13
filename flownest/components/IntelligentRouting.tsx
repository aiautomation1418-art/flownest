import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitMerge, Headphones, Mail, User } from 'lucide-react';

const IntelligentRouting: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-600/20 text-brand-400 mb-6 border border-brand-500/20">
                <GitMerge size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Unlock the Power of FlowNest AI</h2>
        </div>

        <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-card rounded-3xl p-8 md:p-12 relative border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div>
                    <h3 className="text-3xl font-bold mb-4">FlowNest Intelligent Routing That Delivers</h3>
                    <p className="text-gray-400 mb-8 text-lg">Automatically route conversations to the right agent or department—no delays, no confusion.</p>
                    <button className="px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium flex items-center gap-2 transition-all">
                        Get Started <ArrowRight size={16} />
                    </button>
                </div>

                {/* Right Visualizer: Tree Diagram */}
                <div className="relative flex flex-col items-center">
                    {/* Level 1: Main Router */}
                    <div className="relative z-10 mb-12">
                         <div className="px-6 py-3 rounded-xl bg-[#1A1A24] border border-brand-500/50 shadow-[0_0_30px_rgba(124,58,237,0.3)] text-brand-200 font-medium">
                            Intelligent Routing
                         </div>
                         {/* Connector Vertical */}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 w-0.5 bg-gradient-to-b from-brand-500/50 to-white/10 border-l border-dashed border-gray-600"></div>
                    </div>

                    {/* Level 2: Endpoints */}
                    <div className="flex gap-4 md:gap-8 relative z-10">
                        {/* Connecting horizontal line */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[80%] h-12 border-b border-dashed border-gray-600 rounded-b-3xl"></div>

                        <div className="flex flex-col items-center gap-2 mt-4">
                            <div className="w-12 h-12 rounded-full bg-[#1A1A24] border border-white/10 flex items-center justify-center hover:border-brand-500 transition-colors">
                                <Headphones size={20} className="text-gray-400" />
                            </div>
                            <span className="text-xs text-gray-500">Help Centre</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 mt-4">
                            <div className="w-12 h-12 rounded-full bg-[#1A1A24] border border-white/10 flex items-center justify-center hover:border-brand-500 transition-colors">
                                <Mail size={20} className="text-gray-400" />
                            </div>
                            <span className="text-xs text-gray-500">Email Marketing</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 mt-4">
                            <div className="w-12 h-12 rounded-full bg-[#1A1A24] border border-brand-500 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                                <User size={20} className="text-brand-300" />
                            </div>
                            <span className="text-xs text-brand-300">Preferred Agent</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute right-0 bottom-0 w-2/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default IntelligentRouting;