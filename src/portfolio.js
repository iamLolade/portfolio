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
    'I am a software engineer interested in building applications with beautiful user interfaces; that lead to a satisfactory user experience. I thrive on building quality applications that surpass end users’ expectations.',
  resume: 'https://drive.google.com/file/d/1XoPG91UI8GyhCmtdSJBq9nmfi7ISnOc-/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ololade-otemade-72959613a/',
    github: 'https://github.com/iamLolade',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Cliff',
    description:
      "Book List Demo Application. It is used to keep track of the number of books, stores list of books and add/remove the book's title and author’s name to/from the list",
    stack: ['CSS', 'React', 'Hooks', 'Context'],
    sourceCode: 'https://github.com/iamLolade/cliff',
    livePreview: 'https://cliffbooks.netlify.app',
  },
  {
    name: 'Udux',
    description:
      'Music player dashboard user-interface (UI). Created with react, styled-components and gsap',
    stack: ['Gsap', 'Styled-Components', 'React', 'Hooks'],
    sourceCode: 'https://github.com/iamLolade/udux_player',
    livePreview: 'https://uduxplayer.netlify.app/',
  },
  {
    name: 'Konoha',
    description:
      'Konoha is a memory game based of the famous anime "Naruto". Test your memory today, complete the game by matching all duplicate Naruto characters',
    stack: ['SASS', 'React', 'Hooks'],
    sourceCode: 'https://github.com/iamLolade/konoha',
    livePreview: 'https://konohagame.netlify.app',
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
