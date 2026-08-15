import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGavel, 
  FaCube, 
  FaShieldAlt, 
  FaCreditCard, 
  FaBan, 
  FaEnvelope, 
  FaArrowLeft 
} from 'react-icons/fa';

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState('terms');

  const termsHighlights = [
    { label: "IP Ownership", value: "100% Client", detail: "Full rights to renders" },
    { label: "Payment Terms", value: "Net 30", detail: "Milestone-based invoicing" },
    { label: "Usage License", value: "Commercial", detail: "Global royalty-free" },
    { label: "Governing Law", value: "Delaware, US", detail: "Standard corporate terms" }
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
              <FaGavel className="text-emerald-400" />
              LEGAL AGREEMENT & GUIDELINES
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Terms of <span className="text-emerald-400">Service</span>
            </h1>
            <p className="mt-4 text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Rules, intellectual property rights, rendering service commitments, and client responsibilities at PixPerl.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">EFFECTIVE DATE: <span className="text-neutral-300">August 2026</span></span>
              <span className="text-neutral-700">•</span>
              <span className="text-neutral-500">VERSION: <span className="text-emerald-400">v1.4.0</span></span>
            </div>
          </motion.div>

          {/* HIGHLIGHTS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            {termsHighlights.map((item, idx) => (
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

      {/* TERMS MAIN CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-900 pb-4">
            {[
              { id: 'terms', label: '1. Service Scope' },
              { id: 'ip', label: '2. IP Rights' },
              { id: 'payments', label: '3. Payments & Billing' },
              { id: 'acceptable', label: '4. Prohibited Use' }
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
            
            {/* 1. SERVICE SCOPE */}
            {activeTab === 'terms' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaCube className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Rendering Services & Deliverables</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  PixPerl provides 3D modeling, WebGL interactive viewer deployment, CGI product visualization, and cloud GPU rendering pipelines.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-emerald-400 font-bold block mb-1">Project Revisions</span>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">Standard contracts include up to two rounds of minor asset revisions (camera angle adjustments, lighting tweaks, material color changes).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="text-emerald-400 font-bold block mb-1">Delivery Format</span>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">Final exports are delivered via encrypted link in GLTF, GLB, OBJ, USDZ, or high-res PNG/EXR render formats.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. IP RIGHTS */}
            {activeTab === 'ip' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Intellectual Property Rights</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Upon full payment of project invoices, all custom 3D assets, textures, and final renders become 100% owned by the client.
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-400 space-y-2 leading-relaxed">
                  <li>Client retains full rights to CAD data and proprietary product designs submitted.</li>
                  <li>PixPerl retains ownership of underlying proprietary shader scripts and core rendering engines.</li>
                  <li>PixPerl reserves the right to display completed renders in public portfolios unless protected by an explicit NDA.</li>
                </ul>
              </motion.div>
            )}

            {/* 3. PAYMENTS & BILLING */}
            {activeTab === 'payments' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Invoicing & Payment Terms</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Custom studio quotes require a 50% upfront deposit prior to rendering pipeline initiation, with the remaining balance due upon final asset approval.
                </p>
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-400 font-mono">
                  <strong className="text-white block mb-1">Cancellation Policy:</strong>
                  Deposits are fully refundable if work has not commenced. Once initial 3D draft baking begins, deposits are non-refundable.
                </div>
              </motion.div>
            )}

            {/* 4. PROHIBITED USE */}
            {activeTab === 'acceptable' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaBan className="text-emerald-400 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-white">Prohibited Content & Misuse</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Clients must not submit CAD files or requests that violate local laws or third-party trademark rights.
                </p>
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs">
                  <span className="text-red-400 font-bold block mb-1 font-mono">Zero Tolerance Policy:</span>
                  <p className="text-neutral-400 leading-relaxed">We reserve the right to immediately terminate services if uploaded assets contain illegal content or violate intellectual property rights.</p>
                </div>
              </motion.div>
            )}

          </div>

          {/* CONTACT BANNER */}
          <div className="mt-8 p-5 rounded-2xl bg-black border border-neutral-800/80 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FaEnvelope className="text-emerald-400 text-xl flex-shrink-0" />
              <div>
                <span className="text-white font-bold block">QUESTIONS ABOUT OUR TERMS?</span>
                <span className="text-[10px] text-neutral-500">Reach out to our legal department for custom enterprise contracts and NDAs.</span>
              </div>
            </div>
            <a 
              href="mailto:legal@pixperl.com"
              className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 border border-emerald-500/30 rounded text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Contact Legal
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}