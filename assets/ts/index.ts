export type ProjectModel = {
  name: string
  description: string
  year: number
  technologies: string[]
  imgSrc: string
  slug: string
}

export const projects: ProjectModel[] = [
  {
    name: 'Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    year: 2023,
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
    imgSrc: 'portfolio-images/akordia-song-preview.png',
    slug: 'project-one',
  },
  {
    name: 'Project Two',
    description: 'This is a description of project two.',
    year: 2022,
    technologies: ['React', 'Next.js', 'JavaScript'],
    imgSrc: 'portfolio-images/akordia-song-preview.png',
    slug: 'project-two',
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
      logo: 'portfolio-images/logos/4ot-logo.png',
      url: 'https://4ofthem.eu/',
    },
    role: 'Frontend Engineer',
    location: 'Zaprešić, Croatia',
    descriptionList: [
      'Developed an existing high-traffic e-commerce platform from scratch with the aim to modernize its stack and improve performance',
      'Built admin-side components from scratch used to configure the features of the platform mentioned earlier',
      'Maintained and implemented new features for a software development kit designed for standalone web components used in client integrations',
      'Continuous code reviews, focusing on knowledge sharing, maintaining code quality, and supporting team members',
    ],
    technologies: ['JavaScript', 'Vue', 'Node.js'],
    period: 'May 2023 — Present',
  },
  {
    company: {
      name: 'Three of them Ltd.',
      logo: 'portfolio-images/logos/3ot-logo.png?updatedAt=1751123146841',
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
