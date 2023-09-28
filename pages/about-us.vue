<script setup>
const { $wp } = useNuxtApp()
const { data } = await useAsyncData(
  'about',
  () => $wp.pages().slug('about-us')
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
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>