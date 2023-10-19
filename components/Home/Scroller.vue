<script setup>
defineProps({
  chapters: {
    type: Array,
    required: true
  }
})

const { $gsap, $ScrollTrigger } = useNuxtApp()
const { setDark, unsetDark } = useColorMode()
const hover = ref(false)
const items = ref(null)
const wrapper = ref(null)
let animations

function getScrollAmount() {
  const width = items.value.scrollWidth
  return -(width - window.innerWidth)
}

onMounted(() => {
  setTimeout(() => {
    animations = $gsap.context(() => {
      const mm = $gsap.matchMedia()
      mm.add("(min-width: 992px)", () => {
        /* Horizontal scroll effect */
        const animation = $gsap.to(items.value, {
          x: getScrollAmount,
          duration: 3,
          ease: "none"
        })

        $ScrollTrigger.create({
          trigger: wrapper.value,
          start: 'top 65px',
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          animation,
          scrub: 1,
          invalidateOnRefresh: true,
          onEnter: () => {
            unsetDark()
            const video = document.querySelector('#HomeVideo video')
            video.pause()
          },
          onLeaveBack: setDark,
          onEnterBack: unsetDark,
          onLeave: unsetDark
        })

        /* Reveal animations */
        const scrollTrigger = {
          trigger: wrapper.value,
          start: 'top 35%',
          end: 'top top'
        }

        $gsap.fromTo('.home-scroller .for-all', {
          y: '100%'
        }, {
          y: 0,
          duration: .75,
          ease: 'expo.out',
          scrollTrigger
        })

        $gsap.fromTo('.scroller-chapter .item-title', {
          y: '120%'
        }, {
          y: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: .1,
          scrollTrigger
        })

        $gsap.fromTo('.scroller-chapter .item-text', {
          y: '120%'
        }, {
          y: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: .1,
          delay: .25,
          scrollTrigger
        })

        $gsap.fromTo('.scroller-chapter .item-more', {
          y: '120%'
        }, {
          y: 0,
          duration: 1,
          delay: .5,
          ease: 'power4.out',
          stagger: .1,
          scrollTrigger
        })
      })
    }, wrapper.value)
  }, 250)
})

onUnmounted(() => {
  animations && animations.kill()
})
</script>

<template>
  <section :class="['home-scroller', { hover }]" ref="wrapper">
    <div class="items" ref="items">
      <div class="filler" />
      <HomeScrollerChapter
        v-for="(chapter, i) in chapters"
        :key="chapter.id"
        :chapter="chapter"
        :index="i"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      />
      <div class="filler" />
    </div>
    <div class="for-all">
      <LogoForAll />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-scroller {
    position: relative;
    background-color: var(--primary);
    min-height: calc(100vh - var(--navbar-safe-area));
    overflow: hidden;
    color: var(--beige);
    margin-top: -100vh;
  }

  .items {
    display: flex;
    flex-wrap: none;
  }

  .filler {
    width: 5vw;
    flex-shrink: 0;

    &:last-child {
      width: 25vw;
    }
  }

  .for-all {
    position: absolute;
    color: var(--secondary);
    top: 30%;
    left: 20%;
    transform: rotate(-10deg);
    pointer-events: none;
    z-index: 1;

    svg {
      height: 50vh;
      width: auto;
    }
  }

  .hover .for-all {
    color: var(--beige);
  }
</style>