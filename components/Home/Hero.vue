<template>
  <section class="hero p-site">
    <h1 class="hero-title">
      WE ARE LOOKING<br>
      FOR A NEW EUROPE
      <div class="highlight">
        FOR <LogoAll />
      </div>
    </h1>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: calc(100vh - var(--navbar-safe-area) - 7rem);

  &-title {
    font-size: var(--headline-home);
    line-height: .85;

    .highlight {
      display: flex;
      color: var(--primary);
      gap: .2em;
      align-items: center;

      svg {
        transform: translateY(-.1em);
      }
    }
  }
}
</style>