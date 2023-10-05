<script setup>
defineProps({
  page: {
    type: Number,
    required: true
  },

  lastPage: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div v-if="lastPage > page">
    <button @click="$emit('load')">Load more</button>
  </div>
</template>
