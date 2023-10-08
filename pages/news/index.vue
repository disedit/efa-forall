<script setup>
const title = 'News - For All: EU Elections 2024 - EFA European Free Alliance'
useServerSeoMeta({
  title,
  ogTitle: title,
  description: 'Desc',
  ogDescription: 'Desc',
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })

const { $wp } = useNuxtApp()
const articles = ref([])
const page = ref(1)
const lastPage = ref(0) // Fix this!
const perPage = 10

/* Fetch posts */
const loadPosts = async () => {
  return await $wp.posts()
    .embed()
    .perPage(perPage)
    .page(page.value)
    .param('_fields', 'id,title,excerpt,date,slug,_links,_embedded')
}

/* Fetch initial posts */
const { data: posts, headers } = await useAsyncData('articles', loadPosts)

/* Set initial posts */
articles.value = [...posts.value]
lastPage.value = 2

/* Fetch more posts */
const loadMorePosts = async () => {
  page.value++
  const posts = await loadPosts()
  articles.value = [...articles.value, ...posts]
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
  <main>
    <NewsHeader />
    <NewsHighlights :stories="highlighted" />
    <NewsPressCorner />
    <NewsArticles :stories="otherArticles" />
    <NewsPagination :page="page" :last-page="lastPage" @load="loadMorePosts" />
  </main>
</template>