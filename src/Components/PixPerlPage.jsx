// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
// // ✅ Add 'Link' inside the curly braces
// import { Link } from 'react-router-dom';

// import {
//   FaShoppingCart,
//   FaBuilding,
//   FaFileContract,
//   FaDesktop,
//   FaChartLine,
//   FaMicrochip,
//   FaShieldAlt,
//   FaHeadset,
//   FaMapMarkerAlt,
//   FaBars,
//   FaTimes,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLock,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaCheckCircle,
//   FaServer,
//   FaBroadcastTower,
//   FaSearch,
//   FaFileSignature,
//   FaTools,
//   FaEye,
//   FaArrowRight,
//   FaGlobe,
//   FaClock,
//   FaNetworkWired,
//   FaUndo
// } from 'react-icons/fa';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';

// const QUOTE_LINK = "/get-quote";

// // Helper component for live clock in office locations
// function CityClock({ timeZone }) {
//   const [timeStr, setTimeStr] = useState('');

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setTimeStr(
//         now.toLocaleTimeString('en-US', {
//           timeZone,
//           hour: '2-digit',
//           minute: '2-digit',
//           second: '2-digit',
//           hour12: true
//         })
//       );
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, [timeZone]);

//   return <span>{timeStr || '00:00:00 AM'}</span>;
// }

// export default function PixPerlPage() {
//   const [activeTab, setActiveTab] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // State to track flipped cards for touch/mobile devices
//   const [flippedCards, setFlippedCards] = useState({});

//   const toggleCardFlip = (index) => {
//     setFlippedCards((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About Us', href: '/about', externalPage: true },
//     { name: 'Services', href: '#services' },
//     { name: 'Clients', href: '#clients' },
//     { name: 'Partners', href: '#partners' },
//     { name: 'Process', href: '#process' },
//     { name: 'Offices', href: '#offices' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const services = [
//     { title: 'Retail Surveillance', desc: 'Monitor stores, assets, and operations to prevent theft, ensure safety, and improve efficiency.', tag: '01 / RETAIL', icon: FaShoppingCart },
//     { title: 'Construction Security', desc: 'Round-the-clock site monitoring to protect equipment, prevent vandalism, and maintain compliance.', tag: '02 / SITE', icon: FaBuilding },
//     { title: 'Contract Services', desc: '12-month dedicated contracts delivering consistent, reliable, and active security management.', tag: '03 / CONTRACT', icon: FaFileContract },
//     { title: 'Remote Monitoring', desc: 'Off-site monitoring powered by real-time neural detection and immediate threat escalation.', tag: '04 / REMOTE', icon: FaDesktop },
//     { title: 'Reporting & Insights', desc: 'Comprehensive analytical reports to give you complete visibility into security operations.', tag: '05 / ANALYTICS', icon: FaChartLine },
//   ];

//   const clients = [
//     {
//       name: 'BOBO SUPPLIES',
//       type: 'Retail Chain',
//       desc: 'Full-spectrum remote coverage across 12+ high-volume retail locations in Houston, TX.',
//       logoText: 'B',
//       nodes: '48 Active Cams',
//       uptime: '99.98% Threat Intercept',
//       tenure: '3 Year SLA Partner'
//     },
//     {
//       name: 'HEAVEN DREAM HOMES',
//       type: 'Construction & Real Estate',
//       desc: 'Active construction zone protection, thermal fence detection, and site equipment security.',
//       logoText: 'H',
//       nodes: '18 Thermal Arrays',
//       uptime: '100% Perimeter Guard',
//       tenure: '2 Year SLA Partner'
//     },
//     {
//       name: 'APEX LOGISTICS',
//       type: 'Warehouse Operations',
//       desc: 'Multi-point perimeter monitoring and automated vehicle log analytics.',
//       logoText: 'A',
//       nodes: '64 HD Nodes',
//       uptime: '<15s Threat Alert',
//       tenure: '4 Year SLA Partner'
//     },
//     {
//       name: 'VANGUARD MEDICAL HUB',
//       type: 'Healthcare Facility',
//       desc: 'Strict access control monitoring and continuous emergency lane watch.',
//       logoText: 'V',
//       nodes: '32 Secure Nodes',
//       uptime: 'Zero Breach Record',
//       tenure: '1 Year SLA Partner'
//     }
//   ];

//   const steps = [
//     {
//       num: '01',
//       phase: 'PHASE 01',
//       title: 'Requirement Analysis',
//       desc: 'Detailed physical and digital site survey analyzing blind spots, perimeter vulnerabilities, and network bandwidth.',
//       icon: FaSearch,
//       deliverable: 'Site Risk & Coverage Audit'
//     },
//     {
//       num: '02',
//       phase: 'PHASE 02',
//       title: 'Proposal & Tender',
//       desc: 'Customized surveillance architecture, hardware allocation blueprints, and transparent SLA pricing tiers.',
//       icon: FaFileContract,
//       deliverable: 'Custom System Specification'
//     },
//     {
//       num: '03',
//       phase: 'PHASE 03',
//       title: 'Contract Signing',
//       desc: 'Finalizing structured 12-month SLA terms, incident escalation paths, and guaranteed uptime protocols.',
//       icon: FaFileSignature,
//       deliverable: 'Binding SLA Agreement'
//     },
//     {
//       num: '04',
//       phase: 'PHASE 04',
//       title: 'Setup & Deployment',
//       desc: 'RDV hardware installation, zero-trust network encryption setup, and streaming link to our 24/7 command center.',
//       icon: FaTools,
//       deliverable: 'Hardware Sync & Calibration'
//     },
//     {
//       num: '05',
//       phase: 'LIVE OPERATIONS',
//       title: 'Active Protection',
//       desc: 'Continuous real-time monitoring, instant threat suppression dispatch, and weekly operational analytics logs.',
//       icon: FaEye,
//       deliverable: '24/7 Command Watch'
//     },
//   ];

