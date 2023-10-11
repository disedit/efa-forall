<script setup>
const { $gsap } = useNuxtApp()

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
        end: 'top 100px',
        scrub: 1,
        onLeave: () => {
          console.log('onleave')
          document.documentElement.classList.add('dark')
        },
        onLeaveBack: () => {
          console.log('onenter')
          document.documentElement.classList.remove('dark')
        },
        onEnterBack: () => {
          console.log('onenterback')
          document.documentElement.classList.add('dark')
        },
        onEnter: () => {
          console.log('onenter')
          document.documentElement.classList.remove('dark')
        }
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
      <div class="video-player"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video {
  height: 125vh;
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
    background-image: url(https://tenproposals.e-f-a.org/images/proposals/2.jpg);
  }

  &-title {
    color: var(--white);
    font-family: var(--font-base);
    text-transform: unset;
    position: absolute;
    top: 0;
    left: 0;
    padding: var(--site-padding);
  }
}
</style>