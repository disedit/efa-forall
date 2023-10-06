<template>
  <section class="hero p-site">
    <h1 class="hero-title">
      <div class="visually-hidden">We are looking for a new Europe for all</div>
      <div aria-hidden="true">
        <AnimatedHomeText text="WE ARE LOOKING" :speed="100" :delay="500" />
        <AnimatedHomeText text="FOR A NEW EUROPE" :delay="14 * 100 + 500" />
        <AnimatedHomeText text="FOR" ends-in-logo class="highlight" :delay="14 * 100 + 16 * 75 + 500" :speed="180" />
      </div>
    </h1>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: calc(100vh - var(--navbar-safe-area) - 7rem);
  min-height: calc(100svh - var(--navbar-safe-area) - 7rem);
  background-image: url(~/assets/images/maps/europe.svg);
  background-repeat: no-repeat;
  background-position: right center;

  &-title {
    font-size: var(--headline-home);
    line-height: 1;

    .highlight {
      color: var(--primary);
    }
  }
}
</style>