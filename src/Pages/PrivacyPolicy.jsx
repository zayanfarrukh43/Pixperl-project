import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUserShield, 
  FaDatabase, 
  FaLock, 
  FaEye, 
  FaFileContract,
  FaEnvelope,
  FaArrowLeft,
  FaShieldAlt
} from 'react-icons/fa';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('collection');

  const privacyHighlights = [
    { label: "Data Encryption", value: "AES-256", detail: "At rest & in transit" },
    { label: "Data Retention", value: "30 Days", detail: "Automatic log purging" },
    { label: "Third-Party Sale", value: "Zero", detail: "Never sold or monetized" },
    { label: "Compliance Status", value: "GDPR Ready", detail: "Full user data rights" }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* HEADER BAR WITH FULL BRAND LOGO & BACK BUTTON */}
      {/* <header className="border-b border-neutral-200 bg-white/85 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          
         
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 font-black text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
              <FaShieldAlt className="text-blue-600 text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-neutral-900 text-base sm:text-lg tracking-wider font-mono leading-none">
                PIX<span className="text-blue-600">PERL</span>
              </span>
               </div>
          </Link>

         
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-600 hover:text-blue-600 hover:border-blue-500/30 hover:bg-white transition-all duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-blue-600" />
            BACK TO HOME
          </Link>

        </div>
      </header> */}

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 border-b border-neutral-200 overflow-hidden bg-white">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-[10px] font-mono font-extrabold tracking-widest text-blue-600 uppercase mb-4">
              <FaUserShield className="text-blue-600" />
              DATA PROTECTION & TRUST
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Policy</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              How PixPerl collects, protects, and handles your digital assets and personal details with complete transparency.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">EFFECTIVE DATE: <span className="text-neutral-800 font-semibold">August 2026</span></span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500">VERSION: <span className="text-blue-600 font-bold">v2.1.0</span></span>
            </div>
          </motion.div>

          {/* HIGHLIGHTS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            {privacyHighlights.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl hover:border-blue-500/40 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">{item.label}</div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-blue-600 mb-1">{item.value}</div>
                <div className="text-[10px] font-mono text-neutral-600">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY MAIN CONTENT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-200 pb-4">
            {[
              { id: 'collection', label: '1. Data Collection' },
              { id: 'usage', label: '2. Asset Usage' },
              { id: 'security', label: '3. Security & Storage' },
              { id: 'rights', label: '4. Your Rights' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]' 
                    : 'bg-neutral-100 text-neutral-600 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENTS */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            
            {/* 1. DATA COLLECTION */}
            {activeTab === 'collection' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaDatabase className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Information We Collect</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  We collect information necessary to deliver 3D visualization, studio rendering, and web services.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">Project & Account Data</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Names, corporate email addresses, billing details, and project briefs submitted through quote request forms.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">3D Assets & CAD Uploads</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Proprietary product models, texture files, and scene descriptions provided for rendering.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. ASSET USAGE */}
            {activeTab === 'usage' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaEye className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">How We Use Your Assets</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Your uploaded 3D models and creative files remain strictly confidential and are used solely for fulfilling rendering pipelines.
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-600 space-y-2 leading-relaxed">
                  <li>To compute, render, and refine interactive 3D assets per client specifications.</li>
                  <li>To provide customer support and process requested quotes.</li>
                  <li>We strictly do not train public AI models on client CAD files or 3D renders without express permission.</li>
                </ul>
              </motion.div>
            )}

            {/* 3. SECURITY & STORAGE */}
            {activeTab === 'security' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaLock className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Security & Encryption</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  All active assets and database entries are encrypted end-to-end using TLS 1.3 in transit and AES-256 at rest.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-mono">
                  <strong className="text-neutral-900 block mb-1">Asset Purge Guarantee:</strong>
                  Temporary render cache files are permanently purged from staging servers 30 days after project delivery.
                </div>
              </motion.div>
            )}

            {/* 4. YOUR RIGHTS */}
            {activeTab === 'rights' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaFileContract className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Your Data Rights</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  You hold full ownership over your personal data and project assets. You may request full data export or complete account erasure at any time.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
                  <span className="text-blue-600 font-bold block mb-1 font-mono">Submit Data Requests:</span>
                  <p className="text-neutral-600 leading-relaxed">Email our privacy officer directly at <span className="text-neutral-900 font-mono font-semibold">privacy@pixperl.com</span> to request account deletion or data exports.</p>
                </div>
              </motion.div>
            )}

          </div>

          {/* CONTACT BANNER */}
          <div className="mt-8 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
              <div>
                <span className="text-neutral-900 font-bold block">HAVE PRIVACY CONCERNS?</span>
                <span className="text-[10px] text-neutral-500">Reach out to our Data Protection Officer for inquiries.</span>
              </div>
            </div>
            <a 
              href="mailto:privacy@pixperl.com"
              className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Contact DPO
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}