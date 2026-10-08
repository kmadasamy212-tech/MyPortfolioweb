import type { SkillItem, ExperienceItem, ProjectItem, EducationItem, CapabilityItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Madasamy K',
  shortName: 'MK',
  title: 'Junior Software Developer',
  headline: 'Building practical software solutions with code, data, and modern technologies.',
  tagline: 'Computer Science Undergraduate (2027) · Full-Stack & Data Analytics',
  summary:
    'Computer Science undergraduate (expected 2027) with hands-on experience in full-stack development and data analytics gained through internships and academic projects. Skilled in Python, JavaScript, SQL, Django, and Flutter, with a track record of building functional applications and data dashboards. Seeking a Software Developer internship/role to apply technical skills in a collaborative engineering environment.',
  email: 'kmadasamy212@gmail.com',
  phone: '7305348627',
  phoneDisplay: '+91 73053 48627',
  location: 'Tamil Nadu, India',
  university: 'Anna University, Tamil Nadu',
  graduationYear: '2027',
  degree: 'Bachelor of Engineering (B.E.) — Computer Science Engineering',
  linkedin: 'https://www.linkedin.com/in/madasamy-k-984224308',
  github: 'https://github.com/kmadasamy212-tech',
  status: 'Open for Software Developer Internships & Junior Roles',
};

export const rotatingKeywords = [
  'Junior Software Developer',
  'Full-Stack Developer',
  'Python Developer',
  'Web Developer',
  'Data Analytics Enthusiast',
  'Computer Science Engineer',
];

