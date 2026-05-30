import { Project, Experience, SkillGroup, EducationItem, ResearchItem, Certification } from "./types";
import profileImage from "./img/omaresguerra_white.png";
import profileImageDark from "./img/omaresguerra_black.png";

export const profileData = {
  name: "John Omar Esguerra",
  profileImage,
  profileImageDark,
  title: "Instructor / University Junior Developer / Data & Research Analyst",
  tagline: "I build data-driven systems, analytics workflows, and digital solutions that help universities turn records, research, and operations into better decisions.",
  location: "Tuguegarao City, Cagayan, Philippines",
  email: "esguerrajohnomar@gmail.com",
  linkedin: "https://linkedin.com/in/omaresguerra",
  github: "https://github.com/omaresguerra",
  cvUrl: "https://linkedin.com/in/omaresguerra",
  about: `I work at the intersection of higher education, data analytics, and software development. At Cagayan State University, I serve as an Instructor I at the College of Allied Health Sciences and as a University Junior Developer under the Management Information System Office. My work focuses on transforming institutional data, research outputs, and operational workflows into practical systems, dashboards, and decision-support tools.`,
  bioDetails: [
    "Master in Business Analytics student at Mapúa University, with a Computer Science degree earned Magna Cum Laude.",
    "Experienced in university systems development, research analytics, ICT modernization, and data visualization for academic and institutional use.",
    "Focused on building practical digital solutions for higher education, public-sector research, local governance, and MSME support."
  ]
};

