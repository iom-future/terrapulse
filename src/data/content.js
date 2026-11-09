// Comprehensive content & illustrative telemetry data for TerraPulse
// All dashboard metrics are explicitly labeled as illustrative examples per specification.

export const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
];

export const heroContent = {
  eyebrow: 'CLIMATE INTELLIGENCE FOR A CHANGING WORLD',
  headline: 'See Risk Earlier. Protect What Matters.',
  subheadline:
    'TerraPulse turns satellite imagery and local observations into actionable climate intelligence, helping organizations anticipate risks and prepare before disasters strike.',
  primaryCta: 'Request Early Access',
  secondaryCta: 'Explore the Platform',
  supportingText:
    'Helping communities, infrastructure, and institutions become resilient to environmental threats.',
  illustrativeDisclaimer:
    'Illustrative Product Interface — Representative example data for demonstration purposes only.',
  dashboardRegions: [
    {
      id: 'sample-district-a',
      selectedRegion: 'Sample District (Lower Basin)',
      coordinates: '06°27′N 003°23′E (Illustrative)',
      monitoringLayer: 'Flood Exposure',
      environmentalStatus: 'Monitoring',
      riskIndicator: 'Elevated',
      lastObservation: 'Sample timestamp • 14:20 UTC',
      dataSource: 'Multi-Source: SAR Satellite + Basin Gauge + Weather Feed',
      rainfallTrend: 'Above seasonal baseline (Illustrative)',
      soilSaturation: 'High surface moisture signal',
      exposedAssets: 'Riverine corridors & low-lying arterial roads',
      timeline: [
        {
          time: 'T - 72h (Sample)',
          event: 'Upstream Catchment Rainfall Signal',
          detail: 'Sustained precipitation recorded across upper tributary sub-basins.',
          status: 'Observed',
        },
        {
          time: 'T - 36h (Sample)',
          event: 'SAR Surface Water Expansion',
          detail: 'Radar pass indicates widening floodplain boundary along Sector B.',
          status: 'Analyzed',
        },
        {
          time: 'T - 12h (Sample)',
          event: 'Local River Stage Observation',
          detail: 'Field gauge observation confirms rising water level near low-lying crossings.',
          status: 'Verified Signal',
        },
        {
          time: 'Current (Sample)',
          event: 'Elevated Flood Exposure Status',
          detail: 'Priority monitoring recommended for riverside wards and drainage channels.',
          status: 'Monitoring',
        },
      ],
    },
    {
      id: 'sample-district-b',
      selectedRegion: 'Sample Confluence Zone',
      coordinates: '07°48′N 006°44′E (Illustrative)',
      monitoringLayer: 'Flood Exposure',
      environmentalStatus: 'Monitoring',
      riskIndicator: 'Elevated',
      lastObservation: 'Sample timestamp • 11:45 UTC',
      dataSource: 'Optical & SAR Observation + Topographic DEM Layer',
      rainfallTrend: 'Moderate tributary inflow (Illustrative)',
      soilSaturation: 'Floodplain retention capacity narrowing',
      exposedAssets: 'Riparian settlements & regional transport links',
      timeline: [
        {
          time: 'T - 96h (Sample)',
          event: 'Seasonal River Level Baseline Shift',
          detail: 'Hydrological profile enters high-water seasonal monitoring window.',
          status: 'Observed',
        },
        {
          time: 'T - 48h (Sample)',
          event: 'Topographic Low-Zone Correlation',
          detail: 'DEM elevation overlay highlights 4 low-lying drainage corridors.',
          status: 'Analyzed',
        },
        {
          time: 'T - 18h (Sample)',
          event: 'Community Field Observation Logged',
          detail: 'Local observers report bankfull conditions along secondary channel.',
          status: 'Verified Signal',
        },
        {
          time: 'Current (Sample)',
          event: 'Preparedness Review Triggered',
          detail: 'Recommended review of regional response staging and drainage readiness.',
          status: 'Monitoring',
        },
      ],
    },
    {
      id: 'sample-district-c',
      selectedRegion: 'Sample Coastal Corridor',
      coordinates: '04°49′N 007°02′E (Illustrative)',
      monitoringLayer: 'Flood Exposure',
      environmentalStatus: 'Monitoring',
      riskIndicator: 'Moderate',
      lastObservation: 'Sample timestamp • 09:10 UTC',
      dataSource: 'Coastal Tide Context + Meteorological Rainfall Layer',
      rainfallTrend: 'Coastal squall band approaching (Illustrative)',
      soilSaturation: 'Moderate estuarine drainage impedance',
      exposedAssets: 'Estuarine logistics routes & utility substations',
      timeline: [
        {
          time: 'T - 60h (Sample)',
          event: 'Meteorological Band Tracked',
          detail: 'Regional weather feed indicates multi-day coastal rainfall cells.',
          status: 'Observed',
        },
        {
          time: 'T - 24h (Sample)',
          event: 'Estuarine Drainage Analysis',
          detail: 'High tidal cycle coincides with projected urban runoff window.',
          status: 'Analyzed',
        },
        {
          time: 'Current (Sample)',
          event: 'Routine Watch Status Active',
          detail: 'Continued monitoring of urban stormwater discharge points.',
          status: 'Monitoring',
        },
      ],
    },
  ],
};

