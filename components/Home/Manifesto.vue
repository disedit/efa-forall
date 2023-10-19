<script setup>
import { posters } from '@/assets/images/manifesto'

defineProps({
  chapters: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="manifesto" ref="wrapper">
    <div class="manifesto-chapters" ref="items">
      <div class="manifesto-chapters-grid">
        <HomeManifestoChapter
          v-for="chapter in chapters"
          :key="chapter.id"
          :chapter="chapter"
          :poster="posters[chapter.slug]"
        />
        <div class="filler" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.manifesto {
  position: relative;
  overflow: auto;
  background: var(--beige);

  &-title {
    color: var(--black);
    font-family: var(--base-font);
    text-transform: unset;
    position: absolute;
    font-weight: 400;
    top: 0;
    left: 0;
    padding: var(--site-padding);
  }

  &-chapters {
    display: flex;
    padding: var(--site-padding);
    flex-wrap: nowrap;
    gap: var(--site-padding);

    &-grid {
      display: flex;
      flex-wrap: nowrap;
      gap: var(--site-padding);
      flex-shrink: 0;
      background-color: var(--beige);
      overflow: hidden;
    }
  }
}

.filler {
  width: 0;
  flex-shrink: 0;
}
</style>