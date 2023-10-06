<script setup>
defineProps({
  text: {
    type: String,
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
      {{ text }}
    </template>
  </SitePageHeader>
</template>
