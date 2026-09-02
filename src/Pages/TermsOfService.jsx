import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGavel, 
  FaVideo, 
  FaShieldAlt, 
  FaCreditCard, 
  FaBan, 
  FaEnvelope 
} from 'react-icons/fa';

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState('terms');

  const termsHighlights = [
    { label: "Footage Rights", value: "100% Client", detail: "Full client video ownership" },
    { label: "Payment Terms", value: "Net 30", detail: "Monthly recurring service billing" },
    { label: "Service SLA", value: "99.9% Up", detail: "24/7 Live stream uptime target" },
    { label: "Governing Law", value: "Delaware, US", detail: "Standard corporate terms" }
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
              <FaGavel className="text-blue-600" />
              LEGAL AGREEMENT & GUIDELINES
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Service</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Rules, data ownership rights, surveillance service level commitments, and client operational responsibilities at PixPerl.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">EFFECTIVE DATE: <span className="text-neutral-800 font-semibold">August 2026</span></span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500">VERSION: <span className="text-blue-600 font-bold">v2.1.0</span></span>
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

      {/* TERMS MAIN CONTENT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-200 pb-4">
            {[
              { id: 'terms', label: '1. Service Scope' },
              { id: 'ip', label: '2. Video & IP Rights' },
              { id: 'payments', label: '3. Billing & Plans' },
              { id: 'acceptable', label: '4. Prohibited Use' }
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
            
            {/* 1. SERVICE SCOPE */}
            {activeTab === 'terms' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaVideo className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Monitoring Services & Operations</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  PixPerl provides 24/7 proactive live video surveillance, virtual perimeter guarding, remote operator audio voice-downs, and emergency law enforcement dispatch integration.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">Camera Feed Requirements</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Clients are responsible for maintaining stable internet connectivity and operational camera hardware at monitored facility sites.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">Incident Reports</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Event logs and high-definition incident clips are delivered via secure dashboard access or encrypted download links following verified threats.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. IP & FOOTAGE RIGHTS */}
            {activeTab === 'ip' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Footage Ownership & System IP</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Clients retain 100% ownership of all raw security footage, archived incident clips, and site facility data recorded during monitoring agreements.
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-600 space-y-2 leading-relaxed font-mono">
                  <li>Client retains full rights to request video clip exports for legal or insurance evidence.</li>
                  <li>PixPerl retains ownership of proprietary surveillance software, analytics infrastructure, and command center platforms.</li>
                  <li>Video feeds will never be shared, publicly broadcasted, or used for external promotional purposes without explicit written permission.</li>
                </ul>
              </motion.div>
            )}

            {/* 3. PAYMENTS & BILLING */}
            {activeTab === 'payments' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Invoicing & Subscription Terms</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Surveillance monitoring services are billed on a recurring monthly or annual basis. Onboarding setup and camera bridge integration fees are due prior to service activation.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 font-mono">
                  <strong className="text-neutral-900 block mb-1">Cancellation Policy:</strong>
                  Subscriptions may be canceled with a 30-day written notice. Account access and live feed monitoring continue through the end of the active billing cycle.
                </div>
              </motion.div>
            )}

            {/* 4. PROHIBITED USE */}
            {activeTab === 'acceptable' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaBan className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Prohibited Content & Misuse</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Clients must not connect camera streams operating in areas where surveillance is strictly prohibited by law or invades reasonable expectations of privacy.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
                  <span className="text-red-600 font-bold block mb-1 font-mono">Zero Tolerance Policy:</span>
                  <p className="text-neutral-600 leading-relaxed">We reserve the right to immediately disconnect monitoring feeds and terminate service if streams are used for unlawful tracking or violate local privacy regulations.</p>
                </div>
              </motion.div>
            )}

          </div>

          {/* CONTACT BANNER */}
          <div className="mt-8 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
              <div>
                <span className="text-neutral-900 font-bold block">QUESTIONS ABOUT OUR TERMS?</span>
                <span className="text-[10px] text-neutral-500">Reach out to our legal department for custom enterprise SLA agreements.</span>
              </div>
            </div>
            <a 
              href="mailto:info@pixperl.com"
              className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0"
            >
              Contact Legal
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}