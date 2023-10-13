<script setup>
const { $wp } = useNuxtApp()
const { data: candidatesPage } = await useAsyncData(
  'candidates-page',
  () => $wp.pages().slug('candidates')
    .param('_fields', 'acf')
    .param('acf_format', 'standard')
)

const { data: candidates } = await useAsyncData(
  'candidates',
  () => $wp.candidates()
    .param('_fields', 'id,title,acf')
    .param('orderby', 'title')
    .param('order', 'asc')
    .param('acf_format', 'standard')
)

const title = 'Candidates - For All: EU Elections 2024 - EFA European Free Alliance'
useServerSeoMeta({
  title,
  ogTitle: title,
  description: candidatesPage.value[0].acf.subheading,
  ogDescription: candidatesPage.value[0].acf.subheading,
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })
</script>

<template>
  <main>
    <CandidatesHeader :candidates="candidatesPage[0].acf" />
    <CandidatesSpitzenkandidaten :candidates="candidatesPage[0].acf" />
    <CandidatesMap :candidates="candidates" :text="candidatesPage[0].acf.find_your_candidate_text" />
  </main>
</template>