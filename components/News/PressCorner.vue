<script setup>
defineProps({
  inStory: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article :class="['press-corner', { 'in-story': inStory }, { 'in-news': !inStory }]">
    <div class="press-corner-content">
      <h2>Press<br>corner</h2>
      <p>Text</p>
      <p><a href="mailto:press@e-f-a.org">press@e-f-a.org</a></p>
    </div>
    <a href="" download class="press-corner-kit">
      <IconPressKit />
      Download Press Kit
    </a>
  </article>
</template>

<style lang="scss" scoped>
.in-story {
  @include border;

  .press-corner {
    &-content {
      padding: var(--site-padding-sm);

      h2 {
        font-family: var(--base-font);
        text-transform: unset;
        font-weight: bold;
        font-size: var(--text-2xl);
        line-height: 1;
      }

      p:last-child {
        margin-bottom: 0;
      }
    }

    &-kit {
      display: flex;
      @include border-top;
      padding: var(--site-padding-sm);
      color: var(--text-color);
      text-decoration: none;
      transition: .25s ease;
      align-items: center;
      gap: .5em;

      svg {
        height: 1em;
        width: 1em;
      }

      &:hover,
      &:focus {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }
}

.in-news {
  padding: var(--site-padding);
  background: var(--secondary);
}
</style>