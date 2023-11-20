<script setup>
import Rellax from 'rellax'

const { $gsap } = useNuxtApp()
let animation
let rellax

const hero = ref(null)
const europe = ref(null)
const map = ref(null)
const title = ref(null)
let mm

onMounted(() => {
  setTimeout(() => {
    mm = $gsap.matchMedia()
    mm.add("(min-width: 992px)", () => {
      rellax = new Rellax('.rellax')
    })

    animation = $gsap.context(self => {
      const delay = 3.25

      $gsap.to(title.value, {
        scale: 1,
        duration: .75,
        ease: 'power4.out',
        delay
      })
      
      $gsap.to(europe.value, {
        scale: 1,
        duration: .75,
        ease: 'power4.out',
        delay
      })
    }, hero.value)
  }, 500)
})

onUnmounted(() => {
  mm & mm.kill()
  animation && animation.kill()
  rellax && rellax.destroy()
})
</script>

<template>
  <section class="hero p-site" ref="hero">
    <h1 class="hero-title" ref="title">
      <div class="visually-hidden">We are looking for a new Europe for all</div>
      <div aria-hidden="true" class="rellax" data-rellax-speed="-5">
        <AnimatedHomeText text="WE BELIEVE" :speed="100" :delay="250" />
        <AnimatedHomeText text="IN A EUROPE" :delay="10 * 100 + 500" />
        <AnimatedHomeText text="FOR" ends-in-logo class="highlight" :delay="10 * 100 + 11 * 75 + 500" :speed="180" />
      </div>
    </h1>
    <div class="hero-map rellax" ref="map" data-rellax-speed="-10">
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
    left: 0;
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

@include media('<lg') {
  .hero {
    height: calc(100vh - var(--navbar-safe-area));
    height: calc(100svh - var(--navbar-safe-area));
    align-items: flex-start;
    padding-top: 10vh;

    &-title {
      font-size: 3.5rem;
      transform: scale(.8);

      .animated-text {
        margin-top: .1em;
      }

      :deep(.letter) {
        background: var(--white);
        color: var(--black);
        padding-top: .2em;
        padding-right: .15em;
        margin-right: -.15em;

        &:first-child {
          padding-left: .1em;
        }
      }

      :deep(.logo-all) {
        box-sizing: content-box;
        background: var(--white);
        border: .1em var(--white) solid;
        margin: -.04em -.06em;
      }
    }

    &-map {
      overflow: hidden;

      &-europe {
        transform-origin: center center;
        background-position: center bottom;
        background-size: cover;
        transform: scale(1.15);
      }
    }
  }
}

@include media('<md') {
  .hero {
    &-map {
      &-europe {
        position: relative;
        right: 0;
        background-position: center bottom;
      }
    }
  }
}
</style>