import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt,
  FaLock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-neutral-200 font-sans text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">

        {/* Brand Section */}
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

        {/* Quick Links */}
        <div className="space-y-3 font-mono text-xs">
          <h4 className="text-neutral-900 font-bold tracking-widest uppercase text-xs">Quick Links</h4>
          <ul className="space-y-2 text-neutral-600">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link to="/clients" className="hover:text-blue-600 transition-colors">Clients</Link></li>
            <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Solutions */}
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

        {/* Locations & Contact */}
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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@pixperl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                info@pixperl.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
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
  );
};

export default Footer;