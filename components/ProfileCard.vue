<template>
  <div class="glass-effect p-8 flex flex-col items-center rounded-lg">
    <ProfileImage />
    <MyHeading as="h2" :level="4" class="!text-3xl sm:!text-4xl mt-6 font-bold">
      Patrik Slovic
    </MyHeading>
    <p class="text-grey-200 mt-2">Frontend Developer & Musician</p>
    <p class="text-grey-200 mt-2">Zagreb, Croatia</p>
    <div class="mt-4 flex gap-2.5">
      <MyIconLink
        href="https://www.linkedin.com/in/patrik-slovic/"
        icon="uil:linkedin"
        label="LinkedIn"
        size="28px"
        new-tab
      ></MyIconLink>
      <MyIconLink
        href="https://github.com/pacho26"
        icon="uil:github"
        label="GitHub"
        size="28px"
        new-tab
      ></MyIconLink>
      <MyIconLink
        href="mailto:patrikslovic@gmail.com"
        icon="uil:envelope"
        label="Email"
        size="28px"
        new-tab
      ></MyIconLink>
    </div>
    <MyButton to="/contact" class="mt-10 w-full">Let’s Talk</MyButton>
    <a href="/patrik-slovic-resume.pdf" target="_blank" rel="noopener" class="mt-4 w-full">
      <MyButton variant="secondary" class="w-full">View Resume</MyButton>
    </a>
  </div>
</template>
