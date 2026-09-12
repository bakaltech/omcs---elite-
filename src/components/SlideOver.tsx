import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function SlideOver({ isOpen, onClose, title, children }: SlideOverProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => panelRef.current?.focus(), 100);

      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop / Overlay - Added onClick to allow natural dismissal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-darker/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="slideover-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col overflow-hidden outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-light/30">
              <h2 id="slideover-title" className="font-serif text-2xl text-brand-darker">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors text-gray-500 hover:text-brand-darker focus-visible:ring-2 focus-visible:ring-brand-secondary focus:outline-none"
                aria-label="Close"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-grow overflow-y-auto p-6 bg-white">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
