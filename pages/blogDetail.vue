<template>
  <div>
    <BlogHeader>

      <template v-slot:default>
        <h1 class="text-5xl leading-normal font-bold">
          Fedosja is Customer Experience Professional van het jaar 
        </h1>
        <div class="flex mt-[60px] flex-col gap-2 md:flex-row">
          <span class="text-xl mr-8">
            <span class="font-bold">Planning BV</span> – Health
          </span>

          <div class="text-xl flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <g id="Group_5919" data-name="Group 5919" transform="translate(-1 -1)">
                <path id="Ellipse_6" data-name="Ellipse 6" d="M11-1A12,12,0,0,1,23,11,12,12,0,0,1,11,23,12,12,0,0,1-1,11,12,12,0,0,1,11-1Zm0,22A10,10,0,1,0,1,11,10.011,10.011,0,0,0,11,21Z" transform="translate(2 2)" fill="#fff"/>
                <path id="Path_4978" data-name="Path 4978" d="M16.4,15.8a1,1,0,0,1-.446-.106l-4.4-2.2A1,1,0,0,1,11,12.6V6a1,1,0,0,1,2,0v5.982l3.847,1.924A1,1,0,0,1,16.4,15.8Z" transform="translate(1 0.4)" fill="#fff"/>
              </g>
            </svg>
            <span>Leestijd:</span>
            <span class="font-bold">15 minuten</span>
          </div>
        </div>
      </template>

      <template v-slot:author>
        <author-card author-name="Test"></author-card>
      </template>

    </BlogHeader>
    <main>
      <BlogDetail>
        <BlogItemHeaderImage />
        <NuxtContent
          class="prose prose-sm my-10 prose-lead:font-bold prose-lead:text-dark sm:prose sm:prose-pink sm:prose-lead:text-dark lg:prose-lg xl:prose-xl"
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
  scrollToTop: true,
  async asyncData({ $content }) {
    const document = await $content('hello').fetch()

    return { document }
  },
})
</script>

<style></style>
