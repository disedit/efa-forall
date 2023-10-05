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
  <main>
    <AboutHeader :fields="data[0].acf" />
    <AboutBlocks :fields="data[0].acf" />
    <AboutValues :content="data[0].content.rendered" />
  </main>
</template>