<script setup>
/* Retreive Manifesto chapters */
const { $wp } = useNuxtApp()
const { data } = await useAsyncData(
  'manifesto-page',
  () => $wp.pages()
    .param('_fields', 'id,title,acf')
    .slug('manifesto')
)
const manifesto = data.value[0]

const { data: chapters } = await useAsyncData(
  'manifesto-chapters',
  () => $wp.pages()
    .param('_fields', 'id,title,slug,acf')
    .param('order', 'asc')
    .param('parent', manifesto.id)
)

/* Meta tags */
const title = 'Manifesto - For All: EU Elections 2024 - EFA European Free Alliance'
useServerSeoMeta({
  title,
  ogTitle: title,
  description: manifesto.acf.subheading,
  ogDescription: manifesto.acf.subheadin,
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main>
    <ManifestoHeader :fields="manifesto.acf" />
    <ManifestoNav :chapters="chapters" />
    <ManifestoLanguages :fields="manifesto.acf" />
    <ManifestoChapters :chapters="chapters" />
  </main>
</template>