//   const offices = [
//     {
//       city: 'Houston, TX',
//       country: 'USA',
//       timeZone: 'America/Chicago',
//       role: 'Global HQ & Primary Command Center',
//       address: '1200 Smith St, Suite 1800, Houston, TX 77002, USA',
//       phone: '+1 (800) 555-PIX3D',
//       email: 'info@pixperl.com',
//       badge: 'GLOBAL HQ',
//       coordinates: '29.7604° N, 95.3698° W',
//       capacity: '60+ Console Desks'
//     },
//     {
//       city: 'Karachi',
//       country: 'Pakistan',
//       timeZone: 'Asia/Karachi',
//       role: 'Regional Operations & AI Analytics Hub',
//       address: 'Shahrah-e-Faisal, Karachi, Sindh, Pakistan',
//       phone: '+1 (800) 555-PIX3D',
//       email: 'info@pixperl.com',
//       badge: 'REGIONAL HUB',
//       coordinates: '24.8607° N, 67.0011° E',
//       capacity: '40+ Neural Array Monitors'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-emerald-400 selection:text-black antialiased overflow-x-hidden">

//       {/* HEADER SECTION */}
//       <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">

//           <a href="#home" className="flex items-center gap-2 font-mono font-black text-lg sm:text-xl tracking-wider text-white">
//             <FaShieldAlt className="text-emerald-400" />
//             <span>PIXPERL<span className="text-emerald-400">3D STUDIO</span></span>
//           </a>

//           <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
//             {navLinks.map((link, idx) => (
//               <a
//                 key={idx}
//                 href={link.href}
//                 onClick={() => {
//                   if (!link.externalPage) {
//                     setActiveTab(link.name.toLowerCase());
//                   }
//                 }}
//                 className={`transition-colors hover:text-emerald-400 ${activeTab === link.name.toLowerCase() ? 'text-emerald-400' : ''}`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           <div className="hidden md:block">
//             <a
//               href={QUOTE_LINK}
//               className="px-5 py-2.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:bg-emerald-300 transition-colors"
//             >
//               Get Quote
//             </a>
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-neutral-300 hover:text-white p-2"
//             aria-label="Toggle Navigation"
//           >
//             {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 font-mono text-xs font-bold uppercase tracking-widest">
//             {navLinks.map((link, idx) => (
//               <a
//                 key={idx}
//                 href={link.href}
//                 onClick={() => {
//                   if (!link.externalPage) {
//                     setActiveTab(link.name.toLowerCase());
//                   }
//                   setMobileMenuOpen(false);
//                 }}
//                 className="block py-2 text-neutral-300 hover:text-emerald-400"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href={QUOTE_LINK}
//               onClick={() => setMobileMenuOpen(false)}
//               className="block text-center mt-4 px-5 py-3 bg-emerald-400 text-black rounded font-extrabold"
//             >
//               Get Quote
//             </a>
//           </div>
//         )}
//       </header>

//       {/* HERO SECTION */}
//       <section id="home" className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 border-b border-neutral-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="z-10"
//             >
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-4 sm:mb-6 shadow-inner">
//                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
//                 PIXPERL 3D STUDIO // LIVE SYSTEM
//               </div>

//               <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-none">
//                 SMART <br className="hidden sm:inline" />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-neutral-200 to-neutral-500">
//                   SURVEILLANCE.
//                 </span>
//               </h1>

//               <p className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-normal">
//                 Next-generation 24/7 security management tailored for retail chains and construction operations. We take contracts and protect your assets end-to-end.
//               </p>

//               <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-mono text-xs font-bold uppercase tracking-widest">
//                 <motion.a
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   href="#services"
//                   className="px-6 sm:px-8 py-3.5 bg-white text-black rounded-md hover:bg-emerald-400 transition-colors text-center shadow-lg"
//                 >
//                   Explore Services
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   href={QUOTE_LINK}
//                   className="px-6 sm:px-8 py-3.5 border border-neutral-800 text-white rounded-md hover:bg-neutral-900 transition-colors text-center"
//                 >
//                   Get A Quote
//                 </motion.a>
//               </div>

//               <div className="mt-8 sm:mt-12 flex items-center gap-4 text-xs font-mono text-neutral-500">
//                 <div className="flex items-center gap-1.5">
//                   <FaMapMarkerAlt className="text-emerald-400" />
//                   <span>Houston, TX, USA</span>
//                 </div>
//                 <span>•</span>
//                 <div className="flex items-center gap-1.5">
//                   <FaMapMarkerAlt className="text-emerald-400" />
//                   <span>Karachi, PK</span>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative group w-full"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-neutral-800 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />

