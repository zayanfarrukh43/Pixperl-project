import React from 'react';
import { 
  FaUserCheck, 
  FaDollarSign, 
  FaVolumeUp, 
  FaBolt, 
  FaFileAlt, 
  FaClock 
} from 'react-icons/fa';

export default function WhyLiveMonitoring() {
  const features = [
    {
      icon: FaUserCheck,
      title: 'Real People Behind Every Alert',
      description: 'AI flags the threat and a trained operator confirms it, so you get fewer false alarms and faster action.'
    },
    {
      icon: FaDollarSign,
      title: 'Costs Less Than On-Site Guards',
      description: 'One monitored system covers your entire property 24/7 for a fraction of the cost of guard shifts.'
    },
    {
      icon: FaVolumeUp,
      title: 'Live Voice Deterrence',
      description: 'Most intruders leave the moment a live operator speaks to them through the on-site speaker.'
    },
    {
      icon: FaBolt,
      title: 'Faster Police Response',
      description: 'Verified, in-progress incidents get priority over unconfirmed alarms.'
    },
    {
      icon: FaFileAlt,
      title: 'Evidence Ready to Hand Over',
      description: 'Time-stamped clips and incident logs, ready for police, insurance claims or court.'
    },
    {
      icon: FaClock,
      title: 'No Tired Night Shifts',
      description: 'Our Houston and Karachi command centers hand over shifts around the clock, so a fresh operator is always on watch.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#fafafa] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-[11px] font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
            THE DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Why Live Monitoring Beats Recorded Cameras
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
            Recorded cameras show you what went wrong after it happens. Our operators stop incidents while they are happening.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-blue-600 text-lg flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold font-mono text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}