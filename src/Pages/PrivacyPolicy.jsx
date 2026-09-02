import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserShield, 
  FaDatabase, 
  FaLock, 
  FaEye, 
  FaFileContract,
  FaEnvelope
} from 'react-icons/fa';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState('collection');

  const privacyHighlights = [
    { label: "Data Encryption", value: "AES-256", detail: "At rest & stream in transit" },
    { label: "Log Retention", value: "30 Days", detail: "Automated stream log purging" },
    { label: "Third-Party Sale", value: "Zero", detail: "Never sold or monetized" },
    { label: "Compliance Status", value: "GDPR & SOC2", detail: "Full security & data rights" }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-blue-600 selection:text-white antialiased">

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
              How PixPerl secures, handles, and protects your surveillance video streams, facility logs, and business details with full regulatory compliance.
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
              { id: 'usage', label: '2. Feed & Video Usage' },
              { id: 'security', label: '3. Security & Storage' },
              { id: 'rights', label: '4. Your Data Rights' }
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
                  We collect data strictly required to deliver 24/7 remote video surveillance, threat monitoring, and command center dispatch operations.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">Account & Facility Credentials</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Corporate contacts, site addresses, local emergency dispatch contact numbers, and site access protocols.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">CCTV & Camera Stream Data</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Encrypted video feeds, RTSP/ONVIF stream credentials, and motion-triggered event logs provided for live monitoring.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. FEED & VIDEO USAGE */}
            {activeTab === 'usage' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaEye className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">How We Use Your Surveillance Feeds</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Your live security camera feeds and archived incident clips remain strictly confidential and are accessed exclusively by authorized command center operators.
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-600 space-y-2 leading-relaxed font-mono">
                  <li>To provide continuous 24/7 proactive live video guarding and perimeter alarm verification.</li>
                  <li>To trigger live speaker voice-downs and dispatch emergency law enforcement during active incidents.</li>
                  <li>We strictly do not sell, stream, or expose client video feeds to unauthorized third parties or public networks.</li>
                </ul>
              </motion.div>
            )}

            {/* 3. SECURITY & STORAGE */}
            {activeTab === 'security' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaLock className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Security & Video Encryption</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  All stream connections and video cloud backups are encrypted end-to-end using TLS 1.3 in transit and AES-256 at rest.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-mono">
                  <strong className="text-neutral-900 block mb-1">Automated Video Purge Policy:</strong>
                  Routine monitoring logs and non-incident video recordings are automatically purged from primary servers after 30 days unless extended retention is requested for legal audits.
                </div>
              </motion.div>
            )}

            {/* 4. YOUR DATA RIGHTS */}
            {activeTab === 'rights' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaFileContract className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Your Data Ownership & Rights</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Clients retain 100% ownership over all video footage and site logs. You may request specific incident clip exports, stream credential revocation, or account deletion at any time.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
                  <span className="text-blue-600 font-bold block mb-1 font-mono">Submit Data & Video Requests:</span>
                  <p className="text-neutral-600 leading-relaxed">Email our Data Protection Officer directly at <span className="text-neutral-900 font-mono font-semibold">info@pixperl.com</span> to request footage exports or security configuration changes.</p>
                </div>
              </motion.div>
            )}

          </div>

          {/* CONTACT BANNER */}
          <div className="mt-8 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
              <div>
                <span className="text-neutral-900 font-bold block">HAVE PRIVACY OR SECURITY CONCERNS?</span>
                <span className="text-[10px] text-neutral-500">Reach out to our Data Protection Officer for inquiries.</span>
              </div>
            </div>
            <a 
              href="mailto:info@pixperl.com"
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