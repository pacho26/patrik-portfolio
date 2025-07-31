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
      'Rebuilt the largest e-commerce platform for pharmacies in Germany from scratch, modernizing the technology stack and enhancing performance',
      'Built admin-side components from scratch, used to configure the features of the platform mentioned above',
      'Maintained and implemented new features for a software development kit designed for standalone web components used in client integrations',
      'Performed continuous code reviews, focusing on knowledge sharing, maintaining code quality, and supporting team members',
      'Attended three web summer camps, participating in the JavaScript track and conference program',
    ],
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'UnoCSS', 'Storybook', 'Strapi'],
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
      'Maintained and implemented new features for the largest e-commerce platform for pharmacies in Germany',
      'Worked on a Vaccine Reservation System, crucial during the COVID-19 pandemic',
      'Built a component library alongside Storybook for testing and documenting components, ensuring both visual and functional accuracy',
      'Built an API library using TypeScript for use across projects',
    ],
    technologies: ['Vue', 'TypeScript', 'UnoCSS', 'Storybook'],
    period: 'Dec 2021 — Sep 2022',
  },
]
