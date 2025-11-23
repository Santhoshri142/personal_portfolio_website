// Skills data with icons
export const skills = {
  programming: [
    { name: 'Java', icon: 'SiJava' },
    { name: 'C Programming', icon: 'SiC' },
    { name: 'JavaScript', icon: 'SiJavascript' }
  ],
  frontend: [
    { name: 'HTML', icon: 'FaHtml5' },
    { name: 'CSS', icon: 'FaCss3Alt' },
    { name: 'Bootstrap', icon: 'FaBootstrap' },
    { name: 'React.js', icon: 'FaReact' }
  ],
  databases: [
    { name: 'MySQL', icon: 'SiMysql' },
    { name: 'MongoDB', icon: 'SiMongodb' },
    { name: 'DBMS', icon: 'SiMysql' }
  ],
  cloud: [
    { name: 'IBM Cloud', icon: 'SiIbm' }
  ],
  aiMl: [
    { name: 'Generative AI', icon: 'SiTensorflow' },
    { name: 'Machine Learning', icon: 'SiTensorflow' },
    { name: 'NLP', icon: 'SiTensorflow' },
    { name: 'RAG', icon: 'SiTensorflow' },
    { name: 'CNN', icon: 'SiTensorflow' },
    { name: 'Deep Learning', icon: 'SiTensorflow' },
    { name: 'OpenCV', icon: 'SiOpencv' }
  ],
  tools: [
    { name: 'Git', icon: 'FaGitAlt' },
    { name: 'GitHub', icon: 'FaGithub' },
    { name: 'Figma', icon: 'FaFigma' },
    { name: 'Visual Studio', icon: 'FaCode' },
    { name: 'ThingSpeak', icon: 'SiThingiverse' },
    { name: 'IBM Watsonx.ai', icon: 'SiIbm' },
    { name: 'Cursor.ai', icon: 'FaCode' }
  ],
  softSkills: [
    'Collaboration',
    'Leadership',
    'Initiative',
    'Effective Communication',
    'Analytical',
    'Time & Priority Management'
  ]
};

// Projects data
export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'This is a personal portfolio website designed to showcase my identity as a developer and creator. The site features a clean, modern interface that introduces who I am, what I do, and what I’m passionate about. It highlights my technical skills, past projects, and real-world work, giving visitors a clear insight into my capabilities. The portfolio includes detailed project case studies that explain not only the functionality and tech stack, but also my problem-solving process and the impact of each project. There’s also a polished “About Me” section that shares my background, values, and aspirations, paired with a contact area where potential collaborators or employers can easily reach me. Built with responsiveness in mind, the website works seamlessly on both desktop and mobile platforms — offering a professional digital presence that reflects my personal brand and technical competency.',
    techStack: ['HTML','CSS','JavaScript','React.js', 'Cursor.ai', 'Vercel'],
    link: 'https://personalportfoliowebsite-chi.vercel.app/',
    type: 'deployed'
  },
  {
    id: 2,
    title: 'AudioFix.ai– Audio Signal Processing Assistant',
    description: 'AudioFix.ai is a domain-specialized AI assistant engineered for advanced audio signal processing workflows. It leverages NLP and Retrieval-Augmented Generation (RAG) to deliver circuit-level insights for amplifiers, active filters, and op-amp topologies. Integrated with IBM Cloud Lite and powered by IBM\'s LLaMA/Granite models, the system provides precision debugging, noise analysis, stability evaluation, and component-level optimization.',
    techStack: ['IBM Cloud',   'IBM LLaMA', 'watsonx.ai Studio','RAG','NLP'],
    link: 'https://github.com/Santhoshri142/AudioFix.ai---Audio-Signal-Processing-Assistant',
    type: 'github'
  },
  {
    id: 3,
    title: 'Automated Poultry Farming System',
    description: 'Automated Poultry Farming using IoT and ML - A smart system that monitors temperature, humidity, air quality, and automates feeding. Uses OpenCV for movement detection, CNN for disease detection, and Random Forest for growth prediction. All data is sent to ThingSpeak cloud platform for real-time monitoring.',
    techStack: ['IoT', 'Python',  'OpenCV','Machine Learning', 'CNN', 'TensorFlow', 'ThingSpeak', 'Raspberry Pi'],
    link: null,
    type: 'project'
  },
  {
    id: 4,
    title: 'Visual Fables Web',
    description: 'Visual Fables is a unique online platform that redefines storytelling by blending classic and original narratives with captivating visuals. The project\'s mission is to create an immersive and emotionally resonant experience that transcends the limitations of text-only stories.',
    techStack: ['HTML','CSS','JavaScript','React.js', 'MongoDB', 'Express.js',  'Node.js'],
    link: 'https://visual-fables-web.netlify.app/',
    type: 'deployed'
  },
  {
    id: 5,
    title: 'Flight Reservation System',
    description: 'Developed a scalable flight reservation system for bookings, cancellations, and customer records, improving data processing efficiency by 40%. Automated workflows using Java JDBC + MySQL, reducing manual workload and enhancing user experience.',
    techStack: ['Java', 'JDBC', 'MySQL'],
    link: 'https://github.com/Santhoshri142/miniproject/tree/main/717821t142%2C717821t147/Flight_reservation_system',
    type: 'github'
  }
];

