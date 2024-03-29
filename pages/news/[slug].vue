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

if (!post.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const story = post.value[0]
const { thumbnail, category, date } = useStory(story, 'full')

/* Latest posts */
const { data: latest } = await useAsyncData(
  `related-posts`,
  () => $wp.posts()
    .embed()
    .perPage(5)
    .param('_fields', 'id,title,excerpt,date,slug,_links.wp:featuredmedia,_embedded')
)

const latestPosts = computed(() => {
  return latest.value.filter(post => post.id !== story.id).slice(0, 5)
})

/* Meta tags */
const title = `${story.title.rendered} - News - For All: EU Elections 2024 - EFA European Free Alliance`
const ogImageOptions = {
  title: story.title.rendered,
  thumbnail,
  component: 'Story'
}
useServerSeoMeta({
  title,
  ogTitle: title,
  description: story.excerpt.rendered,
  ogDescription: story.excerpt.rendered,
  twitterCard: 'summary_large_image',
})
defineOgImage(ogImageOptions)

useHead({ title })
</script>

<template>
  <main class="page story-single">
    <SitePageHeader collapse presentational>
      <template #title>
        <nuxt-link to="/news" class="link-black-to-underlined">News</nuxt-link>
      </template>
      <template #category>
        <NewsCategory :category="category" />
      </template>
    </SitePageHeader>
    <div :class="['story-picture', { 'contain': story.acf?.constrain_picture }]" v-if="thumbnail && !story.acf?.picture_in_text">
      <img :src="thumbnail.src" :alt="thumbnail.alt">
    </div>
    <div class="story-page">
      <article class="story">
        <div class="story-date">{{ date }}</div>
        <h1 class="story-title" v-html="story.title.rendered" />
        <div class="story-inline-picture" v-if="thumbnail && story.acf?.picture_in_text">
          <img :src="thumbnail.src" :alt="thumbnail.alt">
        </div>
        <div class="story-text links-in-text" v-html="story.content.rendered" />
      </article>
      <aside class="aside">
        <div class="sticky">
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
    grid-template-columns: 1fr minmax(400px, calc(200px + 15vw));
    max-width: 1700px;
    margin: 0 auto;
    gap: var(--site-padding);
    padding: var(--site-padding);
  }

  &-picture {
    @include border-bottom;

    img {
      display: block;
      width: 100%;
      min-height: 300px;
      height: 50vh;
      object-fit: cover;
    }

    &.contain {
      background-image: url(~/assets/images/tile.svg);
      background-size: 100px;

      img {
        object-fit: contain;
      }
    }
  }

  &-date {
    color: var(--muted);
  }

  &-title {
    font-size: clamp(4rem, .5rem + 4.75vw, 6rem);
    line-height: 1;
    margin-top: 1rem;
    text-wrap: balance;
  }

  &-text {
    font-size: var(--text-xl);
    line-height: 1.5;
    max-width: 70ch;
    hyphens: auto;
  }

  &-inline-picture {
    img {
      width: 100%;
      max-width: 60ch;
      @include border;
    }
  }
}

.press-corner {
  margin-bottom: var(--site-padding);
}

.sticky {
  position: sticky;
  top: calc(var(--navbar-safe-area) + var(--site-padding));
}

@include media('<=xxl') {
  .story {
    &-text {
      font-size: var(--text-lg);
    }
  }
}

@include media('<lg') {
  .story {
    &-page {
      grid-template-columns: 1fr;
    }

    &-title {
      font-size: 3rem;
    }

    &-picture {
      img {
        height: 40vh;
        min-height: 300px;
      }
    }

    &-text {
      font-size: var(--text-lg);
      line-height: 1.5;
      max-width: 100%;
    }
  }

  .aside {
    padding: 0;
  }

  .press-corner {
    background: var(--secondary);
    margin-bottom: 0;

    :deep(a) {
      color: var(--black);
    }
  }
}
</style>

<style lang="scss">
.story-text {
  h2, h3,  h4, h5, h6 {
    margin: 1.75rem 0 .75rem;
  }

  h3, h4, h5, h6 {
    font-size: var(--text-xl);
  }

  :is(h2, h3, h4, h5, h6) + p {
    margin-top: 0;
  }

  .wp-block-image {
    margin: 1em 0;

    img {
      width: 100%;
      height: auto;
      @include border;
    }

    figcaption {
      font-size: var(--text-sm);
      opacity: .75;
    }
  }

  .wp-block-pullquote {
    margin: 1em 0;
    padding: 1.25rem 2rem;
    border-left: 10px var(--primary) solid;

    blockquote {
      margin: 0;
    }

    p:first-child {
      margin-top: 0;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  .wp-block-embed {
    margin: 1em 0;

    iframe {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
      @include border;
    }
  }

  :is(h2, h3, h4):first-child em,
  :is(h2, h3, h4):first-child strong,
  p:first-child strong {
    font-style: normal;
    display: block;
    margin: -1.75rem 0 2.25rem;
  }
}
</style>