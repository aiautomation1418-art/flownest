import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Play } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Card: Conversations */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">FlowNest Enables Human-Like Conversations Across All Channels</h3>
            <p className="text-gray-400 mb-8">With FlowNest, effortlessly connect customers and teams through intelligent voice and messaging on web, mobile, and beyond.</p>
            
            {/* Visualizer: Node Chat */}
            <div className="relative h-48 mt-8 flex items-center justify-center">
               <div className="absolute w-64 h-64 bg-brand-600/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
               
               {/* Central Hub */}
               <div className="flex flex-col items-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 flex items-center justify-center shadow-lg shadow-brand-500/20 mb-4 border border-white/10">
                    <MessageSquare className="text-white w-8 h-8" />
                  </div>
                  <div className="bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                    Teams & Customer Connect
                  </div>
               </div>

               {/* Satellite Nodes */}
               <div className="absolute w-full h-full">
                  {/* Left Node */}
                  <div className="absolute top-1/2 left-10 -translate-y-1/2 flex items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-[#1A1A24] border border-white/10 flex items-center justify-center">
                       <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                     </div>
                  </div>
                  {/* Right Node */}
                  <div className="absolute top-1/2 right-10 -translate-y-1/2 flex items-center gap-2">
                     <div className="w-10 h-10 rounded-full bg-[#1A1A24] border border-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>

        {/* Right Card: Automation */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">FlowNest Task Automation Powered by AI</h3>
            <p className="text-gray-400 mb-8">End-to-end task automation powered by FlowNest for greater accuracy, speed, and control.</p>

             {/* Visualizer: Task Progress */}
            <div className="mt-8 space-y-4">
              {/* Task 1 */}
              <div className="bg-[#1A1A24] rounded-xl p-4 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                         <img src="https://picsum.photos/30/30?random=3" className="w-8 h-8 rounded-full border border-[#1A1A24]" alt="u"/>
                         <img src="https://picsum.photos/30/30?random=4" className="w-8 h-8 rounded-full border border-[#1A1A24]" alt="u"/>
                    </div>
                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-500 w-full animate-pulse"></div>
                    </div>
                </div>
                <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 font-medium">
                    Started
                </div>
              </div>

               {/* Task 2 */}
              <div className="bg-[#1A1A24] rounded-xl p-4 border border-white/5 flex items-center justify-between opacity-80">
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                         <img src="https://picsum.photos/30/30?random=5" className="w-8 h-8 rounded-full border border-[#1A1A24]" alt="u"/>
                    </div>
                    <div className="h-1.5 w-24 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3"></div>
                    </div>
                </div>
                <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-medium">
                    Completed
                </div>
              </div>
            </div>

          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChoose;