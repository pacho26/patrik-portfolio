<script lang="ts" setup>
const route = useRoute()

const isActive = computed(() => {
  const currentPath = route.path
  return {
    home: currentPath === '/',
    experience: currentPath === '/experience',
    projects: currentPath.startsWith('/projects'),
    about: currentPath === '/about',
    contact: currentPath === '/contact',
  }
})
</script>

<template>
  <div class="flex items-center justify-center w-fit mx-auto">
    <nav
      class="px-5 py-1.5 flex items-center justify-between gap-2 glass-effect rounded-xl w-[335px] z-10"
    >
      <MyIconLink to="/" icon="uil:estate" label="Home" :is-active="isActive.home" />
      <MyIconLink
        to="/experience"
        icon="uil:briefcase"
        label="Experience"
        :is-active="isActive.experience"
      />
      <MyIconLink
        to="/projects"
        icon="uil:folder"
        label="Projects"
        :is-active="isActive.projects"
      />
      <MyIconLink to="/about" icon="uil:user" label="About" :is-active="isActive.about" />
      <MyIconLink
        to="/contact"
        icon="uil:envelope"
        label="Contact"
        :is-active="isActive.contact"
      />
    </nav>
  </div>
</template>
