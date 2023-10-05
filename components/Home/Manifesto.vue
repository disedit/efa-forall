<script setup>
import DemocracyForAll from '@/assets/images/manifesto/democracy-for-all.svg?raw'
import DiversityForAll from '@/assets/images/manifesto/diversity-for-all.svg?raw'
import ProsperityForAll from '@/assets/images/manifesto/prosperity-for-all.svg?raw'
import SolidarityForAll from '@/assets/images/manifesto/solidarity-for-all.svg?raw'
import SustainabilityForAll from '@/assets/images/manifesto/sustainability-for-all.svg?raw'

const posters = {
  'democracy-for-all': DemocracyForAll,
  'diversity-for-all': DiversityForAll,
  'prosperity-for-all': ProsperityForAll,
  'solidarity-for-all': SolidarityForAll,
  'sustainability-for-all': SustainabilityForAll
}

defineProps({
  chapters: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="manifesto">
    <h2 class="visually-hidden">
      Manifesto
    </h2>
    <HomeManifestoChapter
      v-for="chapter in chapters"
      :key="chapter.id"
      :chapter="chapter"
      :poster="posters[chapter.slug]"
    />
  </section>
</template>

<style lang="scss" scoped>
.manifesto {
  padding: var(--site-padding);
}
</style>