//               <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
//                   alt="PixPerl Surveillance Feed"
//                   className="w-full h-full object-cover grayscale contrast-125 opacity-65 group-hover:scale-105 transition-transform duration-700"
//                 />

//                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px]" />
//                 <div className="absolute inset-x-0 h-0.5 bg-emerald-400/80 shadow-[0_0_15px_#34d399] animate-[bounce_3s_infinite]" />

//                 <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded border border-neutral-800 font-mono text-[9px] sm:text-[10px] text-emerald-400 flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
//                   FEED // CAM-01 [ACTIVE]
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section id="services" className="py-16 sm:py-28 bg-neutral-950 border-b border-neutral-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

//           <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4">
//             <div>
//               <p className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">CORE CAPABILITIES</p>
//               <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 sm:mt-2 tracking-tight">Surveillance Solutions</h2>
//             </div>
//             <p className="text-neutral-500 font-mono text-xs">Swipe to explore →</p>
//           </div>

//           <Swiper
//             modules={[Autoplay, Navigation]}
//             spaceBetween={16}
//             slidesPerView={1}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 24 },
//             }}
//             className="pb-6 px-1"
//           >
//             {services.map((s, idx) => {
//               const ServiceIcon = s.icon;
//               return (
//                 <SwiperSlide key={idx} className="h-auto">
//                   <div className="h-full p-6 sm:p-8 bg-black/60 border border-neutral-800/80 rounded-2xl hover:border-emerald-400/50 hover:bg-neutral-900/40 transition-all duration-300 flex flex-col justify-between group min-h-[260px] sm:min-h-[300px]">
//                     <div>
//                       <div className="flex justify-between items-start">
//                         <span className="font-mono text-[10px] font-bold tracking-widest text-emerald-400">{s.tag}</span>
//                         <ServiceIcon className="text-neutral-700 group-hover:text-emerald-400 transition-colors" size={20} />
//                       </div>
//                       <h3 className="text-lg sm:text-xl font-bold text-white mt-2 sm:mt-3 mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors">{s.title}</h3>
//                       <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">{s.desc}</p>
//                     </div>

//                     <div className="pt-4 sm:pt-6 mt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
//                       <span>CONTRACT SERVICE</span>
//                       <span>→</span>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>

//         </div>
//       </section>

//       {/* CLIENTS SECTION */}
//       <section id="clients" className="py-16 sm:py-28 bg-black border-b border-neutral-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

//           <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-3">
//               <FaCheckCircle className="text-emerald-400" />
//               VERIFIED ACTIVE CONTRACTS
//             </div>
//             <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
//               Businesses We Safeguard
//             </h2>
//             <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
//               Empowering industry leaders with high-definition surveillance infrastructure, active incident response, and zero-downtime monitoring contracts.
//             </p>
//           </div>

//           <div className="mt-6">
//             <Swiper
//               effect={'coverflow'}
//               grabCursor={true}
//               centeredSlides={true}
//               slidesPerView={'auto'}
//               coverflowEffect={{
//                 rotate: 15,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: false,
//               }}
//               modules={[EffectCoverflow, Autoplay]}
//               autoplay={{ delay: 4500, disableOnInteraction: false }}
//               className="max-w-5xl pb-6"
//             >
//               {clients.map((c, idx) => (
//                 <SwiperSlide key={idx} className="max-w-[300px] sm:max-w-md">
//                   <div className="p-6 sm:p-8 border border-neutral-800 rounded-3xl bg-neutral-950/90 hover:border-emerald-500/40 transition-all text-left flex flex-col justify-between shadow-2xl group min-h-[380px] relative overflow-hidden">
//                     <div>
//                       <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-6">
//                         <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 flex items-center justify-center font-mono font-black text-lg text-emerald-400 group-hover:border-emerald-400/50 transition-colors shadow-inner">
//                           {c.logoText}
//                         </div>

//                         <div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded-md font-mono text-[9px] font-bold text-emerald-400 uppercase">
//                           ACTIVE 24/7
//                         </div>
//                       </div>

//                       <span className="text-[10px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase">{c.type}</span>
//                       <h3 className="text-xl sm:text-2xl font-black text-white mt-1 mb-3 group-hover:text-emerald-400 transition-colors">{c.name}</h3>
//                       <p className="text-xs text-neutral-400 leading-relaxed font-normal">{c.desc}</p>
//                     </div>

//                     <div className="mt-6 pt-4 border-t border-neutral-900 font-mono text-[10px] space-y-2 bg-black/40 p-3 rounded-xl border border-neutral-900">
//                       <div className="flex items-center justify-between text-neutral-400">
//                         <span className="flex items-center gap-1.5">
//                           <FaBroadcastTower className="text-emerald-400" />
//                           HARDWARE DEPLOYMENT:
//                         </span>
//                         <span className="text-white font-bold">{c.nodes}</span>
//                       </div>

//                       <div className="flex items-center justify-between text-neutral-400">
//                         <span className="flex items-center gap-1.5">
//                           <FaServer className="text-emerald-400" />
//                           PERFORMANCE METRIC:
//                         </span>
//                         <span className="text-emerald-400 font-bold">{c.uptime}</span>
//                       </div>

