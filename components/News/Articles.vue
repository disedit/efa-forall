<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section aria-label="Rest of stories">
    <NewsStory
      v-for="story in stories"
      :key="story.id"
      :story="story" />
  </section>
</template>