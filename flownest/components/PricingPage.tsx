import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Star } from 'lucide-react';

interface PricingPageProps {
    onNavigate: (page: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "$0" : "$0",
      period: "forever",
      description: "Perfect for individuals and small side projects.",
      features: [
        "1 AI Agent",
        "500 Automations / mo",
        "Basic Workflow Builder",
        "Community Support",
        "1 Team Member"
      ],
      cta: "Start for Free",
      action: 'signup',
      highlight: false
    },
    {
      name: "Pro",
      price: billingCycle === 'monthly' ? "$49" : "$39",
      period: "per user / mo",
      description: "For growing teams that need more power and speed.",
      features: [
        "5 AI Agents",
        "10,000 Automations / mo",
        "Advanced Logic & Routing",
        "Priority Email Support",
        "5 Team Members",
        "Analytics Dashboard"
      ],
      cta: "Get Started",
      action: 'signup',
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs.",
      features: [
        "Unlimited AI Agents",
        "Unlimited Automations",
        "SSO & Advanced Security",
        "Dedicated Success Manager",
        "Unlimited Team Members",
        "Custom Integrations",
        "SLA Guarantee"
      ],
      cta: "Contact Sales",
      action: 'contact',
      highlight: false
    }
  ];

  const faqs = [
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Prorated charges will apply." },
    { q: "What happens if I exceed my automation limit?", a: "We'll notify you when you reach 80% and 100% of your limit. You can upgrade or pay for overages." },
    { q: "Is there a free trial for the Pro plan?", a: "Yes, we offer a 14-day free trial for the Pro plan. No credit card required." },
    { q: "Do you offer discounts for non-profits?", a: "Yes, we offer a 20% discount for registered non-profit organizations. Contact support to apply." }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="text-center px-4 mb-20 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium"
        >
          Pricing
        </motion.div>
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-100 to-brand-300"
        >
          Simple, Transparent <br /> <span className="text-brand-500">Pricing</span>
        </motion.h1>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Start for free, scale as you grow. No hidden fees.
        </motion.p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-8 bg-white/10 rounded-full p-1 relative transition-colors duration-300 hover:bg-white/20"
            >
                <div className={`w-6 h-6 bg-brand-500 rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-6' : ''}`}></div>
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-brand-400 text-xs ml-1">(Save 20%)</span>
            </span>
        </div>
      </section>

      {/* 2. Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative rounded-3xl p-8 border flex flex-col ${plan.highlight ? 'bg-brand-900/10 border-brand-500/50 shadow-2xl shadow-brand-900/20' : 'glass-card border-white/10'}`}
                >
                    {plan.highlight && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <Star size={12} fill="currentColor" /> Most Popular
                        </div>
                    )}
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm text-gray-400 min-h-[40px]">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-end gap-1">
                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                            <span className="text-sm text-gray-500 mb-1">/{plan.period}</span>
                        </div>
                    </div>

                    <div className="flex-1 mb-8">
                        <ul className="space-y-4">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-brand-400' : 'text-gray-500'}`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button 
                        onClick={() => onNavigate(plan.action)}
                        className={`w-full py-3 rounded-full font-medium transition-all ${plan.highlight ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/25' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                    >
                        {plan.cta}
                    </button>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 mb-32 hidden md:block">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Compare Features</h2>
          </div>
          
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
              <div className="overflow-x-auto">
                  <table className="w-full">
                      <thead>
                          <tr className="bg-white/5 border-b border-white/10 text-left">
                              <th className="p-6 text-gray-400 font-medium w-1/3">Features</th>
                              <th className="p-6 text-white font-bold w-1/6 text-center">Starter</th>
                              <th className="p-6 text-brand-400 font-bold w-1/6 text-center">Pro</th>
                              <th className="p-6 text-white font-bold w-1/6 text-center">Enterprise</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                          {[
                              { name: "Workflow Automations", starter: "500", pro: "10,000", ent: "Unlimited" },
                              { name: "AI Agents", starter: "1", pro: "5", ent: "Unlimited" },
                              { name: "Team Members", starter: "1", pro: "5", ent: "Unlimited" },
                              { name: "Data Retention", starter: "7 days", pro: "30 days", ent: "Unlimited" },
                              { name: "Support", starter: "Community", pro: "Priority Email", ent: "24/7 Dedicated" },
                              { name: "API Access", starter: false, pro: true, ent: true },
                              { name: "SSO", starter: false, pro: false, ent: true },
                              { name: "Custom Integrations", starter: false, pro: false, ent: true },
                          ].map((row, i) => (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                  <td className="p-6 text-sm text-gray-300">{row.name}</td>
                                  <td className="p-6 text-center text-sm text-gray-400">
                                      {typeof row.starter === 'boolean' ? (row.starter ? <Check className="inline w-5 h-5 text-green-500"/> : <X className="inline w-5 h-5 text-gray-600"/>) : row.starter}
                                  </td>
                                  <td className="p-6 text-center text-sm text-white font-medium">
                                      {typeof row.pro === 'boolean' ? (row.pro ? <Check className="inline w-5 h-5 text-brand-400"/> : <X className="inline w-5 h-5 text-gray-600"/>) : row.pro}
                                  </td>
                                  <td className="p-6 text-center text-sm text-gray-400">
                                      {typeof row.ent === 'boolean' ? (row.ent ? <Check className="inline w-5 h-5 text-green-500"/> : <X className="inline w-5 h-5 text-gray-600"/>) : row.ent}
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 mb-32">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Everything you need to know about billing and plans.</p>
          </div>

          <div className="space-y-4">
              {faqs.map((item, i) => (
                  <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
          </div>
      </section>

      {/* 6. CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[100px] -z-10 pointer-events-none"></div>
         <h2 className="text-4xl md:text-5xl font-bold mb-8">Start free. Upgrade anytime.</h2>
         <p className="text-xl text-gray-400 mb-10">Join thousands of companies automating their future today.</p>
         <button 
            onClick={() => onNavigate('signup')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50"
         >
            <span>Get Started for Free</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
         </button>
      </section>

    </div>
  );
};

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-card rounded-xl border border-white/5 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
                <span className="font-medium text-white">{question}</span>
                {isOpen ? <ChevronUp className="text-gray-400 w-5 h-5" /> : <ChevronDown className="text-gray-400 w-5 h-5" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default PricingPage;