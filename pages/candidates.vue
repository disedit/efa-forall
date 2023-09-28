<script setup>
const { $wp } = useNuxtApp()
const { data: candidates } = await useAsyncData(
  'candidates',
  () => $wp.candidates().param('_fields', 'title,acf')
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
  <pre>{{ candidates }}</pre>
</template>