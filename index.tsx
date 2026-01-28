import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

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

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
});

// React Mounting
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
