<template>
  <div>
    <BlogHeader>
      <h1 class="text-[120px] font-bold">
        Title<span class="text-pink">.</span>
      </h1>
    </BlogHeader>
    <main>
      <BlogDetail>
        <BlogItemHeaderImage />
        <NuxtContent
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
          :document="document"
        />
      </BlogDetail>
    </main>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'MainLayout',
  async asyncData({ $content }) {
    const document = await $content('hello').fetch()

    return { document }
  },
})
</script>

<style></style>