export const problemContent = {
  eyebrow: 'THE CHALLENGE',
  headline: "Environmental Risks Don't Wait for Organizations to Catch Up.",
  description:
    'Threats develop rapidly across broad regions while environmental information remains fragmented and delayed. By the time danger is apparent, the window to act has narrowed.',
  cards: [
    {
      number: '01',
      title: 'Risks Become Visible Too Late',
      description:
        'Communities and organizations may only recognize the severity of an environmental threat after it has begun affecting people, property and infrastructure.',
      icon: 'ClockAlert',
      contextTag: 'Delayed Situational Awareness',
    },
    {
      number: '02',
      title: 'Environmental Data Is Fragmented',
      description:
        'Weather observations, satellite imagery, geographic information and local reports often exist in separate systems, making it difficult to form a complete picture.',
      icon: 'Layers',
      contextTag: 'Disconnected Data Silos',
    },
    {
      number: '03',
      title: 'Preparedness Is Difficult to Coordinate',
      description:
        'Decision-makers need to understand which areas may be exposed, what resources could be affected and where attention should be directed first.',
      icon: 'Compass',
      contextTag: 'Unclear Priority Zones',
    },
    {
      number: '04',
      title: 'Historical Risk Information Gets Lost',
      description:
        'Without organized historical records, it becomes harder to understand recurring environmental patterns and improve future preparedness.',
      icon: 'History',
      contextTag: 'Institutional Memory Gap',
    },
  ],
  closingStatement:
    "The challenge isn't simply a lack of environmental data. It's the difficulty of turning that data into timely, location-specific intelligence.",
};

