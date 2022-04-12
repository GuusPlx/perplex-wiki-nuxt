<template>
  <component :is="renderedComponent">
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
