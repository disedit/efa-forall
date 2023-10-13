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
    <a href="/" download class="press-corner-kit">
      <IconPressKit class="icon" />
      Download Press Kit
    </a>
  </article>
</template>

<style lang="scss" scoped>
.press-corner {
  p:last-child {
    margin-bottom: 0;
  }
}

.in-story {
  @include border;

  .press-corner {
    &-content {
      padding: var(--site-padding-sm);

      h2 {
        font-family: var(--base-font);
        text-transform: unset;
        font-weight: 900;
        font-size: var(--text-2xl);
        line-height: 1;
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
  @include border;
  display: flex;
  flex-direction: column;
  gap: var(--site-padding);

  .press-corner {
    &-content {
      h2 {
        font-size: var(--headline-story);
        line-height: 1;
      }

      a {
        color: var(--text-color);
      }
    }

    &-kit {
      display: flex;
      background: var(--black);
      color: var(--white);
      text-decoration: none;
      padding: .75em 1.25em;
      transition: .25s ease;
      font-weight: 900;
      align-self: flex-start;
      gap: .75em;
      align-items: center;

      &:hover {
        background: var(--white);
        color: var(--black);
      }

      &:active {
        background: var(--black);
        color: var(--white);
      }

      .icon{
        height: 1em;
        width: 1em;
      }
    }
  }
}
</style>