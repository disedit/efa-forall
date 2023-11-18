<script setup>
import { posters } from '@/assets/images/manifesto'

defineProps({
  chapters: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="chapters">
    <ManifestoChapterSummary
      v-for="chapter in chapters"
      :key="chapter.id"
      :chapter="chapter"
      :poster="posters[chapter.slug]"
    />
    <article class="candidates">
      <nuxt-link to="/candidates">
        <h2 class="candidates-title p-site">
          Who will<br>
          <strong>defend</strong><br>
          these ideas?
        </h2>
        <div class="candidates-picture" />
        <AnimatedArrowLink class="candidates-link">
          Meet our candidates
        </AnimatedArrowLink>
      </nuxt-link>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.chapters {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include media('<lg') {
    grid-template-columns: 1fr;
  }
}

.chapter {
  --color: var(--primary);
  @include border-bottom;

  &:nth-child(odd) {
    @include border-right;
  }

  &:nth-child(2),
  &:nth-child(3) {
    --color: var(--secondary);
  }

  &:nth-child(5),
  &:nth-child(6) {
    border-bottom: 0;
  }
}

.candidates {
  display: flex;

  a {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "picture title"
      "picture link";
    flex-direction: column;
    background: var(--secondary);
    color: var(--black);
    text-decoration: none;
    flex-grow: 1;
  }

  &-title {
    grid-area: title;
    font-size: var(--headline-block);
    line-height: .9;

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  &-picture {
    grid-area: picture;
    display: flex;
    height: 100%;
    @include border-right;
    background-image: url(https://content.forall2024.eu/wp-content/uploads/2023/11/big-one-square-min-1024x1024.png);
    background-size: cover;
    background-position: center;
  }

  &-link {
    grid-area: link;
  }

  &:hover,
  &:focus-within {
    .candidates-link {
      color: var(--white);

      &::before {
        transform: translateX(0);
      }
    }
  }
}

@include media('<lg') {
  .chapter {
    --color: var(--secondary) !important;

    &:nth-child(odd) {
      border-right: 0;
      --color: var(--primary) !important;
    }
  }

  .candidates {
    a {
      grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "picture"
        "link";
      @include border-top;
    }

    &-picture {
      @include border-top;
      border-right: 0;
      height: 50vh;
    }

    &-link {
      background: var(--black);
      color: var(--white);
    }
  }
}
</style>