//                       <div className="flex items-center justify-between text-neutral-400">
//                         <span className="flex items-center gap-1.5">
//                           <FaFileContract className="text-emerald-400" />
//                           AGREEMENT SLA:
//                         </span>
//                         <span className="text-neutral-300 font-bold">{c.tenure}</span>
//                       </div>
//                     </div>

//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </section>

//       {/* STRATEGIC ALLIANCE - PARTNER SECTION */}
//       {/* <section id="partners" className="py-16 sm:py-28 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

//           <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase mb-3">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//               STRATEGIC ALLIANCE
//             </div>
//             <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
//               Powered By <span className="text-emerald-400">RDV Technologies</span>
//             </h2>
//             <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
//               PixPerl 3D Studio partners with RDV to integrate enterprise hardware, low-latency streaming infrastructure, and neural AI threat detection into a unified command hub.
//             </p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-neutral-800/80 hover:border-emerald-500/40 transition-all shadow-2xl p-6 sm:p-10 lg:p-12"
//           >
//             <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-neutral-800/80">

//               <div className="flex items-center gap-5 text-center sm:text-left">
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-black border-2 border-emerald-400/50 flex flex-col items-center justify-center p-3 shadow-[0_0_35px_rgba(52,211,153,0.15)] flex-shrink-0">
//                   <span className="font-mono font-black text-3xl sm:text-4xl tracking-widest text-white">RDV</span>
//                   <span className="text-[7px] sm:text-[8px] font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase mt-1">TECHNOLOGIES</span>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-2 justify-center sm:justify-start">
//                     <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">CORE HARDWARE & SOFTWARE BACKBONE</span>
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-black text-white mt-1">RDV Systems Integration</h3>
//                   <p className="text-xs text-neutral-400 mt-1 max-w-md">
//                     Custom-built surveillance hardware paired with edge-AI computing platforms to power 24/7 proactive threat suppression.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col items-center lg:items-end font-mono">
//                 <div className="px-3.5 py-1.5 bg-neutral-900 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-bold flex items-center gap-2">
//                   <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
//                   ACTIVE SYSTEM ALLIANCE
//                 </div>
//                 <span className="text-[10px] text-neutral-500 mt-2">SLA Coverage Guaranteed</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8">

//               <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 hover:border-emerald-500/30 transition-all group">
//                 <div className="w-10 h-10 rounded-lg bg-black border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
//                   <FaMicrochip size={18} />
//                 </div>
//                 <h4 className="text-sm font-bold text-white mb-1.5">Edge AI Hardware</h4>
//                 <p className="text-xs text-neutral-400 leading-relaxed font-normal">
//                   High-throughput camera modules equipped with real-time neural processing to analyze site perimeters at the hardware edge.
//                 </p>
//               </div>

//               <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 hover:border-emerald-500/30 transition-all group">
//                 <div className="w-10 h-10 rounded-lg bg-black border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
//                   <FaShieldAlt size={18} />
//                 </div>
//                 <h4 className="text-sm font-bold text-white mb-1.5">Encrypted Feeds</h4>
//                 <p className="text-xs text-neutral-400 leading-relaxed font-normal">
//                   Multi-layered 256-bit encryption pipelines streaming ultra-low latency feeds directly to our monitoring consoles.
//                 </p>
//               </div>

//               <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 hover:border-emerald-500/30 transition-all group">
//                 <div className="w-10 h-10 rounded-lg bg-black border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
//                   <FaHeadset size={18} />
//                 </div>
//                 <h4 className="text-sm font-bold text-white mb-1.5">24/7 Command Integration</h4>
//                 <p className="text-xs text-neutral-400 leading-relaxed font-normal">
//                   Synchronized operational protocols between RDV hardware engineering and PixPerl 3D command operators.
//                 </p>
//               </div>

//             </div>

//             <div className="mt-8 pt-6 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
//               <div className="p-3 bg-black/60 rounded-lg border border-neutral-900">
//                 <span className="block text-emerald-400 font-bold text-base sm:text-lg">&lt; 200ms</span>
//                 <span className="text-[9px] text-neutral-500 uppercase tracking-wider">Stream Latency</span>
//               </div>
//               <div className="p-3 bg-black/60 rounded-lg border border-neutral-900">
//                 <span className="block text-emerald-400 font-bold text-base sm:text-lg">99.99%</span>
//                 <span className="text-[9px] text-neutral-500 uppercase tracking-wider">Hardware Uptime</span>
//               </div>
//               <div className="p-3 bg-black/60 rounded-lg border border-neutral-900">
//                 <span className="block text-emerald-400 font-bold text-base sm:text-lg">AES-256</span>
//                 <span className="text-[9px] text-neutral-500 uppercase tracking-wider">Encryption Standard</span>
//               </div>
//               <div className="p-3 bg-black/60 rounded-lg border border-neutral-900">
//                 <span className="block text-emerald-400 font-bold text-base sm:text-lg">Zero-Trust</span>
//                 <span className="text-[9px] text-neutral-500 uppercase tracking-wider">Network Arch</span>
//               </div>
//             </div>

//           </motion.div>
//         </div>
//       </section> */}