export const howItWorksContent = {
  eyebrow: 'THE TERRAPULSE PLATFORM',
  headline: 'From Environmental Data to Decisions That Matter.',
  description:
    'TerraPulse unifies environmental sources into one intelligence platform to monitor conditions, assess exposure, and drive coordinated action.',
  steps: [
    {
      number: '01',
      title: 'Collect Environmental Data',
      description:
        'Bring together relevant satellite imagery, weather information, geographic datasets and verified local observations.',
      inputs: ['Satellite EO / SAR', 'Weather Systems', 'Geographic DEMs', 'Local Observations'],
    },
    {
      number: '02',
      title: 'Analyze Environmental Conditions',
      description:
        'Use geospatial analysis and AI-assisted processing to identify patterns, changing conditions and areas that may require attention.',
      inputs: ['Geospatial Processing', 'Change Detection', 'Hydrological Context', 'Pattern Synthesis'],
    },
    {
      number: '03',
      title: 'Understand Potential Exposure',
      description:
        'Translate environmental signals into location-specific risk assessments, helping decision-makers understand which areas may be vulnerable.',
      inputs: ['Flood Exposure Zones', 'Infrastructure Overlay', 'Community Context', 'Uncertainty Notes'],
    },
    {
      number: '04',
      title: 'Prepare and Respond',
      description:
        'Provide relevant information to support preparedness planning, resource allocation and coordinated response activities.',
      inputs: ['Priority Area Review', 'Threshold Alerts', 'Briefing Exports', 'Decision Support'],
    },
  ],
  tabs: [
    {
      id: 'environmental-map',
      label: 'Environmental Map',
      shortDesc: 'Explore monitored regions and geographic layers.',
      headline: 'Multi-Layer Geospatial Situation View',
      details:
        'Combine satellite water observations, terrain elevation contours, drainage networks and administrative boundaries in a single interactive map workspace.',
      keyPoints: [
        'Toggle flood exposure zones, river network buffers and topographic elevation layers.',
        'Inspect specific districts, watersheds and critical corridors without switching tools.',
        'Clearly distinguish verified observations from modeled exposure zones.',
      ],
      mockMetadata: {
        region: 'Sample River Basin — Sector 04',
        activeLayers: 'Flood Exposure + SAR Water Mask + Elevation Contours',
        status: 'Monitoring (Illustrative)',
      },
    },
    {
      id: 'risk-assessment',
      label: 'Risk Assessment',
      shortDesc: 'Examine potential exposure and contributing environmental factors.',
      headline: 'Location-Specific Exposure & Contributing Factors',
      details:
        'Understand why an area is flagged for attention by reviewing the underlying environmental signals—such as sustained upstream rainfall, terrain low-points and proximity to active channels.',
      keyPoints: [
        'Break down contributing environmental indicators alongside source timestamps.',
        'Identify potentially exposed roads, health facilities, utilities and settlements.',
        'Surface data completeness and uncertainty notes to support informed human judgment.',
      ],
      mockMetadata: {
        region: 'Sample District — Ward B & C',
        activeLayers: 'Exposure Assessment + Critical Infrastructure Context',
        status: 'Elevated Exposure Signal (Illustrative)',
      },
    },
    {
      id: 'monitoring-timeline',
      label: 'Monitoring Timeline',
      shortDesc: 'Review changes in environmental conditions.',
      headline: 'Chronological Environmental Signal Tracking',
      details:
        'Follow how environmental conditions evolve across days or weeks—connecting meteorological events, satellite observation passes and local field reports along a unified timeline.',
      keyPoints: [
        'Compare pre-event baseline conditions with recent satellite and weather observations.',
        'Review chronological logs of rainfall anomalies, water extent changes and field updates.',
        'Support post-event analysis by preserving an organized record of observations.',
      ],
      mockMetadata: {
        region: 'Sample Floodplain Corridor',
        activeLayers: '14-Day Observation Sequence (Illustrative)',
        status: 'Sequential Comparison Active',
      },
    },
    {
      id: 'response-overview',
      label: 'Response Overview',
      shortDesc: 'Organize affected locations and preparedness priorities.',
      headline: 'Preparedness Prioritization & Operational Coordination',
      details:
        'Help emergency managers, government authorities and operational teams organize monitored locations by exposure level and review preparedness priorities.',
      keyPoints: [
        'Group monitored districts and infrastructure corridors requiring closer inspection.',
        'Share structured situation summaries across agencies and field teams.',
        'Support human decision-makers with clear review checklists and escalation workflows.',
      ],
      mockMetadata: {
        region: 'Multi-District Pilot Area (Illustrative)',
        activeLayers: 'Preparedness Priority Queue + Agency Briefing View',
        status: 'Decision Support Mode',
      },
    },
  ],
};

