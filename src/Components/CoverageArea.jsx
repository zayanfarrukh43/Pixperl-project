import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function CoverageArea() {
  const [activeRegion, setActiveRegion] = useState('houston');

  const regions = {
    houston: {
      title: "GREATER HOUSTON // FIELD DISPATCH",
      tagline: "Primary Hub & Immediate On-Site Support",
      cities: [
        "Houston", "Katy", "Sugar Land", "Pearland", "The Woodlands", 
        "Cypress", "Spring", "Humble", "Pasadena", "Baytown", 
        "League City", "Missouri City", "Conroe", "Tomball", "Richmond", "Friendswood"
      ]
    },
    nationwide: {
      title: "UNITED STATES // NATIONWIDE COVERAGE",
      tagline: "24/6 Remote Command Centers Across All States",
      cities: [
        "California (CA)", "Texas (TX)", "Florida (FL)", "New York (NY)", 
        "Illinois (IL)", "Georgia (GA)", "Ohio (OH)", "Pennsylvania (PA)", 
        "North Carolina (NC)", "Michigan (MI)", "Washington (WA)", "Arizona (AZ)", 
        "Nevada (NV)", "Colorado (CO)", "New Jersey (NJ)", "Tennessee (TN)",
        "Massachusetts (MA)", "Indiana (IN)", "Missouri (MO)", "Maryland (MD)",
        "Wisconsin (WI)", "Minnesota (MN)", "Virginia (VA)", "Oregon (OR)"
      ]
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content & Region Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] font-mono font-bold tracking-widest text-blue-700 uppercase">
              <FaMapMarkerAlt className="text-blue-600" />
              COVERAGE AREA
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Security Camera Monitoring Across <span className="text-blue-600">All Over USA</span>
            </h2>
            
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
              From our Houston headquarters, we install, dispatch and monitor security systems for retail stores and construction sites across Greater Houston.
            </p>
            
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
              We also provide remote video monitoring for businesses across the United States and North America through our 24/6 command centers.
            </p>

            {/* Region Switcher Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setActiveRegion('houston')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeRegion === 'houston'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Greater Houston
              </button>
              <button
                onClick={() => setActiveRegion('nationwide')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeRegion === 'nationwide'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Nationwide USA
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Box with Pills */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegion}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-200 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
                        {regions[activeRegion].title}
                      </span>
                      <span className="text-[11px] text-neutral-500 font-mono">
                        {regions[activeRegion].tagline}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] font-mono font-bold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      ACTIVE
                    </div>
                  </div>

                  {/* Pills Grid */}
                  <div className="flex flex-wrap gap-2.5 max-h-[280px] overflow-y-auto pr-1">
                    {regions[activeRegion].cities.map((location, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-xl text-xs font-mono font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 transition-all cursor-default"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}