<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp()

defineProps({
  chapters: {
    type: Array,
    required: true
  }
})

const hover = ref(false)
const items = ref(null)
const wrapper = ref(null)
let scroller
let animation
let ctx

function getScrollAmount() {
  const width = items.value.scrollWidth
  return -(width - window.innerWidth)
}

onMounted(() => {
  setTimeout(() => {
    ctx = $gsap.context(() => {
      animation = $gsap.to(items.value, {
        x: getScrollAmount,
        duration: 3,
        ease: "none"
      })

      scroller = $ScrollTrigger.create({
        trigger: wrapper.value,
        start: 'top 65px',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation,
        scrub: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          document.documentElement.classList.remove('dark')
        },
        onLeaveBack: () => {
          document.documentElement.classList.add('dark')
        },
        onEnterBack: () => {
          document.documentElement.classList.remove('dark')
        },
        onLeave: () => {
          document.documentElement.classList.remove('dark')
        }
      })
    }, wrapper.value)
  }, 250)
})

onUnmounted(() => {
  ctx && ctx.kill()
})
</script>

<template>
  <section :class="['home-scroller', { hover }]" ref="wrapper">
    <div class="items" ref="items">
      <div class="filler" />
      <HomeScrollerChapter
        v-for="chapter in chapters"
        :key="chapter.id"
        :chapter="chapter"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      />
      <div class="filler" />
    </div>
    <LogoForAll class="for-all" />
  </section>
</template>

<style lang="scss" scoped>
  .home-scroller {
    position: relative;
    background-color: var(--primary);
    min-height: calc(100vh - var(--navbar-safe-area));
    overflow: hidden;
    color: var(--beige);
  }

  .items {
    display: flex;
    flex-wrap: none;
  }

  .filler {
    width: 25vw;
    flex-shrink: 0;
  }

  .for-all {
    position: absolute;
    color: var(--secondary);
    height: 50vh;
    width: auto;
    top: 30%;
    left: 20%;
    transform: rotate(-10deg);
    pointer-events: none;
  }

  .hover .for-all {
    color: var(--beige);
  }
</style>