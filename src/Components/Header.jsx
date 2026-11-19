import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShieldAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { industriesData } from '../data/industriesData';

const QUOTE_LINK = "/get-quote";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();

  // Navigation routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative w-full bg-white border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">

        {/* Brand Logo with Custom Styling */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-transform duration-200 active:scale-95"
        >
          <FaShieldAlt className="text-blue-600 text-xl sm:text-2xl flex-shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1.5 font-mono tracking-tight leading-none">
            <span className="font-black text-sm sm:text-lg text-black uppercase">
              RETAILERS
            </span>
            <span className="font-bold text-[10px] sm:text-xs text-blue-600 uppercase tracking-widest">
              SURVEILLANCE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8 font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
          {navLinks.map((link, idx) => {
            if (link.name === 'Industries') {
              const isIndustriesActive = location.pathname.startsWith('/industries');

              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setDesktopIndustriesOpen(true)}
                  onMouseLeave={() => setDesktopIndustriesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setDesktopIndustriesOpen(!desktopIndustriesOpen)}
                    className={`flex items-center gap-1.5 py-2 uppercase transition-colors duration-200 hover:text-blue-600 cursor-pointer ${
                      isIndustriesActive ? 'text-blue-600 font-extrabold' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-200 ${
                        desktopIndustriesOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {desktopIndustriesOpen && (
                    <div className="absolute left-0 top-full pt-2 w-72 z-50">
                      <div className="bg-white border border-neutral-200 rounded-xl shadow-xl p-2 space-y-1 normal-case tracking-normal">
                        {industriesData.map((industry) => {
                          const Icon = industry.icon;
                          const isSubActive = location.pathname === `/industries/${industry.slug}`;

                          return (
                            <Link
                              key={industry.slug}
                              to={`/industries/${industry.slug}`}
                              onClick={() => setDesktopIndustriesOpen(false)}
                              className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors duration-200 group ${
                                isSubActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-neutral-50 text-neutral-700'
                              }`}
                            >
                              <div
                                className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isSubActive
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                                }`}
                              >
                                <Icon size={12} />
                              </div>
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                                {industry.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={idx}
                to={link.path}
                className={`transition-colors duration-200 hover:text-blue-600 ${
                  isActive ? 'text-blue-600 font-extrabold' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <Link
            to={QUOTE_LINK}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md inline-block active:scale-95"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-700 hover:text-black p-2 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

      </div>

      {/* Responsive Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 pt-4 pb-6 space-y-4 font-mono text-xs font-bold uppercase tracking-widest shadow-lg">
          {navLinks.map((link, idx) => {
            if (link.name === 'Industries') {
              const isIndustriesActive = location.pathname.startsWith('/industries');

              return (
                <div key={idx} className="border-b border-neutral-100 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={`w-full flex items-center justify-between py-2 uppercase transition-colors duration-200 hover:text-blue-600 ${
                      isIndustriesActive ? 'text-blue-600 font-extrabold' : 'text-neutral-700'
                    }`}
                  >
                    <span>{link.name}</span>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        mobileIndustriesOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="pl-3 pt-1 pb-2 space-y-2">
                      {industriesData.map((industry) => {
                        const isSubActive = location.pathname === `/industries/${industry.slug}`;

                        return (
                          <Link
                            key={industry.slug}
                            to={`/industries/${industry.slug}`}
                            onClick={() => {
                              setMobileIndustriesOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className={`block py-1.5 text-[11px] transition-colors duration-200 hover:text-blue-600 ${
                              isSubActive ? 'text-blue-600 font-extrabold' : 'text-neutral-600'
                            }`}
                          >
                            {industry.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === link.path;

            return (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 border-b border-neutral-100 transition-colors duration-200 hover:text-blue-600 ${
                  isActive ? 'text-blue-600 font-extrabold' : 'text-neutral-700'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to={QUOTE_LINK}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded shadow-md active:scale-95 transition-transform"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}