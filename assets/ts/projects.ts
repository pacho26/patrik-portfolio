type IconType = 'github' | 'link'

type LinkModel = {
  label: string
  url: string
  icon?: IconType
}

export type ImageModel = {
  src: string
  title: string
}

type ImageOrientationModel = 'horizonal' | 'vertical'

export type ProjectModel = {
  name: string
  shortDescription: string
  longDescription: string
  year: number
  technologies: string[]
  previewImg: string
  images: ImageModel[]
  imagesOrientation?: ImageOrientationModel
  slug: string
  links?: LinkModel[]
}

export const projects: ProjectModel[] = [
  {
    name: 'Akordia',
    shortDescription: 'A collaborative platform for musicians to share and explore song chords.',
    longDescription:
      'Akordia is a web platform built for musicians to share, review, and explore song chords collaboratively. Users can submit chord sheets, which go through a peer-voting system before being published.<br>Akordia modernizes how musicians access and manage chords while connecting them through shared musical interests.<br>Developed as a college graduation project.',
    year: 2022,
    technologies: ['Vue', 'UnoCSS', 'Express', 'MongoDB'],
    previewImg: '/img/projects/akordia/akordia-preview.webp',
    images: [
      {
        src: '/img/projects/akordia/akordia-song.webp',
        title: 'Song Page with Chords',
      },
      {
        src: '/img/projects/akordia/akordia-homepage.webp',
        title: 'Akordia Homepage',
      },
      {
        src: '/img/projects/akordia/akordia-new-request.webp',
        title: 'Add New Song Request Form',
      },
      {
        src: '/img/projects/akordia/akordia-review.webp',
        title: 'Song Request Review Page',
      },
      {
        src: '/img/projects/akordia/akordia-advertisement.webp',
        title: 'Music Advertisement',
      },
      {
        src: '/img/projects/akordia/akordia-user-songs.webp',
        title: "Logged-in User's Song List",
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
      "A web app replica of the popular social game, enhanced with many new features: record your voice during rounds, celebrate victories with Queen's “We Are The Champions” and a burst of confetti, choose unique team avatars, and much more. Available in Croatian and English.<br>Created as a fun summer side project.",
    year: 2021,
    technologies: ['Vue', 'Nuxt', 'SCSS'],
    previewImg: '/img/projects/alias/alias-preview.webp',
    images: [
      {
        src: '/img/projects/alias/alias-homepage.webp',
        title: 'Alias Homepage',
      },
      {
        src: '/img/projects/alias/alias-config.webp',
        title: 'Game Configuration',
      },
      {
        src: '/img/projects/alias/alias-game-start.webp',
        title: 'Game Start Screen',
      },
      {
        src: '/img/projects/alias/alias-in-game.webp',
        title: 'In-Game View',
      },
      {
        src: '/img/projects/alias/alias-round-overview.webp',
        title: 'Round Overview',
      },
      {
        src: '/img/projects/alias/alias-celebration.webp',
        title: 'Winning Celebration',
      },
    ],
    imagesOrientation: 'vertical',
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
      'A social media platform for motivated individuals who desire self-improvement and need an accountability partner to help complete their tasks.<br><br>🥇 Winning project of TVZ Mc2 2021<br>🥇 Winner of Best Design Award on TVZ Mc2 2021',
    year: 2021,
    technologies: ['Vue', 'Tailwind CSS', 'Firebase'],
    previewImg: '/img/projects/aimo/aimo-preview.webp',
    images: [
      {
        src: '/img/projects/aimo/aimo-start-screen.webp',
        title: 'Start Screen',
      },
      {
        src: '/img/projects/aimo/aimo-homepage.webp',
        title: 'Homepage with Motivational Notes',
      },
      {
        src: '/img/projects/aimo/aimo-todos.webp',
        title: "To-Do List with Your and Your Partner's Tasks",
      },
      {
        src: '/img/projects/aimo/aimo-community.webp',
        title: 'Community Page with the Latest Tasks',
      },
      {
        src: '/img/projects/aimo/aimo-profile.webp',
        title: 'User Profile',
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
