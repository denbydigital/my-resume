/* portfolio-data.js — Laura Denby's product evidence, reverse-chronological. */
var PROJECTS = [
  {
    title: 'FashionBiz B2B Portal Integration',
    logo: 'assets/fashion-biz-logo.jpg',
    tags: ['integration', 'dynamics365', 'ecommerce', 'AI'],
    blurb: 'Full integration between a customer-facing B2B ecommerce portal and Microsoft Business Central, via BizCoLab / BCIP middleware.',
    detail: [
      'Mapped end-to-end integration flows for order management, payments, product sync and supplier workflows, as Mermaid sequence diagrams, state diagrams and happy / unhappy path flowcharts.',
      'Produced structured epic &amp; feature tables for both the B2B Ecommerce and B2B Supplier platforms.',
      'Developed a layered testing readiness model (L0 / L1 / L2) and structured test-approach documentation.',
      'Managed client &amp; internal comms across JWT auth, Azure AD provisioning, S3 image storage, live chat and historical data migration.',
      'Used Claude + MCP integrations (Azure DevOps, Microsoft 365, Figma) to accelerate artefact production and consolidate requirements from meeting transcripts.'
    ]
  },
  {
    title: 'Lite \'N Easy',
    logo: 'assets/lite-n-easy-logo.png',
    tags: ['ecommerce', 'UI', 'design'],
    blurb: 'Short engagement gathering and documenting design requirements for a website UI uplift, coordinating across multiple vendors.',
    detail: [
      'Worked directly with the client to gather and document design requirements for a full look-and-feel refresh of their website.',
      'Coordinated across 3–4 vendors simultaneously, keeping requirements aligned and communication clear throughout.',
      'Produced structured design documentation to support a smooth handoff and consistent build across vendor teams.'
    ]
  },
  {
    title: 'Queensland Law Society',
    logo: 'assets/qlss-logo.png',
    tags: ['legal', 'portal', 'dynamics365'],
    blurb: 'Custom-built customer portal integrated with Microsoft Dynamics 365 CE — from wireframes to go-live.',
    detail: [
      'Wireframed the customer portal and ran discovery and requirements workshops with QLS stakeholders.',
      'Led the scrum team through the full delivery lifecycle, validating requirements with the customer at each stage and managing scope and prioritisation throughout.',
      'Saw the product through to go-live, coordinating stakeholder sign-off and managing delivery risk.',
      'Collaborated with the MD365 CE team on integration design; led API sessions and gathered requirements for data flowing from the portal back into Dynamics 365 CE.'
    ]
  },
  {
    title: 'SHK AI',
    logo: 'assets/shk-logo.jpg',
    tags: ['AI', 'recruitment'],
    blurb: 'An LLM platform for pitching candidates, generating proposals, cover letters, resumes and candidate reports.',
    detail: [
      'Gathered as-is requirements and unpacked them into a to-be way of working using Agile / Scrum.',
      'Ran requirements &amp; design workshops; created mock-ups and wireframes in Figma.',
      'Ran all scrum ceremonies and managed development-team escalations and blockers.',
      'QA tested in staging and facilitated UAT workshops and observations before production.'
    ],
    featuresTitle: 'What the product does',
    features: ['Interview questions from a PD', 'Cover letters from CV + PD', 'Candidate reports', 'Position proposals', 'Long-list candidate ranking', 'Outputs saved to SharePoint']
  },
  {
    title: 'Houdini',
    tags: ['AI', 'websitebuilder', 'marketing'],
    blurb: "XAM's own product, billed as the world's first website creation platform built from the ground up for AI.",
    detail: [
      'Managed the project alongside the Product Owner (CEO of XAM) to define what the product should be and achieve.',
      'Worked with the software team on AI best practices: co-pilot methodology and AI-first UX / UI.',
      'Documented requirements on the internal PM system and ran delivery out of DevOps using Scrum.',
      'Supported a successful public launch in 2024.'
    ]
  },
  {
    title: 'Clear Horizon',
    logo: 'assets/clear-horizon-logo.jpeg',
    tags: ['philanthropy'],
    blurb: 'A short engagement to build out a charity’s project ways of working and hand them a clean delivery setup.',
    detail: [
      'Set up Jira and translated an already-designed product and its business rules into user stories with acceptance criteria and designs.',
      'Created handover documentation including process maps, requirements matrices and API docs in Confluence.',
      'Ran workshops teaching Scrum ways of working and facilitated ceremonies during the engagement.',
      'Ensured a smooth transition, handing over cleanly to the Director.'
    ]
  },
  {
    title: ‘G’day Parks Mobile App’,
    logo: ‘assets/gday-logo.png’,
    tags: [‘retail’, ‘hospitality’, ‘travel’],
    blurb: 'Senior BA &amp; Scrum Master on a co-delivery team rebuilding the G’day Parks mobile app into Flutter.',
    detail: [
      'Hosted discovery workshops with stakeholder focus groups across a 4-week discovery, 12-week build and 2–3 week handover.',
      'Prepped, planned and facilitated all scrum ceremonies.',
      'Built traceability matrices and reusable templates; kept user stories transparent and re-usable.',
      'Created project plans with delivery dashboards, burn-down / up and Gantt charts.',
      'Handled APIs and ensured thorough testing through Stoplight → Swagger → app.'
    ]
  },
  {
    title: 'Anca AutoMarkX',
    logo: 'assets/anca-logo.jpg',
    tags: ['manufacturing'],
    blurb: 'Guided a dev team delivering AMX, a WPF application driving Anca’s laser tool-marking machine.',
    detail: [
      'Gathered requirements for how the robot and laser machine should coordinate with other products.',
      'Supported alignment between hardware and software so tools can be marked from all angles.',
      'Acted as Scrum Master, providing facilitation and guidance to the team.',
      'Upgraded the application’s UI / UX, kept consistent with existing Anca products, and assisted with QA.'
    ]
  },
  {
    title: 'DrTalk',
    logo: 'assets/drtalk-logo.png',
    tags: ['healthcare'],
    blurb: 'A HIPAA-compliant communication platform for dental offices: WPF desktop, iOS, Android and a web admin portal.',
    detail: [
      'Gathered and unpacked requirements from the PO and customers; wrote small, sized user stories with AC, business rules and error handling.',
      'Facilitated prioritisation, grooming, stand-ups, reviews and retros; managed DevOps and documented in Confluence.',
      'Agreed Definition of Ready / Done with the PO and signed off tickets alongside QA.',
      'Ran UAT training and released to production, onboarding over 80 dental offices across the US.'
    ],
    featuresTitle: 'Features I worked on',
    features: ['Office &amp; patient chat', 'Secure email inbox', 'COVID-19 check-in', 'Gamification / loyalty', 'Team management console', 'Secure patient SMS', 'In-app e-fax', 'Stripe payments', 'Twilio SMS']
  },
  {
    title: 'Opteon',
    logo: 'assets/opteon-logo.png',
    tags: ['realestate'],
    blurb: 'Scoped and built a white-label iOS app for an international valuation &amp; property services provider.',
    detail: [
      'Worked with the designer on an information-architecture diagram and with developers on a high-level solution architecture.',
      'Defined DoD / DoR with the team and ran all sprint ceremonies as Scrum Master.',
      'Built epics, user stories and acceptance criteria from a concept map; documented as-is and to-be processes.',
      'Stepped into PM and QA roles as needed; held weekly governance meetings and reported status.',
      'Released on time to the Apple App Store.'
    ]
  },
  {
    title: "O'Brien",
    logo: 'assets/obrien-logo.png',
    tags: ['manufacturing', 'automotive'],
    blurb: "Rebuilt the mobile app (Windows → Android) for a vehicle-glass company serving 360,000+ drivers a year.",
    detail: [
      'Created the backlog with epics, features and stories (including acceptance criteria).',
      'Led sprint planning and review; ran backlog grooming and daily stand-ups.',
      'Conducted design review meetings with both XAM and O’Brien teams and tested each sprint’s build.',
      'Created and showcased weekly progress reports and app builds.'
    ],
    featuresTitle: 'Job workflow built',
    features: ['Job lists &amp; details', 'Travel to site', 'Site &amp; vehicle check', 'Price check', 'Pre-job inspection', 'Fitting &amp; warranty', 'Post-job inspection', 'Payment (Square)', 'Invoicing &amp; close']
  },
  {
    title: '60 Seconds',
    logo: 'assets/60-logo.png',
    tags: ['marketing', 'sales'],
    blurb: 'A mobile app delivering tailored coaching to drive measurable improvement in sales, marketing and communication.',
    detail: [
      'Established a common Ways of Working and planned, organised and coordinated the work.',
      'Facilitated estimation across sprint and backlog planning.',
      'Ensured scrum ceremonies reached their desired output.',
      'Surfaced and documented risks; reported via sprint reviews, story points and burn-down.'
    ],
    featuresTitle: 'Features I worked on',
    features: ['Scenario / task creation', 'Coaching feedback platform', 'Rehearse &amp; delivery video suite', 'Quant &amp; qual web reporting']
  },
  {
    title: 'AIMS &amp; Sewer Viewer',
    logo: 'assets/calm-logo.jpg',
    tags: ['utilities'],
    blurb: 'Products to manage, track and report on the UK waste-water network, with integrated vehicle tracking and office stats boards.',
    detail: [
      'Worked across CALM’s two main products, AIMS and Sewer Viewer, and integrated the Masternaut vehicle tracking &amp; scheduling system.',
      'Drove digital notice boards displaying daily team and vehicle statistics in the office.',
      'As a start-up, led implementation of process-management systems across the business:',
      'ISO 9001 Quality · OHSAS 18001 Health &amp; Safety · ISO 14001 Environmental · ISO 27001 Information Security.'
    ]
  }
];
