import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Check, ShieldCheck, CreditCard, Zap } from 'lucide-react';

interface SignupPageProps {
    onNavigate: (page: string) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'password') {
        calculateStrength(value);
    }
    // Clear errors on change
    if (errors[name]) {
        setErrors(prev => ({...prev, [name]: ''}));
    }
  };

  const calculateStrength = (pass: string) => {
      let score = 0;
      if (!pass) {
          setPasswordStrength(0);
          return;
      }
      if (pass.length > 7) score += 1;
      if (/[A-Z]/.test(pass)) score += 1;
      if (/[0-9]/.test(pass)) score += 1;
      if (/[^A-Za-z0-9]/.test(pass)) score += 1;
      setPasswordStrength(score);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    // Simulate signup
    console.log("Signing up with:", formData);
    onNavigate('platform');
  };

  const getStrengthLabel = () => {
      if (passwordStrength === 0) return { text: '', color: 'bg-gray-700' };
      if (passwordStrength < 2) return { text: 'Weak', color: 'bg-red-500' };
      if (passwordStrength < 4) return { text: 'Medium', color: 'bg-yellow-500' };
      return { text: 'Strong', color: 'bg-green-500' };
  };

  const strengthInfo = getStrengthLabel();

  return (
    <div className="min-h-screen pt-10 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative backdrop-blur-xl bg-white/5">
            {/* Logo */}
            <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/20 cursor-pointer" onClick={() => onNavigate('home')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white">
                        <path d="M4 19C4 19 8 10 16 6C20 4 22 4 22 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 13C4 13 7 9 11 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                        <circle cx="4" cy="19" r="2.5" fill="currentColor" stroke="none"/>
                    </svg>
                </div>
            </div>

            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2 text-white">Get Started with FlowNest</h1>
                <p className="text-gray-400 text-sm">Create your account and automate workflows with AI</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Full Name</label>
                    <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full bg-[#1A1A24] border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-gray-600`}
                        placeholder="John Doe"
                    />
                    {errors.fullName && <span className="text-red-400 text-xs ml-1">{errors.fullName}</span>}
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Work Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-[#1A1A24] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-gray-600`}
                        placeholder="name@company.com"
                    />
                    {errors.email && <span className="text-red-400 text-xs ml-1">{errors.email}</span>}
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Company Name</label>
                    <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full bg-[#1A1A24] border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-gray-600`}
                        placeholder="Acme Inc."
                    />
                    {errors.company && <span className="text-red-400 text-xs ml-1">{errors.company}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full bg-[#1A1A24] border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-gray-600 pr-10`}
                                placeholder="Create password"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Confirm Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full bg-[#1A1A24] border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 transition-all placeholder:text-gray-600`}
                            placeholder="Confirm password"
                        />
                         {errors.confirmPassword && <span className="text-red-400 text-xs ml-1">{errors.confirmPassword}</span>}
                    </div>
                </div>

                {/* Strength Indicator */}
                {formData.password && (
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-400">Password Strength:</span>
                            <span className={`font-medium ${strengthInfo.color.replace('bg-', 'text-')}`}>{strengthInfo.text}</span>
                        </div>
                        <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div 
                                className={`h-full transition-all duration-300 ${strengthInfo.color}`} 
                                style={{ width: `${(passwordStrength / 4) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center gap-2 mt-4"
                >
                    Create Account
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                    Already have an account?{' '}
                    <button onClick={() => onNavigate('login')} className="text-white font-medium hover:text-brand-300 transition-colors">
                        Login
                    </button>
                </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-2 text-[10px] text-gray-500 text-center">
                 <div className="flex flex-col items-center gap-1">
                     <ShieldCheck size={14} className="text-gray-400"/>
                     <span>Secure Signup</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                     <CreditCard size={14} className="text-gray-400"/>
                     <span>No Credit Card</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                     <Zap size={14} className="text-gray-400"/>
                     <span>14-Day Free Trial</span>
                 </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;