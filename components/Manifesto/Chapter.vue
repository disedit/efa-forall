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
  <article class="chapter">
    <header class="chapter-poster">
      <div class="chapter-title">
        <h2 class="p-site">
          {{ chapter.title.rendered.replaceAll('for all','') }}
          <span>for <LogoAll /></span>
        </h2>
        <div v-html="posters[chapter.slug]" />
      </div>
    </header>
    <div class="chapter-content p-site">
      <pre>{{ chapter }}</pre>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.chapter {
  display: grid;
  grid-template-columns: 1fr 2fr;

  &-poster {
    @include border-right;
  }

  &-title {
    position: sticky;
    top: calc(var(--navbar-safe-area) + 3.125rem);
    z-index: 100;

    h2 {
      font-size: clamp(2rem, 5vw, 6rem);

      span {
        display: block;
      }
    }
  }
}
</style>