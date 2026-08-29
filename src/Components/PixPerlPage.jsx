import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';

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
  FaLock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCheckCircle,
  FaServer,
  FaBroadcastTower,
  FaSearch,
  FaFileSignature,
  FaTools,
  FaEye,
  FaArrowRight,
  FaGlobe,
  FaClock,
  FaNetworkWired,
  FaUndo,
  FaUserCheck
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const QUOTE_LINK = "/get-quote";

// Helper component for live clock in office locations
function CityClock({ timeZone }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return <span>{timeStr || '00:00:00 AM'}</span>;
}

export default function PixPerlPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const services = [
    { title: 'Retail Surveillance', desc: 'Monitor stores, assets, and operations to prevent theft, ensure safety, and improve efficiency.', tag: '01 / RETAIL', icon: FaShoppingCart },
    { title: 'Construction Security', desc: 'Round-the-clock site monitoring to protect equipment, prevent vandalism, and maintain compliance.', tag: '02 / SITE', icon: FaBuilding },
    { title: 'Contract Services', desc: '12-month dedicated contracts delivering consistent, reliable, and active security management.', tag: '03 / CONTRACT', icon: FaFileContract },
    { title: 'Remote Monitoring', desc: 'Off-site monitoring powered by real-time neural detection and immediate threat escalation.', tag: '04 / REMOTE', icon: FaDesktop },
    { title: 'Reporting & Insights', desc: 'Comprehensive analytical reports to give you complete visibility into security operations.', tag: '05 / ANALYTICS', icon: FaChartLine },
  ];

  const clients = [
    {
      name: 'BOBO APPLIANCES',
      type: 'Retail Chain',
      desc: 'Full-spectrum remote coverage across 12+ high-volume retail locations in Houston, TX.',
      logoText: 'B',
      nodes: '48 Active Cams',
      uptime: '99.98% Threat Intercept',
      tenure: '3 Year SLA Partner'
    },
    {
      name: 'HEAVEN DREAM HOMES',
      type: 'Construction & Real Estate',
      desc: 'Active construction zone protection, thermal fence detection, and site equipment security.',
      logoText: 'H',
      nodes: '18 Thermal Arrays',
      uptime: '100% Perimeter Guard',
      tenure: '2 Year SLA Partner'
    }
  ];

  // Renamed to incidentSteps to avoid collision
  const incidentSteps = [
    {
      step: '01',
      action: 'RECEIVE',
      title: 'Every signal reaches an operator',
      description:
        'Whether AI detects an anomaly on camera, someone presses an intercom button, or a user calls in directly, a Pixperl operator is always there to receive it, 24/7.',
      icon: <FaEye className="text-xl text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-200',
      badgeColor: 'text-blue-600',
    },
    {
      step: '02',
      action: 'VERIFY',
      title: 'A trained operator confirms',
      description:
        "A trained operator reviews the flagged event, answers the intercom call, or receives your request, and decides the response by following your site's predefined protocols.",
      icon: <FaUserCheck className="text-xl text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-200',
      badgeColor: 'text-blue-600',
    },
    {
      step: '03',
      action: 'RESPOND',
      title: 'We intervene in real time',
      description:
        'A live voice warning, an onsite siren, a call to you, police dispatch, or direct assistance to your team. We act on every signal before it becomes a problem.',
      icon: <FaBroadcastTower className="text-xl text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-200',
      badgeColor: 'text-blue-600',
    },
  ];

  // Renamed to methodologySteps
  const methodologySteps = [
    {
      num: '01',
      phase: 'PHASE 01',
      title: 'Requirement Analysis',
      desc: 'Detailed physical and digital site survey analyzing blind spots, perimeter vulnerabilities, and network bandwidth.',
      icon: FaSearch,
      deliverable: 'Site Risk & Coverage Audit'
    },
    {
      num: '02',
      phase: 'PHASE 02',
      title: 'Proposal & Tender',
      desc: 'Customized surveillance architecture, hardware allocation blueprints, and transparent SLA pricing tiers.',
      icon: FaFileContract,
      deliverable: 'Custom System Specification'
    },
    {
      num: '03',
      phase: 'PHASE 03',
      title: 'Contract Signing',
      desc: 'Finalizing structured 12-month SLA terms, incident escalation paths, and guaranteed uptime protocols.',
      icon: FaFileSignature,
      deliverable: 'Binding SLA Agreement'
    },
    {
      num: '04',
      phase: 'PHASE 04',
      title: 'Setup & Deployment',
      desc: ' Hardware installation, zero-trust network encryption setup, and streaming link to our 24/7 command center.',
      icon: FaTools,
      deliverable: 'Hardware Sync & Calibration'
    },
    {
      num: '05',
      phase: 'LIVE OPERATIONS',
      title: 'Active Protection',
      desc: 'Continuous real-time monitoring, instant threat suppression dispatch, and weekly operational analytics logs.',
      icon: FaEye,
      deliverable: '24/7 Command Watch'
    },
  ];

  const offices = [
    {
      city: 'Houston',
      country: 'UNITED STATES',
      badge: 'US HQ & COMMAND',
      role: 'Primary North American Operations Center & Field Dispatch',
      timeZone: 'America/Chicago',
      address: '1000 Main Street, Suite 2400, Houston, TX 77002',
      phone: '+1 (713) 555-0199',
      email: 'houston@pixperl.com'
    },
    {
      city: 'Karachi',
      country: 'PAKISTAN',
      badge: 'GLOBAL OPS CENTER',
      role: '24/7 Remote Operations, AI Analytics & Tech Command Hub',
      timeZone: 'Asia/Karachi',
      address: 'Shahrah-e-Faisal, Business Avenue, Floor 8, Karachi',
      phone: '+92 (21) 3555-0188',
      email: 'karachi@pixperl.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-200 selection:text-black antialiased overflow-x-hidden">

      {/* HERO SECTION */}
      <section id="home" className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 border-b border-neutral-200 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-blue-900 uppercase mb-4 sm:mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                PIXPERL 3D STUDIO // LIVE SYSTEM
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-tight sm:leading-none">
                SMART <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
                  SURVEILLANCE.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-normal">
                Next-generation 24/7 security management tailored for retail chains and construction operations. We take contracts and protect your assets end-to-end.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-mono text-xs font-bold uppercase tracking-widest">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#services"
                  className="px-6 sm:px-8 py-3.5 bg-black text-white rounded-md hover:bg-blue-600 transition-colors text-center shadow-lg"
                >
                  Explore Services
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={QUOTE_LINK}
                  className="px-6 sm:px-8 py-3.5 border border-neutral-300 text-black rounded-md hover:bg-neutral-100 transition-colors text-center bg-white"
                >
                  Get A Quote
                </motion.a>
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-4 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>Houston, TX, USA</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-blue-600" />
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />

              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
                  alt="PixPerl Surveillance Feed"
                  className="w-full h-full object-cover contrast-110 opacity-90 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px]" />
                <div className="absolute inset-x-0 h-0.5 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-[bounce_3s_infinite]" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded border border-neutral-300 font-mono text-[9px] sm:text-[10px] text-blue-700 flex items-center gap-2 font-bold shadow-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
                  FEED // CAM-01 [ACTIVE]
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INCIDENT RESPONSE SECTION */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 text-neutral-900 border-b border-neutral-200">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
      <div className="lg:col-span-7">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono text-neutral-900 leading-tight">
          An incident. A call. A button press.{' '}
          <span className="text-blue-600">
            Pixperl responds to all of it.
          </span>
        </h2>
      </div>
      <div className="lg:col-span-5">
        <p className="text-neutral-600 font-mono text-xs sm:text-sm leading-relaxed">
          Our mission is to deliver security, operational efficiency, and peace
          of mind to every business through trained operators, data
          analytics, and intelligent technology working together, 24/7.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {incidentSteps.map((item, idx) => (
        <div
          key={idx}
          className="relative bg-white border border-neutral-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-blue-500 hover:shadow-lg"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.iconBg}`}>
                {item.icon}
              </div>
              <span className={`font-mono text-xs font-bold ${item.badgeColor}`}>
                {item.step}
              </span>
            </div>

            <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              {item.action}
            </span>

            <h3 className="text-base sm:text-lg font-mono font-bold text-neutral-900 mb-2 leading-snug">
              {item.title}
            </h3>

            <p className="text-neutral-600 font-mono text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-12 sm:py-20 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
  {/* Background tech accent pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

    {/* Header with Navigation Controls */}
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded-full text-[9px] font-mono font-bold tracking-widest text-blue-700 uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          CORE CAPABILITIES
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
          Surveillance Solutions
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-neutral-400 font-mono text-[11px] hidden sm:inline">
          Swipe or navigate →
        </span>
        {/* Custom Navigation Controls */}
        <div className="flex items-center gap-1.5">
          <button 
            id="swiper-prev"
            aria-label="Previous Slide"
            className="w-9 h-9 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm active:scale-95 transition-all"
          >
            ←
          </button>
          <button 
            id="swiper-next"
            aria-label="Next Slide"
            className="w-9 h-9 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm active:scale-95 transition-all"
          >
            →
          </button>
        </div>
      </div>
    </div>

    {/* Swiper Slider */}
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation={{
        prevEl: '#swiper-prev',
        nextEl: '#swiper-next',
      }}
      spaceBetween={16}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      }}
      className="pb-4 !overflow-visible"
    >
      {services.map((s, idx) => {
        const ServiceIcon = s.icon;
        return (
          <SwiperSlide key={s.id || idx} className="h-auto">
            <div className="h-full p-6 sm:p-7 bg-white border border-neutral-200/80 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group min-h-[250px] sm:min-h-[280px]">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-blue-600 bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded">
                    {s.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                    <ServiceIcon size={16} />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-blue-600 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <a
                href={s.quoteUrl || QUOTE_LINK}
                className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-bold text-neutral-500 group-hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span className="tracking-wider">REQUEST QUOTE</span>
                <div className="w-6 h-6 rounded-md bg-neutral-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                  <span className="transform group-hover:translate-x-0.5 transition-transform text-[10px]">→</span>
                </div>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

  </div>
</section>

      {/* CLIENTS SECTION */}
      <section id="clients" className="py-16 sm:py-28 bg-white border-b border-neutral-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-blue-800 uppercase mb-3">
              <FaCheckCircle className="text-blue-600" />
              VERIFIED ACTIVE CONTRACTS
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
              Businesses We Safeguard
            </h2>
            <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
              Empowering industry leaders with high-definition surveillance infrastructure, active incident response, and zero-downtime monitoring contracts.
            </p>
          </div>

          <div className="mt-6">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Autoplay]}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              className="max-w-5xl pb-6"
            >
              {clients.map((c, idx) => (
                <SwiperSlide key={idx} className="max-w-[300px] sm:max-w-md">
                  <div className="p-6 sm:p-8 border border-neutral-200 rounded-3xl bg-neutral-50/90 hover:border-blue-400 transition-all text-left flex flex-col justify-between shadow-lg group min-h-[380px] relative overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-mono font-black text-lg text-blue-700 group-hover:border-blue-500 transition-colors shadow-inner">
                          {c.logoText}
                        </div>

                        <div className="flex items-center gap-2 px-2.5 py-1 bg-blue-100 border border-blue-200 rounded-md font-mono text-[9px] font-bold text-blue-800 uppercase">
                          ACTIVE 24/7
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-extrabold tracking-widest text-blue-600 uppercase">{c.type}</span>
                      <h3 className="text-xl sm:text-2xl font-black text-black mt-1 mb-3 group-hover:text-blue-600 transition-colors">{c.name}</h3>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">{c.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-200 font-mono text-[10px] space-y-2 bg-white p-3 rounded-xl border border-neutral-200">
                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="flex items-center gap-1.5">
                          <FaBroadcastTower className="text-blue-600" />
                          HARDWARE DEPLOYMENT:
                        </span>
                        <span className="text-black font-bold">{c.nodes}</span>
                      </div>

                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="flex items-center gap-1.5">
                          <FaServer className="text-blue-600" />
                          PERFORMANCE METRIC:
                        </span>
                        <span className="text-blue-600 font-bold">{c.uptime}</span>
                      </div>

                      <div className="flex items-center justify-between text-neutral-600">
                        <span className="flex items-center gap-1.5">
                          <FaFileContract className="text-blue-600" />
                          AGREEMENT SLA:
                        </span>
                        <span className="text-neutral-800 font-bold">{c.tenure}</span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
<section id="process" className="py-16 sm:py-28 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-blue-800 uppercase mb-3">
        METHODOLOGY & EXECUTION PIPELINE
      </div>
      <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">How We Operate</h2>
      <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
        Hover on desktop or tap <span className="text-blue-600 font-mono font-bold">See Details</span> on mobile to view complete operational requirements and key deliverables.
      </p>
    </div>

    {/* Pipeline Grid */}
    <div className="relative">
      {/* Background Pipeline Connector Line */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-y-12 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
        {methodologySteps.map((st, idx) => {
          const StepIcon = st.icon;
          const isFlipped = !!flippedCards[idx];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="h-80 sm:h-96 w-full [perspective:1000px] group"
            >
              <div 
                className={`relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >

                {/* FRONT CARD */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white border border-neutral-200 p-6 flex flex-col justify-between [backface-visibility:hidden] shadow-sm group-hover:shadow-xl group-hover:border-blue-400 transition-all duration-300 overflow-hidden">
                  {/* Subtle Front Hover Gradient Glow */}
                  <div className="absolute -inset-full rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-2xl font-black text-blue-600 tracking-tighter">{st.num}</span>
                      <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                        <StepIcon size={18} />
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-blue-700 uppercase tracking-widest block mb-1">{st.phase}</span>
                    <h3 className="text-base font-bold text-black mb-2 leading-snug">{st.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">{st.desc}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCardFlip(idx)}
                    className="relative z-10 lg:hidden mt-4 py-2 px-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
                  >
                    <span>See Details</span>
                    <FaArrowRight size={10} />
                  </button>
                </div>

                {/* BACK CARD */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-neutral-900 via-blue-950 to-blue-900 p-6 text-white flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl border border-blue-400/20 overflow-hidden">
                  {/* Ambient Light Accent inside Back Card */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono font-black tracking-widest text-blue-400 uppercase bg-blue-950/80 border border-blue-800/60 px-2 py-0.5 rounded">
                        DELIVERABLE
                      </span>
                      <span className="font-mono text-xs text-neutral-400">{st.num}</span>
                    </div>

                    <h4 className="text-base font-black text-white mb-2 leading-snug">{st.deliverable}</h4>
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                      Full operational setup, real-time sync, and SLA verified reporting pipelines tailored to your architecture.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCardFlip(idx)}
                    className="relative z-10 lg:hidden mt-4 py-2 px-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaUndo size={10} />
                    <span>Flip Back</span>
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

  </div>
</section>

<section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-neutral-100/70 border-b border-neutral-200 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
    
    {/* Left Column: Text & Narrative */}
    <div className="lg:col-span-5 relative">
      {/* Background Watermark Accent */}
      <div className="absolute -top-10 -left-10 sm:-top-12 sm:-left-12 w-60 h-60 sm:w-96 sm:h-96 opacity-10 pointer-events-none select-none z-0">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-neutral-900">
          <path d="M40 30 Q 60 10, 100 20 T 160 50 Q 180 90, 150 140 T 80 180 Q 30 150, 20 100 Z" />
        </svg>
      </div>

      <div className="relative z-10 text-left">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-blue-100/80 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-blue-800 uppercase mb-3 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          AI ANALYTICS + HUMAN RESPONSE
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-3 sm:mb-4">
          Trusted across <br className="hidden sm:inline" />
          North America
        </h2>

        <p className="text-xs sm:text-sm font-mono font-bold text-blue-600 mb-4 sm:mb-6">
          Real operators. Real-time response.
        </p>

        <p className="text-xs sm:text-base text-neutral-600 leading-relaxed font-normal">
          Behind every alert is a trained operator in Pixperl&apos;s command center watching live, verifying in seconds, and acting before damage escalates. AI surfaces the threat; people make the call.
        </p>
      </div>
    </div>

    {/* Right Column: AI Analytics & Threat Detection Bento Grid */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
      
      {/* Top Large Featured Image: Parking Lot / Facility AI Bounding Box Detection */}
      <div className="sm:col-span-2 relative group overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-950 aspect-[16/10] sm:aspect-[2/1] shadow-md">
        <img
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=1200"
          alt="AI Parking Lot Space & Vehicle Detection"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
        
        {/* Simulated Parking Space & Vehicle Detection Overlay Grid */}
        <div className="absolute inset-3 sm:inset-5 lg:inset-6 flex flex-col justify-between pointer-events-none">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/70 px-2.5 py-1 rounded-md sm:rounded-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[8px] sm:text-[10px] font-mono text-neutral-200 font-bold tracking-wider uppercase">
                PERIMETER ANALYTICS • 32 ZONES
              </span>
            </div>
            <span className="font-mono text-[8px] sm:text-[10px] text-blue-400 bg-blue-950/90 border border-blue-800/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded font-bold">
              LIVE FEED
            </span>
          </div>

          {/* Simulated Bounding Box HUD Elements */}
          {/* <div className="grid grid-cols-4 gap-1.5 sm:gap-2 opacity-80">
            <div className="border border-emerald-400/80 bg-emerald-500/10 h-7 sm:h-10 rounded flex items-end p-0.5 sm:p-1">
              <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400 font-bold">VACANT</span>
            </div>
            <div className="border border-rose-500/80 bg-rose-500/10 h-7 sm:h-10 rounded flex items-end p-0.5 sm:p-1">
              <span className="text-[7px] sm:text-[8px] font-mono text-rose-400 font-bold">OCCUPIED</span>
            </div>
            <div className="border border-emerald-400/80 bg-emerald-500/10 h-7 sm:h-10 rounded flex items-end p-0.5 sm:p-1">
              <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400 font-bold">VACANT</span>
            </div>
            <div className="border border-blue-500/80 bg-blue-500/10 h-7 sm:h-10 rounded flex items-end p-0.5 sm:p-1">
              <span className="text-[7px] sm:text-[8px] font-mono text-blue-400 font-bold">SCANNING</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Left Image: Smart City / Overhead Vehicle & Pedestrian Signal Tracking */}
      <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-950 aspect-[16/10] sm:aspect-[4/3] shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWLOstBHi-u0llE6dHThWfzHSmdLv_7_zWbsHCJck1w&s=10"
          alt="Aerial Intelligent Signal & Traffic Tracking"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

        {/* HUD Overlay for Intersection/Pedestrian Detection */}
        <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between pointer-events-none">
          <div className="self-start bg-blue-600/90 text-white font-mono text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
            VEHICLE & PEDESTRIAN DETECTED
          </div>

          <div className="border border-blue-400/60 bg-blue-950/60 rounded-lg p-1.5 sm:p-2 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-blue-200 font-bold">
              <span>INTELLIGENT SIGNALS</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Image: Intruder Detection & Mobile App Sync */}
      <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-950 aspect-[16/10] sm:aspect-[4/3] shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFsI5VfSlYGFtigGLhx6iH2FeL7Yz1H3GXL_o_IGiEEA&s=10"
          alt="Outdoor Camera Intruder Detection and Mobile Sync"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />

        {/* Security Alert Badge */}
        <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between pointer-events-none">
          <div className="self-end flex items-center gap-1.5 bg-rose-600 text-white font-mono text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded animate-pulse">
            <span>INTRUSION ALERT</span>
          </div>

          <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-neutral-300 font-medium">
            <span className="text-blue-400 font-bold">INSTANT MOBILE SYNC</span>
            <span className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* OFFICES SECTION */}
      <section id="offices" className="py-12 sm:py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-blue-900 uppercase mb-3">
              <FaGlobe className="text-blue-600 animate-spin" style={{ animationDuration: '15s' }} />
              24/7 DUAL COMMAND HUBS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">Our Offices & Command Centers</h2>
            <p className="mt-2 sm:mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal px-2">
              Dual active command hubs providing round-the-clock shift handovers, real-time threat detection, and continuous SLA delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15,
                  y: { duration: 0.3, ease: 'easeOut' }
                }}
                className="p-5 sm:p-7 md:p-8 bg-white border border-neutral-200 hover:border-blue-400 rounded-2xl sm:rounded-3xl transition-all duration-500 ease-out flex flex-col justify-between group shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-neutral-100 mb-5 sm:mb-6">
                    <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 rounded text-[9px] sm:text-[10px] font-mono font-extrabold text-blue-700 tracking-wider uppercase transition-colors duration-300 group-hover:border-blue-400">
                      {office.badge}
                    </span>
                    <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-600 animate-pulse" />
                      <span>OPERATIONAL // 24/7</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-black group-hover:text-blue-600 transition-colors duration-300">{office.city}</h3>
                      <p className="text-xs font-mono text-blue-600 font-bold mt-0.5">{office.country}</p>
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                      <FaMapMarkerAlt size={15} />
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 font-medium mt-3 mb-5 leading-relaxed">{office.role}</p>

                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 font-mono text-[10px] sm:text-[11px] mb-5 sm:mb-6 flex flex-row items-center justify-between gap-2 transition-colors duration-300 group-hover:border-neutral-300">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <FaClock className="text-blue-600 flex-shrink-0" />
                      <span>LOCAL TIME:</span>
                    </div>
                    <span className="text-blue-600 font-bold">
                      <CityClock timeZone={office.timeZone} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 text-white min-h-[440px] sm:min-h-[500px] flex items-center">
          
          {/* Background Image & Dual-Layer Ambient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByKnoQ8-PILL5EcPP41xDnJNaX9MZAs0UHSjLO3-sQA&s=10"
              alt="Pixperl Live Dispatch & Command Team"
              className="w-full h-full object-cover object-right lg:object-center opacity-45 mix-blend-luminosity"
            />
            {/* Responsive Left-to-Right gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 md:via-neutral-950/75 to-transparent" />
            {/* Subtle Blue Glow Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-2xl p-6 sm:p-12 lg:p-16">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-800/60 rounded-full text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase mb-4 sm:mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              LIVE OPERATOR SUPPORT
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4 sm:mb-6">
              Be the reason <br className="hidden sm:inline" />
              nothing happened.
            </h2>

            <p className="text-sm sm:text-lg text-neutral-300 font-normal mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Pixperl detects, verifies, and responds before damage escalates.
            </p>

            {/* Action Button linked to /quote route */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
              <Link
                to="/get-quote"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm text-center active:scale-95"
              >
                Get an instant estimate
              </Link>
            </div>

            <p className="text-[11px] sm:text-xs font-mono text-neutral-400 tracking-wide">
              3 quick questions. No calls, no forms, no obligation.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}