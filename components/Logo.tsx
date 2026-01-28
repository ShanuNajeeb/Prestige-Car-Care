
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#8b0000" />
    <path d="M30 25H55C65 25 70 30 70 40C70 50 65 55 55 55H40V75H30V25ZM40 33V47H55C60 47 62 45 62 40C62 35 60 33 55 33H40Z" fill="white" />
    <path d="M75 70L85 80" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <circle cx="80" cy="75" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
  </svg>
);

export default Logo;
