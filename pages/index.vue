<template>
  <main class="my-20">
    <BlogGrid>
      <BlogCard
        v-for="(article, idx) in articles"
        :key="idx"
        :article="article"
      />
    </BlogGrid>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'MainLayout',
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
      articles
    }
  }
})
</script>

<style>
@font-face {
  font-family: 'Averta';
  src: url('/fonts/Averta-Bold_20211101.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Averta';
  src: url('/fonts/Averta-Regular_20211101.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

</style>
