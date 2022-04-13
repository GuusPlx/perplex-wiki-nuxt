<template>
  <div class="bg-blue p-4 text-white">
    {{ authorName }}
  </div>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const props = defineProps({
  authorName: String,
})

</script>
