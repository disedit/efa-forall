<script setup>
import { posters } from '@/assets/images/manifesto'

defineProps({
  chapters: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="chapters">
    <ManifestoChapterSummary
      v-for="chapter in chapters"
      :key="chapter.id"
      :chapter="chapter"
      :poster="posters[chapter.slug]"
    />
  </section>
</template>

<style lang="scss" scoped>
.chapters {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>