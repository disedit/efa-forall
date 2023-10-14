<script setup>
const { $wp } = useNuxtApp()
const { data: about } = await useAsyncData(
  'about',
  () => $wp.pages().slug('about-us')
)

const title = 'About us - EFA European Free Alliance - For All: EU Elections 2024'
useServerSeoMeta({
  title,
  ogTitle: title,
  description: about.value[0].acf.subheading,
  ogDescription: about.value[0].acf.subheading,
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main class="page">
    <AboutHeader :fields="about[0].acf" />
    <AboutBlocks :fields="about[0].acf" />
    <AboutValues :content="about[0].content.rendered" />
  </main>
</template>