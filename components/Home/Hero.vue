<script setup>
import Rellax from 'rellax'

const { $gsap } = useNuxtApp()
let animation
let rellax

const hero = ref(null)
const europe = ref(null)
const map = ref(null)
const title = ref(null)

onMounted(() => {
  setTimeout(() => {
    rellax = new Rellax(map.value)

    animation = $gsap.context(self => {
      $gsap.to(title.value, {
        scale: 1,
        duration: .75,
        ease: 'power4.out',
        delay: 4
      })
      
      $gsap.to(europe.value, {
        scale: 1,
        duration: .75,
        ease: 'power4.out',
        delay: 4
      })
    }, hero.value)
  }, 500)
})

onUnmounted(() => {
  animation && animation.kill()
  rellax && rellax.destroy()
})
</script>

<template>
  <section class="hero p-site" ref="hero">
    <h1 class="hero-title" ref="title">
      <div class="visually-hidden">We are looking for a new Europe for all</div>
      <div aria-hidden="true">
        <AnimatedHomeText text="WE ARE LOOKING" :speed="100" :delay="250" />
        <AnimatedHomeText text="FOR A NEW EUROPE" :delay="14 * 100 + 500" />
        <AnimatedHomeText text="FOR" ends-in-logo class="highlight" :delay="14 * 100 + 16 * 75 + 500" :speed="180" />
      </div>
    </h1>
    <div class="hero-map" ref="map" data-rellax-speed="-10">
      <div class="hero-map-europe" ref="europe" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: calc(100vh - var(--navbar-safe-area) - 120px);
  min-height: calc(100svh - var(--navbar-safe-area) - 120px);
  position: relative;

  &-title {
    font-size: var(--headline-home);
    line-height: 1;
    transform-origin: top left;
    transform: scale(1.2);

    .highlight {
      color: var(--primary);
    }
  }

  &-map {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50vw;
    z-index: -1;

    &-europe {
      width: 100%;
      height: 100%;
      background-image: url(~/assets/images/maps/europe.svg);
      background-repeat: no-repeat;
      background-position: right center;
      background-size: auto 100%;
      transform-origin: top right;
      transform: scale(1.15);
    }
  }
}
</style>