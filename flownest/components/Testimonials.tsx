import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Wade Warren",
    role: "Figma",
    text: "I couldn't be more impressed! From start to finish, the FlowNest AI team went above and beyond to make sure everything was perfect. They were professional, responsive, and truly cared about my needs.",
    img: "https://picsum.photos/50/50?random=100"
  },
  {
    name: "Jacob Jones",
    role: "Adobe Inc.",
    text: "I couldn't be more impressed with the service I received! The platform is incredible, intuitive, and genuinely saves us hours every week. FlowNest is the future.",
    img: "https://picsum.photos/50/50?random=101"
  },
  {
    name: "Leslie Alexander",
    role: "Microsoft",
    text: "I've been using FlowNest AI for a few weeks now, and I'm blown away by the results. It's well-designed, incredibly easy to use, and delivers exactly what it promises.",
    img: "https://picsum.photos/50/50?random=102"
  },
  {
    name: "Dianne Russell",
    role: "3M Company",
    text: "FlowNest AI truly changed the game for us! Their innovative approach to tackling our challenges led to results we didn't think were possible.",
    img: "https://picsum.photos/50/50?random=103"
  },
  {
    name: "Jenny Wilson",
    role: "AGCO Corporation",
    text: "This design system has been incredibly helpful for developing high-quality websites. We truly appreciate having access to such a powerful tool.",
    img: "https://picsum.photos/50/50?random=104"
  },
  {
    name: "Darrell Steward",
    role: "Cabot Corp",
    text: "I've worked with several professionals before, but none have been as thorough and supportive as FlowNest. Their AI router is seamless.",
    img: "https://picsum.photos/50/50?random=105"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#0E0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">See How Our Clients Are Living the <br/> Future of Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#15151E] border border-white/5 p-6 rounded-2xl hover:border-brand-500/30 transition-colors"
            >
               <div className="flex items-center gap-3 mb-4">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                      <h4 className="text-sm font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
               </div>
               <p className="text-sm text-gray-400 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;