<template>
  <div>
    <SiteNav />
    <NuxtPage class="page" />
    <SiteFooter />
  </div>
</template>

<style lang="scss">
.page {
  min-height: calc(100vh - var(--navbar-safe-area));
}
</style>