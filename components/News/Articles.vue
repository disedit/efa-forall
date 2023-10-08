<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="p-site">
    <NewsStory
      v-for="story in stories"
      :key="story.id"
      :story="story" />
  </section>
</template>