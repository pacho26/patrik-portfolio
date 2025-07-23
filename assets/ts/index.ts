export type IconType = 'github' | 'link'

type LinkModel = {
  label: string
  url: string
  icon?: IconType
}

export type ImageModel = {
  src: string
  title: string
}

export type ProjectModel = {
  name: string
  shortDescription: string
  longDescription: string
  year: number
  technologies: string[]
  previewImg: string
  images: ImageModel[]
  slug: string
  links?: LinkModel[]
}

export const projects: ProjectModel[] = [
  {
    name: 'Akordia',
    shortDescription:
      'A web platform built for musicians to share, review, and explore song chords collaboratively.',
    longDescription:
      'Akordia is a web platform built for musicians to share, review, and explore song chords collaboratively. Users can submit chord sheets, which go through a peer-voting system before being published. Powered by Vue, Express, and MongoDB, Akordia modernizes how musicians access and manage chords while connecting them through shared musical interests.',
    year: 2022,
    technologies: ['Vue', 'TypeScript', 'UnoCSS', 'Express', 'MongoDB'],
    previewImg: '/img/projects/akordia/akordia-homepage.webp',
    images: [
      {
        src: '/img/projects/akordia/akordia-song.webp',
        title: 'Song Chords Request For Rating',
      },
      {
        src: '/img/projects/akordia/akordia-homepage.webp',
        title: 'Song Chords Request For Rating',
      },
      {
        src: '/img/projects/akordia/akordia-new-request.webp',
        title: 'Song Chords Request For Rating',
      },
      {
        src: '/img/projects/akordia/akordia-review.webp',
        title: 'Song Chords Request For Rating',
      },
      {
        src: '/img/projects/akordia/akordia-advertisement.webp',
        title: 'Song Chords Request For Rating',
      },
      {
        src: '/img/projects/akordia/akordia-user-songs.webp',
        title: 'Song Chords Request For Rating',
      },
    ],
    slug: 'akordia',
    links: [
      {
        label: 'Live demo',
        url: 'https://akordia.vercel.app/',
        icon: 'link',
      },
      {
        label: 'Frontend repository',
        url: 'https://github.com/pacho26/akordia-frontend',
        icon: 'github',
      },
      {
        label: 'Backend repository',
        url: 'https://github.com/pacho26/akordia-backend',
        icon: 'github',
      },
    ],
  },
  {
    name: 'Alias',
    shortDescription:
      'A web app replica of a popular social game, enhanced with many new features.',
    longDescription:
      'A web app replica of a popular social game, enhanced with many new features. Available in Croatian and English. A personal summer side project.',
    year: 2021,
    technologies: ['Vue', 'Nuxt', 'SCSS'],
    previewImg: '/img/projects/akordia/preview.webp',
    images: [
      {
        src: '/img/projects/akordia/preview.webp',
        title: 'Song chords',
      },
    ],
    slug: 'alias',
    links: [
      {
        label: 'Live demo',
        url: 'https://alias-game.vercel.app/',
        icon: 'link',
      },
      {
        label: 'Repository',
        url: 'https://github.com/pacho26/alias-game',
        icon: 'github',
      },
    ],
  },
  {
    name: 'Aimo',
    shortDescription:
      'Social media platform connecting ambitious individuals with accountability partners.',
    longDescription:
      'A social media platform for motivated individuals who desire self-improvement and need an accountability partner to help complete their tasks.',
    year: 2021,
    technologies: ['Vue', 'Tailwind CSS', 'Firebase'],
    previewImg: '/img/projects/akordia/preview.webp',
    images: [
      {
        src: '/img/projects/akordia/preview.webp',
        title: 'Song chords',
      },
    ],
    slug: 'aimo',
    links: [
      {
        label: 'Live demo',
        url: 'https://aimo.vercel.app',
        icon: 'link',
      },
      {
        label: 'Repository',
        url: 'https://github.com/matijaoe/aimo',
        icon: 'github',
      },
    ],
  },
]

type Company = {
  name: string
  logo: string
  url: string
}

export type ExperienceModel = {
  company: Company
  role: string
  location: string
  descriptionList: string[]
  technologies: string[]
  period: string
}

export const experiences: ExperienceModel[] = [
  {
    company: {
      name: 'Four of Them LLC',
      logo: '/img/logos/4ot-logo.png',
      url: 'https://4ofthem.eu/',
    },
    role: 'Frontend Developer',
    location: 'Zaprešić, Croatia',
    descriptionList: [
      'Developed an existing high-traffic e-commerce platform from scratch with the aim to modernize its stack and improve performance',
      'Built admin-side components from scratch used to configure the features of the platform mentioned earlier',
      'Maintained and implemented new features for a software development kit designed for standalone web components used in client integrations',
      'Continuous code reviews, focusing on knowledge sharing, maintaining code quality, and supporting team members',
    ],
    technologies: ['JavaScript', 'Vue', 'Node.js'],
    period: 'Oct 2022 — Present',
  },
  {
    company: {
      name: 'Three of them Ltd.',
      logo: '/img/logos/3ot-logo.png',
      url: 'https://www.3ofthem.eu/',
    },
    role: 'Junior Frontend Developer',
    location: 'Zaprešić, Croatia',
    descriptionList: [
      'Maintained and implemented new features for high-traffic e-commerce platform',
      'Worked on a Vaccine Reservation System, crucial during the COVID-19 pandemic',
      'Built a component library alongside Storybook for testing and documenting components, ensuring both visual and functional accuracy',
      'Built an API library using TypeScript for use across projects',
    ],
    technologies: ['HTML', 'CSS', 'React'],
    period: 'Dec 2021 — Sep 2022',
  },
]
