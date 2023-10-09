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
  <main class="story-single">
    <SitePageHeader collapse presentational>
      <template #title>
        <nuxt-link to="/news" class="link-black-to-underlined">News</nuxt-link>
      </template>
      <template #category>
        <NewsCategory :category="category" />
      </template>
    </SitePageHeader>
    <div class="story-picture" v-if="thumbnail">
      <img :src="thumbnail.src" :alt="thumbnail.alt">
    </div>
    <div class="story-page">
      <article class="story p-site">
        <div class="story-date">{{ date }}</div>
        <h1 class="story-title" v-html="story.title.rendered" />
        <div class="story-text" v-html="story.content.rendered" />
      </article>
      <aside class="aside p-site">
        <div class="sticky">
          <NewsPressCorner in-story />
          <NewsOther :stories="latestPosts" />
        </div>
      </aside>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.story {
  &-single {
    :deep(.page-header .title) {
      display: flex;
      justify-content: space-between;
    }
  }

  &-page {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  &-picture {
    @include border-bottom;

    img {
      display: block;
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }

  &-date {
    color: var(--muted);
  }

  &-title {
    font-size: 6rem;
    line-height: 1;
    margin-top: 1rem;
    text-wrap: balance;
  }

  &-text {
    font-size: var(--text-xl);
    line-height: 1.5;
    max-width: 80ch;
  }
}

.press-corner {
  margin-bottom: var(--site-padding);
}

.sticky {
  position: sticky;
  top: calc(var(--navbar-safe-area) + var(--site-padding));
}
</style>