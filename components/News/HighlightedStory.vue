<script setup>
const { story } = defineProps({
  story: {
    type: Object,
    required: true
  }
})

const { thumbnail, category, date } = useStory(story, 'large')
</script>

<template>
  <article class="story">
    <nuxt-link :to="`/news/${story.slug}`">
      <div class="story-header">
        <div class="story-date p-sm">
          {{ date }}
        </div>
        <NewsCategory class="p-sm" :category="category" />
      </div>
      <div class="story-content p-sm">
        <div class="story-thumbnail">
          <img v-if="thumbnail" :src="thumbnail.src" :alt="thumbnail.alt">
        </div>
        <h2 class="story-title reset-heading" v-html="story.title.rendered" />
        <div class="story-excerpt" v-html="story.excerpt.rendered" />
      </div>
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.story {
  display: flex;
  min-height: calc(100vh - 330px);

  &-header {
    display: flex;
  }

  &-date {
    background-color: var(--white);
    color: var(--muted);
    padding-right: 5rem;
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "thumbnail title"
      "thumbnail excerpt";
    background-color: var(--white);
    gap: var(--site-padding-sm);
    height: 100%;
  }

  &-category {
    margin-left: auto;
    padding-right: 0;
  }

  &-title {
    grid-area: title;
    font-size: 2.5rem;
  }

  &-excerpt {
    grid-area: excerpt;
    color: var(--muted);
    margin-top: auto;

    :deep(p) {
      margin: 0;
    }
  }

  &-thumbnail {
    grid-area: thumbnail;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    color: var(--text-color);
    text-decoration: none;
    height: 100%;

    &:focus,
    &:hover {
      outline: 0;

      .story-title {
        text-decoration: underline;
      }

      .story-content {
        outline: 3px var(--black) solid;
      }

      .story-date {
        border: 3px var(--black) solid;
        margin: -3px;
        margin-bottom: 0;
        border-bottom: 0;
        position: relative;
        z-index: 10;
      }
    }
  }

}
</style>