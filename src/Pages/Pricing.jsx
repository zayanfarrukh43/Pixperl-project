import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaCloud, 
  FaInfoCircle, 
  FaArrowRight 
} from 'react-icons/fa';

export default function Pricing() {
  const plans = [
    {
      name: "BASIC",
      price: "$395",
      period: "/month",
      popular: false,
      features: [
        "Up to 4 cameras",
        "Remote monitoring Monday-Saturday (24/6)",
        "Event review and verification within the agreed monitoring scope",
        "Customer notifications and escalation contacts",
        "Incident summaries when applicable",
        "Compatible existing cameras may be used after a system review"
      ]
    },
    {
      name: "PROFESSIONAL",
      price: "$595",
      period: "/month",
      popular: true,
      note: "Suitable for busier sites or businesses with more cameras",
      features: [
        "Up to 10 cameras",
        "Remote monitoring Monday-Saturday (24/6)",
        "Event review and verification within the agreed monitoring scope",
        "Customer notifications and escalation contacts",
        "Incident reporting and documented follow-up"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      period: " pricing",
      popular: false,
      note: "Pricing based on operational requirements",
      features: [
        "Camera capacity and monitoring scope tailored to your needs",
        "Multi-location coordination options",
        "Customized reporting and escalation workflows",
        "Optional cloud VMS and cloud recording solutions"
      ]
    }
  ];

  const cloudAddons = [
    { name: "Cloud VMS platform", basis: "Quoted separately based on platform and system requirements." },
    { name: "Cloud recording/storage", basis: "Based on camera count, resolution, and recording settings." },
    { name: "30-day recording retention", basis: "Optional; quoted after technical review." },
    { name: "60-day recording retention", basis: "Optional; quoted after technical review." },
    { name: "Longer retention / migration", basis: "Custom quote based on storage needs and setup work." }
  ];

  const serviceNotes = [
    {
      title: "Camera compatibility",
      detail: "Existing cameras may be used if compatible with the monitoring workflow and securely accessible. Compatibility is confirmed before onboarding."
    },
    {
      title: "Agreed monitoring scope",
      detail: "Event types, procedures, escalation contacts, and response steps are agreed during setup. Continuous live viewing of every camera is not implied unless specifically included in the written agreement."
    },
    {
      title: "Escalation",
      detail: "Notifications follow the customer-approved contact list and response protocol. Retailers Surveillance is a remote monitoring provider, not an emergency-response or law-enforcement agency."
    },
    {
      title: "Final proposal",
      detail: "Final inclusions and pricing may depend on camera compatibility, site needs, monitoring scope, and selected add-ons."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 border-b border-neutral-200 overflow-hidden bg-white">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-[10px] font-mono font-extrabold tracking-widest text-blue-600 uppercase mb-4">
              <FaShieldAlt className="text-blue-600" />
              RETAILERS SURVEILLANCE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Remote Video Monitoring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Plans & Pricing</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg font-bold text-blue-600 font-mono">
              You Have the Cameras. We Provide the Eyes.
            </p>
            <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Remote video monitoring for retail stores, convenience marts, gas stations, warehouses, construction sites, commercial properties, and multi-location businesses.
            </p>

            {/* Remote-only Disclaimer */}
            <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl max-w-2xl mx-auto text-left flex items-start gap-3">
              <FaInfoCircle className="text-blue-600 text-base flex-shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                <strong className="text-neutral-900">Remote-only service:</strong> Retailers Surveillance provides remote video monitoring and does not provide physical guards, on-site patrols, or in-person security personnel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MONITORING PLANS GRID */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-10">
            <h2 className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase">Select Your Coverage</h2>
            <p className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">Monitoring Plans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-600 bg-neutral-900 text-white shadow-xl shadow-blue-500/10' 
                    : 'border-neutral-200 bg-white text-neutral-900 shadow-sm hover:border-blue-500/40'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    POPULAR
                  </span>
                )}

                <div>
                  <h3 className={`text-lg font-black font-mono tracking-wide ${plan.popular ? 'text-blue-400' : 'text-neutral-900'}`}>
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">{plan.price}</span>
                    <span className={`text-xs font-mono font-semibold ${plan.popular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {plan.note && (
                    <p className={`mt-3 text-xs italic ${plan.popular ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      • {plan.note}
                    </p>
                  )}

                  <div className="my-6 border-b border-neutral-200/20" />

                  <ul className="space-y-3 text-xs sm:text-sm font-sans">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <FaCheckCircle className={`text-xs mt-1 flex-shrink-0 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={plan.popular ? 'text-neutral-200' : 'text-neutral-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to="/get-quote"
                    className={`w-full py-3 rounded-xl text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                        : 'bg-neutral-900 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Get Quote
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MONITORING SCHEDULE */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaCalendarAlt className="text-blue-600 text-lg" />
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 uppercase font-mono tracking-tight">
              Monitoring Schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-neutral-200 rounded-2xl">
              <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Included Schedule
              </span>
              <h3 className="text-base font-bold text-neutral-900 font-mono">STANDARD COVERAGE</h3>
              <p className="text-sm font-semibold text-neutral-800 mt-2">Monday-Saturday (24/6)</p>
              <p className="text-xs text-neutral-500 mt-1">Included in each plan.</p>
            </div>

            <div className="p-6 bg-white border border-blue-500/30 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Optional Upgrade
              </span>
              <h3 className="text-base font-bold text-neutral-900 font-mono">OPTIONAL SUNDAY COVERAGE</h3>
              <p className="text-sm font-semibold text-blue-600 mt-2">$100 per month</p>
              <p className="text-xs text-neutral-500 mt-1">Adds monitoring for all four Sundays in a month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD VMS & STORAGE ADD-ONS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest mb-1">
              <FaCloud />
              Add-On Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
              Cloud VMS, Cloud Recording & Storage
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Cloud video management software (VMS), cloud recording, and cloud storage are not included in the monthly plan prices. These services are available as separately priced add-ons.
            </p>
          </div>

          {/* TABLE OF ADD-ONS */}
          <div className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-neutral-900 text-white font-mono text-xs font-bold uppercase p-4 tracking-wider">
              <div>Optional Add-On</div>
              <div className="hidden sm:block">Pricing Basis</div>
            </div>
            <div className="divide-y divide-neutral-200">
              {cloudAddons.map((addon, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 p-4 text-xs sm:text-sm bg-white hover:bg-neutral-50 transition-colors gap-1 sm:gap-4">
                  <div className="font-bold text-neutral-900 font-mono">{addon.name}</div>
                  <div className="text-neutral-600 font-sans">{addon.basis}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE NOTES */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-xl font-black text-neutral-900 font-mono uppercase tracking-tight mb-6">
            Service Notes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceNotes.map((note, idx) => (
              <div key={idx} className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-sm">
                <h3 className="text-xs font-bold font-mono text-blue-600 uppercase tracking-wide mb-1.5">
                  • {note.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {note.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight uppercase font-mono">
            Let's Review Your Monitoring Needs
          </h2>
          <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed">
            We can review your existing camera system, discuss your requirements, and prepare a tailored proposal.
          </p>
          <div className="mt-6">
            <Link
              to="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-neutral-900 text-white rounded-xl text-xs font-bold font-mono uppercase tracking-widest shadow-lg transition-all duration-300"
            >
              Request Tailored Proposal
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
          <p className="mt-6 text-[10px] text-neutral-400 font-mono italic">
            Client-facing pricing overview. Final service inclusions and commitments should be confirmed in the service agreement.
          </p>
        </div>
      </section>

    </div>
  );
}