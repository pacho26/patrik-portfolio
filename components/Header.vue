<script lang="ts" setup>
import PsLogoSvg from '@/assets/img/ps-logo.svg'
</script>

<template>
  <div class="flex items-center justify-between">
    <MyLink to="/" no-hover-underline aria-label="Home">
      <NuxtImg width="36" :src="PsLogoSvg" alt="Home" />
    </MyLink>
    <nav class="flex justify-end items-center gap-8 text-white">
      <MyLink to="/experience">Experience</MyLink>
      <MyLink to="/projects">Projects</MyLink>
    </nav>
  </div>
</template>
