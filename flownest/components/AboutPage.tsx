import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Heart, Zap, ArrowRight, Users, Code, LineChart, Briefcase } from 'lucide-react';

interface AboutPageProps {
    onNavigate: (page: string) => void;
}

const values = [
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "We constantly push the boundaries of what's possible with AI.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  },
  {
    title: "Trust",
    icon: Shield,
    desc: "Security and reliability are the foundation of everything we build.",
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    title: "Simplicity",
    icon: Zap,
    desc: "We make complex AI technologies accessible and easy to use.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "Customer-first",
    icon: Heart,
    desc: "Your success is our success. We build to solve your real problems.",
    color: "text-pink-400",
    bg: "bg-pink-500/10"
  }
];

const team = [
  { role: "CEO & Founder", icon: Briefcase },
  { role: "CTO", icon: Code },
  { role: "Head of AI", icon: Zap },
  { role: "Product Lead", icon: Target },
  { role: "Head of Design", icon: Lightbulb },
  { role: "Lead Engineer", icon: Code },
  { role: "Growth Manager", icon: LineChart },
  { role: "Customer Success", icon: Heart },
];

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="text-center px-4 mb-24 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -z-10"></div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium"
        >
          About FlowNest
        </motion.div>
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300"
        >
          Redefining Work with <br /> <span className="text-brand-500">Artificial Intelligence</span>
        </motion.h1>
      </section>

      {/* 2. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-10 border border-white/10 relative overflow-hidden flex flex-col justify-center min-h-[300px]"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 border border-brand-500/20">
                    <Target className="text-brand-400 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                    To empower every team with intelligent automation, liberating humans from repetitive tasks so they can focus on creativity, strategy, and meaningful work.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-10 border border-white/10 relative overflow-hidden flex flex-col justify-center min-h-[300px]"
            >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                    <Lightbulb className="text-purple-400 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                    A world where organizations run on autopilot, driven by AI agents that are as capable, reliable, and intuitive as the best human experts.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="max-w-4xl mx-auto px-4 mb-32 relative">
          <div className="absolute left-0 top-0 w-full h-full bg-brand-600/5 blur-[80px] -z-10"></div>
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-invert prose-lg mx-auto text-gray-400 leading-relaxed">
                  <p className="mb-6">
                      FlowNest began with a simple observation: despite the explosion of SaaS tools, teams were working harder, not smarter. We saw brilliant people buried under mountains of busywork—data entry, scheduling, routing tickets, and copy-pasting between apps.
                  </p>
                  <p>
                      We asked ourselves: <span className="text-white font-medium">What if software could actually do the work, not just manage it?</span>
                  </p>
                  <p className="mt-6">
                      That question led to the creation of FlowNest. We gathered a team of AI researchers, designers, and engineers obsessed with automation. Today, we're building the intelligent layer that sits above your stack, orchestrating workflows with the precision of a machine and the nuance of a human.
                  </p>
              </div>
          </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
              <p className="text-gray-400">The principles that guide our work and culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-center group"
                  >
                      <div className={`w-12 h-12 rounded-full ${val.bg} mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <val.icon className={`${val.color} w-6 h-6`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* 5. Team Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
              <p className="text-gray-400">The minds behind the machine.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all text-center group"
                  >
                      <div className="w-24 h-24 mx-auto rounded-full bg-[#1A1A24] border border-white/10 mb-4 flex items-center justify-center overflow-hidden relative">
                          <Users className="w-8 h-8 text-gray-600" />
                          {/* Placeholder avatar gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent to-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{member.role}</h3>
                      <div className="flex justify-center mt-2">
                           <div className="p-1.5 rounded-full bg-white/5 text-gray-400">
                               <member.icon size={14} />
                           </div>
                      </div>
                  </motion.div>
              ))}
          </div>
      </section>

      {/* 6. CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[100px] -z-10 pointer-events-none"></div>
         <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the future of work <br/> with FlowNest</h2>
         <p className="text-xl text-gray-400 mb-10">Ready to transform your organization?</p>
         <button 
            onClick={() => onNavigate('signup')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50"
         >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
         </button>
      </section>

    </div>
  );
};

export default AboutPage;