//       {/* METHODOLOGY / HOW WE OPERATE - FLIP CARD WITH HOVER & RESPONSIVE TOGGLE BUTTON */}
//       <section id="process" className="py-16 sm:py-28 bg-black border-b border-neutral-900 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

//           <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase mb-3">
//               METHODOLOGY & EXECUTION PIPELINE
//             </div>
//             <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">How We Operate</h2>
//             <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
//               Hover on desktop or tap <span className="text-emerald-400 font-mono font-bold">See Details</span> on mobile to view complete operational requirements and key deliverables.
//             </p>
//           </div>

//           <div className="relative">
//             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-900 via-emerald-500/40 to-neutral-900 -translate-y-12 z-0" />

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
//               {steps.map((st, idx) => {
//                 const StepIcon = st.icon;
//                 const isFlipped = !!flippedCards[idx];

//                 return (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: idx * 0.12 }}
//                     className="h-80 sm:h-96 w-full [perspective:1000px] group"
//                   >
//                     <div className={`relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] shadow-xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''
//                       }`}>

//                       {/* FRONT OF CARD */}
//                       <div className="absolute inset-0 h-full w-full rounded-2xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between [backface-visibility:hidden]">
//                         <div>
//                           <div className="flex items-center justify-between mb-4">
//                             <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[9px] font-mono font-bold text-emerald-400 tracking-wider">
//                               {st.phase}
//                             </span>
//                             <div className="w-8 h-8 rounded-lg bg-black border border-neutral-800 flex items-center justify-center text-neutral-400">
//                               <StepIcon size={14} />
//                             </div>
//                           </div>

//                           <span className="font-mono text-4xl sm:text-5xl font-black text-neutral-800 block my-4">
//                             {st.num}
//                           </span>
//                         </div>

//                         <div>
//                           <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{st.title}</h3>

//                           {/* Desktop view helper */}
//                           <p className="hidden lg:flex text-[10px] font-mono text-neutral-500 mt-2 uppercase tracking-widest items-center gap-1">
//                             Hover for details <FaArrowRight className="text-emerald-400 text-[8px]" />
//                           </p>

//                           {/* Mobile/Tablet button trigger */}
//                           <button
//                             onClick={() => toggleCardFlip(idx)}
//                             className="lg:hidden mt-3 w-full py-2 bg-neutral-900 border border-emerald-500/40 rounded text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:bg-emerald-400 active:text-black transition-colors"
//                           >
//                             <span>See Details</span>
//                             <FaArrowRight size={10} />
//                           </button>
//                         </div>
//                       </div>

//                       {/* BACK OF CARD (HOVER & TOUCH STATE) */}
//                       <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-b from-emerald-950/95 via-black to-neutral-950 border border-emerald-500/60 p-6 flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_25px_rgba(52,211,153,0.15)]">
//                         <div>
//                           <div className="flex items-center justify-between mb-3">
//                             <span className="text-xs font-mono font-black text-emerald-400 uppercase tracking-wider">
//                               {st.phase}
//                             </span>
//                             <span className="font-mono font-bold text-xs text-neutral-400">{st.num}</span>
//                           </div>

//                           <h3 className="text-base font-extrabold text-emerald-400 mb-2">{st.title}</h3>
//                           <p className="text-xs text-white leading-relaxed font-normal">{st.desc}</p>
//                         </div>

//                         <div>
//                           <div className="pt-3 border-t border-emerald-500/30 font-mono text-[10px] mb-2">
//                             <span className="text-emerald-400 block uppercase font-bold tracking-wider">KEY DELIVERABLE:</span>
//                             <span className="text-white font-medium flex items-center gap-1.5 mt-1">
//                               <FaArrowRight className="text-emerald-400 text-[9px]" />
//                               {st.deliverable}
//                             </span>
//                           </div>

//                           {/* Mobile/Tablet back button trigger */}
//                           <button
//                             onClick={() => toggleCardFlip(idx)}
//                             className="lg:hidden w-full py-1.5 bg-emerald-400 text-black rounded font-mono text-[10px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2"
//                           >
//                             <FaUndo size={9} />
//                             <span>Show Front</span>
//                           </button>
//                         </div>
//                       </div>

//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* FULLY RESPONSIVE GLOBAL LOCATIONS / OUR OFFICES SECTION */}
//       <section id="offices" className="py-12 sm:py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

//           <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/50 border border-emerald-500/30 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-emerald-400 uppercase mb-3">
//               <FaGlobe className="text-emerald-400 animate-spin" style={{ animationDuration: '15s' }} />
//               24/7 DUAL COMMAND HUBS
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Our Offices & Command Centers</h2>
//             <p className="mt-2 sm:mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal px-2">
//               Dual active command hubs providing round-the-clock shift handovers, real-time threat detection, and continuous SLA delivery.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
//             {offices.map((office, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 whileHover={{ y: -6 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: idx * 0.15,
//                   y: { duration: 0.3, ease: 'easeOut' }
//                 }}
//                 className="p-5 sm:p-7 md:p-8 bg-gradient-to-b from-black via-neutral-950 to-neutral-950 border border-neutral-800/90 hover:border-emerald-500/40 rounded-2xl sm:rounded-3xl transition-all duration-500 ease-out flex flex-col justify-between group shadow-2xl hover:shadow-[0_10px_30px_rgba(52,211,153,0.08)] relative overflow-hidden"
//               >
//                 <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all duration-500 pointer-events-none" />

