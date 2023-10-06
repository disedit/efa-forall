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
        <div class="candidates-picture p-site">
        </div>
        <div class="candidates-link py-sm p-site">
          Meet our candidates
          <IconArrow />
        </div>
      </nuxt-link>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.chapters {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    display: flex;
    flex-direction: column;
    background: var(--secondary);
    color: var(--black);
    text-decoration: none;
    flex-grow: 1;
  }

  &-title {
    font-size: var(--headline-block);
    line-height: .9;

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  &-picture {
    display: flex;
    height: 100%;
  }

  &-link {
    display: flex;
    justify-content: space-between;
    font-size: var(--text-xl);
    @include border-top;
    font-size: var(--text-lg);

    svg {
      height: 1em;
    }
  }

  &:hover,
  &:focus-within {
    .candidates-link {
      background: var(--black);
      color: var(--white);
    }
  }
}
</style>