const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ololade Otemade',
  role: 'Software Engineer',
  description:
    'I am a detail-oriented software engineer passionate about building intuitive, high-quality applications that prioritize user experience, performance, and security. With strong expertise in fintech development and modern best practices, I focus on delivering solutions that are both user-friendly and robust. Recently, I’ve expanded my skill set into AI, integrating intelligent features that enhance usability and unlock new possibilities for businesses. Driven by excellence, I consistently aim to create applications that not only meet requirements but also exceed user expectations.',
  resume: 'https://drive.google.com/file/d/1YRubRnK__3xFSaW2vR3BqDlap2Z2z3oz/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ololade-otemade-72959613a/',
    github: 'https://github.com/iamLolade',
  },
}

const projects = [
  {
    name: 'Fayoade Farms',
    description:
      "A modern, responsive website built for Fayoade Farms to showcase their agricultural products and services. Designed with performance and usability in mind, the site highlights the brand’s mission and offerings in a clean, accessible layout.",
    stack: ['Next', 'Tailwind CSS', 'SEO'],
    sourceCode: 'https://github.com/iamLolade/fayoade-farms',
    livePreview: 'https://www.fayoadefarms.com/',
  },
  {
    name: 'NotTech',
    description:
      'The official website for NotTech Ltd, a software solutions company. Built with modern frontend tools, the website provides clear information on services, landing pages for products, and an optimized structure for easy navigation and visibility.',
    stack: ['Next', 'Tailwind CSS', 'Shadcn', 'SEO'],
    sourceCode: 'https://github.com/iamLolade/nottech-official-website',
    livePreview: 'https://www.nottechltd.com/',
  },
  {
    name: 'Cryptic Solutions',
    description:
      'Cryptic Solutions is a creative tech company that helps businesses and creators bring their ideas to life. We build clean, modern websites, develop smart software solutions, design strong brand identities, and create engaging digital content. Our focus is simple: combine strategy, creativity, and technology to help brands grow, scale, and stand out with confidence.',
    stack: ['Next', 'Typescript', 'Tailwind CSS', 'Hooks'],
    sourceCode: 'https://github.com/Cryptic-decode/crypticsolutions',
    livePreview: 'https://www.crypticsolutionsltd.com',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Redux',
  'SASS',
  'Material UI',
  'Chakra UI',
  'Radix UI',
  'Styled-Components',
  'Tailwind CSS',
  'Shadcn',
  'Git',
  'CI/CD',
  'Jest',
  'MongoDB',
  'Node',
  'Solidity',
  'Artificial Intelligence (AI)',
  'Prompt Engineering'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adeniyiotemade@mail.com',
}

export { header, about, projects, skills, contact }
