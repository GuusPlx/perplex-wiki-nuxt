<template>
  <div class="bg-blue p-4 text-white">
    <span>{{ authorName }}</span>
    <span>{{ authorFunction }}</span>
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const props = defineProps({
  authorName: String,
  authorFunction: String
})

</script>
