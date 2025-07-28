<template>
  <div class="glass-effect p-8 flex flex-col items-center rounded-lg">
    <ProfileImage />
    <MyHeading as="h2" :level="4" class="!text-3xl sm:!text-4xl mt-6 font-bold"
      >Patrik Slovic</MyHeading
    >
    <p class="text-grey-200 mt-2">Frontend Developer & Musician</p>
    <p class="text-grey-200 mt-2">Zagreb, Croatia</p>
    <div class="mt-4 flex gap-2">
      <MyIconLink
        to="https://www.linkedin.com/in/patrik-slovic/"
        icon="uil:linkedin"
        label="LinkedIn"
        hide-label
      ></MyIconLink>
      <MyIconLink
        to="https://github.com/pacho26"
        icon="uil:github"
        label="GitHub"
        hide-label
      ></MyIconLink>
      <MyIconLink
        to="mailto:patrikslovic@gmail.com"
        icon="uil:envelope"
        label="E-Mail"
        hide-label
      ></MyIconLink>
    </div>
    <MyButton to="/contact" class="mt-16 w-full">Let’s talk</MyButton>
    <MyButton
      variant="secondary"
      to="/patrik-slovic-resume.pdf"
      target="_blank"
      rel="noopener"
      class="mt-4 w-full"
      >View Resume</MyButton
    >
  </div>
</template>
