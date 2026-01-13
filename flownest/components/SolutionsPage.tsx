import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, TrendingUp, Megaphone, Settings, Users, ShoppingCart, Activity, Briefcase, Globe, ShieldCheck, ArrowRight, XCircle, CheckCircle, Zap } from 'lucide-react';

interface SolutionsPageProps {
    onNavigate: (page: string) => void;
}

const solutions = [
  {
    title: "Customer Support",
    icon: Headphones,
    description: "Automate responses and route tickets instantly.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50",
    problem: "Overwhelmed support teams and slow response times leading to churn.",
    solution: "AI agents that handle 80% of L1 queries instantly and route complex issues.",
    benefit: "24/7 Support coverage & 90% faster resolution times."
  },
  {
    title: "Sales Automation",
    icon: TrendingUp,
    description: "Qualify leads and schedule meetings on autopilot.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "group-hover:border-green-500/50",
    problem: "High-value leads slipping through cracks due to manual follow-up delays.",
    solution: "Instant lead qualification, enrichment, and automated meeting booking.",
    benefit: "3x Increase in qualified pipeline and faster deal cycles."
  },
  {
    title: "Marketing Assistants",
    icon: Megaphone,
    description: "Generate content and personalized campaigns.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50",
    problem: "Generic messaging that fails to convert and slow content production.",
    solution: "Hyper-personalized content generation and campaign management at scale.",
    benefit: "Higher engagement rates & 2x content output."
  },
  {
    title: "Operations",
    icon: Settings,
    description: "Streamline internal requests and approvals.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "group-hover:border-orange-500/50",
    problem: "Bottlenecks in approval workflows, data entry, and internal ticketing.",
    solution: "End-to-end process automation agents that work across your stack.",
    benefit: "Operational costs reduced by 40% and zero data errors."
  },
  {
    title: "HR & Recruitment",
    icon: Users,
    description: "Screen candidates and schedule interviews.",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "group-hover:border-pink-500/50",
    problem: "Recruiters spending endless hours screening unqualified resumes.",
    solution: "AI candidate scoring, automated screening calls, and scheduling.",
    benefit: "Time-to-hire reduced by 50% and better candidate experience."
  }
];

const industries = [
  { name: "SaaS", icon: Globe, desc: "Scale customer success without scaling headcount." },
  { name: "E-commerce", icon: ShoppingCart, desc: "Handle order inquiries and personalized recommendations." },
  { name: "Fintech", icon: ShieldCheck, desc: "Automate compliance checks and secure document processing." },
  { name: "Healthcare", icon: Activity, desc: "Streamline patient appointment scheduling and intake." },
  { name: "Enterprise", icon: Briefcase, desc: "Connect legacy systems with modern AI workflows." },
];

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="text-center px-4 mb-24 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] -z-10"></div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium"
        >
          Solutions
        </motion.div>
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300"
        >
          AI Solutions Built <br /> for <span className="text-brand-500">Every Team</span>
        </motion.h1>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Transform how your organization works. From support to sales, FlowNest provides tailored AI agents that integrate seamlessly with your existing tools.
        </motion.p>
      </section>

      {/* 2. Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`glass-card p-8 rounded-2xl border border-white/10 ${item.borderColor} transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden`}
                >
                    <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`${item.color} w-7 h-7`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>
                    
                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer">
                        Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 3. Use Case Details (Problem/Solution) */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep Dive: Real World Impact</h2>
            <p className="text-gray-400">See how FlowNest solves specific challenges.</p>
         </div>

         <div className="space-y-8">
            {solutions.slice(0, 3).map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Header */}
                        <div className="lg:col-span-1 flex flex-col justify-center">
                             <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 border border-white/5`}>
                                <item.icon className={`${item.color} w-6 h-6`} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-brand-300 font-medium mb-6">{item.benefit}</p>
                        </div>

                        {/* Comparison */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Problem */}
                            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-3 text-red-400 font-semibold">
                                    <XCircle size={18} />
                                    <span>The Problem</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.problem}</p>
                            </div>
                            
                            {/* Solution */}
                            <div className="bg-brand-600/5 border border-brand-500/20 rounded-xl p-6 relative">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500/10 blur-xl rounded-full"></div>
                                <div className="flex items-center gap-2 mb-3 text-brand-300 font-semibold">
                                    <CheckCircle size={18} />
                                    <span>FlowNest Solution</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.solution}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>

      {/* 4. Industry Focus */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Your Industry</h2>
            <p className="text-gray-400">Specialized knowledge bases for every sector.</p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
             {industries.map((ind, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-center flex flex-col items-center h-full"
                 >
                     <div className="w-10 h-10 rounded-full bg-[#1A1A24] flex items-center justify-center mb-4 border border-white/10 text-gray-300">
                         <ind.icon size={20} />
                     </div>
                     <h4 className="font-bold text-white mb-2">{ind.name}</h4>
                     <p className="text-xs text-gray-500 leading-tight">{ind.desc}</p>
                 </motion.div>
             ))}
         </div>
      </section>

      {/* 5. CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[100px] -z-10 pointer-events-none"></div>
         <h2 className="text-4xl md:text-5xl font-bold mb-8">Find the right solution with FlowNest</h2>
         <p className="text-xl text-gray-400 mb-10">Stop manually managing workflows. Start automating today.</p>
         <button 
            onClick={() => onNavigate('signup')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50"
         >
            <span>Explore Solutions</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
         </button>
      </section>

    </div>
  );
}

export default SolutionsPage;