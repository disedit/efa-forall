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
        <div class="story-read-more">Read more</div>
      </div>
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.story {
  display: flex;
  min-height: 400px;
  max-height: 700px;

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
    grid-template-rows: 1fr auto auto;
    grid-template-areas:
      "thumbnail title"
      "thumbnail excerpt"
      "thumbnail readmore";
    background-color: var(--white);
    gap: var(--site-padding-sm);
    height: 100%;
    font-size: clamp(1rem, .9vw, 1.25rem);
  }

  &-category {
    margin-left: auto;
    padding-right: 0;
  }

  &-title {
    grid-area: title;
    font-size: clamp(2.25rem, 2.5vw, 3rem);
  }

  &-excerpt {
    grid-area: excerpt;
    color: var(--muted);
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    line-height: 1.35;

    :deep(p) {
      margin: 0;
    }
  }

  &-read-more {
    grid-area: readmore;
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

      .story-title,
      .story-read-more {
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

@include media('height>lg') {
  .story {
    height: calc(100vh - var(--headline-page) * 0.9 - var(--navbar-safe-area) - 8.75rem);
  } 
}  

@include media('>lg', '<xl') {
  .story {
    &-content {
      font-size: var(--text-sm);
      grid-template-columns: 1fr;
      grid-template-rows: 30vh 1fr auto;
      grid-template-areas:
      "thumbnail"
      "title"
      "readmore";
    }

    &-thumbnail {
      position: relative;

      img {
        position: absolute;
        inset: 0;
        object-fit: cover;
      }
    }

    &-excerpt {
      display: none;
    }
  }
}

@include media('<lg') {
  .story {
    height: auto;
    min-height: 30vh;
    
    a {
      width: 100%;
    }

    &-content {
      grid-template-columns: 1fr;
      grid-template-rows: 30vh 1fr auto;
      grid-template-areas:
        "thumbnail"
        "title"
        "readmore";
    }

    &-title {
      font-size: 1.75rem;
      padding-bottom: 2em;
    }

    &-excerpt {
      display: none;
    }
  }
}
</style>