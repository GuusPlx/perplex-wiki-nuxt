<template>
  <div class="flex self-end relative bg-blue text-white rounded-md p-4 items-center space-x-4 max-w-xs">
    <picture class="overflow-hidden flex-shrink rounded-full max-w-[60px]">
      <img class="aspect-square object-cover" :src="authorImageUrl" />
    </picture>
    <div class="flex-auto gap-4">
        <p class="font-bold">{{authorName}}</p>
        <p>{{authorFunction}}</p>
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

