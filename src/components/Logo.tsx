export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Swoosh */}
      <path d="M 25 75 A 40 40 0 0 1 25 25" stroke="#5C9B31" strokeWidth="6" strokeLinecap="round" />
      <path d="M 25 85 A 45 45 0 0 0 85 75" stroke="#5C9B31" strokeWidth="4" strokeLinecap="round" />
      
      {/* Abstract People (Circles) */}
      <circle cx="50" cy="15" r="8" fill="#F4C518" /> {/* Yellow */}
      <circle cx="80" cy="35" r="8" fill="#D3273E" /> {/* Red */}
      <circle cx="75" cy="65" r="8" fill="#315CA0" /> {/* Blue */}
      <circle cx="45" cy="80" r="8" fill="#5C9B31" /> {/* Green */}
      <circle cx="20" cy="45" r="8" fill="#3A3A3A" /> {/* Dark */}

      {/* Connecting bodies (abstract paths) */}
      <path d="M 50 25 L 50 40 L 40 50" stroke="#F4C518" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 75 40 L 65 50 L 55 50" stroke="#D3273E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 70 60 L 60 55 L 50 65" stroke="#315CA0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 45 70 L 45 60 L 35 55" stroke="#5C9B31" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 25 45 L 35 45 L 45 35" stroke="#3A3A3A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
