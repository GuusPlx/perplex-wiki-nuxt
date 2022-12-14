<template>
  <div>
    <BlogHeader>
      <template v-slot:default>
        <h1 class="text-5xl font-bold leading-normal">{{ blogPost.title }}</h1>
        <div class="mt-[60px] flex flex-col justify-between gap-2 md:flex-row">
          <span class="mr-8 text-xl">
            <span class="font-bold">{{ blogPost.category }}</span> <span v-if="blogPost.tags">–</span>
            <ul class="inline-flex gap-2">
              <li class="inline-block" v-for="tag in blogPost.tags">{{ tag }}</li>
            </ul>
          </span>

          <div class="flex shrink-0 items-center gap-2 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <g id="Group_5919" data-name="Group 5919" transform="translate(-1 -1)">
                <path
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  d="M11-1A12,12,0,0,1,23,11,12,12,0,0,1,11,23,12,12,0,0,1-1,11,12,12,0,0,1,11-1Zm0,22A10,10,0,1,0,1,11,10.011,10.011,0,0,0,11,21Z"
                  transform="translate(2 2)"
                  fill="#fff"
                />
                <path
                  id="Path_4978"
                  data-name="Path 4978"
                  d="M16.4,15.8a1,1,0,0,1-.446-.106l-4.4-2.2A1,1,0,0,1,11,12.6V6a1,1,0,0,1,2,0v5.982l3.847,1.924A1,1,0,0,1,16.4,15.8Z"
                  transform="translate(1 0.4)"
                  fill="#fff"
                />
              </g>
            </svg>
            <span>Leestijd:</span>
            <span class="font-bold">{{ blogPost.leestijd }} minuten</span>
          </div>
        </div>
      </template>

      <template v-slot:author>
        <author-card author-name="Bram Doppen" author-function="Front-end developer" author-image-url="/images/placeholder.png"></author-card>
      </template>
    </BlogHeader>
    <main>
      <BlogDetail>
        <BlogItemHeaderImage v-if="blogPost.image" :src="blogPost.image.url" />
        <div
          class="prose prose-sm my-10 prose-lead:font-bold prose-lead:text-dark sm:prose sm:prose-pink sm:prose-lead:text-dark lg:prose-lg xl:prose-xl"
          v-html="blogPost.rteContent"
        ></div>
      </BlogDetail>
    </main>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'

const pageInfo = gql`
  query ($url: String) {
    blogPost(url: $url) {
      title
      image {
        url(width: 700, height: 500, cropMode: CROP, format: WEBP)
      }
      category
      tags
      summary
      leestijd
      url
      rteContent
    }
  }
`
export default defineComponent({
  layout: 'MainLayout',
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient
    const { pathMatch } = params
    const res = await client.query({
      query: pageInfo,
      variables: {
        url: `/${pathMatch}`,
      },
    })

    const { blogPost } = res.data

    return {
      blogPost,
    }
  },
  head() {
    return {
      title: this.blogPost.title ? this.blogPost.title : '',
      meta: [
        {
          hid: 'description',
          name: this.blogPost.title,
          content: this.blogPost.summary,
        },
      ],
    }
  },
})
</script>
