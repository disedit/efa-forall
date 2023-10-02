<template>
  <section class="blocks">
    <nuxt-link to="/about-us" class="block about">
      <p class="block-title">
        About us
      </p>
      <h2 class="block-heading">
        European <br> Free <br> Alliance
      </h2>
    </nuxt-link>

    <nuxt-link to="/manifesto" class="block manifesto">
      <p class="block-title">
        For all
      </p>
      <h2 class="block-heading">
        2024 <br> Election <br> Manifesto
      </h2>
    </nuxt-link>

    <nuxt-link to="/candidates" class="block candidates">
      <p class="block-title">
        Meet the candidates
      </p>
      <h2 class="block-heading">
        Candidates
      </h2>
    </nuxt-link>
  </section>
</template>

<style lang="scss" scoped>
.blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--site-padding);
  padding: var(--site-padding);
}

.block {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: .5em;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: .9;
  aspect-ratio: 9 / 16;
  max-height: 70vh;
  min-width: 100%;

  &-title {
    font-size: .5em;
    margin: 0;
    margin-bottom: auto;
  }

  &-heading {
    margin: 0;
  }

  &.about {
    background: var(--primary);
    color: var(--white);
  }

  &.manifesto {
    background: var(--secondary);
    color: var(--white);
  }

  &.candidates {
    background: var(--white);
    color: var(--black);
  }
}
</style>