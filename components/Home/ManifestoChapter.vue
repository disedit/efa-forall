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
  <nuxt-link
    :to="`/manifesto/${chapter.slug}`"
    :class="['chapter', `chapter-${chapter.slug}`]"
  >
    <div class="chapter-content p-site">
      <h3 class="chapter-title">
        {{ chapter.title.rendered.replaceAll('for all','') }}
        <span>for <LogoAll /></span>
      </h3>
      <p class="chapter-text">{{ chapter.acf.home_text }}</p>
    </div>
    <div class="chapter-poster" v-html="poster" />
    <AnimatedArrowLink class="chapter-more">
      Read more
    </AnimatedArrowLink>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.chapter {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 80vw;
  height: calc(100vh - 130px);
  flex-shrink: 0;
  overflow: hidden;
  --color: var(--secondary);
  color: var(--black);
  text-decoration: none;
  @include border(var(--black));
  transition: .25s ease;
  background-color: var(--beige);

  &:nth-child(odd) {
    --color: var(--primary);
  }

  &-content {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
  }

  &-title {
    font-size: var(--headline-chapter);
    height: auto !important;

    span {
      display: flex;
      gap: .1em;
      color: var(--color);
      margin-top: -.2em;
    }
  }

  &-text {
    font-size: var(--text-lg);
    line-height: 1.25;
  }

  &-more {
    background-color: var(--black);
    color: var(--white);
    flex-shrink: 0;
    margin-top: auto;
  }

  &-poster {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    color: var(--color);
    z-index: 0;

    :deep(svg) {
      width: 100%;
      transition: .25s ease;
    }
  }
}

.chapter-democracy-for-all .chapter-poster {
  :deep(svg) {
    transform: scale(1.1) translate(-7%, -1%);
  }
}

.chapter-diversity-for-all .chapter-poster {
 bottom: 80px;
}

.chapter-diversity-for-all .chapter-poster {
  :deep(svg) {
    transform: scale(1);
  }
}

.chapter-sustainability-for-all .chapter-poster{
  :deep(svg) {
    transform: scale(1.25);
  }
}

.chapter-solidarity-for-all .chapter-poster :deep(svg) {
  transform: scale(1.2) translate(0, 0);
}

.chapter-prosperity-for-all .chapter-poster :deep(svg) {
  transform: scale(1.5) translate(8%, 0);
}
</style>