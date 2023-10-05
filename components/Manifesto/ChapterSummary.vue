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
  <article class="chapter p-site">
    <nuxt-link :to="`/manifesto/${chapter.slug}`">
      <h2>
        {{ chapter.title.rendered.replaceAll('for all','') }}
        <span>for <LogoAll /></span>
      </h2>
      <div v-html="chapter.acf.summary" />
      <div v-html="poster" />
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.chapter {
  --color: var(--primary);

  &:nth-child(odd) {
    @include border-right;
  }

  &:not(:last-child) {
    @include border-bottom;
  }

  &:nth-child(2),
  &:nth-child(3) {
    --color: var(--secondary);
  }

  a {
    color: var(--color);
  }
}
</style>