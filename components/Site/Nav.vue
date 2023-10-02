<template>
  <header class="nav">
    <NuxtLink to="/" class="nav-brand">
      <LogoEfa class="logo-efa" aria-label="European Free Alliance" />
      <LogoForAll class="logo-for-all" aria-label="For all" />
      <div class="title">EU Elections 2024</div>
    </NuxtLink>

    <nav class="nav-menu">
      <NuxtLink to="/about-us">About us</NuxtLink>
      <NuxtLink to="/manifesto">Manifesto</NuxtLink>
      <NuxtLink to="/candidates">Candidates</NuxtLink>
      <NuxtLink to="/news">News</NuxtLink>
      <NuxtLink to="/events">Events</NuxtLink>
      <a href="/" class="button">Donate</a>
    </nav>
  </header>
  <div class="safe-area" />
</template>

<style lang="scss" scoped>
@layer component {
  .nav {
    display: flex;
    align-items: center;
    padding: var(--site-padding);
    border-bottom: 1px solid var(--black);
    background: var(--bg-color);
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;

    &-brand {
      display: flex;
      align-items: center;
      gap: .5rem;
      color: var(--black);
      text-decoration: none;
        
      &:hover {
        text-decoration: underline;
      }
    }

    &-menu {
      display: flex;
      margin-left: auto;
      gap: 1.5rem;
      align-items: center;

      a {
        color: var(--text-color);
        text-decoration: none;
        white-space: nowrap;

        &:hover {
          color: var(--primary);
          font-weight: bold;
        }
      }
    }
  }

  .safe-area {
    height: var(--navbar-safe-area);
  }

  .logo-efa {
    height: 2rem;
    width: auto;
  }

  .logo-for-all {
    height: 2.5rem;
    color: var(--primary);
  }
}
</style>