<script setup>
const { text, delay, speed, endsInLogo } = defineProps({
  text: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  },
  speed: {
    type: Number,
    default: 75
  },
  endsInLogo: {
    type: Boolean,
    default: false
  }
})

const index = ref(0)
const showCursor = ref(false)
const showLogo = ref(false)
const cursorHasTransition = ref(false)
const letters = computed(() => text.split(''))

onMounted(() => {
  setTimeout(() => {
    showCursor.value = true

    setInterval(() => {
      if (letters.value.length + 1 > index.value) {
        index.value++
      }

      if (letters.value.length === index.value && !endsInLogo) {
        showCursor.value = false
        showLogo.value = true
      }
    }, speed)
  }, delay)

  if (endsInLogo) {
    setTimeout(() => {
      cursorHasTransition.value = true
    }, delay + (speed * letters.value.length) + 100)
    setTimeout(() => {
      showCursor.value = false
      showLogo.value = true
    }, delay + (speed * letters.value.length) + 500)
  }
})
</script>

<template>
  <div :class="['animated-text', { 'ends-in-logo': endsInLogo }]">
    <span
      :class="['letter', { hidden: i + 1 > index }]"
      v-for="(letter, i) in letters"
      :key="letter">
      {{ letter }}
    </span>
    <span :class="['cursor', { hide: !showCursor, 'with-transition': cursorHasTransition }]" />
    <LogoAll v-if="endsInLogo" :class="['logo-all', { hide: !showLogo }]" />
  </div>
</template>

<style lang="scss" scoped>
.animated-text {
  height: 1em;
  margin: -.1em 0;
}

.cursor {
  position: absolute;
  border-radius: 100%;
  background-color: var(--primary);
  display: inline-block;
  position: absolute;

  &.with-transition {
    transition: .25s ease;
  }
}

.cursor,
.logo-all {
  position: absolute;
  height: .85em;
  width: .85em;
}

.ends-in-logo .cursor,
.logo-all {
  transform: translate(.15em, 0);
}

.hide {
  opacity: 0;
}

.ends-in-logo {
  .cursor {
    &.hide {
      transform: translate(.15em, 0) scale(0);
    }
  }
}
</style>