<template>
  <component
    :is="renderedComponent"
    :to="to"
    class="hover:text-stone-100 flex border-b-2 py-3.5 px-6 font-bold"
  >
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