export const statCards = [
  {
    value: '2027',
    label: 'Expected Graduation',
    subtext: 'B.E. Computer Science, Anna University',
    icon: 'GraduationCap',
  },
  {
    value: 'B.E.',
    label: 'Computer Science Engineering',
    subtext: 'Strong CS & algorithmic foundation',
    icon: 'Cpu',
  },
  {
    value: '2',
    label: 'Internship Experiences',
    subtext: 'IBM & POSTULATE',
    icon: 'Briefcase',
  },
  {
    value: 'Full-Stack + Analytics',
    label: 'Primary Focus Areas',
    subtext: 'Python, Django, Flutter & BI Tools',
    icon: 'Layers',
  },
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: 'Python',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    tag: 'Primary Language',
    description: 'Core logic, backend development with Django, ML data pipelines, Streamlit apps.',
    iconName: 'Python',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    tag: 'Web Scripting',
    description: 'Dynamic frontend features, interactive DOM manipulation, asynchronous operations.',
    iconName: 'FileCode2',
  },
  {
    name: 'SQL',
    category: 'languages',
    categoryLabel: 'Programming Languages',
    tag: 'Database Queries',
    description: 'Complex data queries, joins, aggregations, schema design, and data analysis.',
    iconName: 'Database',
  },

  // Web Technologies
  {
    name: 'HTML5',
    category: 'web',
    categoryLabel: 'Web Technologies',
    tag: 'Markup & Structure',
    description: 'Semantic markup, accessible web standards, forms, and web document structure.',
    iconName: 'Code',
  },
  {
    name: 'CSS3',
    category: 'web',
    categoryLabel: 'Web Technologies',
    tag: 'Styling & Layouts',
    description: 'Responsive layouts, Flexbox, Grid, CSS animations, and clean UI styling.',
    iconName: 'Palette',
  },

  // Frameworks
  {
    name: 'Django',
    category: 'frameworks',
    categoryLabel: 'Frameworks',
    tag: 'Backend & APIs',
    description: 'Full-stack web applications, RESTful APIs, ORM modeling, and authentication.',
    iconName: 'Server',
  },
  {
    name: 'Flutter',
    category: 'frameworks',
    categoryLabel: 'Frameworks',
    tag: 'Mobile & Multiplatform',
    description: 'Cross-platform mobile apps, widget trees, state management, and API consumption.',
    iconName: 'Smartphone',
  },

  // Version Control
  {
    name: 'Git',
    category: 'version_control',
    categoryLabel: 'Version Control',
    tag: 'Source Control',
    description: 'Branching, commit history, merge management, and local versioning workflows.',
    iconName: 'GitBranch',
  },
  {
    name: 'GitHub',
    category: 'version_control',
    categoryLabel: 'Version Control',
    tag: 'Collaboration',
    description: 'Repository hosting, collaborative pull requests, project tracking, and open source.',
    iconName: 'Github',
  },

  // Data & Analytics
  {
    name: 'Power BI',
    category: 'data_analytics',
    categoryLabel: 'Data & Analytics',
    tag: 'Business Intelligence',
    description: 'Interactive business dashboards, DAX queries, trend reporting, and data modeling.',
    iconName: 'BarChart3',
  },
  {
    name: 'IBM Cognos Analytics',
    category: 'data_analytics',
    categoryLabel: 'Data & Analytics',
    tag: 'Enterprise Analytics',
    description: 'Enterprise reporting, data exploration, dashboard visualization, and data curation.',
    iconName: 'PieChart',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'databases',
    categoryLabel: 'Databases',
    tag: 'Relational DB',
    description: 'Relational database management, table constraints, indices, and CRUD operations.',
    iconName: 'Database',
  },

  // Computer Science
  {
    name: 'Data Structures & Algorithms',
    category: 'core_cs',
    categoryLabel: 'Computer Science',
    tag: 'CS Foundation',
    description: 'Arrays, linked lists, stacks, queues, trees, search/sort algorithms, complexity analysis.',
    iconName: 'Binary',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'ibm-intern',
    role: 'Data Analytics Intern',
    company: 'IBM',
    period: 'Internship Experience',
    location: 'Remote / Virtual Experience',
    type: 'Internship',
    summary:
      'Gained practical industry experience in data analysis, report generation, and interactive dashboard creation for business datasets.',
    responsibilities: [
      'Built interactive analytical dashboards to monitor business metrics and key performance indicators.',
      'Created comprehensive analytical reports utilizing IBM Cognos and Power BI.',
      'Visualized complex business datasets to uncover patterns, correlations, and business trends.',
      'Performed systematic data cleaning, data transformation, and preprocessing of raw records.',
      'Analyzed datasets to support evidence-based, data-driven decision making.',
    ],
    technologies: ['Power BI', 'IBM Cognos', 'Data Analytics', 'Data Cleaning', 'Data Transformation', 'Data Visualization'],
    metrics: 'Built interactive reporting dashboards and trend visualizations',
  },
  {
    id: 'postulate-intern',
    role: 'Full-Stack App Developer Intern',
    company: 'POSTULATE',
    period: 'Internship Experience',
    location: 'Internship',
    type: 'Internship',
    summary:
      'Contributed to the design and development of a full-stack mobile/web application connecting a Flutter interface to a Django backend.',
    responsibilities: [
      'Developed a full-stack mobile and web application architecture using Django and Flutter.',
      'Engineered RESTful API endpoints for client-server communication and JSON data exchange.',
      'Integrated WampServer database to handle persistent user and application data records.',
      'Contributed directly to core application functionality and user experience workflows.',
      'Participated in the team’s first end-to-end application build from conception to deployment testing.',
    ],
    technologies: ['Django', 'REST API', 'Flutter', 'WampServer', 'Python', 'Mobile Development'],
    metrics: 'Contributed to first end-to-end full-stack application build',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'student-performance-ml',
    title: 'Student Performance Prediction Web App',
    category: 'Machine Learning · Data Analytics · Streamlit',
    badge: 'Machine Learning & Web',
    description:
      'An interactive machine-learning-powered web application built using Streamlit that predicts student pass/fail outcomes based on demographic and academic metrics.',
    highlights: [
      'Accepts key inputs including study hours, attendance rate, and prior test scores.',
      'Uses pre-trained machine learning classification models with standardized feature scaling.',
      'Provides real-time pass/fail probability predictions with visual diagnostic feedback.',
      'Built with Python and deployed as a responsive interactive Streamlit interface.',
    ],
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Data Analytics', 'Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/kmadasamy212-tech',
    hasInteractiveDemo: true,
    demoType: 'ml_predictor',
  },
  {
    id: 'expense-tracker-app',
    title: 'Expense Tracker',
    category: 'Web Application · Personal Finance',
    badge: 'Frontend & State Management',
    description:
      'A user-friendly personal finance tracking application designed for recording income, logging expenses, categorizing transactions, and monitoring daily budgets.',
    highlights: [
      'Full CRUD operations for adding, editing, categorizing, and deleting transactions.',
      'Instant income vs. expense balance calculation with visual budget status indicators.',
      'Categorization of daily transactions (Food, Utilities, Education, Transport, etc.).',
      'Expense summary breakdowns to help users monitor spending habits effectively.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'LocalStorage', 'Responsive Design'],
    githubUrl: 'https://github.com/kmadasamy212-tech',
    hasInteractiveDemo: true,
    demoType: 'expense_tracker',
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Computer Science Engineering',
  institution: 'Anna University',
  location: 'Tamil Nadu, India',
  expectedGraduation: '2027',
  description:
    'Pursuing a comprehensive curriculum in Computer Science Engineering, developing rigorous theoretical foundations in algorithms, system design, data architectures, and software engineering practices.',
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Operating Systems',
    'Computer Networks',
    'Web Development Fundamentals',
    'Software Engineering Principles',
  ],
  highlights: [
    'Academic focus on full-stack application development and data analysis.',
    'Hands-on laboratory coursework covering algorithms, SQL queries, and software lifecycles.',
    'Active participation in collaborative engineering projects and technical presentations.',
  ],
};

