import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaServer, 
  FaClock, 
  FaSync, 
  FaHeadset, 
  FaEnvelope,
  FaArrowLeft
} from 'react-icons/fa';

export default function SLADocumentation() {
  const [activeTab, setActiveTab] = useState('uptime');

  const slaMetrics = [
    { label: "Uptime SLA Guarantee", value: "99.9%", detail: "High-availability clusters" },
    { label: "Render Target Speed", value: "< 120s", detail: "Per complex 3D frame" },
    { label: "Support Response", value: "< 1 Hour", detail: "24/7 dedicated queue" },
    { label: "Data Redundancy", value: "3x Sync", detail: "Multi-region backup" }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* HEADER BAR WITH FULL BRAND LOGO & BACK BUTTON */}
      <header className="border-b border-neutral-900 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          
          {/* FULL BRAND LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-black font-black text-lg shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:scale-105 transition-transform duration-300">
              <FaShieldAlt className="text-black text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-wider font-mono leading-none">
                PIX<span className="text-emerald-400">PERL</span>
              </span>
              <span className="text-[9px] font-mono text-neutral-500 tracking-[0.25em] leading-tight uppercase font-semibold">
                3D STUDIO
              </span>
            </div>
          </Link>

          {/* BACK TO HOME BUTTON */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400" />
            BACK TO HOME
          </Link>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 border-b border-neutral-900 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-[10px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase mb-4">
              <FaShieldAlt className="text-emerald-400" />
              SERVICE LEVEL AGREEMENT
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              SLA <span className="text-emerald-400">Documentation</span>
            </h1>
            <p className="mt-4 text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Our performance benchmarks, infrastructure reliability standards, and support turnaround guarantees.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">REVISION DATE: <span className="text-neutral-300">August 2026</span></span>
              <span className="text-neutral-700">•</span>
              <span className="text-neutral-500">AGREEMENT TIER: <span className="text-emerald-400">Enterprise Standard</span></span>
            </div>
          </motion.div>

          {/* HIGHLIGHTS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            {slaMetrics.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-5 bg-black/60 border border-neutral-800/90 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">{item.label}</div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-400 mb-1">{item.value}</div>
                <div className="text-[10px] font-mono text-neutral-400">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA DETAILS CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-900 pb-4">
            {[
              { id: 'uptime', label: '1. Uptime Commitment' },
              { id: 'rendering', label: '2. Render Pipeline SLA' },
              { id: 'support', label: '3. Support Response' },
              { id: 'maintenance', label: '4. Scheduled Maintenance' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(52,211,153,0.3)]' 
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENTS */}
          <div className="bg-gradient-to-b from-black via-neutral-950 to-neutral-950 border border-neutral-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* 1. UPTIME COMMITMENT */}
            {activeTab === 'uptime' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaServer className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">System Uptime & Availability</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  PixPerl guarantees 99.9% monthly uptime for production web viewer endpoints and asset delivery CDNs.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-emerald-400 font-bold block mb-1">Service Credits</span>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">If monthly availability drops below 99.9%, enterprise clients receive automatic service credit billing adjustments.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-emerald-400 font-bold block mb-1">Redundant Infrastructure</span>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">Automated failover across multi-region GPU clusters ensures persistent viewer availability.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. RENDER PIPELINE SLA */}
            {activeTab === 'rendering' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaClock className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Render Processing Speed</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Our cloud GPU render farm targets high-priority throughput times for model conversions and 3D baking.
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-400 space-y-2 leading-relaxed">
                  <li>Standard 3D Scene Baking: Processed within 2 hours of upload.</li>
                  <li>Real-time WebGL/3D Viewer Asset Optimization: Instantaneous or sub-30 second conversion.</li>
                  <li>Priority Render Queue available for enterprise subscribers.</li>
                </ul>
              </motion.div>
            )}

            {/* 3. SUPPORT RESPONSE */}
            {activeTab === 'support' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaHeadset className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Technical Support SLA</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Our engineering team monitors system health 24/7 and responds to support tickets based on severity levels.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <span className="text-red-400 font-bold block mb-1">P1 - Critical Outage</span>
                    <span className="text-white text-[11px]">Initial Response &lt; 15 mins</span>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                    <span className="text-emerald-400 font-bold block mb-1">P2 - Standard Query</span>
                    <span className="text-white text-[11px]">Initial Response &lt; 2 hours</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. MAINTENANCE */}
            {activeTab === 'maintenance' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaSync className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Scheduled Maintenance</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Routine infrastructure upgrades occur during low-traffic windows (Sundays 02:00 - 04:00 UTC).
                </p>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400">
                  <strong className="text-white block mb-1 font-mono">Advance Notice:</strong>
                  Clients receive at least 72 hours advance email notice for any scheduled maintenance that requires brief endpoint pauses.
                </div>
              </motion.div>
            )}

          </div>

          {/* CONTACT BANNER */}
          <div className="mt-8 p-5 rounded-2xl bg-black border border-neutral-800/80 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FaEnvelope className="text-emerald-400 text-xl flex-shrink-0" />
              <div>
                <span className="text-white font-bold block">NEED CUSTOM SLA TERMS?</span>
                <span className="text-[10px] text-neutral-500">Contact our technical sales team for dedicated GPU instances and custom SLAs.</span>
              </div>
            </div>
            <a 
              href="mailto:support@pixperl.com"
              className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 border border-emerald-500/30 rounded text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Contact Support
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}