import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Professional SVG Icon Components styled with theme support
const StoreIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
    <path d="M2 7h20"/>
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"/>
    <path d="M18 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"/>
    <path d="M14 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"/>
    <path d="M10 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"/>
    <path d="M6 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7"/>
  </svg>
);

const ConstructionIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>
);

const RemoteIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
    <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/>
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const AnalyticsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>
);

function PixPerlLogo() {
  return (
    <div className="flex flex-col items-start select-none cursor-pointer group">
      <span className="font-mono font-black tracking-[0.18em] sm:tracking-[0.22em] text-base sm:text-2xl leading-none text-white">
        PIXPERL
      </span>
      <div className="w-full mt-1 px-1 py-0.5 text-[7px] sm:text-[9px] font-extrabold tracking-[0.2em] sm:tracking-[0.35em] uppercase text-center font-mono bg-white text-black transition-colors duration-300 group-hover:bg-emerald-400">
        3D STUDIO
      </div>
    </div>
  );
}

export default function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: 'Retail Store',
    locationCount: '1-3 Sites',
    servicesNeeded: [],
    contractDuration: '12 Months',
    projectDetails: '',
    urgency: 'Standard',
  });

  const serviceOptions = [
    { id: 'retail', label: 'Retail Surveillance', icon: StoreIcon },
    { id: 'construction', label: 'Construction Site Security', icon: ConstructionIcon },
    { id: 'remote', label: '24/7 Remote Monitoring', icon: RemoteIcon },
    { id: 'rdv_hardware', label: 'RDV Systems & Hardware Setup', icon: ShieldIcon },
    { id: 'analytics', label: 'Reporting & AI Analytics', icon: AnalyticsIcon },
  ];