// Education data
export const education = [
  {
    degree: 'B.E. Electronics and Telecommunication Engineering',
    institution: 'Karpagam College of Engineering, Coimbatore',
    score: 'CGPA 8.19',
    period: 'Sep 2021 – May 2025'
  },
  {
    degree: 'HSC (+2)',
    institution: 'Sri Vijay Vidyalaya Matric Hr. Sec School, Hosur',
    score: '90.03%',
    period: 'Jun 2019 – May 2021'
  },
  {
    degree: 'SSLC',
    institution: 'Holy Cross Matric Hr. Sec School, Denkanikottai',
    score: '91.6%',
    period: 'Jun 2018 – Mar 2019'
  }
];

// Experience/Internships data
export const experiences = [
  {
    id: 1,
    title: 'IBM SkillBuild Intern',
    role: 'Generative AI & Cloud Technology',
    organization: 'AICTE',
    period: 'Jun 2025 – Aug 2025',
    description: 'Being part of the IBM SkillBuild AI and Cloud Technology Internship has been a truly transformative experience. I had the opportunity to work with advanced tools like NLP, Retrieval-Augmented Generation (RAG), and IBM Cloud services, applying them to real-world projects that enhanced my technical expertise. The program not only sharpened my problem-solving and research skills but also helped me understand how AI and cloud technologies can be leveraged to build impactful solutions.',
    certificateImages: [
      '/images/certificates/internships/ibm-internship.jpg'
    ]
  },
  {
    id: 2,
    title: 'Citizen Developer Intern',
    role: 'Low-Code/No-Code Platform Development',
    organization: 'Mahat Labs Private Limited, Coimbatore',
    period: 'Aug 2023',
    description: 'During my internship at Mahat Labs Private Limited, Coimbatore, I worked as a Citizen Developer using Low-Code/No-Code platforms, where I gained strong familiarity with building real-time applications and hands-on experience in modern development workflows. As part of my learning, I built "The Apartment Hunt", an online platform designed to simplify the process of searching and securing rental properties. Through this project, I learned to create intuitive user interfaces, implement advanced search and filtering features, integrate interactive maps, and design a seamless browsing experience with detailed property listings, images, and virtual tours. This internship helped me strengthen my application-building skills, understand user-centric design, and gain confidence in developing scalable, real-world solutions.',
    certificateImage: '/images/certificates/internships/mahat-internship.jpg'
  },
  {
    id: 3,
    title: 'Full Stack Development Intern',
    role: 'Full Stack Development',
    organization: 'Gateway Software Solutions, Coimbatore',
    period: 'Sep 2022 – Oct 2022',
    description: 'During my internship as a Full Stack Development Intern at Gateways Software Solutions, Coimbatore, I worked on building and enhancing full-stack web applications using technologies like HTML, CSS, JavaScript, Bootstrap, React.js, and backend frameworks such as Java/Node.js with database integration using MySQL or MongoDB. I collaborated with developers on real-world projects, contributed to UI development, API integration, and backend logic, and gained practical experience in debugging, optimization, and deploying applications. This internship strengthened my understanding of software development workflows, improved my problem-solving skills, and gave me hands-on exposure to industry best practices, including version control with Git and agile development.',
    certificateImage: '/images/certificates/internships/gateway-internship.jpg'
  }
];

