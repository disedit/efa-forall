<script setup>
defineProps({
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
  <article :class="['chapter', `chapter-${chapter.slug}`]">
    <nuxt-link :to="`/manifesto/${chapter.slug}`">
      <h2 class="chapter-title p-site">
        {{ chapter.title.rendered.replaceAll('for all','') }}
        <span>for <LogoAll /></span>
      </h2>
      <div class="chapter-summary">
        <div v-html="chapter.acf.summary" class="p-site" />
        <div class="chapter-more py-sm p-site">
          Read more
          <IconArrow />
        </div>
      </div>
      <div class="chapter-poster-image" v-html="poster" aria-hidden="true" />
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.chapter {
  display: flex;

  a {
    display: grid;
    color: var(--black);
    text-decoration: none;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title summary"
      "poster summary";
  }

  &-title {
    grid-area: title;
    font-size: var(--headline-block);
    transition: .25s ease;

    span {
      display: flex;
      gap: .1em;
      color: var(--color);
      margin-top: -.2em;
    }
  }

  &-summary {
    display: flex;
    flex-direction: column;
    grid-area: summary;
    font-size: var(--text-xl);
    @include border-left;
    transition: .25s ease;

    :deep(ol) {
      list-style: none;
      counter-reset: chapter-counter;
      margin: 0;
      padding: 0;
    }

    :deep(ol li) {
      counter-increment: chapter-counter;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1.25rem;
      margin-bottom: 1.25rem;
    }

    :deep(ol li::before) {
      content: counter(chapter-counter);
      font-family: var(--headline-font);
      color: var(--color);
      font-size: var(--headline-block);
      transition: .25s ease;
    }
  }

  &-more {
    margin-top: auto;
    @include border-top;
    display: flex;
    justify-content: space-between;
    transition: .25s ease;
    font-size: var(--text-lg);

    svg {
      height: 1em;
      width: 1em;
    }
  }

  &-poster-image {
    transition: .25s ease;
    grid-are: poster;
    color: var(--color);
    overflow: hidden;
  }

  a:hover,
  a:focus-within {
    .chapter-title,
    .chapter-poster-image,
    .chapter-summary {
      background: var(--white);
    }

    .chapter-more {
      background: var(--black);
      color: var(--white);
    }
  }
}
</style>