<script setup>
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

/* Retreive Manifesto chapters */
const config = useRuntimeConfig()
const { $wp } = useNuxtApp()
const { data: chapters } = await useAsyncData(
  'manifesto-chapters',
  () => $wp.pages()
    .param('_fields', 'id,title,link,acf.home_text,acf.icon.url,acf.icon.alt,slug,')
    .param('order', 'asc')
    .param('parent', config.public.manifestoPage)
    .param('acf_format', 'standard')
)
</script>

<template>
  <main>
    <HomeHero />
    <HomeBlocks />
    <HomeVideo />
    <HomeManifesto :chapters="chapters" />
  </main>
</template>
