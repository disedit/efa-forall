<script setup>
const slider = ref(null)
const isDown = ref(false)
const startX = ref(null)
const scrollLeft = ref(null)
const velX = ref(0)
const momentumId = ref(null)

function onMouseDown (e) {
  isDown.value = true
  startX.value = e.pageX - slider.value.offsetLeft
  scrollLeft.value = slider.value.scrollLeft
  cancelMomentumTracking()
}

function onMouseLeave () {
  isDown.value = false
}

function onMouseUp () {
  isDown.value = false
  beginMomentumTracking()
}

function onMouseMove (e) {
  if (!isDown.value) return
  const x = e.pageX - slider.value.offsetLeft
  const walk = (x - startX.value)
  const prevScrollLeft = slider.value.scrollLeft
  slider.value.scrollLeft = scrollLeft.value - walk
  velX.value = slider.value.scrollLeft - prevScrollLeft
}

// Momentum
function onWheel () {
  cancelMomentumTracking()
}

function beginMomentumTracking () {
  cancelMomentumTracking()
  momentumId.value = requestAnimationFrame(momentumLoop)
}

function cancelMomentumTracking () {
  cancelAnimationFrame(momentumId.value)
}

function momentumLoop () {
  slider.value.scrollLeft += velX.value
  velX.value *= 0.95
  if (Math.abs(velX.value) > 0.5) {
    momentumId.value = requestAnimationFrame(momentumLoop)
  }
}
</script>

<template>
  <div
    :class="['slider', 'touch', { active: isDown }]"
    ref="slider"
    @mousedown="onMouseDown"
    @mouseleave="onMouseLeave"
    @mouseup="onMouseUp"
    @mousemove.prevent="onMouseMove"
    @wheel="onWheel">
      <slot />
  </div>
</template>

<style lang="scss" scoped>
.slider {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--site-padding);
  overflow-x: auto;
  @include scrollbar;
  cursor: grabbing;
  scrollbar-color: rgba($black, .25) var(--beige);
}
</style>