//                 <div>
//                   <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-neutral-900 mb-5 sm:mb-6">
//                     <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded text-[9px] sm:text-[10px] font-mono font-extrabold text-emerald-400 tracking-wider uppercase transition-colors duration-300 group-hover:border-emerald-500/30">
//                       {office.badge}
//                     </span>
//                     <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/20">
//                       <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
//                       <span>OPERATIONAL // 24/7</span>
//                     </div>
//                   </div>

//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">{office.city}</h3>
//                       <p className="text-xs font-mono text-emerald-400 font-bold mt-0.5">{office.country}</p>
//                     </div>
//                     <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-emerald-400 group-hover:border-emerald-400/40 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
//                       <FaMapMarkerAlt size={15} />
//                     </div>
//                   </div>

//                   <p className="text-xs text-neutral-300 font-medium mt-3 mb-5 leading-relaxed">{office.role}</p>

//                   <div className="p-3 rounded-xl bg-black/60 border border-neutral-900 font-mono text-[10px] sm:text-[11px] mb-5 sm:mb-6 flex flex-row items-center justify-between gap-2 transition-colors duration-300 group-hover:border-neutral-800">
//                     <div className="flex items-center gap-2 text-neutral-400">
//                       <FaClock className="text-emerald-400 flex-shrink-0" />
//                       <span>LOCAL TIME:</span>
//                     </div>
//                     <span className="text-emerald-400 font-bold">
//                       <CityClock timeZone={office.timeZone} />
//                     </span>
//                   </div>

//                   <div className="space-y-2.5 sm:space-y-3 font-mono text-xs text-neutral-400 border-t border-neutral-900 pt-4 sm:pt-5">
//                     <div className="flex items-start gap-2.5">
//                       <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0 mt-1" />
//                       <span className="leading-relaxed break-words">{office.address}</span>
//                     </div>
//                     <div className="flex items-center gap-2.5 text-neutral-300">
//                       <FaPhoneAlt className="text-emerald-400 text-[10px] flex-shrink-0" />
//                       <a href={`tel:${office.phone}`} className="hover:text-emerald-400 transition-colors duration-200">{office.phone}</a>
//                     </div>
//                     <div className="flex items-center gap-2.5 text-neutral-300">
//                       <FaEnvelope className="text-emerald-400 text-[10px] flex-shrink-0" />
//                       <a href={`mailto:${office.email}`} className="hover:text-emerald-400 transition-colors duration-200 break-all">{office.email}</a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-4 border-t border-neutral-900/80 font-mono text-[9px] sm:text-[10px] grid grid-cols-2 gap-2 text-neutral-500">
//                   <div>
//                     <span className="block text-[8px] uppercase tracking-wider text-neutral-600">COORDINATES</span>
//                     <span className="text-neutral-400 font-semibold">{office.coordinates}</span>
//                   </div>
//                   <div className="text-right">
//                     <span className="block text-[8px] uppercase tracking-wider text-neutral-600">CAPACITY</span>
//                     <span className="text-emerald-400 font-semibold">{office.capacity}</span>
//                   </div>
//                 </div>

//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-8 sm:mt-10 max-w-5xl mx-auto p-4 sm:p-5 rounded-2xl bg-black border border-neutral-800/80 hover:border-emerald-500/30 font-mono text-xs text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left transition-all duration-300 shadow-lg">
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <FaNetworkWired className="text-emerald-400 text-xl sm:text-2xl flex-shrink-0" />
//               <div>
//                 <span className="text-white font-bold block">ENCRYPTED FEED // HUB LINK ACTIVE</span>
//                 <span className="text-[10px] text-neutral-500 block sm:inline">Low-latency dual command redundancy between Houston, TX & Karachi, PK</span>
//               </div>
//             </div>
//             <a
//               href={QUOTE_LINK}
//               className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 border border-emerald-500/30 rounded text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 flex-shrink-0 text-center shadow-md active:scale-95"
//             >
//               Verify System SLA
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* CONTACT BANNER */}
//       <section id="contact" className="py-16 sm:py-24 bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border-b border-neutral-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
//           <div>
//             <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">READY TO TALK?</span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mt-1">Protect Your Operations Today</h2>
//           </div>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href={QUOTE_LINK}
//             className="w-full md:w-auto text-center px-8 py-4 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
//           >
//             Request Contract Proposal
//           </motion.a>
//         </div>
//       </section>

//       {/* FOOTER SECTION */}
//       <footer className="bg-black pt-16 pb-8 border-t border-neutral-900 font-sans text-neutral-400">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">

//           <div className="space-y-4 md:col-span-1">
//             <div className="flex items-center gap-2 font-mono font-black text-xl tracking-wider text-white">
//               <FaShieldAlt className="text-emerald-400" />
//               <span>PIXPERL<span className="text-emerald-400">3D</span></span>
//             </div>
//             <p className="text-xs leading-relaxed text-neutral-500 font-normal">
//               Next-generation 24/7 security management tailored for retail chains and construction operations.
//             </p>
//             <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
//               <FaLock className="text-[10px]" />
//               <span>256-BIT ENCRYPTED COMMAND CENTER</span>
//             </div>

