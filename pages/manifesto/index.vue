<script setup>
const { manifesto } = defineProps({
  manifesto: {
    type: Object,
    required: true
  },
  chapters: {
    type: Object,
    required: true
  }
})

/* SEO Metatags */
const config = useRuntimeConfig()
const title = 'Manifesto - For All: EU Elections 2024 - EFA European Free Alliance'
useServerSeoMeta({
  title,
  ogTitle: title,
  description: manifesto.acf.subheading,
  ogDescription: manifesto.acf.subheadin,
  ogImage: config.public.baseUrl + '/images/og/manifesto.png',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <ManifestoChapters :chapters="chapters" />
</template>