<template>
  <div class="flex flex-col items-center">
    <HomepageProfileImage />
    <MyHeading as="h1" :level="3" class="mt-4 font-bold">Patrik Slovic</MyHeading>
    <MyHeading as="h2" :level="5" class="text-grey-100 font-medium"
      >Frontend Developer & Musician</MyHeading
    >
    
    <div class="mt-4 flex flex-col gap-4 w-full">
      <HomepageBasicInfo class="bg-dark p-4 rounded" />
      <HomepageLanguages class="bg-dark p-4 rounded" />
    </div>
  </div>
</template>