//             <div className="flex items-center gap-3 pt-2">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
//               >
//                 <FaFacebookF size={13} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
//               >
//                 <FaInstagram size={14} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
//               >
//                 <FaLinkedinIn size={13} />
//               </a>
//             </div>
//           </div>

//           <div className="space-y-3 font-mono text-xs">
//             <h4 className="text-white font-bold tracking-widest uppercase text-xs">Quick Links</h4>
//             <ul className="space-y-2 text-neutral-400">
//               <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
//               <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
//               <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
//               <li><a href="#clients" className="hover:text-emerald-400 transition-colors">Clients</a></li>
//               <li><a href="#partners" className="hover:text-emerald-400 transition-colors">RDV Partnership</a></li>
//               <li><a href="#process" className="hover:text-emerald-400 transition-colors">Our Methodology</a></li>
//               <li><a href="#offices" className="hover:text-emerald-400 transition-colors">Offices</a></li>
//             </ul>
//           </div>

//           <div className="space-y-3 font-mono text-xs">
//             <h4 className="text-white font-bold tracking-widest uppercase text-xs">Solutions</h4>
//             <ul className="space-y-2 text-neutral-400">
//               <li><a href="#services" className="hover:text-emerald-400 transition-colors">Retail Surveillance</a></li>
//               <li><a href="#services" className="hover:text-emerald-400 transition-colors">Construction Security</a></li>
//               <li><a href="#services" className="hover:text-emerald-400 transition-colors">Contract Services</a></li>
//               <li><a href="#services" className="hover:text-emerald-400 transition-colors">Remote Monitoring</a></li>
//               <li><a href="#services" className="hover:text-emerald-400 transition-colors">Reporting & Analytics</a></li>
//             </ul>
//           </div>

//           <div className="space-y-3 font-mono text-xs">
//             <h4 className="text-white font-bold tracking-widest uppercase text-xs">Locations</h4>
//             <div className="space-y-2.5 text-neutral-400">
//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" />
//                 <span>Houston, TX, USA</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" />
//                 <span>Karachi, Sindh, PK</span>
//               </div>
//               <div className="flex items-center gap-2 pt-2">
//                 <FaEnvelope className="text-emerald-400 flex-shrink-0" />
//                 <span>info@pixperl.com</span>
//               </div>
//             </div>
//           </div>

//         </div>



//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-neutral-600">
//           <p>© {new Date().getFullYear()} PIXPERL 3D STUDIO. ALL RIGHTS RESERVED.</p>
//           <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//             <Link to="/sla-documentation" className="hover:text-emerald-400 transition-colors">
//               SLA Documentation
//             </Link>

//             <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
//               Privacy Policy
//             </Link>

//             <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }


