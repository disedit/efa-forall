<script setup>
defineProps({
  fields: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <SitePageHeader collapse borderless>
    <template #title>
      Meet the candidates
    </template>

    <template #heading>
      Spitzenkandidaten
    </template>

    <template #subheading>
      Lorem
    </template>
  </SitePageHeader>
</template>
