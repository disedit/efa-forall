<script setup>
const props = defineProps({
  id: { type: String, default: null },
  video: { type: [String, Object], required: true },
  poster: { type: [String, Object],  default: null },
  showTime: { type: Boolean, default: false },
  fit: { type: String, default: null }
})

const { $emitter } = useNuxtApp()

const breakpoint = ref('desktop')
const player = ref(null)
const playing = ref(false)
const time = ref(0) // Updated every second
const lastCurrentTime = ref(0) // Updated on breakpoint changes
const duration = ref(0)
const showControls = ref(false)

onMounted(() => {
  updateBreakpoint()
  window.addEventListener('resize', updateBreakpoint)
  duration.value = player.value.duration

  $emitter.on('video:pause', (id) => {
    if (id === props.id) {
      pauseVideo()
    }
  })

  $emitter.on('video:play', (id) => {
    if (id === props.id) {
      playVideo()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateBreakpoint)
})

/* Breakpoint control */
watch(breakpoint, () => {
  lastCurrentTime.value = player.value.currentTime
  duration.value = player.value.duration
  player.value.load()
})

function updateBreakpoint ()  {
  breakpoint.value = window.innerWidth < 992 ? 'mobile' : 'desktop'
}

/* Video controls */
async function playVideo () {
  try {
    await player.value.play()
    playing.value = true
  } catch(e) {
    playing.value = false
  }
}

function pauseVideo () {
  playing.value = false
  player.value.pause()
}

function togglePlay () {
  if (playing.value) {
    pauseVideo()
  } else {
    playVideo()
  }
}

function onLoadedMetadata() {
  player.value.currentTime = lastCurrentTime.value
  if (playing.value) {
    player.value.play()
  }
}

function onTimeUpdate (event) {
  time.value = event.target.currentTime
}

/* Sources */
const videoSources = computed(() => {
  if (typeof props.video !== 'object') {
    return { mobile: props.video, desktop: props.video }
  }

  return props.video
})

const videoPosters = computed(() => {
  if (typeof props.poster !== 'object') {
    return { mobile: props.poster, desktop: props.poster }
  }

  return props.poster
})

const objectFit = computed(() => {
  if (props.fit) return props.fit
  return breakpoint.value === 'mobile' ? 'cover' : 'contain'
})
</script>

<template>
  <div class="video-player" :id="id">
    <Transition name="slide">
      <div v-if="!playing" class="video-title">
        <slot />
      </div>
    </Transition>
    <video
      ref="player"
      :src="videoSources[breakpoint]"
      :poster="videoPosters[breakpoint]"
      playsinline
      :controls="showControls"
      @timeupdate="onTimeUpdate"
      @click="!showControls ?  pauseVideo() : null"
      @loadedmetadata="onLoadedMetadata"
      @pause="playing = false"
      @play="playing = true"
      class="video"
      :style="{ objectFit }">
    </video>
    <Transition name="video">
      <button
        v-if="!playing"
        class="video-button"
        aria-label="Play video"
        @click="playVideo">
        <IconPlay class="icon" />
      </button>
    </Transition>
    <Transition name="slide">
      <SiteVideoControls
        v-if="playing && !showControls"
        :time="time"
        :duration="duration"
        :show-time="showTime"
        @toggle-play="togglePlay"
        @show-controls="showControls = true" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .video-player {
    position: relative;
    overflow: hidden;
  }

  .video {
    display: block;
    height: 100%;
    width: 100%;

    &-title {
      color: var(--white);
      font-family: var(--base-font);
      font-size: var(--text-xl);
      text-transform: unset;
      font-weight: 400;
      position: absolute;
      top: 0;
      left: 0;
      padding: var(--site-padding);
      z-index: 10;
    }
  }

  .video-button {
    position: absolute;
    inset: 0;
    appearance: none;
    border: 0;
    background: rgba($black, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    cursor: pointer;

    .icon {
      width: calc(2rem + 4vw);
      height: calc(2rem + 4vw);
      transition: .25s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .video-enter-active,
  .video-leave-active {
    transition: all 0.25s;

    .icon {
      transition: all 0.25s;
    }
  }
  .video-enter-from,
  .video-leave-to {
    opacity: 0;

    .icon {
      opacity: 0;
      transform: translateY(20%);
    }
  }

  @include media('<lg') {
    .video-button .icon {
      width: 20vw;
      height: 20vw;
    }
  }
</style>