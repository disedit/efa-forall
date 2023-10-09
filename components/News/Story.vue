<script setup>
const { story } = defineProps({
  story: {
    type: Object,
    required: true
  }
})

const { thumbnail, category, date } = useStory(story)
</script>

<template>
  <article class="story">
    <nuxt-link :to="`/news/${story.slug}`">
      <img v-if="thumbnail" :src="thumbnail.src" :alt="thumbnail.alt">
      <p>{{ date }}</p>
      <p :class="`story-category category-${category.slug}`">{{ category.name }}</p>
      <h2 class="story-title" v-html="story.title.rendered" />
      <div class="story-excerpt" v-html="story.excerpt.rendered" />
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.story {

}
</style>