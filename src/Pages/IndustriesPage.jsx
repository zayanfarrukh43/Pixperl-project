import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaIndustry, 
  FaCubes, 
  FaShoppingBag, 
  FaBuilding, 
  FaCar, 
  FaGamepad, 
  FaArrowRight, 
  FaCheckCircle,
  FaCloud,          // Vape / Smoke Shop
  FaShoppingBasket, // Grocery Stores
  FaGasPump,        // Gas Station
  FaStore           // Convenience Stores
} from 'react-icons/fa';

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState('ecommerce');

  const industries = [
    {
      id: 'ecommerce',
      icon: FaShoppingBag,
      title: 'E-Commerce & Retail',
      tagline: 'Interactive 3D configurators & ultra-realistic product renders',
      description: 'Transform online shopping experiences with dynamic 3D asset viewports, AR previewing, and photorealistic CGI visuals that boost conversion rates and minimize returns.',
      stats: [
        { value: '40%', label: 'Conversion Boost' },
        { value: '30%', label: 'Lower Return Rates' }
      ],
      deliverables: [
        'Web3D & WebGL Product Viewers',
        'Augmented Reality (AR) USDZ / GLTF Files',
        '360° Interactive Product Spinners',
        'Batch Photorealistic CGI Still Renders'
      ]
    },
    {
      id: 'vape-smoke',
      icon: FaCloud,
      title: 'Vape & Smoke Shops',
      tagline: 'Photorealistic hardware renders & packaging visualization',
      description: 'Showcase e-liquid bottles, vape hardware mods, disposables, and glass accessories with hyper-realistic liquid rendering, metallic shaders, and compliant digital packaging mocks.',
      stats: [
        { value: '100%', label: 'Label Accuracy' },
        { value: '360°', label: 'Device Spinners' }
      ],
      deliverables: [
        '3D Mod & Tank Hardware Renderings',
        'Custom E-Liquid Bottle & Label Mockups',
        'Interactive Vaporizer Color Configurators',
        'Digital Storefront & POS Visual Assets'
      ]
    },
    {
      id: 'grocery',
      icon: FaShoppingBasket,
      title: 'Grocery Stores',
      tagline: 'Virtual shelf planning & digital produce visualization',
      description: 'Optimize retail layouts, planograms, and delivery platforms with 3D product models, packaging renders, and immersive virtual grocery aisle walkthroughs.',
      stats: [
        { value: '99%', label: 'Model Realism' },
        { value: 'Fast', label: 'Planogram Setup' }
      ],
      deliverables: [
        'High-Resolution CPG & Package Renders',
        'Virtual Planogram & Aisle Visualizers',
        'Interactive Produce & Fresh Goods Models',
        'AR Mobile Shopping Previews'
      ]
    },
    {
      id: 'gas-station',
      icon: FaGasPump,
      title: 'Gas Stations',
      tagline: 'Forecourt architectural CGI & station design concepts',
      description: 'Visualize station re-branding, fuel canopy architectural models, and integrated pump equipment displays before physical construction begins.',
      stats: [
        { value: '3D CAD', label: 'Ingestion' },
        { value: '24/7', label: 'Lighting Sims' }
      ],
      deliverables: [
        'Fuel Station & Canopy Exterior CGI',
        'Digital Pump & Payment Kiosk Renders',
        'Site Plan Layouts & Traffic Flow 3D',
        'Night & Day LED Lighting Simulations'
      ]
    },
    {
      id: 'convenience-stores',
      icon: FaStore,
      title: 'Convenience Stores',
      tagline: 'High-density store design & POS layout optimization',
      description: 'Max out revenue per square foot with 3D interior floor planning, hot food counter visualization, and interactive grabs-and-go product displays.',
      stats: [
        { value: '+25%', label: 'Floor Space Opt' },
        { value: 'Real-Time', label: 'Layout Tweaks' }
      ],
      deliverables: [
        'C-Store Interior Architectural Renders',
        'Beverage & Snack Cooler Display Models',
        'Point-of-Sale (POS) Station Mockups',
        'Interactive Virtual Store Walkthroughs'
      ]
    },
    {
      id: 'architecture',
      icon: FaBuilding,
      title: 'Architecture & Real Estate',
      tagline: 'Immersive BIM visualization & architectural CGI walk-throughs',
      description: 'Empower real estate developers and architects with photorealistic 3D interior/exterior renderings, VR walkthroughs, and spatial lighting simulations.',
      stats: [
        { value: '8K', label: 'Max Render Res' },
        { value: '100%', label: 'BIM Accuracy' }
      ],
      deliverables: [
        'Photorealistic Architectural Renders',
        'Virtual Property Walkthroughs & VR',
        '3D Floor Plans & Spatial Layouts',
        'Exterior Daylight & Night Lighting Sims'
      ]
    },
    {
      id: 'automotive',
      icon: FaCar,
      title: 'Automotive & Mobility',
      tagline: 'Precision CAD rendering & real-time vehicle customizers',
      description: 'Bring automotive engineering to life with high-fidelity CAD ingestion, real-time material swappers, studio lighting rigs, and marketing-ready CGI scenes.',
      stats: [
        { value: '0.1mm', label: 'CAD Precision' },
        { value: 'Real-time', label: 'Material Swap' }
      ],
      deliverables: [
        'Interactive Vehicle Configurators',
        'Studio Quality Cinematic Teasers',
        'Exploded View Technical Animations',
        'Interior Trim & Material Renderings'
      ]
    },
    {
      id: 'gaming',
      icon: FaGamepad,
      title: 'Gaming & Entertainment',
      tagline: 'Production-ready 3D game assets & environment models',
      description: 'Accelerate game production pipelines with optimized low-poly/high-poly 3D models, AAA texture maps, character rigs, and real-time environment assets.',
      stats: [
        { value: 'PBR', label: '4K Textures' },
        { value: 'Unreal/Unity', label: 'Ready Pipelines' }
      ],
      deliverables: [
        'Game-Ready PBR Textured Assets',
        'Character Modeling & Skeletal Rigging',
        'Environment & Props Asset Libraries',
        'Real-Time VFX & Cinematic Cutscenes'
      ]
    }
  ];

  const currentData = industries.find((ind) => ind.id === activeIndustry);

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-blue-600 selection:text-white antialiased relative">

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 border-b border-neutral-200 overflow-hidden bg-white">
        {/* Ambient Glows */}
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
              <FaIndustry className="text-blue-600" />
              TAILORED 3D SOLUTIONS
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neutral-800">Transform</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              From retail & convenience stores to WebGL configurators, AAA game assets, and architectural visualization—discover how PixPerl powers digital transformation across sectors.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <span className="text-neutral-500">COVERAGE: <span className="text-neutral-800 font-semibold">Global Enterprise & Retail</span></span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500">PIPELINES: <span className="text-blue-600 font-bold">Unreal Engine / WebGL / Blender</span></span>
            </div>
          </motion.div>

          {/* QUICK HIGHLIGHT CARDS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
            {industries.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.button 
                  key={item.id}
                  onClick={() => setActiveIndustry(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`p-4 sm:p-5 text-left border rounded-2xl transition-all duration-300 ${
                    activeIndustry === item.id 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20' 
                      : 'bg-neutral-50/70 border-neutral-200 text-neutral-800 hover:border-blue-500/40 hover:bg-white'
                  }`}
                >
                  <IconComponent className={`text-xl mb-3 ${activeIndustry === item.id ? 'text-white' : 'text-blue-600'}`} />
                  <div className="text-xs font-bold font-mono tracking-wide">{item.title}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED INDUSTRY CONTENT */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden"
            >
              {/* HEADER INFO */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-200 pb-8">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-600 tracking-widest uppercase block mb-1">
                    SECTOR OVERVIEW
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">{currentData.title}</h2>
                  <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-1">{currentData.tagline}</p>
                </div>

                {/* STATS */}
                <div className="flex items-center gap-4">
                  {currentData.stats.map((stat, i) => (
                    <div key={i} className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-center min-w-[100px]">
                      <div className="text-lg font-extrabold font-mono text-blue-600">{stat.value}</div>
                      <div className="text-[9px] font-mono text-neutral-500 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESCRIPTION & DELIVERABLES */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                    <FaCubes className="text-blue-600" />
                    How We Help
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {currentData.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-900 uppercase">
                    <FaCheckCircle className="text-blue-600" />
                    Key Deliverables
                  </div>
                  <ul className="space-y-2.5 font-mono text-xs">
                    {currentData.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700">
                        <FaArrowRight className="text-blue-600 text-[10px] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}