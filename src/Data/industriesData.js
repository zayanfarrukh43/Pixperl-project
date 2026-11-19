import { 
  FaShoppingCart, 
  FaDesktop, 
  FaBuilding, 
  FaHome, 
  FaWarehouse, 
  FaLayerGroup 
} from 'react-icons/fa';

export const industriesData = [
  {
    slug: 'retail-stores',
    tag: '01 / RETAIL',
    title: 'Retail Stores & Chains',
    shortDesc: 'Stop shoplifting, watch registers & secure stores after closing.',
    heroHeadline: '24/6 Live Video Monitoring for Retail Stores & Chains',
    heroSubtext: 'Deter shoplifting, monitor POS register activity, and protect store inventory after hours without paying for expensive on-site security guards.',
    icon: FaShoppingCart,
    stats: [
      { value: '< 15 Sec', label: 'Operator Response Time' },
      { value: '24/6', label: 'Active Live Watch' },
      { value: '98%', label: 'Deterrence on Voice Warning' }
    ],
    threats: [
      'Organized retail crime & daytime shoplifting',
      'Employee register theft & sweethearting at checkout',
      'After-hours break-ins & smash-and-grab robberies',
      'Parking lot loitering & customer safety risks'
    ],
    protocols: [
      'Live operator audio intervention through on-site speakers within seconds',
      'Virtual opening and closing escorts for store managers and staff',
      'Instant priority police dispatch with verified live video footage',
      'Weekly incident logs and shrink-reduction analytics reports'
    ]
  },
  {
    slug: 'appliance-electronics',
    tag: '02 / HIGH-VALUE',
    title: 'Appliance & Electronics Stores',
    shortDesc: 'Protect high-value stock, showrooms & loading docks.',
    heroHeadline: 'High-Value Asset Protection for Appliance & Electronics Stores',
    heroSubtext: 'Safeguard showroom floors, backroom stockrooms, and rear loading docks from targeted high-ticket theft with 24/6 live surveillance.',
    icon: FaDesktop,
    stats: [
      { value: '24/6', label: 'Showroom & Dock Watch' },
      { value: 'HD Clips', label: 'Court & Insurance Ready' },
      { value: 'Zero', label: 'Blind-Spot Coverage' }
    ],
    threats: [
      'Targeted theft of high-margin electronics and appliances',
      'Unauthorized access to stockrooms and rear loading bays',
      'Smash-and-grab storefront breaches after closing',
      'Inventory shrinkage during busy delivery hours'
    ],
    protocols: [
      'AI perimeter tripwires around loading docks, cages, and rear exits',
      'Immediate siren activation and live voice warnings upon breach',
      'Time-stamped HD video clips ready for insurance claims and police',
      'Continuous overnight watch by dedicated command center operators'
    ]
  },
  {
    slug: 'construction-sites',
    tag: '03 / SITE',
    title: 'Construction Sites',
    shortDesc: 'Thermal perimeter detection & live voice warnings prevent theft.',
    heroHeadline: 'Active Surveillance & Perimeter Guard for Construction Sites',
    heroSubtext: 'Protect heavy machinery, copper wiring, and building materials overnight with thermal arrays and live operator talk-down.',
    icon: FaBuilding,
    stats: [
      { value: 'Thermal', label: 'Zero-Light Detection' },
      { value: '24/6', label: 'Overnight Site Guard' },
      { value: '60%+', label: 'Savings vs. On-Site Guards' }
    ],
    threats: [
      'Theft of heavy equipment, generators, and power tools',
      'Copper wire, plumbing, and lumber stripping',
      'Trespassing, vandalism, and site liability hazards',
      'Unauthorized after-hours vehicle entry at site gates'
    ],
    protocols: [
      'Thermal and night-vision perimeter monitoring across open job sites',
      'Live operator voice talk-down that stops intruders before they enter',
      'Gate access verification and after-hours vehicle logging',
      'Adaptable camera coverage as your construction phases evolve'
    ]
  },
  {
    slug: 'real-estate',
    tag: '04 / REAL ESTATE',
    title: 'Real Estate & New Home Builds',
    shortDesc: 'Protect vacant properties, model homes & building materials.',
    heroHeadline: '24/6 Security for Real Estate Developments & Model Homes',
    heroSubtext: 'Keep vacant listings, furnished model homes, and residential developments safe during the hours no one is on site.',
    icon: FaHome,
    stats: [
      { value: '24/6', label: 'Subdivision Watch' },
      { value: 'Instant', label: 'Audio & Strobe Deterrence' },
      { value: '100%', label: 'Verified Alert Dispatch' }
    ],
    threats: [
      'Appliance and HVAC unit theft from newly built homes',
      'Squatters and unauthorized entry into vacant properties',
      'Vandalism, break-ins, and graffiti on furnished model homes',
      'Material theft across multi-lot residential subdivisions'
    ],
    protocols: [
      'Proactive overnight monitoring across entire residential subdivisions',
      'Instant live audio deterrence and strobe light activation',
      'Direct escalation to property managers and local law enforcement',
      'Flexible deployment units for short-term or long-term builds'
    ]
  },
  {
    slug: 'warehouses-logistics',
    tag: '05 / LOGISTICS',
    title: 'Warehouses & Distribution',
    shortDesc: 'Monitor gates, yards, loading bays & after-hours vehicles.',
    heroHeadline: 'Enterprise Surveillance for Warehouses & Distribution Hubs',
    heroSubtext: 'Secure perimeter fences, trailer yards, and loading bays with real-time AI detection and 24/6 human verification.',
    icon: FaWarehouse,
    stats: [
      { value: '24/6', label: 'Yard & Gate Control' },
      { value: '360°', label: 'Perimeter & Bay Visibility' },
      { value: 'Full Log', label: 'Vehicle & Entry Tracking' }
    ],
    threats: [
      'Cargo, pallet, and trailer theft in storage yards',
      'Tailgating through automated security gates',
      'Unauthorized loading bay activity after operating hours',
      'Perimeter fence breaches along blind spots'
    ],
    protocols: [
      'Remote gate access control and driver identity verification',
      '24/6 yard patrols via high-definition PTZ and thermal cameras',
      'Immediate audio intervention and law enforcement dispatch',
      'Comprehensive digital audit logs of all after-hours entries'
    ]
  },
  {
    slug: 'multi-location',
    tag: '06 / MULTI-SITE',
    title: 'Multi-Location Businesses',
    shortDesc: 'One command center & one response standard for every location.',
    heroHeadline: 'Unified 24/6 Live Monitoring for Multi-Location Businesses',
    heroSubtext: 'Centralize security across all your branches under one command center, one SLA standard, and one consolidated weekly report.',
    icon: FaLayerGroup,
    stats: [
      { value: '1 Hub', label: 'Unified Command Center' },
      { value: '24/6', label: 'Consistent SLA Standard' },
      { value: 'Weekly', label: 'Consolidated Portfolio Reports' }
    ],
    threats: [
      'Inconsistent security standards across different regional branches',
      'High cost of hiring physical guards across multiple locations',
      'Delayed incident reporting from local store managers',
      'Lack of centralized visibility across your business portfolio'
    ],
    protocols: [
      'Single command hub monitoring all locations simultaneously 24/6',
      'Standardized escalation protocols customized for each site',
      'Consolidated executive reporting across your entire portfolio',
      'Fast, scalable onboarding whenever you open a new location'
    ]
  }
];