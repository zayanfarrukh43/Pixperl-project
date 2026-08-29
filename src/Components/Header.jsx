import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';

const QUOTE_LINK = "/get-quote";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // All navigation links set up as separate route pages
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative w-full bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">

        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-mono font-black text-lg sm:text-xl tracking-wider text-black"
        >
          <FaShieldAlt className="text-blue-600" />
          <span>PIXPERL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={idx}
                to={link.path}
                className={`transition-colors hover:text-blue-600 ${
                  isActive ? 'text-blue-600 font-extrabold' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            to={QUOTE_LINK}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md inline-block"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-700 hover:text-black p-2"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 font-mono text-xs font-bold uppercase tracking-widest">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1.5 transition-colors hover:text-blue-600 ${
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
              className="block text-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-extrabold uppercase tracking-widest rounded shadow-md"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}