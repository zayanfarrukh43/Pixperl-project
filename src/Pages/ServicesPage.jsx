import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaVideo, 
  FaServer, 
  FaBrain, 
  FaHdd, 
  FaCheckCircle, 
  FaArrowRight, 
  FaShieldAlt, 
  FaPlayCircle,
  FaSlidersH
} from 'react-icons/fa';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('cloud-vms');

  const surveillanceServices = [
    {
      id: 'cloud-vms',
      icon: FaVideo,
      title: 'Cloud VMS & Multi-Camera Playback',
      subtitle: 'Centralized multi-feed playback and timeline monitoring.',
      badge: 'Core Platform',
      heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
      description: 'Stream, review, and manage synchronized multi-camera feeds from any web browser. Effortlessly scrub through historical video timelines, isolate key security events, and view high-definition live surveillance without local hardware dependencies.',
      features: [
        'Synchronized Multi-Camera Playback & Dynamic Grid Views',
        'Interactive Timeline Scrubbing with Motion Event Markers',
        'Bandwidth-Optimized Adaptive Video Streaming (H.264/H.265)',
        'Zero-Trust Web Interface Access with Role-Based Permissions'
      ],
      process: [
        'Connect Cameras via Secure Gateway',
        'Configure Continuous or Motion-Based Recording',
        'Access Unified Web Dashboard & Timeline',
        'Export Incident Clips with Cryptographic Watermarking'
      ],
      deliverables: ['Web VMS Dashboard', 'Multi-View Grid Layouts', 'Encrypted Video Exports']
    },
    {
      id: 'ai-analytics',
      icon: FaBrain,
      title: 'AI Vision & Motion Analytics',
      subtitle: 'Smart detection for perimeter breaches and vehicle activity.',
      badge: 'AI Powered',
      heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      description: 'Automate threat identification using real-time computer vision models. Detect unauthorized personnel, track vehicle movements, automatically recognize license plates, and trigger instant security alerts when anomalies occur.',
      features: [
        'Real-Time Object Classification (People, Vehicles, Packages)',
        'Virtual Tripwire & Zone Intrusion Detection',
        'Automated License Plate & Vehicle Search (ALPR)',
        'Instant Push Notifications & Webhook Alert Integrations'
      ],
      process: [
        'Define Surveillance Zones & Virtual Tripwires',
        'Train & Deploy Edge/Cloud AI Detection Rules',
        'Process Live Video Streams for Anomalies',
        'Receive Real-Time Incident Alerts & Telemetry'
      ],
      deliverables: ['Automated Alert Rules', 'Event Analytics Dashboard', 'Custom Webhook API']
    },
    {
      id: 'hybrid-storage',
      icon: FaHdd,
      title: 'Hybrid Cloud & Edge Video Storage',
      subtitle: 'Flexible retention policy matching SLA compliance requirements.',
      badge: 'Redundant',
      heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      description: 'Ensure 100% video uptime with flexible cloud and on-premise storage architecture. Keep high-resolution clips on edge storage while automatically archiving critical event footage to encrypted cloud infrastructure for extended SLA compliance.',
      features: [
        'Dual-Storage Redundancy (On-Prem Edge + Cloud Backups)',
        'Flexible Video Retention Plans (30 Days to Multi-Year Archiving)',
        'End-to-End Encryption (AES-256 at Rest, TLS 1.3 in Transit)',
        'Automatic Offline Failover Recording during Network Outages'
      ],
      process: [
        'Select Retention Period & Resolution Quality',
        'Setup Automated Cloud Sync Schedules',
        'Apply End-to-End Encryption Keys',
        'Monitor Storage Health via Unified Console'
      ],
      deliverables: ['Automated Backup Engine', 'Encrypted Cloud Storage', 'Compliance Reports']
    },
    {
      id: 'system-integration',
      icon: FaServer,
      title: 'Enterprise Camera Infrastructure',
      subtitle: 'Seamless integration with IP cameras, NVRs, and access control.',
      badge: 'Enterprise',
      heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      description: 'Upgrade your existing security systems without tearing down existing hardware. Our surveillance solution connects directly with legacy ONVIF-compliant IP cameras, RTSP streams, and physical access control systems.',
      features: [
        'Universal ONVIF & RTSP Camera Compatibility',
        'Integration with Access Control & Alarm Systems',
        'Centralized Health Monitoring for Offline Camera Alerts',
        'Scalable Architecture from 5 to 5,000+ Cameras'
      ],
      process: [
        'Network & Infrastructure Security Audit',
        'Direct ONVIF/RTSP Stream Provisioning',
        'Access Control Mapping & Testing',
        'Final System Handover & Operational Training'
      ],
      deliverables: ['ONVIF Bridge Setup', 'System Diagnostics Tools', 'Infrastructure Map']
    }
  ];

  const currentService = surveillanceServices.find((s) => s.id === activeService);

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] font-mono font-extrabold tracking-widest text-blue-600 uppercase mb-4">
              <FaShieldAlt className="text-blue-600" />
              SURVEILLANCE & VMS SERVICES
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Cloud Surveillance & <span className="text-blue-600">Video Intelligence</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal px-2">
              Unified multi-camera playback, AI-powered motion analytics, and secure hybrid video storage built for critical security infrastructure.
            </p>
          </motion.div>

          {/* SERVICE SELECTION TABS - Fully Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-6xl mx-auto">
            {surveillanceServices.map((item) => {
              const IconComp = item.icon;
              const isActive = activeService === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveService(item.id)}
                  className={`p-4 text-left border rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                    isActive 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20' 
                      : 'bg-white border-neutral-200 text-neutral-800 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <IconComp className={`text-xl ${isActive ? 'text-white' : 'text-blue-600'}`} />
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold font-mono line-clamp-2">{item.title}</div>
                  </div>
                  <div className={`mt-4 text-[10px] font-mono flex items-center gap-1 font-semibold ${isActive ? 'text-blue-100' : 'text-blue-600'}`}>
                    View Details <FaArrowRight className="text-[8px]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE CONTENT */}
      <section className="py-8 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 sm:space-y-12"
            >
              {/* MAIN SERVICE CONTAINER */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-neutral-50 border border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm">
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                    <FaSlidersH />
                    SYSTEM CAPABILITY
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black text-neutral-900 leading-tight">
                    {currentService.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {currentService.description}
                  </p>

                  {/* KEY FEATURES LIST */}
                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-mono font-bold text-neutral-900 block uppercase tracking-wide">
                      Core Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentService.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-mono text-neutral-700 bg-white p-2.5 rounded-xl border border-neutral-200">
                          <FaCheckCircle className="text-blue-600 text-xs mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DISPLAY IMAGE WITH OVERLAY */}
                <div className="lg:col-span-5 relative group w-full">
                  <div className="relative h-48 sm:h-64 lg:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                    <img 
                      src={currentService.heroImage} 
                      alt={currentService.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-mono font-semibold bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-500 animate-pulse" />
                        Live Feed Preview
                      </span>
                      <div className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors">
                        <FaPlayCircle className="text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPLEMENTATION WORKFLOW */}
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center max-w-xl mx-auto">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-mono uppercase tracking-tight">Deployment Workflow</h3>
                  <p className="text-xs text-neutral-500 mt-0.5 sm:mt-1">How we connect and secure your camera feeds</p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {currentService.process.map((stepDesc, idx) => (
                    <div key={idx} className="bg-white border border-neutral-200 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:border-blue-500 transition-colors">
                      <div className="text-xl sm:text-2xl font-black font-mono text-blue-600 mb-1.5 sm:mb-2">0{idx + 1}</div>
                      <div className="text-xs font-mono text-neutral-800 leading-snug">{stepDesc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CALL TO ACTION */}
              <div className="bg-neutral-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">
                    READY FOR DEPLOYMENT
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-extrabold">Included Platform Deliverables</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {currentService.deliverables.map((item, i) => (
                      <span key={i} className="text-xs font-mono bg-neutral-800 border border-neutral-700 px-2.5 sm:px-3 py-1 rounded-lg text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/get-quote"
                  className="w-full md:w-auto text-center justify-center whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  Request Surveillance Demo <FaArrowRight />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}