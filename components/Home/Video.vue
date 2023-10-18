<script setup>
const { $gsap } = useNuxtApp()
const { setDark, unsetDark } = useColorMode()

const animation = ref(null)
const video = ref(null)

onMounted(() => {
  setTimeout(() => {
    animation.value = $gsap.fromTo(video.value, {
      margin: 28
    }, {
      margin: 0,
      scrollTrigger: {
        trigger: video.value,
        start: 'top 200px',
        end: 'top 95px',
        scrub: 1,
        onLeave: setDark,
        onLeaveBack: unsetDark,
        onEnterBack: unsetDark,
        onEnter: unsetDark
      }
    })
  }, 500)
})

onUnmounted(() => {
  animation.value && animation.value.kill()
  document.documentElement.classList.remove('dark')
})
</script>

<template>
  <section class="video" ref="video">
    <div class="video-wrapper">
      <h2 class="video-title">
        Video<br>title
      </h2>
      <SiteVideo
        id="HomeVideo"
        video="/video/placeholder.mp4"
        poster="https://tenproposals.e-f-a.org/images/proposals/2.jpg"
        class="video-player" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video {
  height: 250vh;
  background: var(--black);
  position: relative;

  &-wrapper {
    position: sticky;
    top: var(--navbar-safe-area);
    padding: var(--site-padding);
  }

  &-player {
    aspect-ratio: 16 / 9;
    max-height: calc(100vh - var(--navbar-safe-area) - var(--site-padding) * 2);
    margin: 0 auto;
  }

  &-title {
    color: var(--white);
    font-family: var(--base-font);
    text-transform: unset;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
    padding: var(--site-padding);
  }
}
</style>