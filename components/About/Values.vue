<script setup>
defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="values">
    <div class="values-content p-site">
      <h3>Our<br>values</h3>
      <div class="text" v-html="content" />
    </div>
    <div class="values-video">
      <SiteVideo video="/video/about.mp4" class="video-holder" fit="cover" />
    </div>
    <nuxt-link to="/manifesto" class="manifesto py-sm p-site">
      <AnimatedArrowLink class="manifesto-link">
        Read the 2024 Manifesto
      </AnimatedArrowLink>
    </nuxt-link>
  </section>
</template>

<style lang="scss" scoped>
.values {
  display: grid;
  position: relative;
  min-height: calc(100vh - var(--navbar-safe-area));
  min-height: calc(100svh - var(--navbar-safe-area));
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "content video"
    "manifesto video";

  &-content {
    grid-area: content;
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
    flex-shrink: 0;

    h3 {
      font-size: var(--headline-block);
      line-height: .9;
      margin-top: .15em;
    }

    .text {
      font-size: var(--text-lg);
      line-height: 1.5;
      max-width: 50ch;

      :deep(p) {
        margin-top: 0;
        margin-bottom: .85em;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &-video {
    grid-area: video;
    display: flex;

   .video-holder {
      display: flex;
      height: calc(100vh - var(--navbar-safe-area));
      height: calc(100svh - var(--navbar-safe-area));
      background-image: url(~/assets/images/tile.svg);
      background-size: 100px;
      background-position: center;
      position: sticky;
      top: var(--navbar-safe-area);
      @include border-left; 
      margin-left: auto;
    }
  }
}

.manifesto {
  grid-area: manifesto;
  padding: 0;
  color: var(--text-color);
  background: var(--secondary);
  text-decoration: none;
  @include border-top;
  width: 100%;

  &:hover {
    color: var(--white);

    .manifesto-link::before {
      transform: translate(0);
    }
  }

  &-link {
    border-top: 0;
  }
}

@include media('<lg') {
  .values {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "video"
      "manifesto";

    &-content {
      grid-template-columns: 1fr;
      gap: 1rem;

      .text {
        font-size: var(--text-md);
      }
    }

    &-video {
      @include border-top;
      .video-holder {
        width: 100%;
        border: 0;

        :deep(.video) {
          object-fit: contain !important;
        }
      }
    }
  }
}
</style>