export const profile = {
  name: 'Bindu Manohar',
  title: 'Computer Science and Engineering student at MITM',
  intro: 'Building practical software for real-world challenges.',
  email: 'bindumanohar98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bindumanohar',
  linkedinLabel: 'linkedin.com/in/bindumanohar',
}

export const about = {
  paragraph:
    'I am a motivated Computer Science Engineering undergraduate, currently building my foundation in software development and applying technology to real-world challenges. I value continuous learning, clear communication, and thoughtful problem-solving.',
  education: {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Maharaja Institute of Technology, Mysore',
    years: '2023–2027',
  },
}

export type Project = {
  name: string
  description: string
  emphasis: string
  githubUrl?: string
  demoUrl?: string
  techStack?: string[]
}

export const projects: Project[] = [
  {
    name: 'Library Management System',
    description:
      'Software for managing books, members, borrowing, returns, cataloguing, and due dates.',
    emphasis:
      'Reduces manual work and improves accuracy for smoother day-to-day library operations, including fine tracking on overdue returns.',
    githubUrl: undefined,
    demoUrl: undefined,
    techStack: undefined,
  },
  {
    name: 'Campus Placement Portal',
    description:
      'A web-based system connecting students, colleges, and recruiters through one shared workflow.',
    emphasis:
      'Covers job postings, eligibility checking, applications, interview scheduling, and application tracking from a single dashboard.',
    githubUrl: undefined,
    demoUrl: undefined,
    techStack: undefined,
  },
]

export const skills = {
  technical: ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript'],
  strengths: ['Communication', 'Planning', 'Leadership', 'Time management'],
}

export const certifications = [
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
  },
  {
    name: 'Cloud Practitioner Essentials',
    issuer: 'AWS',
  },
  {
    name: 'Advanced Java',
    issuer: 'LearnQuest',
  },
  {
    name: 'Cyber Security Technologies',
    issuer: 'Illinois Tech',
  },
]

export type Achievement = {
  title: string
  subtitle?: string
  badge: string
  organizer?: string
  description: string
  year?: string
  highlight?: string
}

export const achievements: Achievement[] = [
  {
    title: 'Innovotsava 2026',
    subtitle: 'Project Expo Competition',
    badge: '2nd Runner-Up 🥈',
    description:
      'Secured 2nd Runner-Up in the Project Expo at Innovotsava 2026 for presenting an innovative technical project.',
    year: '2026',
    highlight: 'Project Expo Award',
  },
  {
    title: 'Yugma TechFest 2.0 – MedhaDrishti',
    subtitle: 'National-Level AI Hackathon',
    badge: 'National Finalist',
    organizer: 'Jawaharlal Nehru National College of Engineering (JNNCE), Shivamogga',
    description:
      'Collaborated with a team to design and develop AI-driven solutions in a competitive national-level hackathon environment.',
    year: '2026',
    highlight: 'National-Level AI Hackathon',
  },
  {
    title: 'HACKVERSE',
    subtitle: 'Stack Forge Hackathon',
    badge: 'Hackathon',
    organizer: 'Maharaja Institute of Technology, Mysore',
    description:
      'Competed in a Stack Forge hackathon solving real-world challenges through rapid prototyping and collaborative teamwork.',
    year: '2024',
    highlight: 'Stack Forge Hackathon',
  },
]

// Backward-compatible alias
export const participation = achievements

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
