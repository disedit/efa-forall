<script setup>
const { $wp } = useNuxtApp()
const { params } = useRoute()
const { data: chapter } = await useAsyncData(
  `manifesto-${params.slug}`,
  () => $wp.pages()
    .param('_fields', 'id,title,link,acf')
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
  <pre>{{ chapter }}</pre>
</template>