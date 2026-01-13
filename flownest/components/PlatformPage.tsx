import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, GitMerge, BarChart3, Shield, Lock, Cloud, Zap, ArrowRight, Settings, Share2, Layers } from 'lucide-react';

interface PlatformPageProps {
    onNavigate: (page: string) => void;
}

const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="text-center px-4 mb-24 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium"
        >
          The FlowNest Platform
        </motion.div>
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300"
        >
          Orchestrate Your <br /> <span className="text-brand-500">AI Workforce</span>
        </motion.h1>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          The complete AI-powered workflow automation platform. Connect tools, deploy agents, and scale operations without the complexity.
        </motion.p>
      </section>

      {/* 2. Platform Overview - Dashboard Mock */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
             {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-brand-600/20 blur-[120px] -z-10 rounded-full"></div>

            <div className="glass-card rounded-2xl p-1.5 border border-white/10 shadow-2xl shadow-brand-900/50 bg-[#0f0f16]/80 backdrop-blur-xl">
                <div className="bg-[#0B0B14] rounded-xl overflow-hidden border border-white/5 aspect-[16/9] md:aspect-[21/9] relative flex flex-col">
                    {/* Header */}
                    <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-[#13131a]">
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="text-xs text-gray-500 font-mono">flownest_platform_v2.0</div>
                    </div>
                    {/* Body */}
                    <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-16 md:w-64 border-r border-white/5 bg-[#0f0f16] p-4 hidden md:flex flex-col gap-2">
                             <div className="h-8 bg-brand-500/20 rounded mb-4 w-3/4 animate-pulse"></div>
                             <div className="h-4 bg-white/5 rounded w-full"></div>
                             <div className="h-4 bg-white/5 rounded w-5/6"></div>
                             <div className="h-4 bg-white/5 rounded w-4/6"></div>
                        </div>
                        {/* Main */}
                        <div className="flex-1 p-6 md:p-8 relative">
                             {/* Stats Row */}
                             <div className="grid grid-cols-3 gap-4 mb-8">
                                 {[1,2,3].map(i => (
                                     <div key={i} className="h-24 rounded-lg bg-[#1A1A24] border border-white/5 relative overflow-hidden group">
                                         <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                         <div className="p-4">
                                             <div className="w-8 h-8 rounded bg-white/5 mb-2"></div>
                                             <div className="w-12 h-3 bg-white/10 rounded"></div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                             {/* Graph Area */}
                             <div className="h-48 rounded-lg bg-[#1A1A24] border border-white/5 w-full flex items-end justify-between p-4 px-8 gap-2">
                                  {[40, 60, 45, 70, 50, 80, 65, 90, 75, 60, 85, 95].map((h, i) => (
                                      <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-brand-600/20 to-brand-500 rounded-t-sm relative group">
                                          <div className="absolute top-0 w-full h-full bg-brand-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                      </div>
                                  ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">Visualize workflows, manage agents, and track performance in real-time.</p>
            </div>
        </motion.div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-400">Everything you need to build autonomous operations.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Bot, title: "AI Agents", desc: "Deploy specialized agents tailored for customer support, sales, and ops.", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: Workflow, title: "Workflow Automation", desc: "Drag-and-drop builder to connect apps and automate complex logic.", color: "text-purple-400", bg: "bg-purple-500/10" },
                { icon: GitMerge, title: "Intelligent Routing", desc: "Smartly route tasks to the right human or AI agent instantly.", color: "text-pink-400", bg: "bg-pink-500/10" },
                { icon: BarChart3, title: "Real-time Analytics", desc: "Gain deep insights into your operation's efficiency and ROI.", color: "text-green-400", bg: "bg-green-500/10" }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-500/40 transition-all duration-300 group hover:-translate-y-1"
                >
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`${item.color} w-6 h-6`} />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
         </div>
      </section>

      {/* 4. How It Works - Flow Diagram */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="glass-card rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[#0B0B14]/50 backdrop-blur-sm -z-10"></div>
             
             <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Horizontal Connection Line (Desktop) */}
                <div className="hidden md:block absolute top-[2.5rem] left-[16%] w-[68%] h-0.5 border-t border-dashed border-gray-700/50 z-0"></div>

                {[
                    { 
                        step: "01", 
                        title: "Connect Tools", 
                        desc: "Integrate with 50+ apps like Slack, Jira, and CRM in one click.",
                        icon: Settings 
                    },
                    { 
                        step: "02", 
                        title: "Configure Workflows", 
                        desc: "Use our visual builder to define triggers, actions, and AI logic.",
                        icon: Layers 
                    },
                    { 
                        step: "03", 
                        title: "Automate & Scale", 
                        desc: "Launch your agents and watch your productivity soar.",
                        icon: Zap 
                    }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-[#13131a] border border-white/10 flex items-center justify-center mb-8 shadow-xl relative group-hover:border-brand-500/50 transition-colors">
                            <item.icon className="text-brand-400 w-8 h-8" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-xs font-bold border border-[#0B0B14]">
                                {item.step}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm max-w-xs">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Security & Reliability */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                    Enterprise Grade
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Security & Reliability You Can Trust</h2>
                <p className="text-gray-400 mb-8 text-lg">Built for scale, secured for peace of mind. FlowNest ensures your data is protected and your workflows never stop.</p>
                
                <div className="space-y-6">
                    {[
                        { icon: Lock, title: "End-to-End Encryption", text: "AES-256 encryption for data at rest and in transit." },
                        { icon: Cloud, title: "Global Scalability", text: "Infrastructure that scales automatically with your needs." },
                        { icon: Shield, title: "99.9% Uptime SLA", text: "Guaranteed availability for mission-critical workflows." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="mt-1 w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                                <item.icon className="w-5 h-5 text-brand-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-600/10 blur-[80px] rounded-full"></div>
                <div className="glass-card rounded-3xl p-8 border border-white/10 relative z-10 flex items-center justify-center min-h-[400px]">
                    <div className="relative w-48 h-48">
                         {/* Abstract Shield/Lock Graphic */}
                         <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-purple-800 rounded-3xl opacity-20 blur-xl"></div>
                         <div className="absolute inset-0 border border-brand-500/30 rounded-3xl flex items-center justify-center backdrop-blur-md bg-white/5">
                             <Shield className="w-20 h-20 text-brand-400" />
                         </div>
                         <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#1A1A24] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg animate-bounce">
                             <Lock className="w-8 h-8 text-green-400" />
                         </div>
                         <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#1A1A24] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg animate-pulse">
                             <Cloud className="w-8 h-8 text-blue-400" />
                         </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[100px] -z-10 pointer-events-none"></div>
         <h2 className="text-4xl md:text-5xl font-bold mb-8">Build smarter workflows with FlowNest</h2>
         <p className="text-xl text-gray-400 mb-10">Join thousands of companies automating their future today.</p>
         <button 
            onClick={() => onNavigate('signup')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50"
         >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
         </button>
      </section>

    </div>
  );
}

export default PlatformPage;