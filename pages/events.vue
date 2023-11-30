<script setup>
/* Retreive events */
const { $wp } = useNuxtApp()
const { data: events } = await useAsyncData(
  'events',
  () => $wp.events().param('_fields', 'id,title,acf').param('acf_format', 'standard')
)

/* SEO Metatags */
const config = useRuntimeConfig()
const title = 'Events - For All: EU Elections 2024 - EFA European Free Alliance'
const description = 'Join us at campaign events'
useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: config.public.baseUrl + '/images/og/events.png',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main class="page">
    <EventsHeader />
    <EventsGrid :events="events" />
  </main>
</template>