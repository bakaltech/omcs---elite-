import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function SlideOver({ isOpen, onClose, title, children }: SlideOverProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop / Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-darker/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the panel
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-light/30">
              <h2 className="font-serif text-2xl text-brand-darker">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors text-gray-500 hover:text-brand-darker"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body - Scrollable */}
            <div className="flex-grow overflow-y-auto p-6 bg-white">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
