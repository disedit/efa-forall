<script setup>
const title = 'News - For All: EU Elections 2024 - EFA European Free Alliance'
const description = 'Keep up to date with the latest news from EFA'
useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })

const { $wp } = useNuxtApp()
const articles = ref([])
const page = ref(1)
const totalPages = ref(0)
const perPage = 10
const loading = ref(false)

/* Fetch posts */
const loadPosts = async () => {
  const { _paging, ...stories } = await $wp.posts()
    .embed()
    .perPage(perPage)
    .page(page.value)
    .param('_fields', 'id,title,excerpt,date,slug,_links,_embedded')

  return {
    stories: Object.values(stories),
    totalPages: _paging.totalPages
  }
}

/* Fetch initial posts */
const { data: posts } = await useAsyncData('articles', () => loadPosts())

/* Set initial posts */
articles.value = posts.value.stories
totalPages.value = posts.value.totalPages

/* Fetch more posts */
const loadMorePosts = async () => {
  loading.value = true
  page.value++
  const posts = await loadPosts()
  articles.value = [...articles.value, ...posts.stories]
  loading.value = false
}

/* Devide into highlighted and rest of articles */
const highlighted = computed(() => {
  return articles.value.slice(0, 2)
})

const otherArticles = computed(() => {
  return articles.value.slice(2)
})
</script>

<template>
  <main class="page news">
    <div class="overflow-hidden">
      <NewsHeader />
      <NewsHighlights :stories="highlighted" />
    </div>
    <div class="news-columns p-site">
      <div class="news-stories">
        <NewsStories :stories="otherArticles" />
        <NewsPagination :page="page" :total-pages="totalPages" :loading="loading" @load="loadMorePosts" />
      </div>
      <div class="news-press-corner">
        <NewsPressCorner class="sticky" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.news-columns {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--site-padding);
}

.sticky {
  position: sticky;
  top: calc(var(--navbar-safe-area) + var(--site-padding));
}

@include media('<lg') {
  .news-columns {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 0;
  }

  .news-press-corner {
    grid-row: 1;
  }
}
</style>