// Certifications data
export const certifications = [
  // Generative AI Certifications (IBM SkillsBuild)
  {
    id: 1,
    name: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata Group (Forage)',
    date: 'Sep 7, 2025',
    category: 'Data Analytics',
    image: '/images/certificates/tata-forage.jpg'
  },
  {
    id: 2,
    name: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 24, 2025',
    category: 'Generative AI',
    image: '/images/certificates/ibm-ai-getting-started.jpg'
  },
  {
    id: 3,
    name: 'Journey to Cloud: Envisioning Your Solution',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 26, 2025',
    category: 'Generative AI',
    image: '/images/certificates/ibm-cloud-journey.jpg'
  },
  {
    id: 4,
    name: 'Lab: Retrieval Augmented Generation with LangChain',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 26, 2025',
    category: 'Generative AI',
    image: '/images/certificates/ibm-rag-langchain.jpg'
  },
  {
    id: 5,
    name: 'Lab: Build an AI-Powered Document Retrieval System',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 3, 2025',
    category: 'Generative AI',
    image: '/images/certificates/ibm-document-retrieval.jpg'
  },
  // Data Analytics
  
  // NPTEL
  {
    id: 6,
    name: 'Programming in Java',
    issuer: 'NPTEL - IIT Kharagpur',
    date: 'Oct 2023',
    score: '58%',
    category: 'Programming',
    image: '/images/certificates/nptel-java.jpg'
  },
  // HackerRank Certifications
  {
    id: 7,
    name: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    date: 'Oct 12, 2023',
    category: 'Programming',
    image: '/images/certificates/hackerrank-javascript.jpg'
  },
  {
    id: 8,
    name: 'CSS',
    issuer: 'HackerRank',
    date: 'Oct 11, 2023',
    category: 'Frontend',
    image: '/images/certificates/hackerrank-css.jpg'
  },

];

// Contact information
export const contactInfo = {
  email: 'santhoshrisanthu2003@gmail.com',
  phone: '+91 6369737014',
  whatsapp: 'https://wa.me/916369737014',
  phoneLink: 'tel:+916369737014',
  emailLink: 'mailto:santhoshrisanthu2003@gmail.com'
};

// Social profiles
export const socialProfiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/Santhoshri142',
    icon: 'FaGithub'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/santhoshri-sivakumar/',
    icon: 'FaLinkedin'
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/santhoshrisanth1',
    icon: 'FaHackerrank'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/SANTHOSHRI/',
    icon: 'SiLeetcode'
  }
];

// Resume link
export const resumeLink = 'https://drive.google.com/file/d/1jMFtbEO9MkRWB13E17BFcg9pWd-abdBW/view?usp=drive_link';

// Personal info
export const personalInfo = {
  name: 'Santhoshri S',
  title: 'B.E. Electronics & Telecommunication Engineering',
  tagline: 'AI-Driven Problem Solver | Full Stack Developer | IoT & ML Enthusiast',
  about: 'I am a passionate Electronics & Telecommunication Engineering graduate with expertise in AI/ML, full-stack development, and IoT. I love building innovative solutions that combine cutting-edge technology with real-world applications. My experience spans from developing AI-powered assistants to creating automated IoT systems, always with a focus on solving meaningful problems.'
};