const [loading, setLoading] = useState(false);
const [ticketId, setTicketId] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (id) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(id);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== id)
          : [...prev.servicesNeeded, id],
      };
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await fetch(
      "https://pixelperl-backend.vercel.app/api/quotes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    setTicketId(data.data.ticketId);
    setIsSubmitted(true);
  } catch (err) {
    alert(err.message);
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-emerald-400 selection:text-black antialiased overflow-x-hidden">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-14 sm:h-20">
            <a href="/" className="shrink-0">
              <PixPerlLogo />
            </a>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="/"
                className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider sm:tracking-widest text-neutral-400 hover:text-emerald-400 transition-colors py-2"
              >
                ← <span className="hidden sm:inline">Back to </span>Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="py-6 sm:py-16 md:py-20 px-3.5 sm:px-6 lg:px-12 max-w-5xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-wider sm:tracking-widest text-emerald-400 uppercase mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="truncate">PIXPERL x RDV // ESTIMATOR</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Request Custom <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-neutral-200 to-neutral-500">
              Surveillance Quote
            </span>
          </h1>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm text-neutral-400 font-normal max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
            Configure your facility specifications below. Our technical team and RDV integration experts will respond with an official SLA blueprint within 24 hours.
          </p>
        </div>

        {/* Step Indicator */}
        {!isSubmitted && (
          <div className="mb-6 sm:mb-10 max-w-xl mx-auto">
            <div className="flex sm:hidden justify-between items-center text-[11px] font-mono font-bold uppercase text-neutral-400 mb-2 px-1">
              <span className="text-emerald-400">Step {currentStep} of 3</span>
              <span className="text-neutral-300">
                {currentStep === 1 && 'Requirements'}
                {currentStep === 2 && 'Services'}
                {currentStep === 3 && 'Contact'}
              </span>
            </div>

            <div className="hidden sm:flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-2">
              <span className={currentStep >= 1 ? 'text-emerald-400' : ''}>01. Requirements</span>
              <span className={currentStep >= 2 ? 'text-emerald-400' : ''}>02. Services & Scope</span>
              <span className={currentStep >= 3 ? 'text-emerald-400' : ''}>03. Contact Info</span>
            </div>

            <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden border border-neutral-800">
              <div
                className="bg-emerald-400 h-full transition-all duration-500 shadow-[0_0_10px_#34d399]"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Box */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-10 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-12 space-y-4 sm:space-y-6"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/10 border border-emerald-400 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-lg sm:text-2xl font-mono font-bold shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                  ✓
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white">Quote Request Transmitted</h2>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-normal leading-relaxed px-2">
                  Thank you, <strong>{formData.fullName}</strong>. Your request for <strong>{formData.companyName || 'your business'}</strong> has been received by PixPerl 3D Studio & RDV.
                </p>
              <div className="p-3 sm:p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-[11px] sm:text-xs font-mono text-neutral-400 inline-block">
  TICKET ID: <span className="text-emerald-400 font-bold">{ticketId}</span>
</div>
                <div className="pt-2 sm:pt-4">
                  <a
                    href="/"
                    className="inline-block w-full sm:w-auto px-8 py-3.5 bg-white text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md hover:bg-emerald-400 transition-colors active:scale-[0.98]"
                  >
                    Return To Homepage
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: Business Requirements */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <h3 className="text-sm sm:text-lg font-mono font-bold text-white uppercase tracking-wider border-b border-neutral-900 pb-2.5 sm:pb-3">
                      Step 1: Operation & Facility Parameters
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Industry / Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        >
                          <option value="Retail Store">Retail Store / Supermarket</option>
                          <option value="Construction Site">Construction & Building Site</option>
                          <option value="Warehouse">Warehouse & Logistics</option>
                          <option value="Commercial Office">Commercial Real Estate</option>
                          <option value="Other">Other Enterprise</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Number of Sites / Locations
                        </label>
                        <select
                          name="locationCount"
                          value={formData.locationCount}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        >
                          <option value="1 Site">Single Location</option>
                          <option value="1-3 Sites">1 - 3 Locations</option>
                          <option value="4-10 Sites">4 - 10 Locations</option>
                          <option value="10+ Sites">10+ Multi-Site Operation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Preferred Contract Term
                        </label>
                        <select
                          name="contractDuration"
                          value={formData.contractDuration}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        >
                          <option value="12 Months">12 Months (Standard SLA)</option>
                          <option value="24 Months">24 Months (Enterprise Discount)</option>
                          <option value="Short-term Project">Short-term Project (&lt;6 Months)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Implementation Urgency
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        >
                          <option value="Immediate">Immediate / Urgent (&lt; 48 Hours)</option>
                          <option value="Standard">Standard (Within 1-2 weeks)</option>
                          <option value="Planning Phase">Future Planning Phase</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="w-full sm:w-auto px-8 py-3.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all active:scale-[0.98]"
                      >
                        Next: Select Services →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Service Selection */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <h3 className="text-sm sm:text-lg font-mono font-bold text-white uppercase tracking-wider border-b border-neutral-900 pb-2.5 sm:pb-3">
                      Step 2: Choose Capabilities & Services
                    </h3>

                    <p className="text-[11px] sm:text-xs text-neutral-400 font-mono">Select all modules required for your contract:</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {serviceOptions.map((srv) => {
                        const IconComponent = srv.icon;
                        const isSelected = formData.servicesNeeded.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 group ${
                              isSelected
                                ? 'bg-neutral-900/90 border-emerald-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.15)]'
                                : 'bg-black/50 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-900/40'
                            }`}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className={`p-2 rounded-lg border transition-all duration-300 shrink-0 ${
                                isSelected 
                                  ? 'bg-emerald-400/10 border-emerald-400/30' 
                                  : 'bg-neutral-900/60 border-neutral-800 group-hover:border-neutral-700'
                              }`}>
                                <IconComponent
                                  className={`w-5 h-5 transition-all duration-300 ${
                                    isSelected
                                      ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] scale-105'
                                      : 'text-neutral-500 group-hover:text-neutral-300'
                                  }`}
                                />
                              </div>

                              <span className="text-xs sm:text-xs font-bold font-mono uppercase tracking-wider leading-snug">
                                {srv.label}
                              </span>
                            </div>

                            <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                              isSelected 
                                ? 'bg-emerald-400 text-black border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]' 
                                : 'border-neutral-700 bg-neutral-900'
                            }`}>
                              {isSelected ? '✓' : ''}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                        Additional Notes or Specific Site Details
                      </label>
                      <textarea
                        name="projectDetails"
                        rows="3"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Mention square footage, existing hardware, specific camera count, or RDV integration requests..."
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 sm:pt-6 flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="w-full sm:w-auto text-center py-3 sm:py-0 text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="w-full sm:w-auto px-8 py-3.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all active:scale-[0.98]"
                      >
                        Next: Contact Info →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Contact & Submit */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <h3 className="text-sm sm:text-lg font-mono font-bold text-white uppercase tracking-wider border-b border-neutral-900 pb-2.5 sm:pb-3">
                      Step 3: Contact Details & Transmit
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Alex Mercer"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@company.com"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (713) 000-0000"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-mono font-bold text-neutral-400 uppercase mb-1.5 sm:mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. Bobo Supplies"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-3.5 py-3 text-base sm:text-sm text-white focus:border-emerald-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl text-[11px] sm:text-xs font-mono text-neutral-400 space-y-1">
                      <p className="text-emerald-400 font-bold mb-1">SUMMARY SPECIFICATION:</p>
                      <p className="truncate">• Operations: {formData.businessType} ({formData.locationCount})</p>
                      <p className="truncate">• Contract: {formData.contractDuration}</p>
                      <p className="truncate">• Selected Services: {formData.servicesNeeded.length > 0 ? formData.servicesNeeded.join(', ') : 'None selected'}</p>
                    </div>

                    <div className="pt-2 sm:pt-6 flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="w-full sm:w-auto text-center py-3 sm:py-0 text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                      >
                        ← Back
                      </button>
                   <button
  type="submit"
  disabled={loading}
  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-400 text-black font-mono text-xs font-extrabold uppercase tracking-widest rounded-md shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transition-all active:scale-[0.98] disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit Quote Request"}
</button>
                    </div>
                  </motion.div>
                )}

              </form>
            )}
          </AnimatePresence>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-6 text-center text-[10px] sm:text-xs font-mono text-neutral-600 px-4">
        &copy; {new Date().getFullYear()} PixPerl 3D Studio & RDV Strategic Alliance. Houston, TX.
      </footer>

    </div>
  );
}