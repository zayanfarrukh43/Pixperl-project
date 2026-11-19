import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is remote video monitoring?',
      answer:
        'Your cameras stream live to our command center. When AI detects a person, vehicle or unusual activity, a trained operator checks it within seconds, then responds with a live voice warning, a siren, a call to you or police dispatch.'
    },
    {
      question: 'How is this different from a regular camera system?',
      answer:
        'Regular camera systems only record footage so you can see what happened after a theft or break-in occurs. Our live monitoring combines AI detection with real human operators who actively intervene in real time to stop incidents before loss or damage happens.'
    },
    {
      question: 'What happens when an alert is triggered?',
      answer:
        'An operator immediately reviews the live video feed to verify if there is a genuine threat. Once confirmed, they follow your site protocols—issuing a direct audio warning through on-site speakers, activating strobe lights/sirens, notifying you, or dispatching local law enforcement with verified visual evidence.'
    },
    {
      question: 'How long are your contracts?',
      answer:
        'Our standard dedicated monitoring agreements run on 12-month SLA terms, ensuring consistent, uninterrupted 24/6 coverage, hardware support, and custom escalation protocols tailored to your property.'
    },
    {
      question: 'How much does it cost?',
      answer:
        'Pricing depends on the number of cameras, site size, and monitoring hours required—typically costing a fraction of hiring a single on-site security guard. Contact us for a free site audit and customized quote.'
    },
    {
      question: 'Do you monitor construction sites at night and on weekends?',
      answer:
        'Yes. We provide continuous 24/6/365 coverage, including overnight hours, weekends, and holidays—protecting heavy machinery, copper, and building materials when sites are most vulnerable.'
    },
    {
      question: 'Will I receive reports?',
      answer:
        'Yes. You receive detailed incident logs, time-stamped video clips for any verified events, and regular weekly operational analytics reports summarizing site activity and security responses.'
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We provide full on-site installation, field dispatch, and monitoring across Greater Houston, TX, as well as 24/6 remote live video monitoring for retail and commercial businesses across the entire United States and North America.'
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#fafafa] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="text-[11px] font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
            SUPPORT // FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-neutral-300 shadow-sm' 
                    : 'border-neutral-200/90 hover:border-blue-400/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-blue-600 text-xs flex-shrink-0">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}