<template>
  <component
    :is="renderedComponent"
    :to="to"
    class="flex items-center gap-x-3 border-b-2 py-3.5 px-6 font-bold transition-colors group-hover:text-pink"
  >
    <span>{{ label }}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.533 14.034" class="h-4 w-4 -rotate-90">
      <path
        fill="currentColor"
        d="M5.706 13.829a.862.862 0 0 0 .563.205.851.851 0 0 0 .563-.205l5.467-4.755a.637.637 0 0 0 0-.985l-.757-.658a.894.894 0 0 0-1.132 0L7.599 9.878V.7a.755.755 0 0 0-.8-.7H5.732a.752.752 0 0 0-.8.7v9.181L2.118 7.434a.894.894 0 0 0-1.132 0l-.757.658a.637.637 0 0 0 0 .985Z"
      />
    </svg>
  </component>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'

const props = defineProps({
  label: {
    type: String,
  },
  to: String,
})

const renderedComponent = ref(props.to ? 'NuxtLink' : 'button')
</script>
