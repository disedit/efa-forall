<script setup>
const { $wp } = useNuxtApp()
const { params } = useRoute()
const { data: post } = await useAsyncData(
  `post-${params.slug}`,
  () => $wp.posts()
    .slug(params.slug)
)

useServerSeoMeta({
  title: 'EFA',
  ogTitle: 'EFA',
  description: 'Desc',
  ogDescription: 'Desc',
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'EFA - For All',
})
</script>

<template>
  <main>
    <SitePageHeader collapse>
      <template #title>
        <nuxt-link to="/news" class="link-black-to-underlined">News</nuxt-link>
      </template>
    </SitePageHeader>
    <pre>{{ post }}</pre>
  </main>
</template>