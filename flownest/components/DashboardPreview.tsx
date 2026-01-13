import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Mic, Image, Paperclip, Send, User, Bot, X, Calendar, MessageSquare, LayoutDashboard, Sparkles, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ask' | 'search' | 'communication' | 'calendar'>('ask');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [searchQuery, setShowQuery] = useState('');
  
  // Calendar State
  const [calendarViewDate, setCalendarViewDate] = useState(new Date());
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date | null>(new Date());

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'How do I sign up for an account?',
    'How find my account?',
    'How can I update my profile?',
    'How do I delete task?',
    'What are the login options available?',
    'Where can I access my info?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, activeTab]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // 1. Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    
    // Only clear suggestions if it's the first message
    if (messages.length === 0) {
        setShowSuggestions(false);
    }
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // 2. Simulate AI response
    setTimeout(() => {
      let responseText = "I can help with that! FlowNest automates this process entirely.";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('sign up')) responseText = "To sign up, simply click the 'Get Started' button in the top right corner. It only takes a minute!";
      else if (lowerText.includes('delete')) responseText = "You can delete tasks by selecting the task card and clicking the trash icon in the toolbar.";
      else if (lowerText.includes('profile')) responseText = "Head to Settings > Profile to update your personal information and preferences.";
      else if (lowerText.includes('login')) responseText = "We support Email/Password, Google SSO, and Microsoft Entra ID login methods.";
      else if (lowerText.includes('hello') || lowerText.includes('hi')) responseText = "Hello! I'm FlowNest AI. How can I assist you with your workflow today?";
      else if (lowerText.includes('price')) responseText = "Our pricing starts at free for individuals. Check out the Pricing page for team plans.";

      const aiMsg: Message = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  // Calendar Helpers
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const handlePrevMonth = () => {
      setCalendarViewDate(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
      setCalendarViewDate(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1));
  };

  const renderCalendarContent = () => {
      const year = calendarViewDate.getFullYear();
      const month = calendarViewDate.getMonth();
      
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startDay = new Date(year, month, 1).getDay(); // 0 is Sunday
      
      const days = [];
      // Empty slots
      for (let i = 0; i < startDay; i++) {
          days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
      }
      
      // Days
      for (let d = 1; d <= daysInMonth; d++) {
          const date = new Date(year, month, d);
          const isSelected = selectedCalendarDate?.toDateString() === date.toDateString();
          const isToday = new Date().toDateString() === date.toDateString();
          
          days.push(
              <motion.button
                  key={d}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCalendarDate(date)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors relative
                      ${isSelected 
                          ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/40' 
                          : isToday 
                              ? 'border border-brand-500 text-brand-400' 
                              : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }
                  `}
              >
                  {d}
                  {isToday && !isSelected && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-brand-500"></div>}
              </motion.button>
          );
      }
      return days;
  };

  const renderContent = () => {
      switch(activeTab) {
          case 'search':
              return (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-500">
                      <Search className="w-16 h-16 mb-4 opacity-20" />
                      <h3 className="text-lg font-medium text-gray-300">Global Search</h3>
                      <p className="text-sm">Search across tasks, messages, and files.</p>
                  </div>
              );
          case 'communication':
              return (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-500">
                      <MessageSquare className="w-16 h-16 mb-4 opacity-20" />
                      <h3 className="text-lg font-medium text-gray-300">Communication Hub</h3>
                      <p className="text-sm">No new notifications.</p>
                  </div>
              );
          case 'calendar':
              return (
                   <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#0B0B14]">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#1A1A24] border border-white/10 rounded-3xl p-6 shadow-2xl w-full max-w-sm"
                      >
                          {/* Calendar Header */}
                          <div className="flex justify-between items-center mb-6">
                              <h3 className="text-lg font-bold text-white">
                                  {months[calendarViewDate.getMonth()]} <span className="text-brand-400">{calendarViewDate.getFullYear()}</span>
                              </h3>
                              <div className="flex gap-2">
                                  <button onClick={handlePrevMonth} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                      <ChevronLeft size={18} />
                                  </button>
                                  <button onClick={handleNextMonth} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                      <ChevronRight size={18} />
                                  </button>
                              </div>
                          </div>

                          {/* Weekdays */}
                          <div className="grid grid-cols-7 gap-2 mb-2">
                              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                  <div key={i} className="text-center text-xs font-semibold text-gray-500 py-1">
                                      {day}
                                  </div>
                              ))}
                          </div>

                          {/* Days Grid */}
                          <div className="grid grid-cols-7 gap-2 place-items-center">
                              {renderCalendarContent()}
                          </div>
                      </motion.div>

                      {/* Selected Date Info */}
                      <AnimatePresence mode="wait">
                          {selectedCalendarDate && (
                              <motion.div 
                                key={selectedCalendarDate.toString()}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-6 flex flex-col items-center text-center"
                              >
                                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Selected Date</div>
                                  <div className="text-xl font-medium text-white flex items-center gap-2">
                                      <Calendar size={18} className="text-brand-400" />
                                      {selectedCalendarDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                  </div>
                                  <div className="mt-4 flex gap-2">
                                      <button className="px-4 py-2 bg-brand-600 hover:bg-brand-500 rounded-full text-xs font-bold text-white transition-colors">
                                          Add Event
                                      </button>
                                      <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold text-white transition-colors">
                                          View Agenda
                                      </button>
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  </div>
              );
          case 'ask':
          default:
              return (
                <>
                    {/* Empty State / Suggestions */}
                    {messages.length === 0 && showSuggestions ? (
                        <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 flex items-center justify-center mb-8 shadow-lg shadow-brand-600/20"
                            >
                                <Sparkles className="text-white w-8 h-8" />
                            </motion.div>
                            
                            <h3 className="text-xl font-bold text-white mb-8">How can I help you today?</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
                                {suggestions.map((q, i) => (
                                    <motion.button 
                                        key={i} 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleSendMessage(q)}
                                        className="p-4 rounded-xl bg-[#1A1A24] border border-white/5 hover:border-brand-500/50 hover:bg-[#20202b] transition-all text-xs text-gray-400 text-left h-full flex items-center"
                                    >
                                        {q}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-gray-700' : 'bg-brand-600/20 border border-brand-500/30'}`}>
                                        {msg.sender === 'user' ? <User size={14} className="text-gray-300"/> : <Bot size={14} className="text-brand-400"/>}
                                    </div>
                                    <div className={`py-3 px-5 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                                        msg.sender === 'user' 
                                            ? 'bg-brand-600 text-white rounded-tr-none' 
                                            : 'bg-[#1A1A24] border border-white/10 text-gray-300 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-4">
                                     <div className="w-8 h-8 rounded-full bg-brand-600/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                                        <Bot size={14} className="text-brand-400"/>
                                    </div>
                                    <div className="py-4 px-5 rounded-2xl rounded-tl-none bg-[#1A1A24] border border-white/10 flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="p-6 border-t border-white/5 bg-[#0B0B14]">
                        <div className="relative bg-[#1A1A24] rounded-2xl border border-white/10 p-2 focus-within:border-brand-500/50 transition-colors">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything..." 
                                className="w-full bg-transparent p-3 text-sm text-white focus:outline-none mb-2 placeholder:text-gray-600" 
                            />
                            <div className="flex justify-between items-center px-2 pb-1">
                                <div className="flex gap-2 text-gray-500">
                                    <Paperclip size={18} className="hover:text-brand-400 cursor-pointer transition-colors"/>
                                    <Image size={18} className="hover:text-brand-400 cursor-pointer transition-colors"/>
                                    <Mic size={18} className="hover:text-brand-400 cursor-pointer transition-colors"/>
                                </div>
                                <button 
                                    onClick={() => handleSendMessage(inputValue)}
                                    disabled={!inputValue.trim()}
                                    className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center hover:bg-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={14} className="text-white"/>
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-gray-600">AI can make mistakes. Check important info.</span>
                        </div>
                    </div>
                </>
              );
      }
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Power Your Next Move <br/> with FlowNest AI</h2>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f13] flex flex-col md:h-[700px] h-[600px]"
      >
        {/* Fake Window Controls */}
        <div className="h-10 bg-[#1A1A24] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
             <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-[#13131a] border-r border-white/5 p-4 hidden md:flex flex-col gap-4">
                <div className="flex items-center gap-2 px-2 py-2 mb-4">
                    <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
                        <Sparkles size={14} className="text-white"/>
                    </div>
                    <span className="font-bold">FlowNest</span>
                </div>
                
                <div className="space-y-1">
                    <button 
                        onClick={() => setActiveTab('ask')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'ask' ? 'bg-brand-600/10 text-brand-300' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        <Sparkles size={16} /> Ask FlowNest anything
                    </button>
                    <button 
                        onClick={() => setActiveTab('search')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'search' ? 'bg-brand-600/10 text-brand-300' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        <Search size={16} /> Search
                    </button>
                    <button 
                         onClick={() => setActiveTab('communication')}
                         className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'communication' ? 'bg-brand-600/10 text-brand-300' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        <MessageSquare size={16} /> Communication
                    </button>
                    <button 
                         onClick={() => setActiveTab('calendar')}
                         className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'calendar' ? 'bg-brand-600/10 text-brand-300' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                        <Calendar size={16} /> Calendar
                    </button>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                     <div className="flex items-center gap-2 px-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold">JD</div>
                         <div>
                             <div className="text-sm text-white">John Doe</div>
                             <div className="text-[10px] text-gray-500">Admin Workspace</div>
                         </div>
                     </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative bg-[#0B0B14]">
                {/* Header */}
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-[#0B0B14]">
                    <div className="flex items-center gap-2">
                        {activeTab === 'ask' && <span className="text-sm text-gray-400">Ask FlowNest anything</span>}
                        {activeTab === 'search' && <span className="text-sm text-gray-400">Search Workspace</span>}
                        {activeTab === 'communication' && <span className="text-sm text-gray-400">Team Chat</span>}
                        {activeTab === 'calendar' && <span className="text-sm text-gray-400">Calendar View</span>}
                    </div>
                    
                    {/* Top Right Search Bar */}
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setShowQuery(e.target.value)}
                                placeholder="Search..." 
                                className="bg-[#1A1A24] border border-white/10 rounded-full px-4 py-1.5 text-xs w-48 text-gray-300 focus:outline-none focus:border-brand-500 transition-all focus:w-64" 
                            />
                            {searchQuery ? (
                                <button 
                                    onClick={() => setShowQuery('')}
                                    className="absolute right-3 top-1.5 text-gray-500 hover:text-white"
                                >
                                    <X size={12} />
                                </button>
                            ) : (
                                <Search size={12} className="absolute right-3 top-2 text-gray-500 group-hover:text-gray-400 transition-colors"/>
                            )}
                        </div>
                         <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer relative">
                             <Bell size={14} />
                             <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                         </div>
                    </div>
                </div>

                {renderContent()}
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardPreview;