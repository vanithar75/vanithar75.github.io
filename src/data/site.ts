export const site = {
  name: 'Vanitha Ramaswami',
  title: 'Vanitha Ramaswami — Technology Strategist & AI Practitioner',
  description:
    'Passionate technologist bridging business and technology strategy. Edge-to-cloud architecture, enterprise AI governance, and strategic technology leadership on the path to CTO.',
  url: 'https://vanithar75.github.io',
  linkedin: 'https://www.linkedin.com/in/vanithar75/',
  github: 'https://github.com/vanithar75',
  email: '[your-email@example.com]', // TODO: Replace with your preferred contact email
  location: 'Singapore',
} as const;

export const hero = {
  headline: 'Bridging business ambition with technology that scales.',
  tagline:
    'Passionate technologist · AI practitioner · Strategic architect on the path to CTO',
  summary:
    'I translate complex edge-to-cloud, telco, and enterprise AI challenges into clear strategy and executable roadmaps—grounded in governance, sovereignty, and real-world delivery across APAC.',
} as const;

export const about = {
  paragraphs: [
    'I am a cross-functional technology leader with more than seventeen years spanning embedded firmware, satellite and telecommunications systems, cloud architecture, and AI-native practice. My work sits at the intersection of engineering depth and executive clarity: helping organizations decide what to build, how to govern it, and how to deliver it responsibly at scale.',
    'From early embedded systems and product development through enterprise solution design and cloud-native platforms, I have led teams through RFP cycles, customer workshops, and greenfield product launches. Today I focus on AI governance, sovereign and edge-to-cloud architecture, and the repeatable agent workflows that turn vibe coding into consulting-grade outcomes.',
    'I write and speak on public safety infrastructure, workload predictability, and the operational choices behind sovereign cloud and private 5G—translating technical trade-offs for leaders who must balance resilience, compliance, and speed.',
  ],
} as const;

export const focusAreas = [
  {
    title: 'AI-Native Practice',
    description:
      'Designing repeatable Cursor and agent workflows that produce defensible artifacts—not demo apps. Standards-aware delivery aligned to NIST AI RMF, EU AI Act, and ISO 42001.',
  },
  {
    title: 'Enterprise AI Governance',
    description:
      'Assessment frameworks, tier classification, and exportable reports that help CISOs and architects move from policy to operational guardrails.',
  },
  {
    title: 'Edge-to-Cloud Architecture',
    description:
      'Unified strategy across embedded, cellular, IoT, Kubernetes, and cloud—connecting field operations to centralized intelligence without sacrificing sovereignty or latency.',
  },
  {
    title: 'Strategic Technology Leadership',
    description:
      'Bridging business stakeholders and engineering teams through clear roadmaps, situational awareness, and people-first leadership that elevates both projects and practitioners.',
  },
  {
    title: 'Telco & Cloud Convergence',
    description:
      'Private 5G, SDN, and hybrid infrastructure decisions for enterprises navigating workload predictability, critical infrastructure, and regional sovereignty requirements.',
  },
  {
    title: 'Public Safety & Critical Infrastructure',
    description:
      'Thought leadership on CAD, incident management, control-room operations, and data-driven resilience for police, fire, and emergency services ecosystems.',
  },
] as const;

/** Verified from public LinkedIn profile and recommendations. Dates marked [verify] need user confirmation. */
export const experience = [
  {
    role: 'Manager',
    company: 'Singtel',
    period: '[Dates to confirm]',
    location: 'Singapore',
    highlights: [
      'Cross-functional development leadership in telecommunications and enterprise technology.',
      'Current role per public LinkedIn profile—update dates and scope as appropriate.',
    ],
    verified: true,
  },
  {
    role: 'Principal Engineer & Technical Manager',
    company: 'ST Engineering',
    period: '[Dates to confirm]',
    location: 'Singapore',
    highlights: [
      'Led enterprise solution design, technical solution architecture, and customer engagements.',
      'Developed team members through RFP/RFI processes, cross-team negotiations, and customer workshops.',
      'Recognized for situational awareness, emotional intelligence, and translating complex ideas for diverse audiences.',
    ],
    verified: true,
  },
  {
    role: 'Technology Thought Leadership',
    company: 'Motorola Solutions (EMEA)',
    period: '[Contributor — dates to confirm]',
    location: 'EMEA',
    highlights: [
      'Published articles on public safety systems evolution, incident management, and infrastructure decision-making.',
      'Topics include sovereign cloud, private 5G, workload predictability, and data-driven operational efficiency.',
    ],
    verified: true,
  },
  {
    role: 'Embedded & Firmware Engineering',
    company: 'ST Electronics / Agilis Communications',
    period: 'Early career [Dates to confirm]',
    location: 'Singapore',
    highlights: [
      'Custom board bring-up, eCos/RedBoot, and Ethernet driver development on IXP425 platforms.',
      'Foundation in satellite communications, firmware, and telecommunications product development.',
    ],
    verified: true,
  },
] as const;

export const certifications = [
  'AWS Certified Solutions Architect – Professional',
  'AWS Certified Machine Learning – Specialty',
  'AWS Certified Solutions Architect – Associate',
  'AWS Certified Developer – Associate',
  'Certified Kubernetes Application Developer (CKAD)',
  'Generative AI Explorer – Vertex AI (Google)',
  'OCSA – ONF Certified SDN Associate',
  'Professional Scrum Master I (PSM I)',
] as const;

export const projects = [
  {
    name: 'AI Governance Assessor',
    description:
      'Standards-aware assessment tooling for enterprise AI governance—agent-guided intake, tier classification, and exportable reports aligned to NIST AI RMF, EU AI Act, and ISO 42001.',
    url: 'https://github.com/vanithar75/ai-governance-assessor',
    tags: ['AI Governance', 'Next.js', 'Standards Mapping'],
  },
  {
    name: 'VibeCoding Planner Hub',
    description:
      'Operating system for AI-native vibe coding projects—charters, decision logs, Cursor rules/skills, and a ten-project roadmap for governance-first, edge-to-cloud portfolio delivery.',
    url: 'https://github.com/vanithar75', // TODO: Link repo when published
    tags: ['Cursor', 'Methodology', 'Portfolio OS'],
    note: 'Repository link pending publication—update when pushed to GitHub.',
  },
] as const;

export const writing = {
  intro:
    'Long-form thought leadership on enterprise safety, infrastructure strategy, and AI-ready operations. A dedicated blog section is coming soon.',
  articles: [
    {
      title: 'The Evolution of Public Safety Systems from Voice-Centric to Data-Driven',
      publisher: 'Motorola Solutions',
      url: 'https://blog.motorolasolutions.com/en_xu/',
    },
    {
      title: 'Incident Management Systems: From siloed to shared',
      publisher: 'Motorola Solutions',
      url: 'https://blog.motorolasolutions.com/en_xu/',
    },
    {
      title: 'Workload Predictability: The Key to Your Infrastructure Decision Making',
      publisher: 'Motorola Solutions',
      url: 'https://blog.motorolasolutions.com/en_xu/vanitha-ramaswami/',
    },
  ],
} as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
] as const;
