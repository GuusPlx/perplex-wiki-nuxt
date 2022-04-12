<template>
  <component :is="renderedComponent" :to="to">
    {{ label }}
  </component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const props = defineProps({
  label: {
    type: String,
  },
  to: String
})

const renderedComponent = ref( props.to ? 'NuxtLink' : 'button')
</script>
