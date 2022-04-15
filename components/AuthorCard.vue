<template>
  <div class="relative flex max-w-xs items-center space-x-4 self-end rounded-md bg-blue p-4 text-white">
    <picture class="w-[60px] flex-shrink overflow-hidden rounded-full">
      <img class="aspect-square h-full w-full object-cover" :src="authorImageUrl" />
    </picture>
    <div class="flex-auto gap-4">
      <p class="font-bold">{{ authorName }}</p>
      <p>{{ authorFunction }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const props = defineProps({
  authorName: String,
  authorFunction: String,
  authorImageUrl: String,
})
</script>
