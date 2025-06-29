import { projects } from '~/assets/ts/index'

export const useProject = () => {
  const getProjectBySlug = (slug: string) => {
    return projects.find(project => project.slug === slug)
  }

  return {
    getProjectBySlug,
  }
}
