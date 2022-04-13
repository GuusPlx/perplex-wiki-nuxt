<template>
  <header class="header-container h-5/6 bg-dark py-16">
    <div class="container-blog mx-auto mt-40 text-white sm:col-span-1 sm:col-start-2">
      <slot></slot>
    </div>
    <div class="container-blog mx-auto w-full flex relative mt-8 -mb-16 sm:col-start-2 xl:col-start-3 empty:hidden">
      <slot name="author"></slot>
    </div>
    
  </header>
</template>

<script setup></script>

<style lang="postcss" scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-row: 1fr auto;

  @screen sm{
      grid-template-columns: 1fr var(--blog-container-width) 1fr;
      grid-template-row: auto;
  }
}
</style>
