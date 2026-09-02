import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaVideo, 
  FaShoppingBag, 
  FaBuilding, 
  FaCar, 
  FaHardHat, 
  FaArrowRight, 
  FaCheckCircle,
  FaCloud,          // Vape / Smoke Shop
  FaShoppingBasket, // Grocery Stores
  FaGasPump,        // Gas Station
  FaStore           // Convenience Stores
} from 'react-icons/fa';

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState('ecommerce');

  const industries = [
    {
      id: 'ecommerce',
      icon: FaShoppingBag,
      title: 'E-Commerce & Retail',
      tagline: 'Loss prevention & inventory protection surveillance',
      description: 'Protect high-value fulfillment centers, retail storefronts, and warehouses with 24/7 proactive live video monitoring, organized access logging, and instant threat response.',
      stats: [
        { value: '24/7', label: 'Live Monitoring' },
        { value: '99.9%', label: 'Uptime Reliability' }
      ],
      deliverables: [
        'Real-Time CCTV Stream Integration',
        'Loss Prevention & Shrinkage Analytics',
        'Automated Perimeter Breach Alerts',
        'Incident Archiving & SLA Reports'
      ]
    },
    {
      id: 'vape-smoke',
      icon: FaCloud,
      title: 'Vape & Smoke Shops',
      tagline: 'High-risk retail surveillance & after-hours security',
      description: 'Mitigate smash-and-grab risks and point-of-sale theft with dedicated live remote monitoring, instant audio talk-back deterrents, and age-compliance auditing.',
      stats: [
        { value: '< 10s', label: 'Alert Dispatch' },
        { value: '100%', label: 'Store Coverage' }
      ],
      deliverables: [
        'After-Hours Live Guard Monitoring',
        'POS & Counter Surveillance Feed',
        'Two-Way Voice Deterrent Audio',
        'Remote Incident Verification'
      ]
    },
    {
      id: 'grocery',
      icon: FaShoppingBasket,
      title: 'Grocery Stores',
      tagline: 'Multi-aisle monitoring & loading dock perimeter security',
      description: 'Monitor high-foot-traffic retail spaces, loading bays, and cash registers to prevent shoplifting, unauthorized after-hours entry, and operational bottlenecks.',
      stats: [
        { value: '24/7', label: 'Command Center' },
        { value: '0%', label: 'Blind Spots' }
      ],
      deliverables: [
        'Loading Dock & Storage Security',
        'Continuous Checkout Counter Oversight',
        'Perimeter Intrusion Detection',
        'Daily Security Audit Summaries'
      ]
    },
    {
      id: 'gas-station',
      icon: FaGasPump,
      title: 'Gas Stations',
      tagline: 'Forecourt surveillance & pump-island threat monitoring',
      description: 'Secure fuel islands, C-store entrances, and remote registers with real-time camera oversight, license plate recognition, and emergency remote intervention.',
      stats: [
        { value: 'HD', label: 'Video Feeds' },
        { value: '24/7', label: 'Live Protection' }
      ],
      deliverables: [
        'Forecourt & Fuel Canopy Surveillance',
        'Drive-Off & License Plate Logging',
        'Night-Shift Lone Worker Protection',
        'Instant Law Enforcement Dispatch'
      ]
    },
    {
      id: 'convenience-stores',
      icon: FaStore,
      title: 'Convenience Stores',
      tagline: 'Compact storefront remote guarding & incident prevention',
      description: 'Protect late-night operators and high-risk urban locations with remote command monitoring, panic button integrations, and live vocal warnings.',
      stats: [
        { value: '100%', label: 'Remote Guarding' },
        { value: 'Real-Time', label: 'Threat Response' }
      ],
      deliverables: [
        '24/7 Remote Video Command Center',
        'POS & Cash Management Oversight',
        'Live Speaker Voice-Down Intercom',
        'Cloud Incident Video Archives'
      ]
    },
    {
      id: 'architecture',
      icon: FaBuilding,
      title: 'Commercial & Real Estate',
      tagline: 'Property management & multi-tenant building security',
      description: 'Safeguard commercial buildings, corporate parks, and residential complexes through intelligent remote access control and real-time perimeter monitoring.',
      stats: [
        { value: '100%', label: 'Property Access' },
        { value: 'SLA', label: 'Verified Service' }
      ],
      deliverables: [
        'Lobby & Access Control Surveillance',
        'Parking Garage Perimeter Protection',
        'Visitor Entry Verification Systems',
        'Centralized Multi-Site Monitoring'
      ]
    },
    {
      id: 'automotive',
      icon: FaCar,
      title: 'Automotive & Dealerships',
      tagline: 'High-value lot surveillance & perimeter guarding',
      description: 'Secure open car lots, service bays, and showroom assets against vandalism, catalytic converter theft, and unauthorized vehicle access.',
      stats: [
        { value: '360°', label: 'Lot Coverage' },
        { value: 'Instant', label: 'Alarm Trigger' }
      ],
      deliverables: [
        'Outdoor Lot Motion-Triggered Monitoring',
        'After-Hours Thermal & Camera Tracking',
        'Audio Voice-Down Crime Deterrence',
        'Service Bay Operational Audit'
      ]
    },
    {
      id: 'construction',
      icon: FaHardHat,
      title: 'Construction Sites',
      tagline: 'Jobsite surveillance & equipment protection',
      description: 'Prevent material theft, equipment damage, and unauthorized site entry with solar-powered remote camera units and 24/7 live monitoring operators.',
      stats: [
        { value: '24/7', label: 'Jobsite Guarding' },
        { value: 'Zero', label: 'Downtime Setup' }
      ],
      deliverables: [
        'Solar / Mobile Surveillance Integration',
        'Heavy Equipment & Material Protection',
        'After-Hours Intrusion Warnings',
        'Safety Compliance Monitoring'
      ]
    }
  ];

  const currentData = industries.find((ind) => ind.id === activeIndustry);

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-blue-600 selection:text-white antialiased relative">

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
              REMOTE MONITORING & SURVEILLANCE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Protect</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              From retail & convenience chains to commercial real estate and construction sites—discover how PixPerl delivers 24/7 proactive remote monitoring, security command control, and threat mitigation.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">COVERAGE: <span className="text-neutral-800 font-semibold">Global Enterprise & Retail</span></span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500">PIPELINES: <span className="text-blue-600 font-bold">24/7 Live Stream / CCTV Command Center</span></span>
            </div>
          </motion.div>

          {/* QUICK HIGHLIGHT CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
            {industries.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.button 
                  key={item.id}
                  onClick={() => setActiveIndustry(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`p-4 sm:p-5 text-left border rounded-2xl transition-all duration-300 ${
                    activeIndustry === item.id 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20' 
                      : 'bg-neutral-50/70 border-neutral-200 text-neutral-800 hover:border-blue-500/40 hover:bg-white'
                  }`}
                >
                  <IconComponent className={`text-xl mb-3 ${activeIndustry === item.id ? 'text-white' : 'text-blue-600'}`} />
                  <div className="text-xs font-bold font-mono tracking-wide">{item.title}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED INDUSTRY CONTENT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden"
            >
              {/* HEADER INFO */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-200 pb-8">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-600 tracking-widest uppercase block mb-1">
                    SECTOR OVERVIEW
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">{currentData.title}</h2>
                  <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-1">{currentData.tagline}</p>
                </div>

                {/* STATS */}
                <div className="flex items-center gap-4">
                  {currentData.stats.map((stat, i) => (
                    <div key={i} className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-center min-w-[100px]">
                      <div className="text-lg font-extrabold font-mono text-blue-600">{stat.value}</div>
                      <div className="text-[9px] font-mono text-neutral-500 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESCRIPTION & DELIVERABLES */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                    <FaVideo className="text-blue-600" />
                    How We Help
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {currentData.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                    <FaCheckCircle className="text-blue-600" />
                    Key Deliverables
                  </div>
                  <ul className="space-y-2.5 font-mono text-xs">
                    {currentData.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700">
                        <FaArrowRight className="text-blue-600 text-[10px] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}