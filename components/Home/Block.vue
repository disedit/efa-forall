<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
})

const { $gsap } = useNuxtApp()
const block = ref(null)
const animation = ref(null)
const hovering = ref(false)
const circlePosition = reactive({ x: 0, y: 0})

function hover () {
  hovering.value = true
  animation.value && animation.value.kill()
  animation.value = $gsap.to(block.value, {
    duration: .5,
    ease: 'power4.out',
    '--circle-size': '70%'
  })
}

function unhover () {
  animation.value && animation.value.kill()
  animation.value = $gsap.to(block.value, {
    duration: .5,
    ease: 'power4.out',
    '--circle-size': '0%',
    onComplete: () => {
      hovering.value = false
    }
  })
}

function move (e) {
  console.log(e.pageX, e.pageY)
  const x = e.pageX - e.currentTarget.offsetLeft
  const y = e.pageY - e.currentTarget.offsetTop
  circlePosition.x = x
  circlePosition.y = y
}

const computedCirclePosition = computed(() => {
  return `${circlePosition.x}px ${circlePosition.y}px`
})

onUnmounted(() => {
  animation.value && animation.value.kill()
})
</script>

<template>
  <div
    class="block-wrapper"
    ref="block"
    @mouseenter="hover"
    @mouseleave="unhover"
    @mousemove="move"
    :style="{
      '--circle-position': computedCirclePosition
    }">
    <nuxt-link :to="to" class="block">
      <p class="block-title">
        <slot name="title" />
      </p>
      <h2 class="block-heading">
        <slot />
      </h2>
      <div class="block-hover" v-show="hovering">
        <p class="block-title">
          <slot name="title" />
        </p>
        <h2 class="block-heading">
          <slot />
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  padding: .5em;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: .9;
  aspect-ratio: 9 / 16;
  max-height: 70vh;
  min-width: 100%;
  gap: 4rem;
  transform: translateY(100px);
  overflow: hidden;
  background-color: var(--background);
  color: var(--foreground);
  transition: .25s ease;

  &-title {
    font-size: .5em;
    margin: 0;
    margin-bottom: auto;
    position: relative;
    z-index: 1;
  }

  &-heading {
    margin: 0;
    position: relative;
    z-index: 1;
  }

  &-hover {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--circle-background);
    color: var(--circle-foreground);
    z-index: 2;
    gap: 4rem;
    padding: .5em;
    clip-path: circle(var(--circle-size) at var(--circle-position));
  }

  &:focus {
    outline: 3px var(--black) solid;
  }
}
</style>