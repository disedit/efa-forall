<template>
  <header class="nav">
    <NuxtLink to="/">
      <LogoEfa class="logo-efa" aria-label="European Free Alliance" />
      <LogoForAll class="logo-for-all" aria-label="For all" />
      <div class="title">EU Elections 2024</div>
    </NuxtLink>

    <nav>
      <NuxtLink to="/about-us">About us</NuxtLink>
      <NuxtLink to="/manifesto">Manifesto</NuxtLink>
      <NuxtLink to="/candidates">Candidates</NuxtLink>
      <NuxtLink to="/news">News</NuxtLink>
      <NuxtLink to="/events">Events</NuxtLink>
      <a href="/">Donate</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
}

.logo-for-all {
  height: 2rem;
}
</style>