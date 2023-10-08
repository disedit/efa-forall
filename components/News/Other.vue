<script setup>
defineProps({
  stories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <h2 class="visually-hidden">Other articles</h2>
  <ul>
    <li v-for="story in stories" :key="story.id">
      <nuxt-link :to="`/news/${story.slug}`">
        <img
          v-if="story._embedded"
          :src="story._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url"
          :alt="story._embedded['wp:featuredmedia'][0].alt_text"
        />
        <h3 v-html="story.title.rendered" />
      </nuxt-link>
    </li>
  </ul>
</template>