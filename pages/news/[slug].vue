<script setup>
const { $wp } = useNuxtApp()
const { params } = useRoute()

/* Get the story */
const { data: post } = await useAsyncData(
  `post-${params.slug}`,
  () => $wp.posts()
    .embed()
    .slug(params.slug)
)

const story = post.value[0]
const { thumbnail, category, date } = useStory(story)

/* Latest posts */
const { data: latest } = await useAsyncData(
  `related-posts`,
  () => $wp.posts()
    .embed()
    .perPage(5)
    .param('_fields', 'id,title,excerpt,date,slug,_links.wp:featuredmedia,_embedded')
)

const latestPosts = computed(() => {
  return latest.value.filter(post => post.id !== story.id).slice(0, 4)
})

/* Meta tags */
const title = `${story.title.rendered} - News - For All: EU Elections 2024 - EFA European Free Alliance`
useServerSeoMeta({
  title,
  ogTitle: title,
  description: story.excerpt.rendered,
  ogDescription: story.excerpt.rendered,
  ogImage: thumbnail.src,
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main>
    <SitePageHeader collapse presentational>
      <template #title>
        <nuxt-link to="/news" class="link-black-to-underlined">News</nuxt-link>
      </template>
      <template #category>
        <div :class="`story-category category-${category.slug}`">{{ category.name }}</div>
      </template>
    </SitePageHeader>
    <article>
      <div class="story-picture" v-if="thumbnail">
        <img :src="thumbnail.src" :alt="thumbnail.alt">
      </div>
      <div class="p-site">
        <p>{{ date }}</p>
        <h1 v-html="story.title.rendered" />
        <div v-html="story.content.rendered" />
      </div>
    </article>
    <aside>
      <NewsPressCorner in-story />
      <NewsOther :stories="latestPosts" />
    </aside>
  </main>
</template>