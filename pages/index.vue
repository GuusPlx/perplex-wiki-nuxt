<template>
  <div>
    <BlogHeader>
      <h1 class="text-mainTitle font-bold">{{ page.title }}<span class="text-pink">.</span></h1>
    </BlogHeader>
    <main class="py-20">
      <BlogGrid v-if="articles">
        <BlogCard v-for="(article, idx) in articles" :key="idx" :article="article" />
      </BlogGrid>
    </main>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'

const pageInfo = gql`
  query {
    blogOverview(id: "d99519b8-0ff8-4c02-a502-e5650c182018") {
      title
    }
    allBlogPost {
      items {
        image {
          url
        }
        leestijd
        summary
        rteContent
        title
        category
        url
        updateDate
      }
    }
  }
`
export default defineComponent({
  layout: 'MainLayout',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient

    const res = await client.query({
      query: pageInfo,
    })

    const { blogOverview, allBlogPost } = res.data

    return {
      page: blogOverview,
      articles: allBlogPost.items,
    }
  },
})
</script>

<style></style>
