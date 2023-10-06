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
  <article :class="['chapter', `color-${chapter.acf.color}`]">
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
      <div v-html="chapter.content.rendered" />
    </div>
    <nuxt-link to="/" class="chapter-next p-site">
      <span>Next chapter</span>
      <span class="chapter-next-title">
        Diveristy for all
        <IconArrow />
      </span>
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.chapter {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "poster content"
    "poster next";
  grid-template-rows: 1fr auto;

  &-poster {
    grid-area: poster;
    @include border-right;

    &-image {
      color: var(--color);
    }

    &-title {
      position: sticky;
      top: calc(var(--navbar-safe-area) + 3.125rem);
      z-index: 100;

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

    :deep(p) {
      margin-top: 0;
    }
  }

  &-next {
    display: flex;
    grid-area: next;
    @include border-top;
    justify-content: space-between;
    text-decoration: none;
    font-size: var(--text-lg);
    color: var(--black);

    svg {
      height: 1em;
      width: 1em;
    }

    &-title {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
}
</style>