export const capabilitiesData: CapabilityItem[] = [
  {
    id: 'fullstack-apps',
    title: 'Full-Stack Web Applications',
    shortDesc: 'Connecting robust Django backends with clean client-side interfaces.',
    description:
      'Designing and building end-to-end web applications featuring Django REST APIs, secure authentication, database persistence, and responsive interfaces.',
    iconName: 'Layout',
    technologies: ['Python', 'Django', 'REST APIs', 'JavaScript', 'HTML5/CSS3'],
    deliverables: ['Custom REST endpoints', 'CRUD architectures', 'ORM data modeling', 'Secure authentication'],
  },
  {
    id: 'crossplatform-mobile',
    title: 'Cross-Platform Mobile Apps',
    shortDesc: 'Building modern mobile interfaces with Flutter.',
    description:
      'Developing cross-platform mobile user interfaces using Flutter, structuring clean widget trees, managing client state, and consuming backend REST services.',
    iconName: 'Smartphone',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Mobile UI/UX', 'JSON Parsing'],
    deliverables: ['Responsive mobile screens', 'Interactive UI widgets', 'API integration', 'State management'],
  },
  {
    id: 'bi-dashboards',
    title: 'BI Dashboards & Data Analytics',
    shortDesc: 'Visualizing datasets and trends with Power BI & IBM Cognos.',
    description:
      'Transforming raw datasets into actionable executive insights through interactive dashboards, KPI metrics, data cleansing, and trend analysis.',
    iconName: 'BarChart3',
    technologies: ['Power BI', 'IBM Cognos Analytics', 'Data Cleaning', 'Data Transformation'],
    deliverables: ['Executive KPI dashboards', 'Analytical reports', 'Trend visualizations', 'Cleaned datasets'],
  },
  {
    id: 'ml-predictive-tools',
    title: 'ML & Predictive Data Tools',
    shortDesc: 'Deploying machine learning models through interactive web apps.',
    description:
      'Implementing predictive workflows in Python, applying feature scaling, training classification models, and wrapping them in Streamlit web applications.',
    iconName: 'Sparkles',
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Data Preprocessing'],
    deliverables: ['Interactive model UI', 'Feature scaling pipeline', 'Real-time inference', 'Parameter tuning'],
  },
  {
    id: 'database-sql',
    title: 'Relational Database Design & SQL',
    shortDesc: 'Structured schema design and optimized query execution.',
    description:
      'Architecting relational database schemas, writing complex SQL queries with joins and aggregations, and managing databases with MySQL and WampServer.',
    iconName: 'Database',
    technologies: ['SQL', 'MySQL', 'WampServer', 'Data Normalization'],
    deliverables: ['Normalized schemas', 'Optimized SQL queries', 'Data constraints', 'CRUD transactions'],
  },
  {
    id: 'responsive-frontend',
    title: 'Modern Frontend Interfaces',
    shortDesc: 'Crafting clean, accessible, and responsive user experiences.',
    description:
      'Building performant, accessible web layouts with semantic HTML5, modern CSS, and interactive JavaScript with attention to visual hierarchy.',
    iconName: 'Globe',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Accessibility'],
    deliverables: ['Mobile-first layouts', 'Interactive UI elements', 'Semantic markup', 'Cross-browser compatibility'],
  },
];
