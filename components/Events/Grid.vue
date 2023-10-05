<script setup>
defineProps({
  events: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <pre>{{ events }}</pre>
</template>