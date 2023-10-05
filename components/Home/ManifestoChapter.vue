<script setup>
const props = defineProps({
  chapter: {
    type: Object,
    required: true
  },

  poster: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nuxt-link
    :to="`/manifesto/${chapter.slug}`"
    class="chapter"
  >
    <h3>{{ chapter.title.rendered }}</h3>
    <p>{{ chapter.acf.home_text }}</p>
    <div v-html="poster" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.manifesto {
  padding: var(--site-padding);
}
</style>