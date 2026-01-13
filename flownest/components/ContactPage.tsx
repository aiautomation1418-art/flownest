import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Linkedin, User } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate submission
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="pt-32 pb-20 overflow-hidden">
        {/* Hero */}
        <section className="text-center px-4 mb-20 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -z-10"></div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium"
             >
               Contact Us
             </motion.div>
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300"
             >
               Get in Touch with <br /> <span className="text-brand-500">FlowNest</span>
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
             >
               Have questions about our platform, pricing, or need support? We're here to help.
             </motion.p>
        </section>

        <section className="max-w-7xl mx-auto px-4 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10 rounded-3xl border border-white/10"
                >
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                             <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                             <input 
                                type="text" 
                                id="company" 
                                name="company" 
                                value={formData.company} 
                                onChange={handleChange}
                                className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                                placeholder="Acme Inc."
                            />
                        </div>
                         <div>
                             <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                             <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Send Message
                        </button>
                        
                        {status === 'success' && (
                            <p className="text-green-400 text-center text-sm mt-2">Message sent successfully! We'll be in touch soon.</p>
                        )}
                        {status === 'error' && (
                             <p className="text-red-400 text-center text-sm mt-2">Please fill in all required fields.</p>
                        )}
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-6"
                >
                    <div className="glass-card p-8 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-brand-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                            <Mail className="text-brand-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">Email Support</h3>
                            <p className="text-gray-400 text-sm mb-2">Our team is here to help.</p>
                            <a href="mailto:support@flownest.com" className="text-brand-300 hover:text-white transition-colors">support@flownest.com</a>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-brand-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                             <MessageSquare className="text-purple-400 w-6 h-6" />
                        </div>
                         <div>
                            <h3 className="text-lg font-bold mb-1">Sales Inquiry</h3>
                            <p className="text-gray-400 text-sm mb-2">Questions about plans?</p>
                            <a href="mailto:sales@flownest.com" className="text-brand-300 hover:text-white transition-colors">sales@flownest.com</a>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-brand-500/30 transition-colors">
                         <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                             <MapPin className="text-blue-400 w-6 h-6" />
                        </div>
                         <div>
                            <h3 className="text-lg font-bold mb-1">Office</h3>
                            <p className="text-gray-400 text-sm">2972 Westheimer Rd.<br/>Santa Ana, Illinois 85486</p>
                        </div>
                    </div>
                    
                    {/* FAQ Links */}
                    <div className="pt-8">
                         <h3 className="text-xl font-bold mb-4">Common Questions</h3>
                         <ul className="space-y-3">
                             {['How do I reset my password?', 'Can I upgrade my subscription?', 'Is there a free trial?'].map((q, i) => (
                                 <li key={i} className="flex items-center gap-2 text-gray-400 hover:text-brand-300 cursor-pointer transition-colors text-sm">
                                     <ArrowRight size={14} /> {q}
                                 </li>
                             ))}
                         </ul>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Owner/Founder Section */}
        <section className="max-w-7xl mx-auto px-4 mb-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card max-w-3xl mx-auto rounded-3xl p-8 md:p-12 border border-brand-500/30 relative overflow-hidden text-center group"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-600/10 to-transparent -z-10 opacity-50"></div>
                <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-brand-500/30 rounded-full blur-3xl"></div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A1A24] border border-brand-500/50 shadow-[0_0_20px_rgba(124,58,237,0.3)] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <User size={32} className="text-brand-400" />
                </div>

                <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">Connect with the Owner</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-400 mb-10 tracking-tight">MEHRAN ALI</h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                    <a href="https://www.linkedin.com/in/mehran--ali/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/item w-full md:w-auto justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-[#0077b5] group-hover/item:border-[#0077b5] group-hover/item:shadow-lg transition-all duration-300">
                            <Linkedin size={20} className="text-gray-300 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-400 group-hover/item:text-white transition-colors font-medium">LinkedIn</span>
                    </a>

                    <a href="tel:+93143401418" className="flex items-center gap-3 group/item w-full md:w-auto justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-green-600 group-hover/item:border-green-500 group-hover/item:shadow-lg transition-all duration-300">
                            <Phone size={20} className="text-gray-300 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-400 group-hover/item:text-white transition-colors font-medium">+93 143401418</span>
                    </a>

                    <a href="mailto:mehran.ali.1418@gmail.com" className="flex items-center gap-3 group/item w-full md:w-auto justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:border-brand-500 group-hover/item:shadow-lg transition-all duration-300">
                            <Mail size={20} className="text-gray-300 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-400 group-hover/item:text-white transition-colors font-medium">Email Me</span>
                    </a>
                </div>
            </motion.div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">We'd love to hear from you</h2>
            <p className="text-gray-400 mb-8">Whether you have a question about features, trials, pricing, or need a demo, our team is ready to answer all your questions.</p>
        </section>
    </div>
  );
};

export default ContactPage;