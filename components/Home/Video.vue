<script setup>
const { $gsap, $emitter } = useNuxtApp()
const { setDark, unsetDark } = useColorMode()
const sources = {
  desktop: '/video/for-all-169.mp4',
  mobile: '/video/for-all-916.mp4'
}
const posters = {
  desktop: '/video/for-all-169.jpg',
  mobile: '/video/for-all-916.jpg'
}

const video = ref(null)
let mm = null

onMounted(() => {
  setTimeout(() => {
    mm = $gsap.matchMedia()
    mm.add("(min-width: 992px)", () => {
      $gsap.fromTo(video.value, {
        margin: 28
      }, {
        margin: 0,
        scrollTrigger: {
          trigger: video.value,
          start: 'top 200px',
          end: 'top 95px',
          scrub: 1,
          onLeave: () => {
            $emitter.emit('video:autoplay', 'HomeVideo')
            setDark()
          },
          onLeaveBack: unsetDark,
          onEnterBack: unsetDark,
          onEnter: unsetDark
        }
      })
    })
  }, 500)
})

onUnmounted(() => {
  mm && mm.kill()
  unsetDark()
})
</script>

<template>
  <section class="video" ref="video">
    <div class="video-wrapper">
      <SiteVideo
        id="HomeVideo"
        :video="sources"
        :poster="posters"
        show-time
        class="video-player">
        A Europe<br />For All
      </SiteVideo>
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
    height: calc(100vh - var(--navbar-safe-area));
    display: flex;
    align-items: center;
  }

  &-player {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
}

@include media('<lg') {
  .video {
    height: 100vh;
  }
}
</style>