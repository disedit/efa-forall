<script setup>
defineProps({
  manifesto: {
    type: Object,
    required: true
  },
  chapters: {
    type: Array,
    required: true
  }
})

const { $wp } = useNuxtApp()
const { params } = useRoute()
const { data: chapter } = await useAsyncData(
  `manifesto-${params.slug}`,
  () => $wp.pages().slug(params.slug)
)

if (!chapter.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

/* SEO Metatags */
const config = useRuntimeConfig()
const title = `${chapter.value[0].title.rendered} - 2024 EU Elections Manifesto - EFA European Free Alliance`
useServerSeoMeta({
  title,
  ogTitle: title,
  description: chapter.value[0].exceprt,
  ogDescription: chapter.value[0].exceprt,
  ogImage: `${config.public.baseUrl}/images/og/${params.slug}.png`,
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <ManifestoChapter :chapter="chapter[0]" :chapters="chapters" /> 
</template>
