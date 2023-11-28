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
      <h3>Our values</h3>
      <div class="text" v-html="content" />
    </div>
    <div class="values-video">
      <SiteVideo
        id="AboutValues"
        :video="{
          desktop: '/video/what-is-efa-43.mp4',
          mobile: '/video/what-is-efa-916.mp4'
        }"
        :poster="{
          desktop: '/video/what-is-efa-43.jpg',
          mobile: '/video/what-is-efa-916.jpg'
        }"
        autoplay
        class="video-holder"
        fit="cover"
        object-position="center bottom"
      />
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "video content"
    "video manifesto";

  &-content {
    @include border-left; 

    h3 {
      font-size: var(--headline-block);
      line-height: .9;
      margin-top: .15em;
      margin-bottom: .5em;
    }

    .text {
      font-size: var(--text-lg);
      line-height: 1.5;
      max-width: 70ch;

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
      width: 100%;
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
  @include border-left;
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

@media (max-aspect-ratio: 4/3) {
  .values {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "video"
      "manifesto";

    &-content {
      grid-template-columns: 1fr;
      gap: 1rem;
      border-left: 0;
    }

    &-video {
      @include border-top;
      .video-holder {
        width: 100%;
        height: auto;
        border: 0;
      }
    }
  }

  .manifesto {
    border-left: 0;
  }
}

@include media('<xl') {
  .values {
    &-content {
      .text {
        font-size: var(--text-md);
      }
    }
  }
}
</style>