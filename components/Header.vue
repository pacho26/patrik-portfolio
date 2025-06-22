<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-between">
    <MyLink to="/">Home</MyLink>
    <nav class="flex justify-end items-center gap-8">
      <MyLink to="/experience">Experience</MyLink>
      <MyLink to="/projects">Projects</MyLink>
      <MyButton to="/contact" variant="secondary" button-class="uppercase">Contact</MyButton>
    </nav>
  </div>
</template>
