<template>
  <div class="flex flex-col items-center">
    <div class="relative w-[200px] h-[200px] group cursor-pointer rounded-full perspective-1000">
      <div
        class="relative w-full h-full rounded-full transition-transform duration-700 transform-3d group-hover:rotate-y-180"
      >
        <NuxtImg
          src="img/profile-illustration.png"
          alt="Profile animated"
          width="192"
          height="192"
          class="rounded-full absolute inset-0 backface-hidden"
        />
        <NuxtImg
          src="img/profile-real.jpg"
          alt="Profile real"
          width="192"
          height="192"
          class="rounded-full absolute inset-0 backface-hidden rotate-y-180"
        />
      </div>
    </div>
    <MyHeading as="h1" :level="3" class="mt-4 font-medium">Patrik Slovic</MyHeading>
    <MyHeading as="h2" :level="5">Frontend developer & Musician</MyHeading>
  </div>
</template>
