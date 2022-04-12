<template>
  <component
    :is="renderedComponent"
    class="hover:text-stone-100 flex border-b-2 py-3.5 px-6 font-bold"
  >
    {{ label }}
  </component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

defineProps({
  label: {
    type: String,
  },
})

const renderedComponent = ref('button')
</script>
