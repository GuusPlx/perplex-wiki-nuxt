<template>
  <article class="flex flex-col justify-start gap-6">
    <picture class="flex overflow-hidden rounded">
      <img class="aspect-video object-cover" :src="article.imageUrl" />
    </picture>
    <h3 class="text-3xl">{{ article.title }}</h3>
    <span>Innovatie – 08-10-2021</span>
    <div class="line-clamp line-clamp-3">
      <p>{{ article.summary }}</p>
    </div>
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
