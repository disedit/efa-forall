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
  <section class="candidates-map p-site">
    <h2>Find your candidate</h2>
    <p>{{ text }}</p>
  </section>
</template>