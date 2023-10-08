<script setup>
defineProps({
  inStory: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article :class="['press-corner', 'p-site', { 'in-story': inStory }]">
    <h2>Press corner</h2>
    <p>Text</p>
    <p>press@e-f-a.org</p>
    <p>
      <a href="" download>Download Press Kit</a>
    </p>
  </article>
</template>