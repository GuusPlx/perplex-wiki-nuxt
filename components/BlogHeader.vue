<template>
  <header class="header-container h-5/6 bg-dark py-16 px-8">
    <section class="mx-auto mt-40 text-white sm:col-span-1 sm:col-start-2">
      <slot></slot>
    </section>
    <slot name="author"></slot>
  </header>
</template>

<script setup></script>

<style lang="postcss" scoped>
.header-container {
  display: grid;
  grid-template-columns: 1fr var(--blog-container-width) 1fr;
  grid-template-row: auto;
}
</style>
