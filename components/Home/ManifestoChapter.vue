<script setup>
const props = defineProps({
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
      <div class="chapter-more">
        <span>Read more</span>
        <IconArrow />
      </div>
    </div>
    <div class="chapter-poster" v-html="poster" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.chapter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50vw;
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
  }

  &-title {
    font-size: var(--headline-chapter);

    span {
      display: flex;
      gap: .1em;
      color: var(--color);
      margin-top: -.2em;
    }
  }

  &-text {
    font-size: var(--text-xl);
    line-height: 1.25;
  }

  &-more {
    @include border-top(var(--black));
    margin: calc(var(--site-padding) * -1);
    padding: var(--site-padding);
    margin-top: auto;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: .25s ease;

    &::before {
      content: '';
      display: block;
      position: absolute;
      background: var(--color);
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      transform: translateX(-100%);
      transition: transform .25s ease;
      z-index: 0;
    }

    span,
    svg {
      position: relative;
      z-index: 1;
    }

    svg {
      height: 1em;
      width: 1em;
    }
  }

  &-poster {
    color: var(--color);
    @include border-left(var(--black));
    display: flex;
    align-items: center;
    overflow: hidden;

    :deep(svg) {
      width: 100%;
    }
  }

  &:hover {
    background: var(--white);

    .chapter-more {
      color: var(--white);

      &::before {
        transform: translateY(0);
      }
    }
  }
}

.chapter-democracy-for-all .chapter-poster {
  align-items: flex-end;

  :deep(svg) {
    transform: scale(1.3) translate(0, -5%);
  }
}

.chapter-sustainability-for-all .chapter-poster{
  align-items: flex-end;
  
  :deep(svg) {
    transform: scale(1.25) translate(5%, 10%);
  }
}

.chapter-solidarity-for-all .chapter-poster :deep(svg) {
  transform: scale(1.2) translate(0, 0);
}

.chapter-prosperity-for-all .chapter-poster :deep(svg) {
  transform: scale(1.5) translate(8%, 0);
}
</style>