<template>
  <div>
    <BlogHeader>
      <h1 class="text-[120px] font-bold">
        Title<span class="text-pink">.</span>
      </h1>
    </BlogHeader>
    <main class="py-20">
      <BlogGrid>
        <BlogCard
          v-for="(article, idx) in articles"
          :key="idx"
          :article="article"
        />
      </BlogGrid>
    </main>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'MainLayout',
  transition: 'page',
  scrollToTop: true,
  setup() {
    const articles = [
      {
        title: 'Fedosja is Customer Experience Professional van het jaar',
        summary:
          'Afgelopen maandag heeft Fedosja, als één van de drie genomineerden voor de Customer Experience Professional van het jaar, een presentatie gegeven.',
        imageUrl: '/images/placeholder.png',
        category: 'Innovatie',
        publishedDate: '08-10-2021',
        author: {
          name: 'Guus Noij',
          imageUrl: '/images/placeholder.png',
        },
      },
      {
        title: 'Fedosja is Customer Experience Professional van het jaar',
        summary:
          'Afgelopen maandag heeft Fedosja, als één van de drie genomineerden voor de Customer Experience Professional van het jaar, een presentatie gegeven.',
        imageUrl: '/images/placeholder.png',
        category: 'Innovatie',
        publishedDate: '08-10-2021',
        author: {
          name: 'Guus Noij',
          imageUrl: '/images/placeholder.png',
        },
      },
      {
        title: 'Fedosja is Customer Experience Professional van het jaar',
        summary:
          'Afgelopen maandag heeft Fedosja, als één van de drie genomineerden voor de Customer Experience Professional van het jaar, een presentatie gegeven.',
        imageUrl: '/images/placeholder.png',
        category: 'Innovatie',
        publishedDate: '08-10-2021',
        author: {
          name: 'Guus Noij',
          imageUrl: '/images/placeholder.png',
        },
      },
    ]

    return {
      articles,
    }
  },
})
</script>

<style></style>
