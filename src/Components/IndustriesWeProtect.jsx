import React from 'react';
import { 
  FaShoppingCart, 
  FaDesktop, 
  FaBuilding, 
  FaHome, 
  FaWarehouse, 
  FaLayerGroup,
  FaArrowRight 
} from 'react-icons/fa';

export default function IndustriesWeProtect() {
  const industries = [
    {
      tag: '01 / RETAIL',
      title: 'Retail Stores & Chains',
      desc: 'We stop shoplifting, watch register activity and secure your store after closing, across one location or a whole chain.',
      icon: FaShoppingCart,
      quoteUrl: '/get-quote'
    },
    {
      tag: '02 / HIGH-VALUE',
      title: 'Appliance & Electronics Stores',
      desc: 'We protect high-value stock, showroom floors, stockrooms and loading docks from theft day and night.',
      icon: FaDesktop,
      quoteUrl: '/get-quote'
    },
    {
      tag: '03 / SITE',
      title: 'Construction Sites',
      desc: 'Thermal perimeter detection and live voice warnings prevent equipment theft, material theft and vandalism.',
      icon: FaBuilding,
      quoteUrl: '/get-quote'
    },
    {
      tag: '04 / REAL ESTATE',
      title: 'Real Estate & New Home Builds',
      desc: 'We protect vacant properties, model homes and building materials during the hours no one is on site.',
      icon: FaHome,
      quoteUrl: '/get-quote'
    },
    {
      tag: '05 / LOGISTICS',
      title: 'Warehouses & Distribution',
      desc: 'We monitor gates, yards and loading bays, and check every vehicle and person entering after hours.',
      icon: FaWarehouse,
      quoteUrl: '/get-quote'
    },
    {
      tag: '06 / MULTI-SITE',
      title: 'Multi-Location Businesses',
      desc: 'One command center, one response standard and one weekly report for every location you run.',
      icon: FaLayerGroup,
      quoteUrl: '/get-quote'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[11px] font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
            INDUSTRY COVERAGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Industries We Protect
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
            Every business faces different risks. Our operators follow response protocols built for your industry and your site.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="text-lg" />
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-blue-600 bg-blue-50/80 border border-blue-100 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-neutral-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}