<template>
  <div
    class="container mx-auto grid max-w-4xl grid-cols-cards gap-8 sm:px-6 lg:px-8"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlogGrid',
}
</script>

<style lang="postcss"></style>