export const featuresContent = {
  eyebrow: 'WHAT THE PLATFORM DOES',
  headline: 'A Clearer Picture of Environmental Risk.',
  description:
    'Combining geospatial intelligence, satellite monitoring, and AI-assisted analysis into a unified risk platform.',
  features: [
    {
      id: '01',
      title: 'Geospatial Risk Intelligence',
      subtitle: 'Understand how environmental threats may affect specific locations.',
      bullets: [
        'Geographic exposure mapping.',
        'Location-based risk assessments.',
        'Environmental vulnerability layers.',
        'Area-level monitoring.',
      ],
      visualType: 'geospatial-grid',
      layerBadge: 'LAYER: GEO-RISK-01',
    },
    {
      id: '02',
      title: 'Satellite & Earth Observation',
      subtitle: 'Use satellite-derived information to observe changes across geographic areas.',
      bullets: [
        'Satellite imagery integration.',
        'Land and water observation.',
        'Environmental change detection.',
        'Geographic comparison over time.',
      ],
      visualType: 'satellite-sar',
      layerBadge: 'LAYER: EO-SAR-02',
    },
    {
      id: '03',
      title: 'Flood Monitoring & Early Signals',
      subtitle: 'Help organizations monitor conditions associated with possible flooding.',
      bullets: [
        'Rainfall and weather data integration.',
        'Water-related environmental indicators.',
        'Potential flood exposure assessments.',
        'Monitoring alerts based on available evidence.',
      ],
      visualType: 'flood-signals',
      layerBadge: 'LAYER: HYDRO-03',
    },
    {
      id: '04',
      title: 'Climate Risk Assessment',
      subtitle: 'Bring environmental threats into the context of people, infrastructure and critical locations.',
      bullets: [
        'Infrastructure exposure analysis.',
        'Community vulnerability information.',
        'Geographic risk comparisons.',
        'Location-specific reporting.',
      ],
      visualType: 'infrastructure-context',
      layerBadge: 'LAYER: ASSET-CTX-04',
    },
    {
      id: '05',
      title: 'Intelligent Alerts & Notifications',
      subtitle: 'Bring relevant changes to the attention of organizations that need to act.',
      bullets: [
        'Configurable monitoring thresholds.',
        'Location-specific notifications.',
        'Escalation workflows.',
        'Alert history and review.',
      ],
      visualType: 'alerts-workflow',
      layerBadge: 'LAYER: THRESHOLD-05',
    },
    {
      id: '06',
      title: 'Environmental History & Insights',
      subtitle: 'Understand how environmental conditions change over time.',
      bullets: [
        'Historical environmental records.',
        'Recurring risk identification.',
        'Geographic trend analysis.',
        'Downloadable reports.',
      ],
      visualType: 'historical-trends',
      layerBadge: 'LAYER: ARCHIVE-06',
    },
  ],
};

export const intelligenceLoopContent = {
  eyebrow: 'THE INTELLIGENCE LOOP',
  headline: 'Every Observation Makes the Picture Clearer.',
  description:
    'A continuous cycle: collect environmental data, analyze spatial patterns, assess local exposure, and review actual field outcomes.',
  cycleNodes: [
    {
      step: '01',
      action: 'Observe',
      layer: 'Environmental Data',
      function: 'Collect satellite, weather, geographic and local observation data.',
      detail:
        'Ingests multi-source environmental inputs including earth observation passes, meteorological feeds, terrain elevation models and verified field reports.',
    },
    {
      step: '02',
      action: 'Analyze',
      layer: 'Intelligence Engine',
      function: 'Analyze patterns, identify changes and combine relevant contextual information.',
      detail:
        'Processes spatial and temporal signals to detect surface water expansion, rainfall accumulation anomalies and terrain drainage constraints.',
    },
    {
      step: '03',
      action: 'Assess',
      layer: 'Risk Intelligence',
      function: 'Translate findings into location-specific assessments and monitoring priorities.',
      detail:
        'Maps environmental conditions against communities, roads and critical infrastructure to highlight areas requiring closer preparedness review.',
    },
    {
      step: '04',
      action: 'Learn',
      layer: 'Feedback & Learning',
      function: 'Compare assessments with observed outcomes to improve future analysis.',
      detail:
        'Structured review of field outcomes and verified event records helps teams refine thresholds, calibrate regional assumptions and strengthen future assessments.',
    },
  ],
  credibilityNote:
    'Architectural Note: The Feedback & Learning stage represents a structured methodology for comparing platform assessments with verified field outcomes over time—not an autonomous or unvalidated predictive claim.',
};