export const skillsData: SkillGroup[] = [
  {
    category: "Data Analytics & Visualization",
    skills: ["Business Analytics", "Data Analytics", "Python", "SQL", "R", "Power BI", "Data Visualization", "Dashboard Design"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "Feature Engineering", "Model Evaluation"]
  },
  {
    category: "Systems & Web Development",
    skills: ["Web Development", "Django", "PHP", "Java", "HTML", "CSS", "System Analysis", "ArcGIS"]
  },
  {
    category: "Academic, Research & Project Work",
    skills: ["Research Facilitation", "Project Management", "Technical Writing", "Training Design", "Cybersecurity Awareness", "Stakeholder Communication"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-mapua-mba",
    credential: "Master in Business Analytics",
    institution: "Mapúa University",
    period: "August 2022 - 2024",
    details: [
      "Graduate-level training in analytics strategy, statistical modeling, and data-driven decision-making for business and institutional contexts.",
      "Applied coursework to practical projects involving forecasting, dashboard interpretation, and insight communication for stakeholders."
    ]
  },
  {
    id: "edu-oxford-mlss",
    credential: "Oxford Machine Learning Summer School 2023",
    institution: "University of Oxford",
    period: "May 2023 - Jul 2023",
    details: [
      "Completed an intensive non-degree summer program covering core machine learning foundations, model development workflows, and applied use cases.",
      "Engaged with academic discussions on responsible AI and practical translation of machine learning methods into real-world problem solving."
    ]
  },
  {
    id: "edu-uplb-scf",
    credential: "Science Communication Fellow",
    institution: "University of the Philippines - Los Baños",
    period: "March 2022 - July 2022",
    details: [
      "Completed fellowship training in science communication for researchers and communicators handling DOST-PCIEERD-supported initiatives.",
      "Strengthened skills in translating technical research outputs into clear, audience-appropriate communication materials."
    ]
  },
  {
    id: "edu-csu-bs-cs",
    credential: "BS Computer Science",
    institution: "Cagayan State University - Carig Campus",
    period: "2014 - 2018",
    details: [
      "Graduated Magna Cum Laude with consistent Dean's List standing and Academic Scholar recognition.",
      "Served as External Vice President of the Alliance of Computer Enthusiasts (ACE) in 2017 and received the OWWA EDSP Scholarship."
    ]
  }
];

export const projectsData: Project[] = [
  // {
  //   id: "student-risk-prediction",
  //   title: "Before It's Too Late: Student Non-Enrollment Risk Prediction",
  //   category: "Machine Learning Capstone",
  //   description: "A machine learning capstone project that predicts students at risk of next-term non-enrollment using longitudinal academic and student profile data.",
  //   longDescription: "This capstone project was designed as an early-warning model for student retention support. Using longitudinal academic records and student profile variables, the system predicts next-term non-enrollment risk so advisors and administrators can intervene earlier with evidence-based support plans.",
  //   role: "Lead Researcher & Developer",
  //   tags: ["Python", "Scikit-Learn", "Feature Engineering", "Model Evaluation", "XGBoost", "Education Analytics"],
  //   keyFeatures: [
  //     "Built a supervised learning pipeline for student retention risk profiling.",
  //     "Performed feature engineering from multi-term academic and profile datasets.",
  //     "Compared and evaluated classification models for predictive reliability.",
  //     "Prepared interpretable outputs to support intervention planning."
  //   ],
  //   impact: [
  //     "Enabled earlier identification of students at higher risk of non-enrollment.",
  //     "Provided an analytics-driven basis for targeted advising and support.",
  //     "Demonstrated practical machine learning use in higher education decision support."
  //   ]
  // },
  {
  id: "csu-docs",
  title: "CSU DOCS: Document Organization and Collaboration System",
  category: "Information Systems",
  description: "A centralized document management and collaboration platform for CSU designed to improve document storage, retrieval, access control, and institutional record handling.",
  longDescription: "Developed CSU DOCS as a university-wide document organization and collaboration system to address fragmented document storage, scattered file sharing, and manual retrieval challenges. The platform provides a secure, searchable, and role-based repository for institutional documents, supporting structured upload, metadata tagging, document visibility control, and records monitoring across campuses and offices.",
  role: "University Junior Developer",
  tags: ["React", "TypeScript", "Firebase", "Document Management", "Role-Based Access", "University Systems"],
  keyFeatures: [
    "Built a centralized repository for institutional documents and records.",
    "Implemented role-based access for system administrators, records officers, campus administrators, and employees.",
    "Supported document visibility levels such as public, campus, office, custom, and private access.",
    "Designed metadata-driven document upload using title, control number, document type, description, campus, and office details.",
    "Developed search and filtering features to improve document retrieval across offices and campuses.",
    "Supported document workflow needs from upload and distribution to archiving and monitoring."
  ],
  impact: [
    "Reduced document fragmentation across email, messaging apps, personal devices, and office-level storage.",
    "Improved document retrieval, access control, and institutional records organization.",
    "Strengthened CSU’s digital transformation efforts through a secure and centralized document platform.",
    "Supported more transparent and accountable document handling across university offices."
  ]
},
{
  id: "csu-cat-checker",
  title: "CSU CAT Checker: OMR-Based Entrance Examination Processing System",
  category: "Data Processing and Information Systems",
  description: "An OMR-based checking and analytics system for processing CSU College Admission Test answer sheets and generating examination results more efficiently.",
  longDescription: "Developed CSU CAT Checker to support the automated processing of CSU College Admission Test answer sheets using optical mark recognition. The system was designed to reduce manual checking workload, improve processing speed, and generate structured examination outputs for reporting, validation, and decision-making. It supports scanned answer sheet processing, score extraction, result generation, and campus-level analytics for admission-related operations.",
  role: "University Junior Developer",
  tags: ["OMR", "Python", "Exam Processing", "Data Analytics", "Admissions", "University Systems"],
  keyFeatures: [
    "Implemented OMR-based processing for scanned entrance examination answer sheets.",
    "Automated score extraction and result generation for CSU CAT examinees.",
    "Supported batch processing of examination sheets to reduce manual checking workload.",
    "Generated structured outputs for validation, reporting, and admission-related analysis.",
    "Provided summary analytics such as score distributions and campus-level examination statistics.",
    "Designed the system for practical use in large-scale university admission testing."
  ],
  impact: [
    "Helped process thousands of CSU CAT examination sheets more efficiently.",
    "Reduced manual checking effort and minimized delays in result preparation.",
    "Improved accuracy, consistency, and traceability of entrance examination processing.",
    "Supported data-driven admission reporting through structured examination analytics."
  ]
  },
  {
    id: "csu-workflex",
    title: "CSU WorkFlex: Work From Home Management System",
    category: "Digital Transformation / Web Systems",
    description: "A digital system for managing work-from-home attendance, task monitoring, hourly check-ins, and administrative reporting.",
    longDescription: "CSU WorkFlex was developed to centralize remote work operations into one digital workflow. The platform supported attendance tracking, accomplishment updates, task visibility, and streamlined reporting for supervisors and administrative units.",
    role: "Systems Analyst & Lead developer",
    tags: ["React", "Express", "Tailwind CSS", "Node.js", "Database Design", "Administrative Reporting"],
    keyFeatures: [
      "Digital attendance and check-in/check-out monitoring for remote work setups.",
      "Task tracking and accomplishment logging with timeline-style updates.",
      "Supervisor-side consolidation for review and reporting.",
      "Export-oriented outputs for administrative documentation."
    ],
    impact: [
      "Reduced manual consolidation workload for work-from-home monitoring.",
      "Improved visibility and accountability across distributed teams.",
      "Supported faster, cleaner administrative reporting workflows."
    ]
  },
  {
    id: "csu-digital-systems",
    title: "CSU Digital Systems / E2E Platforms",
    category: "Information Systems",
    description: "University digital transformation initiatives involving integrated systems, dashboards, portals, and data-driven institutional services.",
    longDescription: "This initiative covered multiple CSU digital transformation outputs, including systems analysis, workflow mapping, dashboard-oriented reporting, and integrated platform concepts intended to improve end-to-end university services.",
    role: "University Junior Developer",
    tags: ["System Analysis", "Database Schemas", "Process Mapping", "Dashboard Architecture", "Data Integration"],
    keyFeatures: [
      "Analyzed and mapped institutional workflows for digitization.",
      "Proposed integration-ready data structures for cross-office use.",
      "Supported design of portals and reporting interfaces.",
      "Aligned system outputs with operational and decision-support needs."
    ],
    impact: [
      "Supported broader digital transformation direction within CSU units.",
      "Improved clarity of process and data flow across institutional functions.",
      "Helped shape scalable end-to-end platform planning."
    ]
  },
  {
    id: "csu-andrews-queueing-system",
    title: "CSU-Andrews Queueing System",
    category: "Information Systems",
    description: "A queue management system for CSU-Andrews to organize service flow, reduce wait-time bottlenecks, and improve transaction visibility.",
    longDescription: "Developed a queueing system for CSU-Andrews to improve service sequencing and front-desk transaction flow. The system was built using PHP and focused on practical deployment, usability, and operational efficiency in a campus service environment.",
    role: "Lead Developer",
    tags: ["PHP", "Queue Management", "Information Systems", "Campus Operations", "Web Development"],
    keyFeatures: [
      "Implemented queue ticketing and service order tracking.",
      "Built monitoring views for active and completed transactions.",
      "Improved front-desk workflow through structured queue handling.",
      "Designed for practical day-to-day campus service operations."
    ],
    impact: [
      "Helped reduce queue confusion and service bottlenecks.",
      "Improved transparency of service order and transaction status.",
      "Strengthened operational efficiency in CSU-Andrews service points."
    ]
  },
  {
    id: "csu-ishop",
    title: "CSU-iShop: Digital Marketplace for Cagayan MSMEs",
    category: "Web Platform Development",
    description: "A university-supported e-commerce platform that helped local MSMEs and CSU-TBI BizNEST incubatees showcase products beyond traditional fairs and physical selling channels.",
    longDescription: "CSU-iShop was developed to support the commercialization goals of CSU-TBI BizNEST by giving incubatees and Cagayan-based MSMEs a digital storefront for product visibility, promotion, and public engagement. The project combined web development, digital marketing, content management, and institutional outreach to strengthen the online presence of local enterprise products.",
    role: "Project Assistant III",
    tags: ["E-commerce", "Web Development", "MSME Support", "CSU-TBI BizNEST", "Digital Marketing"],
    keyFeatures: [
      "Built and maintained a digital storefront for incubated products and local enterprise offerings.",
      "Structured product pages to make MSME items easier to discover, promote, and communicate online.",
      "Managed website content, project updates, and social media materials for public visibility.",
      "Supported branding and promotional workflows aligned with technology business incubation goals."
    ],
    impact: [
      "Expanded digital visibility for Cagayan MSMEs and CSU-TBI BizNEST incubatees.",
      "Helped connect local products with wider audiences beyond trade fairs and physical exhibits.",
      "Strengthened the project’s online identity through consistent web and social media presence."
    ]
  },
  {
    id: "smart-monitoring-evaluation",
    title: "Smart Project Monitoring and Evaluation System of CSU",
    category: "Research and ICT Systems",
    description: "An ICT-enabled monitoring and evaluation initiative designed to improve how CSU tracks projects, documents progress, and supports reporting decisions.",
    longDescription: "Contributed to a DOST-PCAARD CVAARD-supported project focused on modernizing project monitoring and evaluation at Cagayan State University. The initiative emphasized practical digitization of M&E workflows, improved accessibility of project information, and better reporting structures for research and administrative decision-making.",
    role: "Science Research Assistant",
    tags: ["Monitoring and Evaluation", "Research Analytics", "ICT Systems", "Process Improvement", "University Systems"],
    keyFeatures: [
      "Mapped monitoring and evaluation workflows for digitization and process improvement.",
      "Supported the design of analytics-ready structures for project tracking and reporting.",
      "Assisted in documentation, data handling, and coordination activities for research implementation.",
      "Helped translate institutional reporting needs into practical ICT-supported workflows."
    ],
    impact: [
      "Improved organization and consistency of project monitoring information.",
      "Supported faster preparation of M&E reports for research and administrative stakeholders.",
      "Contributed to CSU’s broader digital transformation efforts in research administration."
    ]
  },
  {
    id: "cmci-visualization-region2",
    title: "CMCI Region 2 Data Visualization and Infographics",
    category: "Data Analytics and Visualization",
    description: "A CSU-DTI analytics collaboration that transformed competitiveness data from 93 LGUs into visual reports, infographics, and policy-support materials.",
    longDescription: "Worked on converting Cities and Municipalities Competitiveness Index (CMCI) datasets into clear, stakeholder-friendly analytics outputs for Region 2. The project focused on making LGU performance indicators easier to understand through dashboards, infographics, visual summaries, and planning-oriented narratives.",
    role: "Data Analyst and Contributor",
    tags: ["Data Visualization", "Infographics", "Policy Analytics", "CMCI", "LGU Data"],
    keyFeatures: [
      "Prepared visual outputs and infographic materials for 93 local government units in Region 2.",
      "Converted competitiveness indicators into easier-to-understand analytics narratives.",
      "Designed communication-friendly summaries for non-technical and policy-oriented audiences.",
      "Supported inter-agency analytics work between CSU and DTI."
    ],
    impact: [
      "Made complex CMCI data more accessible for LGU planning and interpretation.",
      "Strengthened evidence-based communication through standardized visual outputs.",
      "Helped regional stakeholders identify patterns, gaps, and opportunities in competitiveness indicators."
    ]
  },
  {
    id: "cropmap-capstone",
    title: "CropMap: Web-Based Rice Image Processing System",
    category: "Computer Vision Capstone",
    description: "A research-driven web application that applied NDVI and OSAVI image processing algorithms to support rice crop assessment and monitoring.",
    longDescription: "CropMap was my undergraduate capstone project, developed to explore how image processing and vegetation indices can support agricultural monitoring. The system integrated NDVI and OSAVI computations into a web-based workflow, demonstrating how computer science can be applied to practical crop analysis problems.",
    role: "Lead Developer and Researcher",
    tags: ["Computer Vision", "Image Processing", "NDVI", "OSAVI", "Web-Based System", "Research"],
    keyFeatures: [
      "Implemented NDVI and OSAVI computations for crop image analysis.",
      "Built a web-based workflow for uploading, processing, and interpreting rice imagery.",
      "Prepared technical documentation, research outputs, and defense materials.",
      "Presented the project in university research and technology competitions."
    ],
    impact: [
      "Awarded 1st Place Best Capstone and Best Research Paper in Infolympics 2018.",
      "Demonstrated the use of vegetation indices in an academic crop-monitoring prototype.",
      "Showcased the application of computing, image processing, and research to agriculture."
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-instructor-junior-dev",
    role: "Instructor I / University Junior Developer",
    organization: "Cagayan State University",
    location: "Tuguegarao City",
    period: "09/2023 - Present",
    description: [
      "Teach technology, analytics, and information systems concepts to allied health students while designing learning activities that connect theory with practical digital tools.",
      "Develop and support university information systems under the CSU Management Information System Office.",
      "Contribute to institutional digital initiatives involving dashboards, web systems, automation, and data-driven reporting."
    ],
    tags: ["Instruction", "University Systems", "MIS", "Software Development", "Analytics"]
  },
  {
    id: "exp-science-research-assistant",
    role: "Science Research Assistant",
    organization: "Cagayan State University",
    location: "Tuguegarao City",
    period: "01/2023 - 08/2023",
    description: [
      "Supported the DOST-PCAARD CVAARD project on the Smart Project Monitoring and Evaluation System of CSU.",
      "Assisted in translating monitoring and evaluation requirements into ICT-supported workflows and reporting structures.",
      "Prepared documentation, research support materials, and implementation inputs for digital M&E activities."
    ],
    tags: ["Research", "Monitoring and Evaluation", "ICT", "DOST-PCAARD", "Digital Transformation"]
  },
  {
    id: "exp-science-research-analyst",
    role: "Science Research Analyst",
    organization: "Cagayan State University",
    location: "Tuguegarao City",
    period: "01/2022 - 12/2022",
    description: [
      "Worked under a CHED-funded CSU-wide program focused on connectivity, library and research support, ICT managers, and faculty retraining.",
      "Supported implementation activities that improved technology readiness across dispersed CSU campuses.",
      "Assisted in documentation, coordination, and analytics support for ICT modernization and capability-building initiatives."
    ],
    tags: ["Research", "Connectivity", "CHED Project", "ICT Training", "Higher Education"]
  },
  {
    id: "exp-project-assistant-iii",
    role: "Project Assistant III",
    organization: "Cagayan State University",
    location: "Tuguegarao City",
    period: "01/2021 - 12/2021",
    description: [
      "Served as Information and Marketing Officer for CSU-DOST Technology Business Incubator BizNEST.",
      "Supported the development and implementation of an e-commerce platform for Cagayan MSMEs and incubated products.",
      "Managed website updates, project content, and social media materials to strengthen public engagement and visibility."
    ],
    tags: ["Project Operations", "E-commerce", "Marketing", "Web Maintenance", "MSME Support"]
  },
  {
    id: "exp-project-assistant-i",
    role: "Project Assistant I",
    organization: "Cagayan State University",
    location: "Tuguegarao City",
    period: "07/2018 - 12/2020",
    description: [
      "Supported the CHED-funded DAREMAPS research project on disaster resiliency mapping of mission-critical ICT infrastructures.",
      "Assisted in vulnerability and risk assessment activities involving 16 partner state universities and colleges.",
      "Contributed to analysis, documentation, and presentation outputs related to ICT infrastructure risks and cyber threats."
    ],
    tags: ["DAREMAPS", "Risk Assessment", "Cybersecurity", "Research Assistance", "ICT Infrastructure"]
  }
];

export const researchData: ResearchItem[] = [
  
  {
    id: "res-smart-me-csu",
    title: "Smart Project Monitoring and Evaluation System of CSU in the New Normal",
    agency: "Cagayan State University",
    type: "DOST-PCAARD CVAARD Project",
    year: "2023",
    contribution: "Contributed to the implementation of an ICT-enabled monitoring and evaluation system by helping structure project tracking workflows, documentation templates, and reporting outputs for institutional stakeholders.",
    tags: ["Monitoring and Evaluation", "ICT", "Research Project", "University Systems"]
  },
  {
    id: "res-csu-connectivity",
    title: "CSU-Wide Connectivity and ICT Managers and Faculty Retraining Program",
    agency: "Cagayan State University",
    type: "CHED-IDIG Funded Project",
    year: "2022",
    contribution: "Supported implementation activities for a CHED-funded initiative focused on connectivity improvement, ICT readiness, and capability-building across 8 CSU campuses, including documentation and coordination support.",
    tags: ["Connectivity", "ICT", "Higher Education", "Capacity Building"]
  },
  {
    id: "res-biznest-ecommerce",
    title: "CSU-DOST TBI Business Incubation Zone for Novel and Sustainable Enterprises",
    agency: "Cagayan State University / TBI Team",
    type: "DOST-PCIEERD Funded Project",
    year: "2021",
    contribution: "Served as Information and Marketing Officer under CSU-DOST BizNEST, supporting the development and rollout of the BizNEST e-commerce platform for Cagayan MSMEs while maintaining the project website and social media communication channels.",
    tags: ["BizNEST", "E-commerce", "MSME Support", "Web Maintenance", "Social Media", "Technology Incubation"]
  },
  {
    id: "res-daremaps",
    title: "Disaster Resilience Mapping of Mission-Critical Infrastructures of SUCs in the Philippines",
    agency: "Cagayan State University / DAREMAPS Team",
    type: "CHED-DARETO Funded Project",
    year: "2018-2020",
    contribution: "Assisted in the vulnerability and risk assessment activities for mission-critical ICT infrastructure across 17 partner SUCs in the Philippines, contributing to analysis outputs, technical documentation, and presentation materials on disaster resilience and cyber risk.",
    tags: ["Risk Assessment", "Disaster Resiliency", "ICT Infrastructure", "Cyber Threats"]
  },
  {
    id: "res-cmci-region2",
    title: "Visualization and Infographics of CMCI Results for Region 2",
    agency: "CSU and DTI Collaboration Team",
    type: "DTI-RO2 Funded Project",
    year: "2021",
    contribution: "Developed visualizations, infographics, and policy-support materials from CMCI survey data for 93 LGUs in Region 2 to improve indicator interpretation and support evidence-based local planning discussions.",
    tags: ["Data Visualization", "Infographics", "CMCI", "Policy Support"]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-google-ai-2026",
    title: "Google AI Professional Certificate",
    issuer: "Google",
    date: "May 2026",
    skills: ["Google AI", "Generative AI"]
  },
  {
    id: "cert-oxford-mlss-2024",
    title: "Oxford Machine Learning Summer School 2024",
    issuer: "AI for Globasl x University of Oxford",
    date: "2024",
    skills: ["Machine Learning", "Supervised Learning", "Model Building"]
  },
  {
    id: "cert-data-science-analytics-2024",
    title: "Data Science and Analytics Training",
    issuer: "DICT Region 2",
    date: "2024",
    skills: ["Data Science", "R Programming", "Data Visualization"]
  },
  {
    id: "cert-ml-stanford",
    title: "Machine Learning Specialization",
    issuer: "Stanford Online and DeepLearning.AI",
    date: "2023",
    skills: ["Machine Learning", "Supervised Learning", "Model Building"]
  },
  {
    id: "cert-digilabs-ai",
    title: "DigiLABS AI Foundational and Accelerator Course",
    issuer: "Singapore International Foundation",
    date: "2023",
    skills: ["AI Fundamentals", "Applied AI", "Innovation"]
  },
  {
    id: "cert-ibm-python",
    title: "Data Analysis with Python",
    issuer: "IBM Cognitive Class",
    date: "2022",
    skills: ["Python", "Data Analysis", "Pandas"]
  },
  {
    id: "cert-esri-spatial",
    title: "Spatial Data Science: The New Frontier in Analytics",
    issuer: "Esri Training",
    date: "2022",
    skills: ["Spatial Analytics", "GIS", "Data Interpretation"]
  },
  {
    id: "cert-sparta-deep-learning",
    title: "Deep Learning Using Python and Design Thinking for Analytics",
    issuer: "SPARTA, Development Academy of the Philippines",
    date: "2022",
    skills: ["Deep Learning", "Python", "Analytics Thinking"]
  },
  {
    id: "cert-jhu-ds",
    title: "A Crash Course in Data Science",
    issuer: "Johns Hopkins University",
    date: "2021",
    skills: ["Data Science", "Analytics", "Data Workflow"]
  },
  {
    id: "cert-civil-service",
    title: "Civil Service Eligibility for Honor Graduate (PD-907)",
    issuer: "Civil Service Commission",
    date: "2018",
    skills: ["Public Service Eligibility", "Professional Qualification"]
  }
];
