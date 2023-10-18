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
  <ul class="other-stories list-unstyled">
    <li v-for="story in stories" :key="story.id">
      <nuxt-link :to="`/news/${story.slug}`" class="story p-sm">
        <img
          class="story-thumbnail"
          v-if="story._embedded"
          :src="story._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url"
          :alt="story._embedded['wp:featuredmedia'][0].alt"
        />
        <h3 class="story-title" v-html="story.title.rendered" />
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.other-stories {
  @include border;

  li:not(:last-child) {
    @include border-bottom;
  }

  .story {
    display: flex;
    gap: var(--site-padding-sm);
    color: var(--text-color);
    text-decoration: none;
    transition: background-color .25s ease;

    &-thumbnail {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    &-title {
      font-family: var(--base-font);
      text-transform: unset;
      font-weight: 900;
    }

    &:hover,
    &:focus {
      background-color: var(--white);
    }

    &:active {
      background-color: var(--black);
      color: var(--white);
    }
  }
}

@include media('<lg') {
  .other-stories {
    border: 0;
    @include border-top;
  }
}
</style>