export const audienceContent = {
  eyebrow: 'BUILT FOR THOSE PROTECTING WHAT MATTERS',
  headline: 'Environmental Intelligence for Real-World Decisions.',
  initialMarketFocus: {
    badge: 'INITIAL MARKET FOCUS: NIGERIA & FLOOD PREPAREDNESS',
    title: 'Starting With Focused Flood-Risk Monitoring in Nigeria',
    description:
      'Rather than claiming to predict every natural disaster everywhere, TerraPulse begins with a clear, high-impact focus: helping organizations in Nigeria identify and monitor flood exposure across river basins, coastal zones and urban watersheds before and during high-risk periods.',
    pilotGoals: [
      { area: 'Geographic coverage', question: 'How much of the pilot area can be reliably monitored?' },
      { area: 'Data reliability', question: 'How complete and dependable are the input datasets?' },
      { area: 'Assessment quality', question: 'How well do assessments align with verified observations?' },
      { area: 'Warning usefulness', question: 'Do alerts arrive early enough to support decisions?' },
      { area: 'Operational adoption', question: 'Do participating organizations actually use the information?' },
      { area: 'Decision support', question: 'Does the platform improve how teams prioritize preparedness activities?' },
    ],
  },
  cards: [
    {
      title: 'Government & Public Agencies',
      description:
        'Support environmental monitoring, preparedness planning and geographic risk assessment.',
      useCaseExample: 'State & local emergency preparedness across flood-prone LGA corridors.',
      icon: 'Landmark',
    },
    {
      title: 'Humanitarian Organizations',
      description:
        'Understand potential exposure and support the prioritization of relief and preparedness activities.',
      useCaseExample: 'Pre-positioning relief supplies and identifying vulnerable riverine communities.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Infrastructure Operators',
      description:
        'Assess environmental exposure around critical infrastructure and operational locations.',
      useCaseExample: 'Monitoring flood exposure along transport corridors, substations and telecom sites.',
      icon: 'Network',
    },
    {
      title: 'Insurance & Risk Teams',
      description:
        'Explore location-specific environmental risk information to support risk assessment workflows.',
      useCaseExample: 'Evaluating geographic flood exposure and historical environmental patterns.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Research Institutions',
      description:
        'Access organized environmental information for analysis and research.',
      useCaseExample: 'Studying watershed hydrology, land-use change and recurring climate patterns.',
      icon: 'Microscope',
    },
    {
      title: 'Urban Planning Teams',
      description:
        'Consider environmental exposure when planning communities and infrastructure.',
      useCaseExample: 'Incorporating floodplain boundaries and drainage corridors into master plans.',
      icon: 'Building2',
    },
  ],
};

export const futureVisionContent = {
  eyebrow: 'THE LONG-TERM VISION',
  headline: 'From Monitoring Individual Events to Understanding Environmental Patterns.',
  description:
    'Evolving into a comprehensive environmental layer that tracks how climate risks shift across landscapes and seasons.',
  roadmapNotice:
    'Long-Term Capability Roadmap — TerraPulse launches with flood-risk intelligence first and expands into broader environmental layers as datasets and validation mature.',
  layers: [
    {
      id: '01',
      title: 'Environmental Risk Mapping',
      stage: 'Foundational Layer (Initial Focus)',
      description:
        'Build increasingly detailed geographic representations of environmental exposure.',
      mapIndicator: 'Basin-wide flood exposure & topographic drainage indices',
      accentColor: '#55D3BD',
      overlayZones: [
        { cx: 48, cy: 56, r: 18, label: 'Lower Floodplain Exposure Zone' },
        { cx: 64, cy: 40, r: 14, label: 'Confluence Tributary Basin' },
      ],
    },
    {
      id: '02',
      title: 'Infrastructure Vulnerability Intelligence',
      stage: 'Expanding Capability',
      description:
        'Help organizations understand how environmental threats intersect with roads, bridges, buildings and essential services.',
      mapIndicator: 'Primary highway corridors, bridges, grid substations & healthcare nodes',
      accentColor: '#3978E8',
      overlayZones: [
        { cx: 52, cy: 52, r: 12, label: 'Arterial Bridge & Corridor Intersection' },
        { cx: 35, cy: 65, r: 10, label: 'Coastal Substation & Logistics Hub' },
      ],
    },
    {
      id: '03',
      title: 'Regional Climate Patterns',
      stage: 'Long-Term Intelligence Layer',
      description:
        'Identify recurring environmental conditions and changes across monitored regions.',
      mapIndicator: 'Multi-year seasonal precipitation shifts & watershed retention anomalies',
      accentColor: '#55D3BD',
      overlayZones: [
        { cx: 58, cy: 36, r: 22, label: 'Recurring Seasonal Anomaly Belt' },
        { cx: 42, cy: 60, r: 16, label: 'Multi-Year Floodplain Shift' },
      ],
    },
    {
      id: '04',
      title: 'Preparedness Planning Intelligence',
      stage: 'Long-Term Intelligence Layer',
      description:
        'Support scenario analysis and help organizations evaluate preparedness priorities.',
      mapIndicator: 'Scenario modeling for drainage capacity & emergency staging routes',
      accentColor: '#3978E8',
      overlayZones: [
        { cx: 46, cy: 50, r: 15, label: 'Priority Preparedness Staging Sector' },
        { cx: 67, cy: 45, r: 13, label: 'Evacuation & Relief Access Corridor' },
      ],
    },
    {
      id: '05',
      title: 'Multi-Hazard Intelligence',
      stage: 'Future Horizon',
      description:
        'Expand beyond flood monitoring into other relevant environmental threats, such as coastal erosion, extreme heat and drought.',
      mapIndicator: 'Coastal shoreline retreat, dry-spell moisture deficits & urban thermal stress',
      accentColor: '#F59E0B',
      overlayZones: [
        { cx: 30, cy: 74, r: 14, label: 'Coastal Erosion Monitoring Littoral' },
        { cx: 70, cy: 26, r: 19, label: 'Semi-Arid Drought & Moisture Stress Zone' },
      ],
    },
  ],
};

