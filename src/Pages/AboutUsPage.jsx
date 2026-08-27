import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaMicrochip, 
  FaUsers, 
  FaGlobe, 
  FaCheckCircle, 
  FaLock, 
  FaEye, 
  FaMapMarkerAlt,
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

const QUOTE_LINK = "/get-quote";

export default function AboutUsPage() {
  const stats = [
    { label: 'Uptime SLA', value: '99.9%' },
    { label: 'Active Sites', value: '150+' },
    { label: 'Command Hubs', value: '2 Global' },
    { label: 'Incident Prevention', value: '98.4%' },
  ];

  const values = [
    {
      title: "24/7 Unblinking Surveillance",
      desc: "Threats don't follow business hours. Our command centers maintain non-stop active coverage for high-risk assets.",
      icon: FaEye
    },
    {
      title: "AI-Augmented Detection",
      desc: "Combining neural computer vision with human verification to eliminate false alarms and prioritize critical escalations.",
      icon: FaMicrochip
    },
    {
      title: "Strict Contract SLAs",
      desc: "We back our surveillance contracts with clear, accountable Service Level Agreements designed for enterprise piece-of-mind.",
      icon: FaCheckCircle
    },
    {
      title: "End-to-End Encryption",
      desc: "Every stream, log, and report is protected by multi-layer military-grade encryption from edge hardware to storage.",
      icon: FaLock
    }
  ];

  const team = [
    {
      name: "Zayan Farrukh",
      role: "Chief Executive Officer - Pix Perl",
      location: "Karachi, PK",
      bio: "Directs vision, operational logistics, and site network expansion."
    },
    {
      name: "Muneeb Ali Irfan",
      role: "Representative - Pix Perl 3D Studio",
      location: "Karachi, PK",
      bio: "Manages technical surveillance integrations and studio client relations."
    },
    {
      name: "Zainab Khurram",
      role: "Chief Executive Officer - Pix Perl",
      location: "Houston, TX",
      bio: "Oversees US enterprise growth, partner relations, and regional command operations."
    },
    {
      name: "Muhammad Hamza",
      role: "Head of Systems Architecture",
      location: "Karachi, PK",
      bio: "Leads technical infrastructure development, AI vision models, and streaming network operations."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 font-mono font-black text-lg sm:text-xl tracking-wider text-slate-900">
            <FaShieldAlt className="text-blue-600" />
            <span>PIXPERL</span>
          </a>

          <div className="flex items-center gap-4">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
            >
              <FaArrowLeft className="text-[10px]" />
              Back To Home
            </a>

            <a
              href={QUOTE_LINK}
              className="hidden sm:inline-block px-5 py-2.5 bg-blue-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 border-b border-slate-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-blue-700 uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              ABOUT PIXPERL 3D STUDIO
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              REDEFINING ACTIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-slate-700">
                SURVEILLANCE & PROTECTION.
              </span>
            </h1>

            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              PixPerl 3D Studio was founded on a singular directive: transform passive video recording into active, intelligence-driven threat response for modern enterprise sites, retail chains, and commercial operations.
            </p>
          </motion.div>

          {/* STATS BANNER */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16 max-w-5xl mx-auto">
            {stats.map((st, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-blue-400 transition-colors shadow-sm"
              >
                <div className="text-2xl sm:text-4xl font-black font-mono text-blue-600">{st.value}</div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-slate-500 uppercase mt-1">{st.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION & VISION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-mono font-extrabold tracking-widest text-blue-600 uppercase">OUR MISSION</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Proactive Security Built For High-Risk Assets</h2>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Standard security cameras are reactive tools—useful only after a theft or breach has already occurred. At PixPerl 3D Studio, we bridge hardware and human oversight to create real-time response infrastructure.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Operating directly out of command hubs in <strong>Houston, Texas</strong> and <strong>Karachi, Pakistan</strong>, our dedicated teams monitor operations live, log automated perimeter data, and execute swift protocols under 12-month managed service contracts.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 shadow-sm text-slate-800">
                  <FaGlobe className="text-blue-600 shrink-0" />
                  <span>Dual-Region Command Ops</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 shadow-sm text-slate-800">
                  <FaUsers className="text-blue-600 shrink-0" />
                  <span>Dedicated Site Monitoring</span>
                </div>
              </div>
            </div>

            {/* IN-HOUSE TECH ENGINE CALLOUT */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-blue-600 animate-ping" />
                <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase">PROPRIETARY ENGINE</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FaMicrochip className="text-blue-600" /> Powered by PixPerl Neural Core
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Engineered internally by our tech team, <strong>PixPerl Neural Core</strong> combines high-throughput video pipelines, end-to-end encrypted channels, and automated edge analytics that deliver sub-second feeds straight to command monitoring consoles.
              </p>

              <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100 font-mono text-xs text-slate-700">
                <span className="text-blue-600 font-bold block mb-2">NEURAL CORE ADVANTAGES:</span>
                <ul className="space-y-1 text-slate-600">
                  <li>• Enterprise ultra-low-latency video streaming</li>
                  <li>• Automated real-time perimeter threat detection</li>
                  <li>• Custom encrypted cloud-to-command data pipeline</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-extrabold tracking-widest text-blue-600 uppercase">GUIDING PRINCIPLES</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">Why Enterprises Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between hover:border-blue-500 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <div>
                    <Icon className="text-blue-600 mb-4" size={24} />
                    <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-extrabold tracking-widest text-blue-600 uppercase">LEADERSHIP</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">Behind the Operations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-white border border-slate-200 rounded-xl text-center flex flex-col items-center hover:border-blue-500 transition-all hover:-translate-y-1 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-mono font-bold text-blue-600 text-xl mb-4 shadow-inner">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-base font-bold text-slate-900">{t.name}</h3>
                <span className="text-xs font-mono text-blue-600 mt-1 leading-snug">{t.role}</span>
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 mt-2 mb-4">
                  <FaMapMarkerAlt className="text-slate-400" />
                  <span>{t.location}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Ready to Upgrade Your Site Security?</h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm">Speak with our operations team to get a tailored site assessment and contract proposal.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={QUOTE_LINK}
              className="px-8 py-3.5 bg-blue-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto shadow-sm"
            >
              Request A Proposal
            </a>
            <a
              href="/"
              className="px-8 py-3.5 border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-widest rounded-md hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-12 pb-8 border-t border-slate-200 font-sans text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 font-mono text-xs">
          <div className="flex items-center gap-2 font-black text-lg text-slate-900">
            <FaShieldAlt className="text-blue-600" />
            <span>PIXPERL</span>
          </div>
          
          <div className="flex gap-6 text-slate-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="/#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="/#offices" className="hover:text-blue-600 transition-colors">Offices</a>
            <a href="/#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"><FaFacebookF size={12} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"><FaInstagram size={12} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"><FaLinkedinIn size={12} /></a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 text-center font-mono text-[10px] text-slate-400">
          © {new Date().getFullYear()} PIXPERL 3D STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
}