<template>
    <header class="bg-dark py-16 px-8 h-5/6 header-container">
        <section class="text-white container-blog mx-auto mt-40">
            <slot></slot>
        </section>
        <slot name="author"></slot>
    </header>
</template>

<script setup></script>

<style lang="postcss" scoped>
    .header-containter{
        display: grid;
        grid-template-columns: 1fr var(--blog-container-width) 1fr;
        grid-template-row: auto;
    }
</style>
