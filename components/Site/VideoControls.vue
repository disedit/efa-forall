<script setup>
const props = defineProps({
  time: { type: Number, required: true },
  duration: { type: Number, required: true },
  showTime: { type: Boolean, default: false }
})

function human(seconds) {
  return [parseInt((seconds / 60) % 60, 10), parseInt(seconds  % 60, 10)]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1");
}

function width(seconds) {
  return (seconds * 100 / props.duration) + '%'
}
</script>

<template>
   <div class="video-controls">
      <button @click="$emit('togglePlay')" title="Pause Video">
        <IconPause class="icon" />
      </button>
      <span class="time" v-if="showTime">
        {{ human(time) }}
        <span class="total-time">/ {{ human(duration) }}</span>
      </span>
      <button @click="$emit('showControls')" title="Show more controls" class="controls">
        <IconSlider class="icon" />
      </button>
      <div class="progress">
        <div class="progress-bar" :style="{ width: width(time) }" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.video-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--site-padding-sm);
  display: flex;
  align-items: center;
  gap: var(--site-padding-sm);
  color: var(--white);

  button {
    appearance: none;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: .25s ease;

    .icon {
      width: 1.75em;
      height: 1.75em;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .time {
    font-variant-numeric: tabular-nums;
    transform: translateY(-.1em);
    
    .total-time {
      opacity: .5;
    }
  }
}

.controls {
  margin-left: auto;
}

.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &-bar {
    height: .25rem;
    background: var(--primary);
    transition: width 1s linear;
  }
}
</style>