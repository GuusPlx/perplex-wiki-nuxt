<template>
  <picture class="w-full">
    <img class="aspect-video w-full rounded-md bg-lightblue object-cover" :src="src" alt="" />
  </picture>
</template>
<script setup>
const props = defineProps({
  src: {
    type: String,
  },
})
</script>
<style lang=""></style>
