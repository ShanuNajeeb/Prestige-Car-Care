import { GoogleGenAI } from "@google/genai";

// 1. GSAP Animation Engine
function initAnimations() {
  const gsap = (window as any).gsap;
  const ScrollTrigger = (window as any).ScrollTrigger;

  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  // Navbar Dynamic Sizing
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('py-2', 'bg-black');
        nav.classList.remove('py-4');
      } else {
        nav.classList.add('py-4');
        nav.classList.remove('py-2', 'bg-black');
      }
    });
  }

  // Hero Cinematic Sequence for "Beyond Maintenance"
  const tl = gsap.timeline();
  tl.from(".premium-badge", { y: -20, opacity: 0, duration: 1, ease: "power2.out" })
    .from(".hero-title-solid", { x: -50, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=0.5")
    .from(".hero-title-outline", { x: 50, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=1.2")
    .from(".hero-container p", { opacity: 0, y: 20, duration: 1 }, "-=0.8")
    .from(".hero-container div a", { opacity: 0, y: 20, stagger: 0.2, duration: 0.8 }, "-=0.5");

  // Grid Element Stagger
  gsap.from(".service-grid > div", {
    scrollTrigger: {
      trigger: ".service-grid",
      start: "top 85%",
    },
    opacity: 0,
    y: 80,
    stagger: 0.1,
    duration: 1.2,
    ease: "expo.out"
  });

  // Pricing Text Reveal
  gsap.from(".pricing-text", {
    scrollTrigger: { trigger: ".pricing-text", start: "top 80%" },
    x: -60,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });

  // Pricing Visual Reveal
  gsap.from(".pricing-visual div", {
    scrollTrigger: { trigger: ".pricing-visual", start: "top 80%" },
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1.5,
    ease: "back.out(1.7)"
  });

  // Testimonial Stagger
  gsap.from(".testimonial-slider > div", {
    scrollTrigger: { trigger: ".testimonial-slider", start: "top 90%" },
    opacity: 0,
    x: 80,
    stagger: 0.2,
    duration: 1.5,
    ease: "power3.out"
  });

  // Intersection Observer for Reveal Elements
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// 2. Gemini AI Master Tech Diagnostic
function initDiagnosticChat() {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const openBtn = document.getElementById('open-chat');
  const closeBtn = document.getElementById('close-chat');
  const chatPanel = document.getElementById('chat-panel');
  const sendBtn = document.getElementById('send-chat');
  const chatInput = document.getElementById('chat-input') as HTMLInputElement;
  const chatHistory = document.getElementById('chat-history');

  if (!openBtn || !closeBtn || !chatPanel || !sendBtn || !chatInput || !chatHistory) return;

  const toggleChat = (force?: boolean) => {
    chatPanel.classList.toggle('active', force);
    if (chatPanel.classList.contains('active')) {
      chatInput.focus();
    }
  };

  openBtn.addEventListener('click', () => toggleChat(true));
  closeBtn.addEventListener('click', () => toggleChat(false));

  const appendMessage = (role: 'user' | 'ai', text: string) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${role === 'user' ? 'user-bubble' : 'ai-bubble'}`;
    bubble.textContent = text;
    chatHistory.appendChild(bubble);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return bubble;
  };

  const handleSend = async () => {
    const query = chatInput.value.trim();
    if (!query) return;

    chatInput.value = '';
    appendMessage('user', query);

    const loadingBubble = appendMessage('ai', 'Master technician is analyzing symptoms...');
    loadingBubble.classList.add('animate-pulse');

    try {
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are the Master Technician at Prestige Car Care LLC, a premium workshop in Umm Ramool, Dubai. 
        Client Issue: "${query}". 
        
        Guidelines:
        - Provide a professional, concise, and helpful technical diagnosis.
        - Mention our expertise in mechanical repair and German quality oven painting if relevant.
        - Remind them of our "Prestige Standard": precision, cleanliness, and expert care.
        - Strongly recommend an inspection at our Warehouse #2 facility in Umm Ramool.
        - Limit to 75 words maximum.
        - Do not use markdown bold/italic, just plain text with line breaks for readability.`,
      });

      loadingBubble.classList.remove('animate-pulse');
      loadingBubble.textContent = result.text || "I'm having trouble connecting to our diagnostic database. Please call us at +971 56 224 4402.";
    } catch (error) {
      console.error("AI Error:", error);
      loadingBubble.textContent = "Error connecting to workshop database. Please contact Mohannad directly at 056 224 4402.";
      loadingBubble.classList.remove('animate-pulse');
    }
  };

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initDiagnosticChat();
});