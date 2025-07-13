<script lang="ts" setup>
interface ContactItem {
  icon: string
  text: string
  url: string
  newTab?: boolean
}

const contactItems: ContactItem[] = [
  {
    icon: 'uil:linkedin',
    text: 'Patrik Slovic',
    url: 'https://www.linkedin.com/in/patrik-slovic/',
    newTab: true,
  },
  {
    icon: 'uil:github',
    text: 'pacho26',
    url: 'https://github.com/pacho26',
    newTab: true,
  },
  {
    icon: 'uil:envelope',
    text: 'patrikslovic@gmail.com',
    url: 'mailto:patrikslovic@gmail.com',
  },
]

const sectionClass = 'flex items-center gap-4'
</script>

<template>
  <div>
    <MyHeading as="h3" :level="6" class="font-medium leading-4">Let's connect</MyHeading>
    <div class="mt-4 flex flex-col gap-4">
      <div v-for="item in contactItems" :key="item.text" :class="sectionClass">
        <Icon :name="item.icon" size="24px" />
        <MyLink :to="item.url" :new-tab="item.newTab" custom-class="text-xs">
          {{ item.text }}
        </MyLink>
      </div>
    </div>
  </div>
</template>