//////////
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
  FaUndo
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '/about', externalPage: true },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
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
    {
      name: 'BOBO SUPPLIES',
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
    },
    {
      name: 'APEX LOGISTICS',
      type: 'Warehouse Operations',
      desc: 'Multi-point perimeter monitoring and automated vehicle log analytics.',
      logoText: 'A',
      nodes: '64 HD Nodes',
      uptime: '<15s Threat Alert',
      tenure: '4 Year SLA Partner'
    },
    {
      name: 'VANGUARD MEDICAL HUB',
      type: 'Healthcare Facility',
      desc: 'Strict access control monitoring and continuous emergency lane watch.',
      logoText: 'V',
      nodes: '32 Secure Nodes',
      uptime: 'Zero Breach Record',
      tenure: '1 Year SLA Partner'
    }
  ];

  const steps = [
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
      desc: 'RDV hardware installation, zero-trust network encryption setup, and streaming link to our 24/7 command center.',
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

      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">

          <a href="#home" className="flex items-center gap-2 font-mono font-black text-lg sm:text-xl tracking-wider text-black">
            <FaShieldAlt className="text-blue-600" />
            <span>PIXPERL</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => {
                  if (!link.externalPage) {
                    setActiveTab(link.name.toLowerCase());
                  }
                }}
                className={`transition-colors hover:text-blue-600 ${activeTab === link.name.toLowerCase() ? 'text-blue-600 font-extrabold' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={QUOTE_LINK}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Get Quote
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-700 hover:text-black p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-50 border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 font-mono text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => {
                  if (!link.externalPage) {
                    setActiveTab(link.name.toLowerCase());
                  }
                  setMobileMenuOpen(false);
                }}
                className="block py-2 text-neutral-800 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href={QUOTE_LINK}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center mt-4 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded font-extrabold shadow"
            >
              Get Quote
            </a>
          </div>
        )}
      </header>

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

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4">
            <div>
              <p className="text-xs font-mono font-extrabold tracking-widest text-blue-600 uppercase">CORE CAPABILITIES</p>
              <h2 className="text-2xl sm:text-4xl font-black text-black mt-1 sm:mt-2 tracking-tight">Surveillance Solutions</h2>
            </div>
            <p className="text-neutral-500 font-mono text-xs">Swipe to explore →</p>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-6 px-1"
          >
            {services.map((s, idx) => {
              const ServiceIcon = s.icon;
              return (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="h-full p-6 sm:p-8 bg-white border border-neutral-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group min-h-[260px] sm:min-h-[300px]">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[10px] font-bold tracking-widest text-blue-600">{s.tag}</span>
                        <ServiceIcon className="text-neutral-400 group-hover:text-blue-600 transition-colors" size={20} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-black mt-2 sm:mt-3 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{s.desc}</p>
                    </div>

                    <div className="pt-4 sm:pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-black transition-colors">
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

      {/* METHODOLOGY / HOW WE OPERATE SECTION */}
      <section id="process" className="py-16 sm:py-28 bg-neutral-50 border-b border-neutral-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-extrabold tracking-widest text-blue-800 uppercase mb-3">
              METHODOLOGY & EXECUTION PIPELINE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">How We Operate</h2>
            <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
              Hover on desktop or tap <span className="text-blue-600 font-mono font-bold">See Details</span> on mobile to view complete operational requirements and key deliverables.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-200 via-blue-500 to-neutral-200 -translate-y-12 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {steps.map((st, idx) => {
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
                    <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                      
                      {/* FRONT CARD */}
                      <div className="absolute inset-0 h-full w-full rounded-2xl bg-white border border-neutral-200 p-6 flex flex-col justify-between [backface-visibility:hidden] shadow-md">
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-mono text-2xl font-black text-blue-600">{st.num}</span>
                            <StepIcon className="text-neutral-400" size={22} />
                          </div>
                          <span className="text-[9px] font-mono font-bold text-blue-700 uppercase tracking-widest block mb-1">{st.phase}</span>
                          <h3 className="text-base font-bold text-black mb-2">{st.title}</h3>
                          <p className="text-xs text-neutral-600 leading-relaxed font-normal">{st.desc}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleCardFlip(idx)}
                          className="lg:hidden mt-4 py-2 px-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
                        >
                          <span>See Details</span>
                          <FaArrowRight size={10} />
                        </button>
                      </div>

                      {/* BACK CARD */}
                      <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 text-white flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                        <div>
                          <span className="text-[10px] font-mono font-black tracking-widest text-blue-200 uppercase block mb-2">DELIVERABLE</span>
                          <h4 className="text-base font-black text-white mb-3">{st.deliverable}</h4>
                          <p className="text-xs text-blue-100 font-medium leading-relaxed">
                            Full operational setup, real-time sync, and SLA verified reporting pipelines.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleCardFlip(idx)}
                          className="lg:hidden mt-4 py-2 px-3 bg-white text-black rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors"
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

                  <div className="space-y-2.5 sm:space-y-3 font-mono text-xs text-neutral-600 border-t border-neutral-100 pt-4 sm:pt-5">
                    <div className="flex items-start gap-2.5">
                      <FaMapMarkerAlt className="text-blue-600 flex-shrink-0 mt-1" />
                      <span className="leading-relaxed break-words">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-neutral-700">
                      <FaPhoneAlt className="text-blue-600 text-[10px] flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-blue-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-neutral-700">
                      <FaEnvelope className="text-blue-600 text-[10px] flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* CONTACT BANNER */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-r from-neutral-50 via-slate-100 to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">READY TO TALK?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mt-1">Protect Your Operations Today</h2>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={QUOTE_LINK}
            className="w-full md:w-auto text-center px-8 py-4 bg-blue-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded-md shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all"
          >
            Request Contract Proposal
          </motion.a>
        </div>
      </section>

      {/* FOOTER / CONTACT SECTION */}
      {/* FOOTER SECTION */}
      <footer className="bg-white pt-16 pb-8 border-t border-neutral-200 font-sans text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">

          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 font-mono font-black text-xl tracking-wider text-neutral-900">
              <FaShieldAlt className="text-blue-600" />
              <span>PIXPERL</span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-600 font-normal">
              Next-generation 24/7 security management tailored for retail chains and construction operations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600">
              <FaLock className="text-[10px]" />
              <span>256-BIT ENCRYPTED COMMAND CENTER</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-600/50 transition-colors"
              >
                <FaFacebookF size={13} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-600/50 transition-colors"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-blue-600 hover:border-blue-600/50 transition-colors"
              >
                <FaLinkedinIn size={13} />
              </a>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-neutral-900 font-bold tracking-widest uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#clients" className="hover:text-blue-600 transition-colors">Clients</a></li>
              <li><a href="#process" className="hover:text-blue-600 transition-colors">Our Methodology</a></li>
              <li><a href="#offices" className="hover:text-blue-600 transition-colors">Offices</a></li>
            </ul>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-neutral-900 font-bold tracking-widest uppercase text-xs">Solutions</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Retail Surveillance</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Construction Security</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Contract Services</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Remote Monitoring</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Reporting & Analytics</a></li>
            </ul>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-neutral-900 font-bold tracking-widest uppercase text-xs">Locations</h4>
            <div className="space-y-2.5 text-neutral-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                <span>Houston, TX, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                <span>Karachi, Sindh, PK</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <FaEnvelope className="text-blue-600 flex-shrink-0" />
                <span>info@pixperl.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} PIXPERL 3D STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/sla-documentation" className="hover:text-blue-600 transition-colors">
              SLA Documentation
            </Link>

            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

    