export const trustContent = {
  eyebrow: 'TRUST IS PART OF THE PRODUCT',
  headline: 'Climate Intelligence Must Be Dependable.',
  description:
    'Because environmental threats affect human lives and critical infrastructure, TerraPulse communicates uncertainty clearly to support responsible human decisions.',
  principles: [
    {
      title: 'Evidence-Based Analysis',
      description:
        'Risk assessments should be traceable to their underlying data sources and analytical methods.',
      icon: 'FileSearch',
    },
    {
      title: 'Transparent Uncertainty',
      description:
        'Environmental observations and model estimates should not be presented as absolute certainty.',
      icon: 'AlertCircle',
    },
    {
      title: 'Human Decision-Making',
      description:
        'TerraPulse supports decision-makers; it does not independently authorize evacuations or replace emergency management professionals.',
      icon: 'Users',
    },
    {
      title: 'Responsible Data Practices',
      description:
        'Protect sensitive location information, control access to operational data and handle community observations responsibly.',
      icon: 'Lock',
    },
  ],
  sampleAssessmentPanel: {
    headerLabel: 'SAMPLE RISK ASSESSMENT PANEL (ILLUSTRATIVE)',
    assessmentStatus: 'Elevated Flood Exposure — Priority Review',
    observationTimestamp: 'Sample timestamp • 2026-10-14 14:30 UTC (Illustrative)',
    dataSources: [
      'Synthetic Aperture Radar (SAR) Water Extent Pass (Sample)',
      'Regional Meteorological Rainfall Accumulation Feed (Sample)',
      'Digital Elevation Model (DEM) Topographic Drainage Layer',
      'Local Hydrological Gauge & Field Observation Log (Unverified / Pending)',
    ],
    uncertaintyIndicator:
      'Validation Pending — Cloud cover limits optical verification in Sector North; SAR backscatter indicates surface moisture expansion, but local gauge confirmation is required before operational escalation.',
    geographicAreaCovered: 'Sample Riverine District — Sectors B2 & B4 (Approx. 145 km² illustrative boundary)',
    recommendedNextReview: 'Within 6 hours or following next scheduled satellite/gauge update (Human review required)',
  },
};

export const faqContent = [
  {
    question: 'What is TerraPulse?',
    answer:
      'TerraPulse is an AI-powered climate intelligence platform that helps organizations understand environmental conditions, monitor potential risks and make better-informed preparedness decisions.',
  },
  {
    question: 'What environmental risks does TerraPulse monitor?',
    answer:
      'The initial product direction focuses on flood-risk monitoring. The longer-term platform may expand to other environmental threats, including drought, extreme heat and coastal erosion.',
  },
  {
    question: 'How does TerraPulse work?',
    answer:
      'It combines relevant satellite imagery, weather information, geographic datasets and local observations, then uses geospatial analysis and AI-assisted processing to generate environmental insights.',
  },
  {
    question: 'Does TerraPulse predict natural disasters?',
    answer:
      'TerraPulse aims to support risk assessment and early awareness. Its assessments depend on available data and validated analytical capabilities. It should not be presented as guaranteeing disaster prediction.',
  },
  {
    question: 'Who can use TerraPulse?',
    answer:
      'Government agencies, humanitarian organizations, infrastructure operators, insurance teams, researchers and other organizations working with environmental risk.',
  },
  {
    question: 'Does TerraPulse replace emergency response teams?',
    answer:
      'No. It is designed to support professionals with better environmental information, not replace their judgment or operational authority.',
  },
  {
    question: 'Can organizations request a pilot programme?',
    answer:
      'Yes. Interested organizations can submit their details through the early access form.',
  },
];

