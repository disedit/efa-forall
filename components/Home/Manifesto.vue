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
const scroller = ref(null)
const ctx = ref(null)

function getScrollAmount() {
  const width = items.value.scrollWidth
  return -(width - window.innerWidth)
}

onMounted(() => {
  setTimeout(() => {
    ctx.value = $gsap.context((self) => {
      const animation = $gsap.to(items.value, {
        x: getScrollAmount,
        duration: 3,
        ease: "none"
      })

      scroller.value = $ScrollTrigger.create({
        trigger: wrapper.value,
        start: 'top 73px',
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

      $gsap.fromTo('.manifesto-chapters .chapter', {
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
        },
        onComplete: () => {
          scroller.value.refresh()
        }
      })
    }, wrapper.value)
  }, 250)
})

onUnmounted(() => {
  ctx.value && ctx.value.revert()
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
    font-family: var(--font-base);
    text-transform: unset;
    position: absolute;
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