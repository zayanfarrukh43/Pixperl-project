import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaArrowLeft, 
  FaShieldAlt, 
  FaArrowRight 
} from 'react-icons/fa';
import { industriesData } from '../data/industriesData';

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = industriesData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  const Icon = industry.icon;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-14 sm:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-blue-600 mb-6 sm:mb-8 transition-colors"
          >
            <FaArrowLeft /> BACK TO HOME
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <Icon size={18} />
            </div>
            <span className="font-mono text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              {industry.tag}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 max-w-4xl leading-tight">
            {industry.heroHeadline}
          </h1>

          <p className="mt-4 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {industry.heroSubtext}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/get-quote"
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg text-center transition-all"
            >
              Get Free Site Audit
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-900 font-mono text-xs font-bold uppercase tracking-widest rounded-xl text-center transition-all"
            >
              Speak With Specialist
            </Link>
          </div>

          {/* Key Industry Metrics Strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {industry.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-black font-mono text-blue-600">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-bold uppercase text-neutral-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vulnerabilities vs. 24/6 Protection Protocols */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 border-b border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Threats Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider mb-3">
              <FaExclamationTriangle /> COMMON SITE RISKS
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mb-6">
              Security Challenges in {industry.title}
            </h2>
            <ul className="space-y-4">
              {industry.threats.map((threat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span>{threat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Response Protocols Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-200 shadow-lg">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-3">
              <FaShieldAlt /> 24/6 LIVE RESPONSE PROTOCOL
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 mb-6">
              How Retailers Surveillance Protects You
            </h2>
            <ul className="space-y-4">
              {industry.protocols.map((protocol, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>{protocol}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Explore Other Industries Footer Strip */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-500 mb-6">
            Explore Other Industries We Protect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industriesData
              .filter((item) => item.slug !== slug)
              .map((other) => {
                const OtherIcon = other.icon;
                return (
                  <Link
                    key={other.slug}
                    to={`/industries/${other.slug}`}
                    className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-blue-500 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <OtherIcon size={15} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                        {other.title}
                      </span>
                    </div>
                    <FaArrowRight className="text-xs text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}