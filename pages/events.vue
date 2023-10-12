<script setup>
const title = 'Events - For All: EU Elections 2024 - EFA European Free Alliance'
const description = 'Join us at campaign events'
useServerSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })

const { $wp } = useNuxtApp()
const { data: events } = await useAsyncData(
  'events',
  () => $wp.events().param('_fields', 'id,title,acf').param('acf_format', 'standard')
)
</script>

<template>
  <main>
    <EventsHeader />
    <EventsGrid :events="events" />
  </main>
</template>