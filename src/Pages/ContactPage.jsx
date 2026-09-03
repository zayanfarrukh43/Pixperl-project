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
  FaBuilding
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
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Banner */}
      <section className="relative border-b border-neutral-800 bg-neutral-900/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-400 font-mono text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Connect With PIXPERL
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-mono uppercase text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 font-mono text-sm leading-relaxed">
            Have a project in mind, need operational support, or looking for strategic partnership? Reach out to our engineers and technical advisors today.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info & Offices */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-xl font-mono font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-3">
                <FaShieldAlt className="text-blue-500" /> Direct Channels
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:info@pixperl.com" 
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 bg-blue-950/80 text-blue-400 rounded-lg group-hover:scale-105 transition-transform">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-semibold uppercase text-neutral-400">Email Us</span>
                    <span className="font-mono text-sm text-white font-bold group-hover:text-blue-400 transition-colors">info@pixperl.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+18005550199" 
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 bg-blue-950/80 text-blue-400 rounded-lg group-hover:scale-105 transition-transform">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-semibold uppercase text-neutral-400">Call Support</span>
                    <span className="font-mono text-sm text-white font-bold group-hover:text-blue-400 transition-colors">+1 (800) 555-0199</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="p-3 bg-blue-950/80 text-blue-400 rounded-lg">
                    <FaHeadset className="text-lg" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-semibold uppercase text-neutral-400">Response SLA</span>
                    <span className="font-mono text-sm text-white font-bold">Under 24 Hours Guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Locations List */}
            <div>
              <h2 className="text-xl font-mono font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-3">
                <FaBuilding className="text-blue-500" /> Operations Hubs
              </h2>

              <div className="space-y-3">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex items-center justify-between">
                    <div>
                      <span className="block font-mono text-sm font-bold text-white">{office.city}</span>
                      <span className="font-mono text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                        <FaMapMarkerAlt className="text-blue-500/70" /> {office.location}
                      </span>
                    </div>
                    <div className="text-right">
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
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-10 relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-mono font-bold text-white uppercase">Message Dispatched</h3>
                  <p className="text-neutral-400 font-mono text-sm max-w-md mx-auto">
                    Thank you for reaching out to PIXPERL. A team engineer will review your inquiry and follow up shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-neutral-800 pb-4">
                    <h2 className="text-xl font-mono font-bold uppercase text-white">Send A Message</h2>
                    <p className="text-neutral-400 font-mono text-xs mt-1">Fill out the field parameters below.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                        Full Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-base sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                        Work Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-base sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* ADDED: US Format Phone Field */}
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
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
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-base sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-base sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                      Topic of Inquiry
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-base sm:text-sm font-mono text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Enterprise Architecture">Enterprise Architecture</option>
                      <option value="Security & Compliance">Security & Compliance</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-neutral-300 mb-2">
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your requirement, timeline, or query..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-base sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
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