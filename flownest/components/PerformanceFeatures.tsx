import React from 'react';
import { motion } from 'framer-motion';
import { Settings, MessageSquare, Edit3, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    id: "01/",
    title: "Configure Tasks Integrations",
    description: "Connect your systems FlowNest AI handles everything from task creation to completion.",
    icon: Settings
  },
  {
    id: "02/",
    title: "Effortless Conversation Automation",
    description: "Stay engaged 24/7 with customers through AI-driven auto-responses and smart labeling.",
    icon: MessageSquare
  },
  {
    id: "03/",
    title: "Shape Your AI to Reflect How You Work",
    description: "With FlowNest AI, each team member can build a virtual assistant that mirrors their style.",
    icon: Edit3
  },
  {
    id: "04/",
    title: "Set a New Standard in Service Excellence",
    description: "FlowNest AI ensures fast, high-quality responses for consistently exceptional service.",
    icon: Award
  }
];

const PerformanceFeatures: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0B0B14] via-brand-900/10 to-[#0B0B14]">
        {/* Decorative Blur */}
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Next-Level Performance <br/> Driven by FlowNest AI</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all group"
            >
              <div className="text-xs font-mono text-brand-400 mb-4">{feature.id}</div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-brand-300 transition-colors">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-16">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-brand-600/25 transition-all">
                Get Started
            </button>
            <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                Request a Demo <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceFeatures;