<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})

const { $gsap } = useNuxtApp()

onMounted(() => {
  setTimeout(() => {
    $gsap.to('.highlights .story', {
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      ease: "back.out(1.7)",
      duration: .5,
      stagger: .25
    })
  }, 500)
})
</script>

<template>
  <section class="highlights p-site" aria-label="Top stories">
    <NewsHighlightedStory
      v-for="story in stories"
      :key="story.id"
      :story="story"
    />
  </section>
</template>

<style lang="scss" scoped>
.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--site-padding);
  padding-top: 0;

  .story {
    transform: translate(10%, 80%) rotate(-10deg) scale(.9);
    opacity: 0;
  }
}
</style>