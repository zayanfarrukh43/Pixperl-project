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
      name: "Muhammad Raiyyan",
      role: "Chief Executive Officer - RDV",
      location: "Karachi, PK",
      bio: "Leads technical infrastructure development and partner platform integrations."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-emerald-400 selection:text-black antialiased overflow-x-hidden">
      
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 font-mono font-black text-lg sm:text-xl tracking-wider text-white">
            <FaShieldAlt className="text-emerald-400" />
            <span>PIXPERL<span className="text-emerald-400">3D</span></span>
          </a>

          <div className="flex items-center gap-4">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-emerald-400 transition-colors"
            >
              <FaArrowLeft className="text-[10px]" />
              Back To Home
            </a>

            <a
              href={QUOTE_LINK}
              className="hidden sm:inline-block px-5 py-2.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:bg-emerald-300 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 border-b border-neutral-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-4 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              ABOUT PIXPERL 3D STUDIO
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              REDEFINING ACTIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-neutral-200 to-neutral-500">
                SURVEILLANCE & PROTECTION.
              </span>
            </h1>

            <p className="mt-6 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
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
                className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 text-center"
              >
                <div className="text-2xl sm:text-4xl font-black font-mono text-emerald-400">{st.value}</div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase mt-1">{st.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION & VISION */}
      <section className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">OUR MISSION</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Proactive Security Built For High-Risk Assets</h2>
              
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Standard security cameras are reactive tools—useful only after a theft or breach has already occurred. At PixPerl 3D Studio, we bridge hardware and human oversight to create real-time response infrastructure.
              </p>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Operating directly out of command hubs in <strong>Houston, Texas</strong> and <strong>Karachi, Pakistan</strong>, our dedicated teams monitor operations live, log automated perimeter data, and execute swift protocols under 12-month managed service contracts.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="flex items-center gap-3 p-3 bg-black rounded border border-neutral-800">
                  <FaGlobe className="text-emerald-400" />
                  <span>Dual-Region Command Ops</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-black rounded border border-neutral-800">
                  <FaUsers className="text-emerald-400" />
                  <span>Dedicated Site Monitoring</span>
                </div>
              </div>
            </div>

            {/* TECH PARTNERSHIP CALLOUT */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-xs font-bold text-emerald-400 tracking-widest uppercase">STRATEGIC BACKBONE</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">Powered by RDV Technologies</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Through our technical partnership with <strong>RDV Technologies</strong>, PixPerl 3D utilizes custom high-throughput video pipelines, encrypted channels, and optimized hardware setups that deliver sub-second video feeds straight to monitoring consoles.
              </p>

              <div className="p-4 bg-black/80 rounded-lg border border-neutral-800 font-mono text-xs text-neutral-300">
                <span className="text-emerald-400 font-bold block mb-1">RDV ALLIANCE BENEFITS:</span>
                • Custom high-definition hardware configurations<br />
                • Automated neural motion classification<br />
                • Seamless cloud-to-command edge streaming
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-16 sm:py-24 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">GUIDING PRINCIPLES</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 tracking-tight">Why Enterprises Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl flex flex-col justify-between hover:border-emerald-400/50 transition-colors">
                  <div>
                    <Icon className="text-emerald-400 mb-4" size={24} />
                    <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-400 uppercase">LEADERSHIP</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 tracking-tight">Behind the Operations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, idx) => (
              <div key={idx} className="p-6 bg-black border border-neutral-800 rounded-xl text-center flex flex-col items-center hover:border-emerald-400/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono font-bold text-emerald-400 text-xl mb-4">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-base font-bold text-white">{t.name}</h3>
                <span className="text-xs font-mono text-emerald-400 mt-1 leading-snug">{t.role}</span>
                <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-500 mt-2 mb-4">
                  <FaMapMarkerAlt />
                  <span>{t.location}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border-b border-neutral-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Ready to Upgrade Your Site Security?</h2>
          <p className="mt-3 text-neutral-400 text-xs sm:text-sm">Speak with our operations team to get a tailored site assessment and contract proposal.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={QUOTE_LINK}
              className="px-8 py-3.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md hover:bg-emerald-300 transition-colors w-full sm:w-auto"
            >
              Request A Proposal
            </a>
            <a
              href="/"
              className="px-8 py-3.5 border border-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-md hover:bg-neutral-900 transition-colors w-full sm:w-auto"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-12 pb-8 border-t border-neutral-900 font-sans text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900 font-mono text-xs">
          <div className="flex items-center gap-2 font-black text-lg text-white">
            <FaShieldAlt className="text-emerald-400" />
            <span>PIXPERL<span className="text-emerald-400">3D</span></span>
          </div>
          
          <div className="flex gap-6 text-neutral-400">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="/#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="/#offices" className="hover:text-emerald-400 transition-colors">Offices</a>
            <a href="/#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://facebook.com" className="p-2 bg-neutral-900 border border-neutral-800 rounded hover:text-emerald-400"><FaFacebookF size={12} /></a>
            <a href="https://instagram.com" className="p-2 bg-neutral-900 border border-neutral-800 rounded hover:text-emerald-400"><FaInstagram size={12} /></a>
            <a href="https://linkedin.com" className="p-2 bg-neutral-900 border border-neutral-800 rounded hover:text-emerald-400"><FaLinkedinIn size={12} /></a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 text-center font-mono text-[10px] text-neutral-600">
          © {new Date().getFullYear()} PIXPERL 3D STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
}