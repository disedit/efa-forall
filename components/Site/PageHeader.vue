<script setup>
defineProps({
  borderless: {
    type: Boolean,
    default: false
  },
  collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <header :class="['page-header', { 'border-bottom': !borderless }, { collapse }, { 'single-column': !$slots.aside }]">
    <div class="column content p-site">
      <h1 class="title" v-if="$slots.title">
        <slot name="title" />
      </h1>
      <div class="heading" v-if="$slots.heading || $slots.subheading">
        <h2 v-if="$slots.heading">
          <slot name="heading" />
        </h2>
        <p v-if="$slots.subheading">
          <slot name="subheading" />
        </p>
      </div>
    </div>
    <aside class="column aside" v-if="$slots.aside">
      <slot name="aside" />
    </aside>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  display: grid;
  font-size: var(--text-xl);

  &:not(.single-column) {
    grid-template-columns: 1.5fr 1fr;
  }

  &:not(.collapse) {
    min-height: calc(100vh - var(--navbar-safe-area) - 100px);
    min-height: calc(100svh - var(--navbar-safe-area) - 100px);

    .title {
      position: absolute;
    }

    .heading {
      padding: 4rem 0;
    }
  }

  &.collapse {
    .heading {
      margin-top: 4rem;
    }
  }

  .title {
    text-transform: unset;
    font-family: var(--base-font);
    font-size: inherit;
    line-height: 1;
    margin: 0;
    font-size: var(--text-md);
  }

  .heading {
    margin: auto 0;
    line-height: 1.25;

    h2 {
      margin: 0;
      font-size: clamp(3rem, 7vw, 9rem);
      line-height: .9;
    }

    p {
      margin: 0;
      text-wrap: balance;
      max-width: 60ch;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .aside {
    display: flex;
  }
}
</style>
