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
      className="fixed inset-0 h-screen h-[100dvh] w-screen z-[9999] flex flex-col items-center justify-center bg-black text-white select-none overflow-hidden touch-none"
    >
      {/* Background Radial Glow (Scaled for mobile & desktop) */}
      <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 z-10 px-4"
      >
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-[0_0_40px_rgba(52,211,153,0.2)]">
          <FaShieldAlt className="text-emerald-400 text-3xl sm:text-4xl" />
          <div className="absolute inset-0 rounded-2xl border border-emerald-400/40 animate-ping opacity-25" />
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono font-black text-2xl sm:text-3xl tracking-widest text-white"
          >
            PIXPERL<span className="text-emerald-400">3D</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-neutral-500 uppercase mt-1"
          >
            Surveillance Systems
          </motion.p>
        </div>
      </motion.div>

      {/* Loading Progress Bar */}
      <div className="w-40 sm:w-48 h-1 bg-neutral-900 rounded-full overflow-hidden mt-8 z-10 border border-neutral-800">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="w-full h-full bg-gradient-to-r from-emerald-500 to-emerald-300"
        />
      </div>

      {/* System Loading Text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ delay: 0.3, repeat: Infinity, duration: 1.5 }}
        className="font-mono text-[9px] text-emerald-400/80 tracking-widest uppercase mt-3 z-10"
      >
        INITIALIZING SYSTEM...
      </motion.span>
    </motion.div>
  );
}