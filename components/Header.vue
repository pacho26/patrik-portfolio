<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-between">
    <MyLink to="/" class="hidden lg:block">Home</MyLink>
    <MyLink to="/" class="block lg:hidden">
      <FontAwesome :icon="['fas', 'house']" />
    </MyLink>
    <nav class="flex justify-end items-center gap-8">
      <MyLink to="/experience">Experience</MyLink>
      <MyLink to="/projects">Projects</MyLink>
    </nav>
  </div>
</template>
