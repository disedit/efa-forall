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
      <div class="story-thumbnail">
        <img v-if="thumbnail" :src="thumbnail.src" :alt="thumbnail.alt">
      </div>
      <div class="story-date">{{ date }}</div>
      <h2 class="story-title" v-html="story.title.rendered" />
      <NewsCategory class="story-category" :category="category" />
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
    grid-template-areas: "thumbnail date title category";
    gap: var(--site-padding);
    transition: .25s ease;
    align-items: start;

    &:hover,
    &:focus {
      background-color: var(--white);
    }

    &:active {
      background-color: var(--black);
      color: var(--white);

      .story-date,
      .story-category {
        color: rgba($white, .5);
      }
    }
  }

  &-title {
    grid-area: title;
    margin: 0;
    font-family: var(--base-font);
    text-transform: unset;
    font-weight: 900;
    text-wrap: balance;
    font-size: var(--headline-story-sm);
    padding-top: var(--site-padding);
  }

  &-date {
    grid-area: date;
    color: var(--muted);
    padding-top: var(--site-padding);
  }

  &-category {
    grid-area: category;    padding-top: var(--site-padding);
    padding-right: var(--site-padding);
  }

  &-thumbnail {
    grid-area: thumbnail;
    display: flex;
    height: 100%;
    aspect-ratio: 1 / .75;
    @include border-right;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@include media('<lg') {
  .story {
    a {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "thumbnail thumbnail"
        "date category"
        "title title";
      gap: 0;
    }

    &-date,
    &-category,
    &-title {
      padding: var(--site-padding);
    }

    &-title {
      padding-top: 0;
    }

    &-category {
      margin-left: auto
    }

    &-thumbnail {
      @include border-bottom;
      border-right: 0;
      height: 35vh;
      aspect-ratio: unset;
    }
  }
}
</style>