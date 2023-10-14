<script setup>
import { posters } from '@/assets/images/manifesto'

const { $gsap, $ScrollTrigger } = useNuxtApp()

defineProps({
  chapters: {
    type: Array,
    required: true
  }
})

const items = ref(null)
const wrapper = ref(null)
let scroller
let animation
let blockEnter
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

      blockEnter = $gsap.fromTo('.manifesto-chapters .chapter', {
        y: 100,
      }, {
        y: 0,
        stagger: .25,
        ease: "Power4.in",
        duration: 1,
        scrollTrigger: {
          trigger: items.value,
          start: 'top 90%',
          end: 'top 50%'
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
  <section class="manifesto" ref="wrapper">
    <h2 class="manifesto-title">
      2024<br>Manifesto
    </h2>
    <div class="manifesto-chapters" ref="items">
      <div class="filler" />
      <div class="manifesto-chapters-grid">
        <HomeManifestoChapter
          v-for="chapter in chapters"
          :key="chapter.id"
          :chapter="chapter"
          :poster="posters[chapter.slug]"
        />
      </div>
      <div class="filler" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.manifesto {
  position: relative;
  overflow: hidden;
  background: var(--beige);

  &-title {
    color: var(--black);
    font-family: var(--base-font);
    text-transform: unset;
    position: absolute;
    font-weight: 400;
    top: 0;
    left: 0;
    padding: var(--site-padding);
  }

  &-chapters {
    display: flex;
    padding: var(--site-padding);
    flex-wrap: nowrap;
    gap: var(--site-padding);

    &-grid {
      display: flex;
      flex-wrap: nowrap;
      gap: var(--site-padding);
      flex-shrink: 0;
      background-color: var(--beige);
      overflow: hidden;
    }
  }
}

.filler {
  width: 20vw;
  flex-shrink: 0;
}
</style>