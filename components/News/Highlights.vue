<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="highlights">
    <article
      v-for="story in stories"
      :key="story.id"
    >
      <nuxt-link :to="`/news/${story.slug}`">
        {{ story.title.rendered }}
      </nuxt-link>
    </article>
  </section>
</template>