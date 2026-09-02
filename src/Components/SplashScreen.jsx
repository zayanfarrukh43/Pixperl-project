import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Timer to trigger transition completion safely
    const timer = setTimeout(() => {
      onFinish();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 h-[100dvh] w-screen z-[9999] flex flex-col items-center justify-center bg-white text-neutral-900 select-none overflow-hidden touch-none"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Background Radial Glow (Blue tint for light theme) */}
      <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 z-10 px-4"
      >
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-100 border border-neutral-200 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
          <FaShieldAlt className="text-blue-600 text-3xl sm:text-4xl" />
          <div className="absolute inset-0 rounded-2xl border border-blue-600/40 animate-ping opacity-25" />
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono font-black text-2xl sm:text-3xl tracking-widest text-neutral-900"
          >
            PIX<span className="text-blue-600">PERL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-neutral-500 uppercase mt-1"
          >
            Services Studio 
          </motion.p>
        </div>
      </motion.div>

      {/* Loading Progress Bar */}
      <div className="w-40 sm:w-48 h-1 bg-neutral-200 rounded-full overflow-hidden mt-8 z-10 border border-neutral-300">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-400"
        />
      </div>

      {/* System Loading Text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ delay: 0.3, repeat: Infinity, duration: 1.5 }}
        className="font-mono font-semibold text-xs sm:text-sm tracking-[0.3em] text-blue-600/90 uppercase mt-4 z-10 text-center px-4"
      >
        INITIALIZING SYSTEM...
      </motion.span>
    </motion.div>
  );
}