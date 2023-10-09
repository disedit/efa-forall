<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="highlights p-site" aria-label="Top stories">
    <NewsHighlightedStory
      v-for="story in stories"
      :key="story.id"
      :story="story"
    />
    <NewsPressCorner />
  </section>
</template>

<style lang="scss" scoped>
.highlights {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: var(--site-padding);
}
</style>