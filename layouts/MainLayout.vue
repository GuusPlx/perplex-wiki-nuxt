<template lang="">
  <div>
    <Transition name="page" :duration="300">
      <Nuxt />
    </Transition>
    <BlogFooter />
  </div>
</template>
<script script>
export default {
  scrollToTop: true,
}
</script>
