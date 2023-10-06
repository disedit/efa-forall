<script setup>
defineProps({
  candidates: {
    type: Array,
    required: true
  },
  text: {
    type: String,
    default: null
  }
})
</script>

<template>
  <section class="candidates-map">
    <h2>Find your candidate</h2>
    <p>{{ text }}</p>
    <pre>{{ candidates }}</pre>
  </section>
</template>