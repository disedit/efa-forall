<template>
  <section class="video">
    <div class="video-wrapper">
      <div class="video-player"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video {
  padding: var(--site-padding);
  padding-top: 0;

  &-wrapper {
    background: var(--black);
  }

  &-player {
    background: blue;
    aspect-ratio: 16 / 9;
    max-height: 80vh;
    margin: 0 auto;
  }
}
</style>