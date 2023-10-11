<script setup>
import Rellax from 'rellax'

onMounted(() => {
  setTimeout(() => {
    const rellax = new Rellax('.hero-map')
  }, 500)
})
</script>

<template>
  <section class="hero p-site">
    <h1 class="hero-title">
      <div class="visually-hidden">We are looking for a new Europe for all</div>
      <div aria-hidden="true">
        <AnimatedHomeText text="WE ARE LOOKING" :speed="100" :delay="250" />
        <AnimatedHomeText text="FOR A NEW EUROPE" :delay="14 * 100 + 500" />
        <AnimatedHomeText text="FOR" ends-in-logo class="highlight" :delay="14 * 100 + 16 * 75 + 500" :speed="180" />
      </div>
    </h1>
    <div class="hero-map" ref="europe" data-rellax-speed="-10" />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: calc(100vh - var(--navbar-safe-area));
  min-height: calc(100svh - var(--navbar-safe-area));
  position: relative;

  &-title {
    font-size: var(--headline-home);
    line-height: 1;

    .highlight {
      color: var(--primary);
    }
  }

  &-map {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50vw;
    background-image: url(~/assets/images/maps/europe.svg);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
    z-index: -1;
  }
}
</style>