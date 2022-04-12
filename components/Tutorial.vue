<!-- Please remove this file from your project -->
<template>
  <div
    class="items-top bg-gray-100 relative flex min-h-screen justify-center sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="container mx-auto max-w-4xl sm:px-6 lg:px-8">
      <div class="bg-white mt-8 overflow-hidden p-6 shadow sm:rounded-lg">
        <h2 class="text-2xl font-semibold leading-7 text-pink">
          Welcome to Perplex blog
        </h2>
        <p class="text-gray-600 mt-3">
          We recommend you take a look at the
          <a
            href="https://nuxtjs.org"
            target="_blank"
            class="button--doc text-pink hover:underline"
            >Nuxt documentation</a
          >, whether you are new or have previous experience with the
          framework.<br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>
