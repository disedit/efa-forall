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
    <div class="content p-site">
      <h3>Our<br>values</h3>
      <div class="text" v-html="content" />
    </div>
    <div class="video">
      <SiteVideo
        video="/video/placeholder.mp4"
        poster="https://tenproposals.e-f-a.org/images/proposals/2.jpg"
      />
      <nuxt-link to="/manifesto" class="manifesto py-sm p-site">
        <AnimatedArrowLink class="manifesto-link">
          Read the 2024 Manifesto
        </AnimatedArrowLink>
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.values {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
}

.content {
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  @include border-right;

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

.video {
  display: flex;
  flex-direction: column;

  .video-player {
    height: 100%;
  }

  .manifesto {
    padding: 0;
    color: var(--text-color);
    background: var(--secondary);
    text-decoration: none;
    @include border-top;

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
}

@include media('<lg') {
  .values {
    grid-template-columns: 1fr;
  }

  .content {
    grid-template-columns: 1fr;
    gap: 1rem;

    .text {
      font-size: var(--text-md);
    }
  }

  .video {
    @include border-top;
    aspect-ratio: 9 / 16;
  }
}
</style>