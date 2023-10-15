<script setup>
defineProps({
  video: { type: String, required: true },
  poster: { type: String, required: true }
})

const playing = ref(false)
const player = ref(null)

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

/* Video controls */
const time = ref(0)
function onTimeUpdate (event) {
  time.value = event.target.currentTime
}

function convertTimeToDuration (seconds) {
  return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1");
}
</script>

<template>
  <div class="video-player">
    <video
      :src="video"
      :poster="poster"
      playsinline
      ref="player"
      @timeupdate="onTimeUpdate"
      @click="pauseVideo"
      class="video">
    </video>
    <Transition name="page">
      <button
        v-if="!playing"
        class="video-button"
        aria-label="Play video"
        @click="playVideo">
        <IconPlay class="icon" />
      </button>
    </Transition>
    <div class="video-controls">
      <button @click="togglePlay">Play/Pause</button>
      {{ convertTimeToDuration(time) }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .video-player {
    position: relative;
  }

  .video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  .video-controls {
    position: absolute;
    left: var(--site-padding);
    bottom: var(--site-padding);
    max-width: 50%;
    width: 400px;
    background: rgba($black, .75);
    padding: var(--site-padding-sm);
  }
</style>