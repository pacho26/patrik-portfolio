<script lang="ts" setup>
const sectionClass = 'flex items-center gap-4'
</script>

<template>
  <div>
    <MyHeading as="h3" :level="6" class="font-medium leading-4">Let's connect</MyHeading>
    <div class="mt-4 flex flex-col gap-4">
      <div :class="sectionClass">
        <Icon name="uil:linkedin" size="24px" />
        <MyLink to="https://www.linkedin.com/in/patrik-slovic/" new-tab custom-class="text-xs"
          >Patrik Slovic</MyLink
        >
      </div>

      <div :class="sectionClass">
        <Icon name="uil:github" size="24px" />
        <MyLink to="https://github.com/pacho26" new-tab custom-class="text-xs">pacho26</MyLink>
      </div>

      <div :class="sectionClass">
        <Icon name="uil:envelope" size="24px" />
        <MyLink to="mailto:patrikslovic@gmail.com" custom-class="text-xs"
          >patrikslovic@gmail.com</MyLink
        >
      </div>
    </div>
  </div>
</template>
