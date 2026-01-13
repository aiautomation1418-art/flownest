import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap } from 'lucide-react';

const VirtualAgents: React.FC = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: AI Virtual Agents */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden"
        >
             {/* Accent Glow Top */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-brand-600/30 blur-[50px]"></div>

             {/* Icon Header */}
             <div className="flex justify-center mb-8">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Bot className="text-brand-400 w-6 h-6" />
                 </div>
             </div>

             {/* Chat UI */}
             <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl rounded-tl-sm border border-white/5 w-fit max-w-[85%]">
                     <img src="https://picsum.photos/40/40?random=10" className="w-8 h-8 rounded-full" alt="Agent"/>
                     <div>
                        <div className="text-xs text-gray-400 mb-0.5">Darlene Robertson</div>
                        <div className="text-sm text-gray-200">Checking the system status now...</div>
                     </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl rounded-tl-sm border border-white/5 w-fit max-w-[85%]">
                     <img src="https://picsum.photos/40/40?random=11" className="w-8 h-8 rounded-full" alt="Agent"/>
                     <div>
                        <div className="text-xs text-gray-400 mb-0.5">Brooklyn Simmons</div>
                        <div className="text-sm text-gray-200">The workflow has been optimized.</div>
                     </div>
                </div>
             </div>

             <div className="mt-auto">
                 <h3 className="text-xl font-bold mb-2">AI's Human-Like Virtual Agents</h3>
                 <p className="text-sm text-gray-400">FlowNest AI creates virtual agents that adapt to your style and deliver tailored customer experiences.</p>
             </div>
        </motion.div>

        {/* Right: Full Autopilot */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-3xl p-8 relative overflow-hidden"
        >
             {/* Accent Glow Top */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-purple-600/30 blur-[50px]"></div>

             {/* Icon Header */}
             <div className="flex justify-center mb-8">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Zap className="text-purple-400 w-6 h-6" />
                 </div>
             </div>

             {/* Timeline UI */}
             <div className="mb-8 relative pl-4 border-l border-white/10 space-y-6">
                <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-[#0B0B14]"></div>
                    <div className="bg-[#15151e] p-3 rounded-lg border border-white/5">
                        <div className="text-xs text-brand-300 font-medium mb-1">Make Design System</div>
                        <div className="text-[10px] text-gray-500">Today at 08:45</div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#0B0B14]"></div>
                    <div className="bg-[#15151e] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                        <div>
                             <div className="text-xs text-purple-300 font-medium mb-1">Meet with Astro Founder</div>
                             <div className="text-xs text-gray-500">Today at 09:15</div>
                        </div>
                         <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-gray-400">
                             Started
                         </div>
                    </div>
                    {/* User avatars overlap */}
                    <div className="flex -space-x-2 mt-2 ml-1">
                         <img src="https://picsum.photos/24/24?random=20" className="w-5 h-5 rounded-full border border-[#0B0B14]" alt=""/>
                         <img src="https://picsum.photos/24/24?random=21" className="w-5 h-5 rounded-full border border-[#0B0B14]" alt=""/>
                    </div>
                </div>
             </div>

             <div className="mt-auto">
                 <h3 className="text-xl font-bold mb-2">Full Autopilot for Smarter Operations</h3>
                 <p className="text-sm text-gray-400">FlowNest AI automates routine work so your team can focus on high-value, strategic initiatives.</p>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VirtualAgents;