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
    <nuxt-link :to="`/news/${story.slug}`" class="p-site">
      <div class="story-thumbnail">
        <img v-if="thumbnail" :src="thumbnail.src" :alt="thumbnail.alt">
      </div>
      <div class="story-date">{{ date }}</div>
      <h2 class="story-title" v-html="story.title.rendered" />
      <NewsCategory :category="category" />
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.story {
  @include border-top;
  
  a {
    display: grid;
    color: var(--text-color);
    text-decoration: none;
    grid-template-columns: minmax(200px, 15vw) 200px 1fr auto;
    gap: var(--site-padding);
    transition: .25s ease;
    align-items: start;

    &:hover,
    &:focus {
      background-color: var(--black);
      color: var(--white);

      .story-date,
      .story-category {
        color: rgba($white, .5);
      }
    }
  }

  &-title {
    margin: 0;
    font-family: var(--base-font);
    text-transform: unset;
    font-weight: bold;
    text-wrap: balance;
    font-size: var(--headline-story-sm);
  }

  &-date {
    color: var(--muted);
  }

  &-thumbnail {
    display: flex;
    height: 100%;
    aspect-ratio: 1 / .75;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>