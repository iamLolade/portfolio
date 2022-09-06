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
  resume: 'https://drive.google.com/file/d/1d8r3LKJk099wovqaG66b62YTEgcDv6CZ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ololade-otemade-72959613a/',
    github: 'https://github.com/iamLolade',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tipex',
    description:
      `Single-page application, implementing JavaScript Document Object Model (DOM) manipulation. User can input text and make grammatical corrections.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/iamLolade/tipex',
    livePreview: 'https://iamlolade.github.io/tipex/',
  },
  {
    name: 'Cliff',
    description:
      "Book List Demo Application. It is used to keeps track of the number of books, stores list of books and add/remove the book's title and author’s name to/from the list",
    stack: ['CSS', 'React', 'Hooks', 'Context'],
    sourceCode: 'https://github.com/iamLolade/cliff',
    livePreview: 'https://cliffbooks.netlify.app',
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
  'Redux',
  'SASS',
  'Material UI',
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
