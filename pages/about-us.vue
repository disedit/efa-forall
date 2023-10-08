<script setup>
const { $wp } = useNuxtApp()
const { data } = await useAsyncData(
  'about',
  () => $wp.pages().slug('about-us')
)

const title = 'About us - EFA European Free Alliance - For All: EU Elections 2024'
useServerSeoMeta({
  title,
  ogTitle: title,
  description: 'Desc',
  ogDescription: 'Desc',
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main>
    <AboutHeader :fields="data[0].acf" />
    <AboutBlocks :fields="data[0].acf" />
    <AboutValues :content="data[0].content.rendered" />
  </main>
</template>