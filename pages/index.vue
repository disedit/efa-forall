<script setup>
const config = useRuntimeConfig()

/* Retreive Manifesto chapters */
const { $wp } = useNuxtApp()
const { data: chapters } = await useAsyncData(
  'manifesto-chapters',
  () => $wp.pages()
    .param('_fields', 'id,title,link,acf.home_text,acf.icon.url,acf.icon.alt,slug,')
    .param('order', 'asc')
    .param('parent', config.public.manifestoPage)
    .param('acf_format', 'standard')
)

/* SEO Metatags */
const title = 'For All - EFA European Free Alliance - EU Elections 2024'
const description = 'We are looking for a new Europe for all'
useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: config.public.baseUrl + '/images/og/index.png',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main class="page">
    <HomeHero />
    <HomeBlocks />
    <HomeVideo />
    <HomeManifesto class="d-lg-none" :chapters="chapters" />
    <HomeScroller class="d-none d-lg-block" :chapters="chapters" />
  </main>
</template>
