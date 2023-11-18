<script setup>
const props = defineProps({
  id: { type: String, default: null },
  video: { type: [String, Object], required: true },
  poster: { type: [String, Object],  default: null },
  showTime: { type: Boolean, default: false },
  fit: { type: String, default: 'contain '}
})

const { $emitter } = useNuxtApp()
const breakpoints = useBreakpoints({
  mobile: 0,
  desktop: 992
})
const breakpoint = computed(() => {
  const currentBreakpoints =  breakpoints.current()
  if (!currentBreakpoints.value.length) return 'desktop'
  return currentBreakpoints.value[currentBreakpoints.value.length - 1]
})
const playing = ref(false)
const player = ref(null)
const currentTime = ref(0)
const duration = ref(0)
const showControls = ref(false)

onMounted(() => {
  duration.value = player.value.duration

  $emitter.on('video:pause', (id) => {
    if (id === props.id) {
      pauseVideo()
    }
  })
})

watch(breakpoint, () => {
  currentTime.value = player.value.currentTime
  duration.value = player.value.duration
  player.value.load()
})

function playVideo () {
  playing.value = true
  player.value.play()
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
  player.value.currentTime = currentTime.value
  if (playing.value) {
    player.value.play()
  }
}

/* Video controls */
const time = ref(0)
function onTimeUpdate (event) {
  time.value = event.target.currentTime
}

/* Sources */
const videoSource = computed(() => {
  if (typeof props.video === 'object') {
    return props.video[breakpoint.value]
  }

  return props.video
})

const videoPoster = computed(() => {
  if (props.poster && typeof props.poster === 'object') {
    return props.poster[breakpoint.value]
  }

  return props.poster
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
      :src="videoSource"
      :poster="videoPoster"
      playsinline
      :controls="showControls"
      @timeupdate="onTimeUpdate"
      @click="!showControls ?  pauseVideo() : null"
      @loadedmetadata="onLoadedMetadata"
      @pause="playing = false"
      @play="playing = true"
      class="video"
      :style="{ objectFit: fit }">
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