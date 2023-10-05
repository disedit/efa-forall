<script setup>
import { posters } from '@/assets/images/manifesto'

defineProps({
  chapter: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="chapter p-site">
      <h2>
        {{ chapter.title.rendered.replaceAll('for all','') }}
        <span>for <LogoAll /></span>
      </h2>
      <pre>{{ chapter }}</pre>
      <div v-html="posters[chapter.slug]" />
  </article>
</template>

<style lang="scss" scoped>
.chapter {
  color: black;
}
</style>