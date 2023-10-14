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
      <AnimatedArrowLink class="chapter-more">
        Read more
      </AnimatedArrowLink>
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
    margin: calc(var(--site-padding) * -1);
    padding: var(--site-padding);
    margin-top: auto;
    @include border-top(var(--black));
  }

  &-poster {
    color: var(--color);
    @include border-left(var(--black));
    display: flex;
    align-items: center;
    overflow: hidden;

    :deep(svg) {
      width: 100%;
      transition: .25s ease;
    }
  }

  &:hover,
  &:focus {
    background: var(--white);
    --add-scale: .2;

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
    transform: scale(calc(1.3 + var(--add-scale, 0))) translate(0, -5%);
  }
}

.chapter-diversity-for-all .chapter-poster {
  :deep(svg) {
    transform: scale(calc(1 + var(--add-scale, 0)));
  }
}

.chapter-sustainability-for-all .chapter-poster{
  align-items: flex-end;
  
  :deep(svg) {
    transform: scale(calc(1.25 + var(--add-scale, 0))) translate(5%, 10%);
  }
}

.chapter-solidarity-for-all .chapter-poster :deep(svg) {
  transform: scale(calc(1.2 + var(--add-scale, 0))) translate(0, 0);
}

.chapter-prosperity-for-all .chapter-poster :deep(svg) {
  transform: scale(calc(1.5 + var(--add-scale, 0))) translate(8%, 0);
}
</style>