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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fluently',
    description:
      "Your interactive language companion for immersive learning! Engage in conversations with native speakers, refine pronunciation, access language resources, connect with tutors, and track progress for a personalized learning experience.",
    stack: ['Chakra UI', 'Next', 'Hooks', 'SEO'],
    sourceCode: 'https://github.com/joeephwild/fluently-app',
    livePreview: 'https://fluently-app.vercel.app',
  },
  {
    name: 'Wordana',
    description:
      'Wordana is a wordle game that is built on the Lightlink blockchain network. The game makes use of the API 3 Quantum Random Number Generator protocol to whip up a collection of random words.',
    stack: ['Tailwind CSS', 'Next', 'Typescript', 'Hooks'],
    sourceCode: 'https://github.com/Havorahq/wordana',
    livePreview: 'https://wordana.vercel.app/',
  },
  {
    name: 'Xalari',
    description:
      'Blockchain payroll service for the new wave of remote work. You gain the ability to hire with flexibility from any part of the world and make seamless crypto payments to your employees & contractors',
    stack: ['Tailwind CSS', 'Next', 'Typescript', 'Hooks'],
    sourceCode: 'https://github.com/Havorahq/payrol',
    livePreview: 'https://app.xalari.com/',
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
