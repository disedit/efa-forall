<script setup>
const { $wp } = useNuxtApp()
const { data: events } = await useAsyncData(
  'events',
  () => $wp.events().param('_fields', 'title,acf')
)

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
</script>

<template>
  <main>
    <EventsHeader />
    <EventsGrid :events="events" />
  </main>
</template>