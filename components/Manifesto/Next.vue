<script setup>
const { chapter, chapters } = defineProps({
  chapter: {
    type: Object,
    required: true
  },
  chapters: {
    type: Array,
    required: true
  }
})

const currentChapterIndex = chapters.findIndex((c) => c.id === chapter.id)
const nextChapter = chapters[currentChapterIndex + 1] || chapters[0]
</script>

<template>
  <nuxt-link :to="`/manifesto/${nextChapter.slug}`" class="chapter-next p-site">
    <span>{{ currentChapterIndex === 4 ? 'First chapter' : 'Next chapter' }}</span>
    <span class="chapter-next-title">
      {{ nextChapter.title.rendered }}
      <IconArrow />
    </span>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.chapter-next {
  display: flex;
  grid-area: next;
  @include border-top;
  justify-content: space-between;
  text-decoration: none;
  font-size: var(--text-lg);
  color: var(--black);
  transition: .25s ease;

  svg {
    height: 1em;
    width: 1em;
  }

  &-title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &:hover {
    background: var(--black);
    color: var(--white);
  }
}
</style>