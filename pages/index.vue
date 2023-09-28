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
const { data } = await useAsyncData(
  'manifesto-chapters',
  () => $wp.pages()
    .param('_fields', 'id,title,link,acf')
    .param('order', 'asc')
    .param('parent', config.public.manifestoPage)
)
</script>

<template>
  <div>
    Index
    <pre>Result: {{ data }}</pre>
  </div>
</template>