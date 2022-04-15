<template>
  <nuxt-link :to="article.url">
    <article class="group flex flex-col items-start gap-3">
      <picture class="mb-2 flex w-full overflow-hidden rounded bg-lightblue transition-all duration-500 group-hover:brightness-110">
        <img class="aspect-video object-cover" :src="article.image.url" />
      </picture>
      <span class="text-sm"
        ><strong>{{ article.category }}</strong> – {{ formattedDate }}</span
      >
      <h3 class="text-3xl font-bold leading-normal text-dark">
        {{ article.title }}
      </h3>
      <p class="line-clamp line-clamp-4 leading-loose">{{ article.summary }}</p>
      <Button label="Lees meer" />
    </article>
  </nuxt-link>
</template>

<script setup>
import { computed } from '@nuxtjs/composition-api'
const props = defineProps({
  article: {
    type: Object,
  },
})
const formattedDate = computed(() => {
  const date = new Date(props.article.updateDate)
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
})
</script>

<style>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  -webkit-line-clamp: 3;
}
.line-clamp-4 {
  -webkit-line-clamp: 4;
}
</style>
