import React, { useState, useEffect } from 'react';
import { SERVICES, TESTIMONIALS, PAINT_PRICES } from './constants.tsx';
import DiagnosticChat from './components/DiagnosticChat.tsx';
import Logo from './components/Logo.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const loopedReviews = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white relative font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="flex items-center space-x-4">
          <Logo className="w-10 h-10 md:w-11 md:h-11 shadow-lg" />
          <div className="flex flex-col">
            <span className="font-black text-lg md:text-xl tracking-tighter leading-none italic uppercase">PRESTIGE</span>
            <span className="text-[7px] text-red-600 font-bold tracking-[0.4em] uppercase">Dubai Workshop</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <a href="#services" className="hover:text-white transition-all">Services</a>
          <a href="#about" className="hover:text-white transition-all">Bento</a>
          <a href="#painting" className="hover:text-white transition-all">Paint Lab</a>
          <a href="#reviews" className="hover:text-white transition-all">Reviews</a>
          <a href="#contact" className="hover:text-white transition-all">Contact</a>
        </div>

        <button className="bg-white text-black px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-lg">
          Book Appointment
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1613214141662-8798935c7553?auto=format&fit=crop&q=90" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Hero Background"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="reveal inline-block bg-white/5 border border-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-300 italic">"We treat your car as if it were our own"</span>
          </div>
          <h1 className="reveal text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            BEYOND <br /> <span className="text-stroke">MAINTENANCE</span>
          </h1>
          <p className="reveal text-zinc-400 max-w-2xl mx-auto text-xs md:text-sm mb-12 leading-relaxed font-bold uppercase tracking-[0.3em]" style={{ transitionDelay: '0.2s' }}>
            The laboratory for high-performance mechanical restorations and elite German oven painting workshop in the heart of Dubai.
          </p>
          
          <div className="reveal flex gap-6 justify-center" style={{ transitionDelay: '0.4s' }}>
            <button className="bg-red-700 hover:bg-red-600 px-10 py-4 rounded font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-2xl">Explore Services</button>
            <a href="https://wa.me/971562244402" className="border border-white/20 px-10 py-4 rounded font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center">Instant Quote</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-black">
        <div className="container mx-auto">
          {/* Section Header from Screenshot */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
            <div className="max-w-3xl">
              <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.6em] block mb-4">WORKSHOP DIRECTORY</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                PRESTIGE <span className="text-red-700">SERVICES</span>
              </h2>
            </div>
            <div className="max-w-sm border-l border-red-900 pl-8 pb-1">
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed italic font-medium">
                From complex mechanical overhauls to precision aesthetics, we treat every vehicle with clinical attention.
              </p>
            </div>
          </div>

          {/* Service Grid from Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((s, i) => (
              <div key={s.id} className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/10 flex flex-col hover:border-red-600/50 transition-all duration-500" style={{ transitionDelay: `${i*0.05}s` }}>
                <div className="h-56 overflow-hidden relative">
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                   {s.tag && (
                     <div className="absolute top-4 left-4 bg-red-700/90 px-3 py-1.5 rounded-sm text-[8px] font-black uppercase tracking-widest text-white shadow-xl">
                        {s.tag}
                     </div>
                   )}
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow bg-gradient-to-b from-zinc-900/20 to-black">
                  <div>
                    <p className="text-[10px] text-red-600 leading-relaxed uppercase tracking-[0.2em] font-black mb-3 italic">{s.category}</p>
                    <h3 className="text-2xl font-black uppercase mb-4 text-white group-hover:text-red-600 transition-colors tracking-tighter italic">{s.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-medium mb-4">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Grid for other services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {SERVICES.slice(4).map((s, i) => (
               <div key={s.id} className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/10 flex flex-col hover:border-red-600/50 transition-all duration-500" style={{ transitionDelay: `${(i+4)*0.05}s` }}>
                <div className="h-56 overflow-hidden relative">
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                   <div className="absolute top-4 left-4 bg-zinc-800/80 px-3 py-1.5 rounded-sm text-[8px] font-black uppercase tracking-widest text-white">
                      {s.tag}
                   </div>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow bg-gradient-to-b from-zinc-900/20 to-black">
                  <div>
                    <p className="text-[10px] text-red-600 leading-relaxed uppercase tracking-[0.2em] font-black mb-3 italic">{s.category}</p>
                    <h3 className="text-2xl font-black uppercase mb-4 text-white tracking-tighter italic">{s.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed font-medium">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Workshop Section */}
      <section id="painting" className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.7em] mb-6 block">PROFESSIONAL OVEN LAB</span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">OVEN-BAKED <br /> PERFECTION</h2>
              <p className="text-zinc-500 text-sm mb-12 leading-relaxed max-w-md font-medium italic">
                Best car painting services, high-quality materials, and competitive Dubai pricing. Professional oven-baked painting with a high-gloss showroom finish.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {PAINT_PRICES.map((plan, i) => (
                  <div key={i} className="p-7 rounded-2xl bg-zinc-900 border border-white/5 hover:border-red-600 transition-all group text-center shadow-lg">
                    <p className="text-[10px] font-black uppercase text-zinc-500 mb-2">{plan.type}</p>
                    <p className="text-2xl font-black text-white italic">{plan.price}</p>
                    <p className="text-[8px] font-bold text-red-600 uppercase mt-2 tracking-widest">Starting From</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                 <button className="bg-red-700 hover:bg-red-600 px-10 py-5 rounded font-black text-[11px] tracking-[0.2em] uppercase transition-all shadow-2xl">Book Now</button>
                 <a href="https://wa.me/971562244402" className="border border-white/10 px-10 py-5 rounded font-black text-[11px] tracking-[0.2em] uppercase transition-all flex items-center justify-center">WhatsApp Quote</a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="aspect-[16/10] bg-zinc-900 rounded-[2rem] p-1 border border-white/5 overflow-hidden relative group shadow-2xl">
                <img src="https://images.unsplash.com/photo-1589412225873-51920803c407?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-50 grayscale" alt="Painting Lab" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-500">✨</div>
                  <p className="text-[10px] font-black uppercase tracking-[1em] italic text-zinc-400">GERMAN QUALITY LAB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section id="reviews" className="py-32 bg-black overflow-hidden">
        <div className="text-center mb-20 px-6">
           <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.7em] block mb-4">CLIENT FEEDBACK</span>
           <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">THE PRESTIGE STANDARD</h2>
        </div>
        
        <div className="relative">
          <div className="animate-marquee flex gap-8 whitespace-nowrap">
             {loopedReviews.map((review, i) => (
                <div key={`${review.id}-${i}`} className="inline-block min-w-[320px] md:min-w-[400px] bg-zinc-900/10 p-10 rounded-2xl border border-white/5 hover:border-red-600/30 transition-all group flex flex-col justify-between shrink-0 whitespace-normal">
                   <div>
                      <div className="flex text-red-600 mb-6 space-x-1">
                        {[...Array(5)].map((_, j) => <span key={j} className="text-xs">★</span>)}
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed mb-10 italic font-medium">"{review.content}"</p>
                   </div>
                   <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                     <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center font-black group-hover:bg-red-700 transition-colors shadow-lg text-[10px]">{review.initial}</div>
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest">{review.author}</p>
                       <p className="text-[8px] text-zinc-600 uppercase font-bold mt-1">{review.role}</p>
                     </div>
                   </div>
                </div>
             ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black pt-32 pb-16 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-28">
            <div className="lg:col-span-1">
              <Logo className="w-14 h-14 mb-8" />
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-black leading-relaxed mb-10 italic">
                Prestige Car Care LLC: Precision, Cleanliness, and Expert Care. Premium automotive laboratory in Umm Ramool, Dubai.
              </p>
              <div className="flex space-x-6 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                <a href="https://instagram.com/prestigecarcare.dxb" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-all italic underline decoration-zinc-800 underline-offset-4">Instagram</a>
                <a href="#" className="hover:text-red-600 transition-all italic underline decoration-zinc-800 underline-offset-4">Facebook</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 text-white italic underline decoration-red-800 underline-offset-8">WORKSHOP HQ</h4>
              <p className="text-zinc-400 text-[10px] leading-relaxed font-bold uppercase tracking-[0.2em]">
                Warehouse #2, 9th St,<br />Umm Ramool, Dubai, United Arab Emirates.
              </p>
              <p className="mt-8 text-white text-xl font-black italic">+971 56 224 4402</p>
              <p className="text-[9px] text-zinc-600 mt-2 font-black uppercase tracking-widest">info@prestigecarcare.me</p>
            </div>

            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-12 text-white italic underline decoration-red-800 underline-offset-8">WORKING HOURS</h4>
              <div className="space-y-4 text-[9px] font-black uppercase tracking-[0.2em]">
                 <div className="flex justify-between border-b border-white/5 pb-2 text-zinc-500"><span>Mon - Sat</span> <span className="text-white">08:00 - 19:00</span></div>
                 <div className="flex justify-between text-zinc-800"><span>Sunday</span> <span>Closed</span></div>
              </div>
            </div>

            <div className="bg-zinc-900/10 p-10 rounded-2xl border border-white/5">
              <h4 className="font-black text-[10px] uppercase tracking-[0.5em] mb-8 text-white italic">QUICK LINKS</h4>
              <ul className="space-y-4 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                <li className="hover:text-red-600 cursor-pointer transition-colors">Services</li>
                <li className="hover:text-red-600 cursor-pointer transition-colors">Paint Workshop</li>
                <li className="hover:text-red-600 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-red-600 cursor-pointer transition-colors">Terms of Care</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
             <p className="text-[8px] text-zinc-700 font-black uppercase tracking-[1em]">© 2026 PRESTIGE CAR CARE LLC. DXB.</p>
             <p className="text-[8px] text-zinc-800 font-black uppercase tracking-widest italic">Precision • Cleanliness • Expert Care</p>
          </div>
        </div>
      </footer>

      <DiagnosticChat />
    </div>
  );
};

export default App;