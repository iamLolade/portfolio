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
  resume: 'https://drive.google.com/file/d/15pMxgtQ0SEZ1oGPvXYgkX63RxbOsycWN/view?usp=drive_link',
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
    stack: ['Next', 'Chakra UI', 'SEO'],
    sourceCode: 'https://github.com/iamLolade/fayoade-farms',
    livePreview: 'https://www.fayoadefarms.com/',
  },
  {
    name: 'NotTech Website',
    description:
      'The official website for NotTech Ltd, a software solutions company. Built with modern frontend tools, the website provides clear information on services, landing pages for products, and an optimized structure for easy navigation and visibility.',
    stack: ['Next', 'Tailwind CSS', 'SEO'],
    sourceCode: 'https://github.com/iamLolade/nottech-official-website',
    livePreview: 'https://www.nottechltd.com/',
  },
  {
    name: 'Wordana',
    description:
      'Wordana is a wordle game built on the Lightlink blockchain network. It leverages the API 3 Quantum Random Number Generator protocol to generate random words, creating a secure and engaging gaming experience.',
    stack: ['Next', 'Typescript', 'Tailwind CSS', 'Hooks'],
    sourceCode: 'https://github.com/Havorahq/wordana',
    livePreview: 'https://wordana.vercel.app/',
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
  'Solidity'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adeniyiotemade@mail.com',
}

export { header, about, projects, skills, contact }
