import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import { 
  FaShoppingCart, 
  FaBuilding, 
  FaFileContract, 
  FaDesktop, 
  FaChartLine,
  FaMicrochip,
  FaShieldAlt,
  FaHeadset,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaLock
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const QUOTE_LINK = "/get-quote"; 

export default function PixPerlPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Partners', href: '#partners' },
    { name: 'Process', href: '#process' },
    { name: 'Offices', href: '#offices' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { title: 'Retail Surveillance', desc: 'Monitor stores, assets, and operations to prevent theft, ensure safety, and improve efficiency.', tag: '01 / RETAIL', icon: FaShoppingCart },
    { title: 'Construction Security', desc: 'Round-the-clock site monitoring to protect equipment, prevent vandalism, and maintain compliance.', tag: '02 / SITE', icon: FaBuilding },
    { title: 'Contract Services', desc: '12-month dedicated contracts delivering consistent, reliable, and active security management.', tag: '03 / CONTRACT', icon: FaFileContract },
    { title: 'Remote Monitoring', desc: 'Off-site monitoring powered by real-time neural detection and immediate threat escalation.', tag: '04 / REMOTE', icon: FaDesktop },
    { title: 'Reporting & Insights', desc: 'Comprehensive analytical reports to give you complete visibility into security operations.', tag: '05 / ANALYTICS', icon: FaChartLine },
  ];

  const clients = [
    { name: 'BOBO SUPPLIES', type: 'Retail Chain', desc: '24/7 coverage across 12+ retail operations in Houston, TX.', logoText: 'B' },
    { name: 'HEAVEN DREAM HOMES', type: 'Construction & Real Estate', desc: 'Active construction zone monitoring and site equipment security.', logoText: 'H' },
    { name: 'APEX LOGISTICS', type: 'Warehouse Operations', desc: 'Perimeter monitoring and automated access log reporting.', logoText: 'A' }
  ];

  const steps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Detailed assessment of your physical and digital surveillance needs.' },
    { num: '02', title: 'Proposal & Tender', desc: 'Customized blueprint and tender submission for full site coverage.' },
    { num: '03', title: 'Contract Signing', desc: '12-month structured SLA setup to ensure transparent operations.' },
    { num: '04', title: 'Setup & Deployment', desc: 'Hardware installation and integration with our 24/7 command center.' },
    { num: '05', title: 'Active Protection', desc: 'Continuous remote monitoring paired with weekly analytics reports.' },
  ];

  const offices = [
    {
      city: 'Houston, TX',
      country: 'USA',
      role: 'Global Headquarters & Command Center',
      address: '1200 Smith St, Suite 1800, Houston, TX 77002, USA',
      phone: '+1 (800) 555-PIX3D',
      email: 'houston@pixperl3d.com',
      badge: 'HQ'
    },
    {
      city: 'Karachi',
      country: 'Pakistan',
      role: 'Regional Operations & Engineering Hub',
      address: 'Shahrah-e-Faisal, Karachi, Sindh, Pakistan',
      phone: '+92 (21) 3555-7493',
      email: 'karachi@pixperl3d.com',
      badge: 'REGIONAL HUB'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-emerald-400 selection:text-black antialiased overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          
          <a href="#home" className="flex items-center gap-2 font-mono font-black text-lg sm:text-xl tracking-wider text-white">
            <FaShieldAlt className="text-emerald-400" />
            <span>PIXPERL<span className="text-emerald-400">3D</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                onClick={() => setActiveTab(link.name.toLowerCase())} 
                className={`transition-colors hover:text-emerald-400 ${activeTab === link.name.toLowerCase() ? 'text-emerald-400' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={QUOTE_LINK}
              className="px-5 py-2.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:bg-emerald-300 transition-colors"
            >
              Get Quote
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 font-mono text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="block py-2 text-neutral-300 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href={QUOTE_LINK}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center mt-4 px-5 py-3 bg-emerald-400 text-black rounded font-extrabold"
            >
              Get Quote
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 border-b border-neutral-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-4 sm:mb-6 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                PIXPERL 3D STUDIO // LIVE SYSTEM
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-none">
                SMART <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-neutral-200 to-neutral-500">
                  SURVEILLANCE.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-normal">
                Next-generation 24/7 security management tailored for retail chains and construction operations. We take contracts and protect your assets end-to-end.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#services"
                  className="px-6 sm:px-8 py-3.5 bg-white text-black rounded-md hover:bg-emerald-400 transition-colors text-center shadow-lg"
                >
                  Explore Services
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={QUOTE_LINK}
                  className="px-6 sm:px-8 py-3.5 border border-neutral-800 text-white rounded-md hover:bg-neutral-900 transition-colors text-center"
                >
                  Get A Quote
                </motion.a>
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-4 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  <span>Houston, TX, USA</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  <span>Karachi, PK</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group w-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-neutral-800 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
                  alt="PixPerl Surveillance Feed"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-65 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px]" />
                <div className="absolute inset-x-0 h-0.5 bg-emerald-400/80 shadow-[0_0_15px_#34d399] animate-[bounce_3s_infinite]" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded border border-neutral-800 font-mono text-[9px] sm:text-[10px] text-emerald-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
                  FEED // CAM-01 [ACTIVE]
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-28 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4">
            <div>
              <p className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">CORE CAPABILITIES</p>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 sm:mt-2 tracking-tight">Surveillance Solutions</h2>
            </div>
            <p className="text-neutral-500 font-mono text-xs">Swipe to explore →</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-14 px-1"
          >
            {services.map((s, idx) => {
              const ServiceIcon = s.icon;
              return (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="h-full p-6 sm:p-8 bg-black/60 border border-neutral-800/80 rounded-2xl hover:border-emerald-400/50 hover:bg-neutral-900/40 transition-all duration-300 flex flex-col justify-between group min-h-[260px] sm:min-h-[300px]">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[10px] font-bold tracking-widest text-emerald-400">{s.tag}</span>
                        <ServiceIcon className="text-neutral-700 group-hover:text-emerald-400 transition-colors" size={20} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-2 sm:mt-3 mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">{s.desc}</p>
                    </div>
                    
                    <div className="pt-4 sm:pt-6 mt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                      <span>CONTRACT SERVICE</span>
                      <span>→</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 sm:py-28 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-xs font-mono font-extrabold tracking-widest text-neutral-500 uppercase">TRUSTED PARTNERS</p>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 sm:mt-2 tracking-tight">Businesses We Safeguard</h2>

          <div className="mt-10 sm:mt-16">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Autoplay]}
              autoplay={{ delay: 4000 }}
              className="max-w-4xl"
            >
              {clients.map((c, idx) => (
                <SwiperSlide key={idx} className="max-w-[280px] sm:max-w-sm">
                  <div className="p-6 sm:p-8 border border-neutral-800 rounded-2xl bg-neutral-950/80 hover:border-neutral-700 transition-all text-center flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-black text-base sm:text-lg text-emerald-400 mb-4 sm:mb-6 shadow-inner">
                      {c.logoText}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">{c.type}</span>
                    <h3 className="text-lg sm:text-xl font-black text-white mt-1 mb-2 sm:mb-3">{c.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">{c.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partners" className="py-16 sm:py-28 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">STRATEGIC ALLIANCE</p>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 sm:mt-2 tracking-tight">Our Key Tech Partner</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto p-6 sm:p-12 rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-emerald-500/40 transition-all shadow-2xl group"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-black border-2 border-emerald-400/40 flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(52,211,153,0.15)]">
                  <span className="font-mono font-black text-3xl sm:text-4xl tracking-widest text-white">RDV</span>
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase mt-1">TECHNOLOGIES</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  OFFICIAL SURVEILLANCE & INFRASTRUCTURE PARTNER
                </div>
                
                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">RDV Systems Integration</h3>
                
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  PixPerl 3D Studio is proud to collaborate with <strong>RDV</strong> to deliver high-performance hardware integrations, ultra-low latency streams, and automated AI security monitoring solutions tailored for commercial enterprises.
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[10px] sm:text-xs text-neutral-300">
                  <div className="p-2.5 rounded bg-neutral-900/80 border border-neutral-800/80 flex items-center gap-2">
                    <FaMicrochip className="text-emerald-400 flex-shrink-0" />
                    <div>
                        <span className="text-emerald-400 block font-bold">Hardware</span>
                        <span>HD Camera Modules</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-900/80 border border-neutral-800/80 flex items-center gap-2">
                    <FaShieldAlt className="text-emerald-400 flex-shrink-0" />
                    <div>
                        <span className="text-emerald-400 block font-bold">Streaming</span>
                        <span>Encrypted Channels</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-900/80 border border-neutral-800/80 col-span-2 sm:col-span-1 flex items-center gap-2">
                    <FaHeadset className="text-emerald-400 flex-shrink-0" />
                    <div>
                        <span className="text-emerald-400 block font-bold">Support</span>
                        <span>24/7 SLA Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-28 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">METHODOLOGY</p>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 sm:mt-2 tracking-tight">How We Operate</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-10 sm:mt-16">
            {steps.map((st, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 bg-neutral-950 border border-neutral-800 rounded-xl relative hover:border-emerald-400/50 transition-colors group"
              >
                <span className="font-mono text-lg sm:text-xl font-extrabold text-neutral-700 group-hover:text-emerald-400 transition-colors">
                  {st.num}
                </span>
                <h3 className="text-sm font-bold text-white mt-3 sm:mt-4 mb-1.5">{st.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section id="offices" className="py-16 sm:py-28 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">GLOBAL LOCATIONS</p>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 sm:mt-2 tracking-tight">Our Offices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 bg-black/60 border border-neutral-800 rounded-2xl hover:border-emerald-400/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded text-[9px] font-mono font-extrabold text-emerald-400 tracking-wider">
                      {office.badge}
                    </span>
                    <FaMapMarkerAlt className="text-neutral-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {office.city}, <span className="text-neutral-400 text-lg font-normal">{office.country}</span>
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mb-6">{office.role}</p>

                  <div className="space-y-3 font-mono text-xs text-neutral-400 border-t border-neutral-900 pt-4">
                    <p className="leading-relaxed">{office.address}</p>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <FaPhoneAlt className="text-emerald-400 text-[10px]" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <FaEnvelope className="text-emerald-400 text-[10px]" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">READY TO TALK?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mt-1">Protect Your Operations Today</h2>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={QUOTE_LINK}
            className="w-full md:w-auto text-center px-8 py-4 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
          >
            Request Contract Proposal
          </motion.a>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-black pt-16 pb-8 border-t border-neutral-900 font-sans text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 font-mono font-black text-xl tracking-wider text-white">
              <FaShieldAlt className="text-emerald-400" />
              <span>PIXPERL<span className="text-emerald-400">3D</span></span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-500 font-normal">
              Next-generation 24/7 security management tailored for retail chains and construction operations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <FaLock className="text-[10px]" />
              <span>256-BIT ENCRYPTED COMMAND CENTER</span>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#clients" className="hover:text-emerald-400 transition-colors">Clients</a></li>
              <li><a href="#partners" className="hover:text-emerald-400 transition-colors">RDV Partnership</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">Our Methodology</a></li>
              <li><a href="#offices" className="hover:text-emerald-400 transition-colors">Offices</a></li>
            </ul>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs">Solutions</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Retail Surveillance</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Construction Security</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Contract Services</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Remote Monitoring</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Reporting & Analytics</a></li>
            </ul>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs">Locations</h4>
            <div className="space-y-2.5 text-neutral-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" />
                <span>Houston, TX, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" />
                <span>Karachi, Sindh, PK</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <FaEnvelope className="text-emerald-400 flex-shrink-0" />
                <span>contact@pixperl3d.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} PIXPERL 3D STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">SLA DOCUMENTATION</a>
          </div>
        </div>
      </footer>

    </div>
  );
}