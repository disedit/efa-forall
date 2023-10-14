<script setup>
defineProps({
  chapter: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <nuxt-link :to="`/manifesto/${chapter.slug}`" class="item">
    <h3 class="item-title">
      {{ chapter.title.rendered.replaceAll('for all','') }}
    </h3>
    <p class="item-text">
      <span>{{ chapter.acf.home_text }}</span>
    </p>
    <div class="item-more">Read more</div>        
  </nuxt-link>
</template>

<style lang="scss" scoped>
.item {
  position: relative;
  flex-shrink: 0;
  color: var(--beige);
  text-decoration: none;
  padding: 7vw;
  transition: .25s ease;

  &-title {
    font-size: 35vh;
    line-height: .75;
  }

  &-text {
    max-width: 40ch;
    font-size: var(--text-lg);
    margin: 0;
    position: relative;
    line-height: 1.25;

    span {
      transition: .25s ease;
      padding: 0 .5em;
      box-decoration-break: clone;
    }
  }

  &-more {
    font-size: var(--text-lg);
    text-decoration: underline;
    margin-top: 1em;
    padding: 0 .5em;
  }

  &:hover {
    color: var(--secondary);
    z-index: 10;

    .item-text span {
      background-color: var(--secondary);
      color: var(--white);
    }
  }
}
</style>