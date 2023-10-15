<script setup>
const { index } = defineProps({
  index: {
    type: Number,
    required: true
  },
  chapter: {
    type: Object,
    required: true
  }
})

const { $gsap } = useNuxtApp()

function animateOut() {
  $gsap.to('.scroller-chapter .item-title', {
    y: '120%',
    duration: .25,
    ease: 'power4.in',
    stagger: {
      each: .1,
      from: index
    }
  })

  $gsap.to('.scroller-chapter .item-text', {
    y: '120%',
    duration: .25,
    ease: 'power4.in',
    stagger: {
      each: .1,
      from: index
    },
    delay: .1
  })

  $gsap.to('.scroller-chapter .item-more', {
    y: '120%',
    duration: .25,
    ease: 'power4.in',
    stagger: {
      each: .1,
      from: index
    },
    delay: .2
  })
}
</script>

<template>
  <nuxt-link :to="`/manifesto/${chapter.slug}`" class="scroller-chapter item" @click="animateOut">
    <div class="overflow-hidden">
      <h3 class="item-title">
        {{ chapter.title.rendered.replaceAll('for all','') }}
      </h3>
    </div>
    <div class="overflow-hidden">
      <p class="item-text">
        <span>{{ chapter.acf.home_text }}</span>
      </p>
    </div>
    <div class="overflow-hidden">
      <div class="item-more">Read more</div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.item {
  position: relative;
  flex-shrink: 0;
  color: var(--beige);
  text-decoration: none;
  margin: 7vw 0;
  padding: 0 7vw;
  transition: .25s ease;

  &-title {
    font-size: 35vh;
    line-height: .75;
    margin-top: .1em;
  }

  &-text {
    max-width: 40ch;
    font-size: var(--text-lg);
    margin: 0;
    position: relative;
    line-height: 1.25;
    padding-left: .5em;
  }

  &-more {
    font-size: var(--text-lg);
    text-decoration: underline;
    margin-top: 1em;
    padding-left: .5em;
  }

  &:hover {
    color: var(--secondary);
    z-index: 10;
  }
}
</style>