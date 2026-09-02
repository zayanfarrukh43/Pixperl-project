import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaServer,
  FaClock,
  FaSync,
  FaHeadset,
  FaEnvelope
} from 'react-icons/fa';

export default function SLADocumentation() {
  const [activeTab, setActiveTab] = useState('uptime');

  const slaMetrics = [
    { label: "Uptime Guarantee", value: "99.9%", detail: "24/7 Command Center" },
    { label: "Stream Latency", value: "< 500ms", detail: "Ultra-low delay video feeds" },
    { label: "Support Response", value: "< 15 Mins", detail: "Critical incident queue" },
    { label: "Data Redundancy", value: "Cloud + Edge", detail: "Encrypted video storage" }
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
              <FaShieldAlt className="text-blue-600" />
              SERVICE LEVEL AGREEMENT
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              SLA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Documentation</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Our monitoring performance benchmarks, video infrastructure reliability standards, and rapid incident response guarantees.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">REVISION DATE: <span className="text-neutral-800 font-semibold">August 2026</span></span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500">AGREEMENT TIER: <span className="text-blue-600 font-bold">Enterprise Security Standard</span></span>
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

      {/* SLA DETAILS CONTENT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-200 pb-4">
            {[
              { id: 'uptime', label: '1. Surveillance Uptime' },
              { id: 'streams', label: '2. Live Stream SLA' },
              { id: 'support', label: '3. Incident Response' },
              { id: 'maintenance', label: '4. System Maintenance' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
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

            {/* 1. UPTIME COMMITMENT */}
            {activeTab === 'uptime' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaServer className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Surveillance System Availability</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  PixPerl guarantees 99.9% monthly uptime for all camera stream integrations, remote monitoring endpoints, and cloud archivers.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">Service Credits</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">If monitoring availability drops below 99.9%, enterprise accounts receive automatic billing adjustments.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">Redundant Monitoring Nodes</span>
                    <p className="text-neutral-600 text-[11px] leading-relaxed">Dual command center routing ensures continuous 24/7 video stream processing even during network surges.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. LIVE STREAM SLA */}
            {activeTab === 'streams' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Stream Performance & Latency</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Our monitoring command center maintains sub-second video transmission speeds to ensure rapid intervention.
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-600 space-y-2 leading-relaxed font-mono">
                  <li>Real-time IP Camera Feed Transmission: Under 500ms latency.</li>
                  <li>Incident Video Clip Archiving: Instantaneous event tag & cloud sync.</li>
                  <li>Dedicated High-Bandwidth Video Pipelines for Enterprise Sites.</li>
                </ul>
              </motion.div>
            )}

            {/* 3. INCIDENT RESPONSE */}
            {activeTab === 'support' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaHeadset className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Monitoring & Dispatch SLA</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Our security command center monitors feeds around the clock and responds immediately based on threat severity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-red-600 font-bold block mb-1">P1 - Active Intrusion / Emergency</span>
                    <span className="text-neutral-800 text-[11px]">Audio Deterrence & Dispatch &lt; 15 seconds</span>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="text-blue-600 font-bold block mb-1">P2 - General System Support</span>
                    <span className="text-neutral-800 text-[11px]">Operator Response &lt; 15 minutes</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. MAINTENANCE */}
            {activeTab === 'maintenance' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-3">
                  <FaSync className="text-blue-600 text-xl" />
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-900">Scheduled System Upgrades</h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Routine command center and server upgrades occur strictly during low-risk windows with uninterrupted backup monitoring.
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                  <strong className="text-neutral-900 block mb-1 font-mono">Advance Notice:</strong>
                  Clients receive at least 72 hours advance notice for scheduled system maintenance, ensuring full site continuity.
                </div>
              </motion.div>
            )}

          </div>

          <div className="mt-8 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
              <div>
                <span className="text-neutral-900 font-bold block">NEED CUSTOM SECURITY SLA TERMS?</span>
                <span className="text-[10px] text-neutral-500">Contact our enterprise sales team for dedicated monitoring queues and tailored response protocols.</span>
              </div>
            </div>

            {/* Note: Change href to "#contact" if linking to an anchor section instead */}
            <a
              href="/contact"
              className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 text-center"
            >
              Contact Support
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}