<script setup>
defineProps({
  fields: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="about-header border-bottom">
    <div class="column content p-site">
      <h1 class="title">About us</h1>
      <div class="heading">
        <h2>{{ fields.headline }}</h2>
        <p>{{ fields.subheading }}</p>
      </div>
    </div>
    <div class="column video">
      Video
    </div>
  </header>
</template>

<style lang="scss" scoped>
.about-header {
  min-height: calc(100vh - var(--navbar-safe-area));
  min-height: calc(100svh - var(--navbar-safe-area));
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  font-size: var(--text-xl);

  .title {
    position: absolute;
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
      font-size: clamp(3rem, 6vw, 8rem);
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

  .video {
    background: black;
  }
}
</style>