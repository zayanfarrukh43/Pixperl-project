import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaBuilding,
  FaCheck
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Email validation helper
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      'https://pixelperl-backend.vercel.app/api/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || 'Failed to submit your message.'
      );
    }

    console.log('Contact submitted successfully:', data);

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'General Inquiry',
      message: '',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    alert(
      error.message ||
      'Something went wrong. Please try again.'
    );
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Custom formatting and handling for US Phone Numbers
    if (name === 'phone') {
      const formattedPhone = formatUSPhoneNumber(value);
      setFormData({ ...formData, phone: formattedPhone });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Utility function to format US phone numbers as (XXX) XXX-XXXX
  const formatUSPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, ''); // Strip all non-digits
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const offices = [
    { city: "US HQ & COMMAND", location: "Houston, TX", status: "Open Now", hours: "09:00 - 18:00 CST" },
    { city: "GLOBAL OPS CENTER", location: "Karachi, PK", status: "OPEN", hours: "24/7 PST" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Header Banner */}
      <section className="relative border-b border-neutral-800 bg-neutral-900/50 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-400 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
            <span>Connect With Retailers Surveillance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-mono uppercase text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 font-mono text-xs sm:text-sm leading-relaxed px-2">
            Have a project in mind, need operational support, or looking for strategic partnership? Reach out to our engineers and technical advisors today.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info & Offices */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-lg sm:text-xl font-mono font-bold uppercase tracking-wider text-white mb-4 sm:mb-6 flex items-center gap-3">
                <FaShieldAlt className="text-blue-500 flex-shrink-0" /> Direct Channels
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Email Direct Channel - Enhanced Mobile Responsiveness */}
                <a 
                  href="mailto:info@retailerssurveillance.com" 
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-900 transition-all group"
                >
                  <div className="p-2.5 sm:p-3 bg-blue-950/80 text-blue-400 rounded-lg group-hover:scale-105 transition-transform flex-shrink-0">
                    <FaEnvelope className="text-base sm:text-lg" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <span className="block font-mono text-[10px] sm:text-xs font-semibold uppercase text-neutral-400 tracking-wider">Email Us</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-bold group-hover:text-blue-400 transition-colors block truncate">
                      info@retailerssurveillance.com
                    </span>
                  </div>
                </a>

                <a 
                  href="tel:+18005550199" 
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-2.5 sm:p-3 bg-blue-950/80 text-blue-400 rounded-lg group-hover:scale-105 transition-transform flex-shrink-0">
                    <FaPhoneAlt className="text-base sm:text-lg" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] sm:text-xs font-semibold uppercase text-neutral-400 tracking-wider">Call Support</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-bold group-hover:text-blue-400 transition-colors">+1 (800) 555-0199</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-2.5 sm:p-3 bg-blue-950/80 text-blue-400 rounded-lg flex-shrink-0">
                    <FaHeadset className="text-base sm:text-lg" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] sm:text-xs font-semibold uppercase text-neutral-400 tracking-wider">Response SLA</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-bold">Under 24 Hours Guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Locations List */}
            <div>
              <h2 className="text-lg sm:text-xl font-mono font-bold uppercase tracking-wider text-white mb-4 sm:mb-6 flex items-center gap-3">
                <FaBuilding className="text-blue-500 flex-shrink-0" /> Operations Hubs
              </h2>

              <div className="space-y-3">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <div>
                      <span className="block font-mono text-xs sm:text-sm font-bold text-white">{office.city}</span>
                      <span className="font-mono text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                        <FaMapMarkerAlt className="text-blue-500/70 flex-shrink-0" /> {office.location}
                      </span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                        {office.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 sm:p-8 lg:p-10 relative">
              
              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-4">
                  <FaCheckCircle className="text-4xl sm:text-5xl text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase">Message Dispatched</h3>
                  <p className="text-neutral-400 font-mono text-xs sm:text-sm max-w-md mx-auto">
                    Thank you for reaching out to Retailers Surveillance. A team engineer will review your inquiry and follow up shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-all w-full sm:w-auto"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="border-b border-neutral-800 pb-3 sm:pb-4">
                    <h2 className="text-lg sm:text-xl font-mono font-bold uppercase text-white">Send A Message</h2>
                    <p className="text-neutral-400 font-mono text-xs mt-1">Fill out the field parameters below.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1.5 sm:mb-2">
                        Full Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Enhanced Email Input Field */}
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1.5 sm:mb-2">
                        Work Email <span className="text-blue-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-neutral-500 pointer-events-none text-xs sm:text-sm">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-9 sm:pl-10 pr-9 sm:pr-10 py-2.5 sm:py-3 text-xs sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                        {/* Live Email Checkmark Indicator */}
                        {isValidEmail(formData.email) && (
                          <span className="absolute right-3.5 text-emerald-500 text-xs sm:text-sm pointer-events-none">
                            <FaCheck />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1.5 sm:mb-2">
                        Phone Number (US) <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={14}
                        pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
                        title="Please enter a valid US phone number e.g. (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1.5 sm:mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1.5 sm:mb-2">
                      Topic of Inquiry
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm font-mono text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Enterprise Architecture">Enterprise Architecture</option>
                      <option value="Security & Compliance">Security & Compliance</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-1.5 sm:mb-2">
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your requirement, timeline, or query..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Submit Transmission
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}