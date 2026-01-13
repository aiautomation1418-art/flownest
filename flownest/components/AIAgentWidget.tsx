import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIAgentWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hi! How can I help you today?", 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I can definitely help you with that! FlowNest allows you to automate workflows effortlessly.",
        "Could you provide more details about the integration you are looking for?",
        "That's an interesting question. Our documentation covers this in the 'Advanced Routing' section.",
        "I'd recommend checking out our Solutions page for specific use cases.",
        "You can configure AI agents to handle this task automatically in the dashboard."
      ];
      // Simple logic: if user asks "hello", reply specific, else random
      const lowerInput = newUserMsg.text.toLowerCase();
      let responseText = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
          responseText = "Hello there! Ready to automate your work?";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
          responseText = "We offer flexible pricing starting with a free tier. Check our Pricing page for more.";
      }

      const newBotMsg: Message = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-96 z-50 origin-bottom-right"
          >
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-900/40 bg-[#0f0f16]/95 backdrop-blur-xl flex flex-col h-[500px] max-h-[70vh]">
                {/* Header */}
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-brand-600/20 to-purple-600/20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center shadow-lg shadow-brand-500/20 relative">
                             <Bot size={20} className="text-white" />
                             <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B0B14]"></span>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white leading-tight">FlowNest AI</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-brand-200 font-medium">Always active</span>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Chat Body */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
                    {messages.map((msg) => (
                        <div 
                            key={msg.id} 
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                {/* Avatar */}
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-gray-700' : 'bg-brand-600/20 border border-brand-500/30'}`}>
                                    {msg.sender === 'user' ? <User size={12} className="text-gray-300"/> : <Sparkles size={12} className="text-brand-400"/>}
                                </div>
                                
                                {/* Bubble */}
                                <div 
                                    className={`py-2.5 px-4 rounded-2xl text-sm leading-relaxed ${
                                        msg.sender === 'user' 
                                            ? 'bg-brand-600 text-white rounded-br-none shadow-lg shadow-brand-600/20' 
                                            : 'bg-[#1A1A24] border border-white/10 text-gray-200 rounded-bl-none'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                         <div className="flex justify-start">
                            <div className="flex items-end gap-2 max-w-[85%]">
                                <div className="w-6 h-6 rounded-full bg-brand-600/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                                    <Sparkles size={12} className="text-brand-400"/>
                                </div>
                                <div className="py-3 px-4 rounded-2xl bg-[#1A1A24] border border-white/10 rounded-bl-none flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-[#0B0B14]">
                    <div className="relative flex items-center">
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..." 
                            className="w-full bg-[#1A1A24] border border-white/10 rounded-full pl-5 pr-12 py-3 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-gray-600 shadow-inner"
                        />
                        <button 
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="absolute right-1.5 w-9 h-9 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-brand-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-600/20"
                        >
                            <Send size={16} className={inputValue.trim() ? "translate-x-0.5" : ""} />
                        </button>
                    </div>
                     <div className="text-[10px] text-gray-600 text-center mt-2.5 flex items-center justify-center gap-1">
                        Powered by <span className="font-bold text-gray-500">FlowNest AI Engine</span>
                    </div>
                </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/40 z-50 group border border-white/20"
      >
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-brand-400 opacity-0 group-hover:opacity-20 animate-ping duration-1000"></span>
        
        <div className="relative">
            {isOpen ? (
                <X size={28} />
            ) : (
                <>
                  <Sparkles size={28} className="fill-white" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B0B14]"></span>
                </>
            )}
        </div>
        
        {/* Label on Hover */}
        {!isOpen && (
             <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with FlowNest AI
            </span>
        )}
      </motion.button>
    </>
  );
};

export default AIAgentWidget;