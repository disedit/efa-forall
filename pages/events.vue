<script setup>
const { $wp } = useNuxtApp()
const { data: events } = await useAsyncData(
  'events',
  () => $wp.events().param('_fields', 'title,acf')
)

const title = 'Events - For All: EU Elections 2024 - EFA European Free Alliance'
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
    <EventsHeader />
    <EventsGrid :events="events" />
  </main>
</template>