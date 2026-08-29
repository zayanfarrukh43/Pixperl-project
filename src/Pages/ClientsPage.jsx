import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBuilding, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaArrowRight, 
  FaTv,
  FaBroadcastTower,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState('bobos-appliances');

  const clients = [
    {
      id: 'bobos-appliances',
      name: "Bobo's Appliances",
      category: 'Retail & Commercial Logistics',
      status: 'Active Deployment',
      location: 'Multi-Location Warehouses & Retail Outlets',
      badge: 'Enterprise Retail',
      summary: 'Centralized multi-store VMS surveillance protecting inventory, monitoring floor activities, and securing loading docks across multiple branch locations.',
      metrics: [
        { label: 'Active Feeds', value: '32 HD Cameras' },
        { label: 'Storage Retention', value: '60 Days Cloud Sync' },
        { label: 'Uptime SLA', value: '99.9%' }
      ],
      surveillanceFeeds: [
        {
          title: 'Main Showroom & Counter',
          type: '4K Ultra-Wide Feed',
          image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
          status: 'LIVE'
        },
        {
          title: 'Inventory Storage & Loading Bay',
          type: 'AI Motion Tripwire Feed',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
          status: 'RECORDING'
        }
      ],
      highlights: [
        'Synchronized multi-store camera management from a single web dashboard',
        'Automated perimeter breach alerts during after-hours inventory shifts',
        'Bandwidth-optimized high-definition live streaming for remote management'
      ]
    },
    {
      id: 'heaven-dream-homes',
      name: 'Heaven Dream Homes',
      category: 'Luxury Residential & Gated Communities',
      status: 'Active Deployment',
      location: 'Residential Developments & Gated Properties',
      badge: 'Residential Security',
      summary: 'High-security perimeter monitoring, automated vehicle license plate recognition (ALPR), and gate entry management for luxury residential properties.',
      metrics: [
        { label: 'Active Feeds', value: '48 Outdoor & Gate Cameras' },
        { label: 'AI Analytics', value: 'ALPR & Tripwire Active' },
        { label: 'System Health', value: 'Online' }
      ],
      surveillanceFeeds: [
        {
          title: 'Gated Entrance & Vehicle Access',
          type: 'ALPR License Plate Recognition',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
          status: 'LIVE'
        },
        {
          title: 'Perimeter Wall Monitoring',
          type: 'IR Night Vision & Thermal Analytics',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
          status: 'RECORDING'
        }
      ],
      highlights: [
        'Automated gate entry logging connected directly to VMS playback',
        '24/7 Night-vision infrared perimeter scanning with AI intrusion tracking',
        'Instant security team push notifications upon unauthorized boundary access'
      ]
    }
  ];

  const currentClientData = clients.find((c) => c.id === selectedClient);

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
              CLIENT DEPLOYMENTS & PARTNERS
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Trusted Surveillance <span className="text-blue-600">Deployments</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal px-2">
              Explore how we empower leading enterprises, retail hubs, and residential developments with high-definition Cloud VMS and AI vision analytics.
            </p>
          </motion.div>

          {/* CLIENT SELECTOR CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12 max-w-4xl mx-auto">
            {clients.map((client) => {
              const isActive = selectedClient === client.id;
              return (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client.id)}
                  className={`p-4 sm:p-6 text-left border rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                    isActive 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20' 
                      : 'bg-white border-neutral-200 text-neutral-800 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600 border border-blue-200'
                      }`}>
                        {client.badge}
                      </span>
                      <span className={`text-[10px] font-mono flex items-center gap-1 ${
                        isActive ? 'text-blue-100' : 'text-emerald-600'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-emerald-500'} animate-pulse`} />
                        {client.status}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold font-mono tracking-tight">{client.name}</h3>
                    <p className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-neutral-500'}`}>
                      {client.category}
                    </p>
                  </div>

                  <div className={`mt-6 pt-4 border-t text-[10px] font-mono flex items-center justify-between font-semibold ${
                    isActive ? 'border-white/20 text-white' : 'border-neutral-100 text-blue-600'
                  }`}>
                    <span>View System Deployment</span>
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED CLIENT DETAILS & SURVEILLANCE FEEDS */}
      <section className="py-8 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentClientData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 sm:space-y-12"
            >
              {/* OVERVIEW HEADER */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-neutral-200 pb-6">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
                      <FaBuilding />
                      ACTIVE ENTERPRISE CLIENT
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono tracking-tight">{currentClientData.name}</h2>
                    <p className="text-xs text-neutral-500 flex items-center gap-1.5 mt-1 font-mono">
                      <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                      <span>{currentClientData.location}</span>
                    </p>
                  </div>

                  {/* METRICS GRID - Fully responsive for smaller screens */}
                  <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 w-full lg:w-auto">
                    {currentClientData.metrics.map((metric, i) => (
                      <div key={i} className="bg-white border border-neutral-200 p-2.5 sm:p-3 rounded-xl text-center shadow-sm">
                        <div className="text-xs font-mono font-bold text-blue-600">{metric.value}</div>
                        <div className="text-[9px] font-mono text-neutral-500 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {currentClientData.summary}
                </p>

                {/* HIGHLIGHTS */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentClientData.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-neutral-700 bg-white p-3 rounded-xl border border-neutral-200">
                      <FaCheckCircle className="text-blue-600 text-xs mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SURVEILLANCE CAMERA FEEDS GALLERY */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-mono uppercase tracking-tight flex items-center gap-2">
                      <FaTv className="text-blue-600 flex-shrink-0" />
                      <span>Active Camera Feeds & Video Surveillance</span>
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Live feed previews integrated with Cloud VMS infrastructure</p>
                  </div>
                  <span className="self-start sm:self-auto text-[10px] font-mono bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200 font-bold">
                    H.265 ENCODED
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {currentClientData.surveillanceFeeds.map((feed, idx) => (
                    <div key={idx} className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-md group">
                      <div className="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden">
                        <img 
                          src={feed.image} 
                          alt={feed.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                        
                        {/* CAMERA OVERLAY BAR */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-[9px] font-mono font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                            {feed.status}
                          </span>
                          <span className="text-[9px] font-mono bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                            <FaBroadcastTower className="text-blue-400" /> CAM-0{idx + 1}
                          </span>
                        </div>

                        {/* BOTTOM CAPTION */}
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="text-xs font-mono font-bold">{feed.title}</div>
                          <div className="text-[10px] font-mono text-neutral-400">{feed.type}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CALL TO ACTION */}
              <div className="bg-neutral-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">
                    ENTERPRISE INTEGRATION
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-extrabold">Need Custom Surveillance For Your Business?</h4>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xl">We connect your IP cameras directly to our unified cloud monitoring dashboard.</p>
                </div>

                <Link 
                  to="/get-quote"
                  className="w-full md:w-auto text-center justify-center whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  Start Client Onboarding <FaArrowRight />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}