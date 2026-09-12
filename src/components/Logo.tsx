import { motion } from 'motion/react';
import { getImageUrl } from '../assets';

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className} shrink-0 group cursor-pointer`}
      // Playful but gentle spring interaction on hover and click
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      
      {/* 
        PERFECT GLOW: 
        A soft, elegant outer glow that pulses gently behind the logo.
      */}
      <motion.div 
        className="absolute -inset-[3px] rounded-full opacity-50 blur-[5px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[8px]"
        style={{
          background: 'linear-gradient(45deg, #F4C518, #D3273E, #315CA0, #5C9B31)',
        }}
        animate={{ rotate: 360, opacity: [0.35, 0.6, 0.35] }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* 
        PREMIUM SPINNING EDGE: 
        A razor-sharp, 1.5px glowing comet tail for the "Live Recording" feel, slowed down to be elegant.
        Brightens up gently on hover.
      */}
      <motion.div 
        className="absolute -inset-[1.5px] rounded-full transition-opacity duration-500 opacity-70 group-hover:opacity-100"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(211, 39, 62, 0.1) 80%, rgba(211, 39, 62, 0.8) 100%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Core Logo Wrapper */}
      <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] border border-white/40 group-hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.2)] transition-shadow duration-500">
        
        {/* 
           THE EXACT ORIGINAL IMAGE:
           Showing the entire, authentic logo perfectly contained inside the circle. 
           We use generous padding `p-1.5` and `object-contain` so no text or figures 
           will ever touch the edges or get clipped off.
        */}
        <motion.img 
          src={getImageUrl("/logos/Logos/Omcs-logo.jpg", 150)} 
          alt="OMCS Logo" 
          className="w-full h-full object-contain mix-blend-multiply p-1.5"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Super Premium Glass Sweep (TV Specular Shine) */}
        <motion.div 
          className="absolute top-0 -left-[150%] w-[100%] h-full z-20 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)', 
            transform: 'skewX(-20deg)' 
          }}
          animate={{ left: ['-150%', '250%'] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
