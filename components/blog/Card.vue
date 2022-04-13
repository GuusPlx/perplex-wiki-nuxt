<template>
  <article class="group flex flex-col items-start gap-3">
    <picture class="mb-2 flex overflow-hidden rounded">
      <img class="aspect-video object-cover" :src="article.imageUrl" />
    </picture>
    <span class="text-sm"><strong>Innovatie</strong> – 08-10-2021</span>
    <h3 class="text-3xl font-bold leading-normal text-dark">
      {{ article.title }}
    </h3>
    <p class="line-clamp line-clamp-4 leading-loose">{{ article.summary }}</p>
    <Button :to="'/blogDetail'" label="Lees meer" />
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
  },
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