export const teamContent = {
  eyebrow: 'LEADERSHIP & EXPERTISE',
  headline: 'Built by Specialists in Climate Science & Geospatial Intelligence.',
  description:
    'Our multidisciplinary team combines satellite remote sensing, hydrological modeling, and disaster risk reduction to deliver dependable climate intelligence.',
  members: [
    {
      id: 'amina-bello',
      name: 'Dr. Amina Bello',
      role: 'Head of Remote Sensing & Climate Science',
      bio: 'Over 14 years specializing in Synthetic Aperture Radar (SAR) and multispectral Earth observation across West African river basins.',
      location: 'Abuja, Nigeria',
      imageKey: 'team_amina_bello',
    },
    {
      id: 'chukwuma-eze',
      name: 'Chukwuma Eze',
      role: 'Lead Geospatial Systems Engineer',
      bio: 'Expert in hydrological modeling, automated GIS pipeline development, and spatial risk indices for large-scale watershed systems.',
      location: 'Lagos, Nigeria',
      imageKey: 'team_chukwuma_eze',
    },
    {
      id: 'zainab-ibrahim',
      name: 'Zainab Ibrahim',
      role: 'Disaster Risk & Operational Strategy Lead',
      bio: 'Former humanitarian disaster preparedness advisor working closely with state emergency agencies on early warning frameworks.',
      location: 'Kaduna, Nigeria',
      imageKey: 'team_zainab_ibrahim',
    },
    {
      id: 'damilola-adebayo',
      name: 'Damilola Adebayo',
      role: 'AI & Satellite Data Engineering Lead',
      bio: 'Specialist in high-throughput satellite imagery processing, neural change detection algorithms, and cloud geospatial data lakes.',
      location: 'Ibadan, Nigeria',
      imageKey: 'team_damilola_adebayo',
    },
    {
      id: 'halima-yusuf',
      name: 'Halima Yusuf',
      role: 'Environmental Policy & Institutional Partnerships',
      bio: 'Liaises with public sector ministries, regional river basin authorities, and multilateral resilience development programs.',
      location: 'Kano, Nigeria',
      imageKey: 'team_halima_yusuf',
    },
    {
      id: 'emeka-nnamdi',
      name: 'Emeka Nnamdi',
      role: 'Field Hydrology & Sensor Systems Engineer',
      bio: 'Directs river stage telemetry gauge deployment and ground-truth validation across vulnerable tributary monitoring stations.',
      location: 'Port Harcourt, Nigeria',
      imageKey: 'team_emeka_nnamdi',
    },
  ],
};

export const testimonialsContent = {
  eyebrow: 'PILOT STAKEHOLDER PERSPECTIVES',
  headline: 'What Operational Leaders Say About Early Climate Intelligence.',
  description:
    'Perspectives from Nigerian disaster management advisors, infrastructure directors, and hydrological researchers evaluating early flood awareness.',
  disclaimer:
    'Institutional advisory perspectives gathered during pilot design and environmental risk assessment workshops in Nigeria.',
  testimonials: [
    {
      id: 'tunde-adeyemi',
      quote:
        'When seasonal waters rise in the lower basin, we previously relied on fragmented reports after communities were already cut off. TerraPulse provides the unified spatial clarity emergency directors need to stage resources ahead of time.',
      name: 'Engr. Tunde Adeyemi',
      role: 'State Emergency Preparedness Advisor',
      organization: 'Emergency Operations Coordination Unit (Nigeria)',
      imageKey: 'testimonial_tunde_adeyemi',
    },
    {
      id: 'ngozi-okonkwo',
      quote:
        'Understanding exactly where road culverts and substation perimeters intersect with expanding floodplains transforms how we protect public infrastructure. The focus on verifiable radar passes is crucial.',
      name: 'Ngozi Okonkwo, FNSE',
      role: 'Director of Resilient Infrastructure',
      organization: 'Regional Transport & Utility Assets Council',
      imageKey: 'testimonial_ngozi_okonkwo',
    },
    {
      id: 'farouk-umar',
      quote:
        'The continuous intelligence loop—comparing satellite radar observations with field gauge logs—creates an audit trail that helps research and river basin teams calibrate hydrological thresholds responsibly.',
      name: 'Dr. Farouk Umar',
      role: 'Lead Hydrological Researcher',
      organization: 'Watershed & Basin Hydrology Group',
      imageKey: 'testimonial_farouk_umar',
    },
  ],
};


