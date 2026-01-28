import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticAdvice } from '../services/geminiService';

const DiagnosticChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getDiagnosticAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'No response' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[550px] bg-black border border-white/10 rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="bg-red-800 p-5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center font-black italic text-red-600 text-lg">P</div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white">MASTER TECH AI</p>
                <p className="text-[9px] text-red-200 uppercase font-bold tracking-tight">DIAGNOSTIC LABORATORY</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 no-scrollbar bg-black/40 backdrop-blur-sm">
            {messages.length === 0 && (
              <div className="text-center py-16 px-6">
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 text-red-600 border border-white/5 shadow-inner">⚙️</div>
                <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest mb-2 italic">MASTER ADVICE</p>
                <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">Describe your symptoms (e.g., ticking engine, AC issues) for a technical analysis from our master mechanic.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-medium leading-relaxed shadow-lg ${
                  m.role === 'user' 
                    ? 'bg-red-700 text-white rounded-br-none' 
                    : 'bg-zinc-900 text-zinc-200 border border-white/5 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl text-[11px] text-zinc-400 animate-pulse italic">
                  Analyzing technical symptoms...
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-white/5 flex space-x-3 bg-zinc-950/50">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="e.g. engine clicking on cold start..."
              className="flex-1 bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
            />
            <button 
              onClick={handleSend}
              className="bg-red-700 hover:bg-red-600 text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl"
            >
              SEND
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#c51d1d] rounded-full shadow-[0_15px_40px_rgba(197,29,29,0.4)] flex items-center justify-center hover:scale-110 transition-transform group relative"
        >
          <span className="absolute -top-1 -right-1 bg-white text-[#c51d1d] text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-md z-10 border border-[#c51d1d]/10">AI</span>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default DiagnosticChat;