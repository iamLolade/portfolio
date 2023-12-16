const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ololade Otemade',
  role: 'Frontend Engineer',
  description:
    'I am detail-oriented software engineer dedicated to crafting user-friendly applications and delivering exceptional user experiences. Passionate about leveraging my expertise to ensure the highest standards of security in fintech development. Committed to excellence, I excel in creating quality applications that consistently exceed user expectations.',
  resume: 'https://drive.google.com/file/d/1I-mD2TGvZRaPnFZkUgzw2Lt_tQyTWB2M/view?usp=drive_link',
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
    name: 'Grocerease',
    description:
      'Your virtual marketplace for all things groceries! Effortlessly browse products, explore categories, access services, and purchase your grocery. ',
    stack: ['Tailwind CSS', 'Next', 'Typescript', 'Hooks'],
    sourceCode: 'https://github.com/iamLolade/grocerease-store',
    livePreview: 'https://grocerease-store.vercel.app',
  },
  {
    name: 'Grocerease - Admin',
    description:
      'Your central command for managing the grocery store! Effortlessly oversee products, analyze sales, access analytics, and stay connected for a streamlined administrative experience.',
    stack: ['Tailwind CSS', 'Next', 'Typescript', 'Hooks'],
    sourceCode: 'https://github.com/iamLolade/grocerease',
    livePreview: 'https://grocerease-admin.vercel.app',
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
  'Styled-Components',
  'Tailwind CSS',
  'Git',
  'CI/CD',
  'Jest',
  'MongoDB',
  'Node',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adeniyiotemade@mail.com',
}

export { header, about, projects, skills, contact }
