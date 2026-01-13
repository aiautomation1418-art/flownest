import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import WhyChoose from './components/WhyChoose';
import VirtualAgents from './components/VirtualAgents';
import IntelligentRouting from './components/IntelligentRouting';
import ContextAwareness from './components/ContextAwareness';
import PerformanceFeatures from './components/PerformanceFeatures';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PlatformPage from './components/PlatformPage';
import SolutionsPage from './components/SolutionsPage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AIAgentWidget from './components/AIAgentWidget';
import CustomCursor from './components/CustomCursor';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    // If we have specific pages, route to them, otherwise default to home or handle anchors
    if (['platform', 'solutions', 'pricing', 'about', 'contact', 'blog', 'login', 'signup', 'home'].includes(page)) {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    } else {
        // For other links that are anchors on home page, strictly speaking we should check if they exist
        // For now, we treat 'home' as the main view.
        setCurrentPage('home');
        if (page !== 'home') {
            // If it's an anchor link like #pricing, we might want to scroll there after rendering home
            // Simple timeout to allow render
            setTimeout(() => {
                const el = document.getElementById(page);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }
  };

  const renderContent = () => {
    if (currentPage === 'platform') return <PlatformPage onNavigate={navigateTo} />;
    if (currentPage === 'solutions') return <SolutionsPage onNavigate={navigateTo} />;
    if (currentPage === 'pricing') return <PricingPage onNavigate={navigateTo} />;
    if (currentPage === 'about') return <AboutPage onNavigate={navigateTo} />;
    if (currentPage === 'contact') return <ContactPage />;
    if (currentPage === 'blog') return <BlogPage onNavigate={navigateTo} />;
    if (currentPage === 'login') return <LoginPage onNavigate={navigateTo} />;
    if (currentPage === 'signup') return <SignupPage onNavigate={navigateTo} />;
    
    return (
        <>
            <Hero onNavigate={navigateTo} />
            <FeatureGrid />
            <WhyChoose />
            <VirtualAgents />
            <IntelligentRouting />
            <ContextAwareness />
            <PerformanceFeatures />
            <DashboardPreview />
            <Testimonials />
            
            {/* Final CTA Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden border border-brand-500/30">
                {/* Inner Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-600/10 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-600/20 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/30">
                    <Sparkles className="w-8 h-8 text-brand-400" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-200">
                    Experience the Power of <br/> FlowNest AI Start
                  </h2>
                  <p className="text-xl text-gray-400 mb-10 max-w-2xl">
                    Join thousands of forward-thinking companies automating their future today.
                  </p>
                  <button 
                    onClick={() => navigateTo('signup')}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full hover:from-brand-500 hover:to-purple-500 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40"
                  >
                    <span className="mr-2">Start Free Demo Today</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
        </>
    );
  };

  const isAuthPage = ['login', 'signup'].includes(currentPage);

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-brand-600 selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[128px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      {!isAuthPage && <Navbar onNavigate={navigateTo} currentPage={currentPage} />}
      
      <main>
        {renderContent()}
      </main>

      {/* Floating AI Agent */}
      <AIAgentWidget />

      {!isAuthPage && <Footer onNavigate={navigateTo} />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;