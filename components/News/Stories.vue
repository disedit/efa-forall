<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section aria-label="Rest of stories" class="stories">
    <NewsStory
      v-for="story in stories"
      :key="story.id"
      :story="story" />
  </section>
</template>

<style lang="scss" scoped>
.stories {
  @include border;
  border-top: 0;
}

@include media('<lg') {
  .stories {
    border: 0;
  }
}
</style>