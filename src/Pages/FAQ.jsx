import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaQuestionCircle,
    FaChevronDown,
    FaCamera,
    FaServer,
    FaShieldAlt,
    FaTools,
    FaEnvelope
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            category: "systems",
            question: "What types of surveillance and security systems do you provide?",
            answer: "We supply, configure, and install a full range of security solutions, including:\n• IP digital security cameras and high-definition analog systems.\n• Wireless, solar-powered, and cellular-connected cameras for remote locations.\n• PTZ (Pan-Tilt-Zoom) cameras for wide-area coverage.\n• Thermal imaging and low-light night-vision cameras.\n• Network Video Recorders (NVR) and Digital Video Recorders (DVR)."
        },
        {
            category: "systems",
            question: "Do you cater to residential homes or commercial businesses?",
            answer: "We serve both! Our clients range from homeowners looking for video doorbells and smart perimeter monitoring to large commercial, industrial, retail, and multi-site enterprise properties."
        },
        {
            category: "systems",
            question: "Can my surveillance system integrate with other security measures?",
            answer: "Yes. We integrate our surveillance systems seamlessly with other security layers, including access control (keycards, biometric readers, intercoms), automated gates, and intrusion alarm systems."
        },
        {
            category: "tech",
            question: "What is the difference between an NVR and a DVR?",
            answer: "• DVR (Digital Video Recorder): Used with traditional analog cameras. Video processing happens directly on the recorder itself.\n• NVR (Network Video Recorder): Used with modern IP (digital) cameras. Video streams are encoded at the camera, resulting in significantly higher resolution, sharper image quality, and advanced smart analytics (like human/vehicle recognition)."
        },
        {
            category: "tech",
            question: "Can I view my live camera feeds remotely?",
            answer: "Absolutely. All our modern installations are network-enabled. You can access live feeds, review recorded footage, and manage settings securely through a mobile app or desktop portal from anywhere in the world."
        },
        {
            category: "tech",
            question: "What happens to my cameras during a power outage?",
            answer: "Standard systems power down when electricity is lost. However, we strongly recommend and install Uninterruptible Power Supplies (UPS) and surge protectors. These battery backups keep your security cameras and recorder running through temporary power outages and protect your hardware from electrical spikes."
        },
        {
            category: "tech",
            question: "Can I upgrade my old analog cameras without replacing everything?",
            answer: "In many cases, yes. We offer hybrid recording systems that support both older analog cameras and new digital IP cameras, allowing you to upgrade your setup incrementally over time."
        },
        {
            category: "security",
            question: "Where is my recorded video footage stored?",
            answer: "Footage can be stored in three ways:\n• Locally: On a secure hard drive inside an on-site NVR or DVR.\n• In the Cloud: Backed up or streamed directly to encrypted cloud servers.\n• Hybrid: Local storage backed up automatically to the cloud."
        },
        {
            category: "security",
            question: "How long is footage saved before it gets overwritten?",
            answer: "Storage retention depends on your hard drive size, the number of cameras, resolution settings, and whether you record 24/6 or use motion-triggered recording. Standard setups typically store between 14 to 30+ days of history, but we can customize retention windows to meet your exact legal or personal needs."
        },
        {
            category: "security",
            question: "Is my video feed secure from hackers?",
            answer: "Yes. We prioritize cybersecurity by utilizing enterprise-grade encryption (for data at rest and in transit), secure port configuration, regular firmware updates, and isolated network setups to ensure unauthorized individuals cannot access your feeds."
        },
        {
            category: "service",
            question: "How long does an installation take?",
            answer: "• Residential setups: Usually completed within a single day.\n• Commercial/Enterprise setups: Can take anywhere from a few days to a couple of weeks, depending on the scale of the building, wiring complexity, and network configuration."
        },
        {
            category: "service",
            question: "Do your systems come with a warranty?",
            answer: "Yes. All hardware comes with manufacturer warranties, and our professional installations are backed by our workmanship guarantee. We also offer optional maintenance plans for ongoing peace of mind."
        },
        {
            category: "service",
            question: "What maintenance does a security camera system require?",
            answer: "While systems are largely automated, we recommend periodic physical inspections, lens cleaning, and checking connections. We offer preventative maintenance contracts where our technicians handle these health checks for you."
        },
        {
            category: "service",
            question: "What should I do if a camera malfunctions?",
            answer: "You can contact our technical support team immediately. Many minor issues can be diagnosed and resolved remotely. If physical hardware repair or replacement is necessary, we will dispatch a technician promptly."
        },
        {
            category: "pricing",
            question: "How much does a surveillance system cost?",
            answer: "Because every property has different security needs, costs vary based on property size, camera count, resolution, and storage preferences. We provide transparent, itemized, and free on-site or virtual evaluations with zero hidden fees."
        },
        {
            category: "pricing",
            question: "Are there any recurring monthly fees?",
            answer: "• Self-Monitored / Local Storage: If you store footage locally and monitor the system yourself via your mobile device, there are no monthly fees after the initial purchase and installation.\n• Managed / Cloud Services: Monthly fees apply only if you choose optional cloud storage subscriptions, professional central-station alarm monitoring, or ongoing managed maintenance packages."
        }
    ];

    const categories = [
        { id: 'all', label: 'All Questions', icon: FaQuestionCircle },
        { id: 'systems', label: 'Systems & Hardware', icon: FaCamera },
        { id: 'tech', label: 'Remote Access & Power', icon: FaServer },
        { id: 'security', label: 'Data & Security', icon: FaShieldAlt },
        { id: 'service', label: 'Installation & Support', icon: FaTools }
    ];

    const filteredFaqs = activeCategory === 'all'
        ? faqData
        : faqData.filter(faq => faq.category === activeCategory);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-blue-600 selection:text-white antialiased">

            {/* HERO SECTION */}
            <section className="relative pt-12 pb-16 border-b border-neutral-200 overflow-hidden bg-white">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full text-[10px] font-mono font-extrabold tracking-widest text-blue-600 uppercase mb-4">
                            <FaQuestionCircle className="text-blue-600" />
                            HELP CENTER & ANSWERS
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Questions</span>
                        </h1>
                        <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                            Everything you need to know about Retailers Surveillance systems, hardware setup, remote viewing, data protection, and support options.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ MAIN CONTENT */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">

                    {/* CATEGORY TABS */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-200 pb-4">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setOpenIndex(null);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]'
                                        : 'bg-neutral-100 text-neutral-600 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-300'
                                        }`}
                                >
                                    <Icon className="text-xs" />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* ACCORDION LIST */}
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;

                            return (
                                <div
                                    key={idx}
                                    className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-blue-500/40"
                                >
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
                                    >
                                        <span className="text-sm sm:text-base font-bold text-neutral-900">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-blue-600 flex-shrink-0"
                                        >
                                            <FaChevronDown />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="p-5 pt-0 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed whitespace-pre-line border-t border-neutral-100 bg-white">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* CONTACT BANNER */}
                    <div className="mt-12 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-left">
                            <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
                            <div>
                                <span className="text-neutral-900 font-bold block">STILL HAVE QUESTIONS?</span>
                                <span className="text-[10px] text-neutral-500">Contact our technical sales team for custom evaluations.</span>
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}