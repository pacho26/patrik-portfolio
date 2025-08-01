<script lang="ts" setup>
useHead({
  title: 'About | Patrik Slovic',
  meta: [
    {
      name: 'description',
      content:
        'Learn more me – my education background, personal interests, and professional qualities.',
    },
  ],
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display font-bold"
      >Here’s A Bit More About <span class="text-yellow-600">Me</span></MyHeading
    >
    <div class="mt-8 sm:mt-12 space-y-8 md:space-y-12">
      <section>
        <MyHeading as="h2" :level="4" class="font-500">Education</MyHeading>
        <AboutEducation class="mt-4 p-4 glass-effect rounded-lg" />
      </section>

      <section class="text-grey-200 space-y-4">
        <p>
          I consider myself a relaxed and approachable individual who enjoys contributing to a
          positive and supportive work environment. One of my key strengths is persistence—when I
          set a goal, I stay committed until I achieve it.
        </p>
        <p>
          I'm continuously learning new things and working on new projects. Currently, I'm focused
          on improving my backend skills and exploring React to gain more flexibility — even though
          Vue is still my favorite.
        </p>
        <p>
          Outside of tech, I have nearly a decade of experience playing in a band at various events.
        </p>
        <p>
          In my free time, I enjoy participating in pub quizzes, engaging in various sports,
          reading, going to the cinema, and spending quality time with loved ones. Taking time to
          recharge my batteries is essential for maintaining productivity and creativity.
        </p>
      </section>

      <div class="flex flex-col gap-8 md:flex-row">
        <AboutLanguages class="p-4 glass-effect rounded-lg" />
        <AboutQuote />
      </div>
    </div>
  </div>
</template>
