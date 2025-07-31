<script setup lang="ts">
import { getQuoteOfTheDay } from '~/assets/ts/quotes'

const quote = getQuoteOfTheDay()
</script>

<template>
  <div class="glass-effect rounded-xl p-6 shadow-lg">
    <div class="text-center flex flex-col justify-center h-full">
      <div class="mb-4">
        <svg class="w-8 h-8 mx-auto text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
          />
        </svg>
      </div>
      <blockquote
        class="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-4 leading-relaxed"
      >
        "{{ quote.text }}"
      </blockquote>
      <cite class="text-sm text-gray-600 dark:text-gray-400 font-medium">
        — {{ quote.author }}
      </cite>
    </div>
  </div>
</template>
