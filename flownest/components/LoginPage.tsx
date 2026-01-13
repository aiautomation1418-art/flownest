import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Check } from 'lucide-react';

interface LoginPageProps {
    onNavigate: (page: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    console.log("Logging in with:", { email, password, rememberMe });
    onNavigate('platform'); // Redirect to platform/dashboard mock after login
  };

  return (
    <div className="min-h-screen pt-20 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative backdrop-blur-xl bg-white/5">
            {/* Logo */}
            <div className="flex justify-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/20 cursor-pointer" onClick={() => onNavigate('home')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white">
                        <path d="M4 19C4 19 8 10 16 6C20 4 22 4 22 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 13C4 13 7 9 11 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                        <circle cx="4" cy="19" r="2.5" fill="currentColor" stroke="none"/>
                    </svg>
                </div>
            </div>

            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2 text-white">Welcome Back</h1>
                <p className="text-gray-400 text-sm">Log in to your FlowNest account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Email address</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-gray-600"
                        placeholder="name@company.com"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Password</label>
                    <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#1A1A24] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-gray-600 pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${rememberMe ? 'bg-brand-600 border-brand-600' : 'border-gray-600 bg-transparent group-hover:border-gray-500'}`}>
                            {rememberMe && <Check size={12} className="text-white" />}
                        </div>
                        <input type="checkbox" className="hidden" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                    </label>
                    <button type="button" className="text-xs text-brand-400 hover:text-brand-300 transition-colors">
                        Forgot password?
                    </button>
                </div>

                <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/25 transition-all flex items-center justify-center gap-2 mt-2"
                >
                    Login
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                    New to FlowNest?{' '}
                    <button onClick={() => onNavigate('signup')} className="text-white font-medium hover:text-brand-300 transition-colors">
                        Get Started
                    </button>
                </p>
            </div>
        </div>
        
        <div className="text-center mt-8 text-xs text-gray-600">
            &copy; 2024 FlowNest AI. Secure Login.
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;