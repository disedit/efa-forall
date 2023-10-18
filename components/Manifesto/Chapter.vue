<script setup>
import { posters } from '@/assets/images/manifesto'

defineProps({
  chapter: {
    type: Object,
    required: true
  },
  chapters: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <article :class="['chapter', `chapter-${chapter.slug}`, `color-${chapter.acf.color}`]">
    <header class="chapter-poster">
      <div class="chapter-poster-title">
        <h2 class="p-site" :aria-label="chapter.title.rendered">
          {{ chapter.title.rendered.replaceAll('for all','') }}
          <span>for <LogoAll /></span>
        </h2>
        <div class="chapter-poster-image" v-html="posters[chapter.slug]" />
      </div>
    </header>
    <div class="chapter-content p-site">
      <div v-html="chapter.content.rendered" class="chapter-content-text" />
    </div>
    <ManifestoNext :chapter="chapter" :chapters="chapters" />
  </article>
</template>

<style lang="scss" scoped>
.chapter {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas:
    "poster content"
    "poster next";
  grid-template-rows: 1fr auto;

  &-poster {
    grid-area: poster;
    @include border-right;

    &-image {
      color: var(--color);
      overflow: hidden;
      margin-top: auto;
    }

    &-title {
      display: flex;
      flex-direction: column;
      position: sticky;
      top: calc(var(--navbar-safe-area) + 3.125rem);
      z-index: 100;
      height: calc(100vh - var(--navbar-safe-area) - 50px);

      h2 {
        font-size: var(--headline-chapter);
        line-height: 1;

        span {
          color: var(--color);
          display: flex;
          gap: .1em;
          align-items: center;

          svg {
            margin-top: -.2em;
          }
        }
      }
    }
  }

  &-content {
    grid-area: content;
    font-size: var(--text-xl);
    line-height: 1.5;
    min-height: 100vh;

    :deep(p) {
      margin-top: 0;
    }

    &-text {
      max-width: 60ch;
    }
  }
}

.chapter-diversity-for-all {
  .chapter-poster-image {
    margin: auto 0;
  }
}

.chapter-democracy-for-all {
  .chapter-poster-image {
    margin-left: -5px;
  }
}

@include media('<lg') {
  .chapter {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "poster"
      "content"
      "next";

    &-poster {
      border-right: 0;
      @include border-bottom;
      height: calc(100vh - var(--navbar-safe-area) - 4.5rem);
      height: calc(100dvh - var(--navbar-safe-area) - 4.5rem);
      overflow: hidden;
    }
  }
}
</style>