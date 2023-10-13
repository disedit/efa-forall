<script setup>
defineProps({
  candidates: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <SitePageHeader class="candidates-header">
    <template #title>
      Meet the candidates
    </template>

    <template #heading>
      <div class="visually-hidden">We are looking for a new Europe for all</div>
      <div aria-hidden="true">
        <AnimatedHomeText text="CANDIDATES" :speed="100" :delay="250" />
        <AnimatedHomeText text="THAT WILL WORK" :delay="10 * 100 + 500" />
        <AnimatedHomeText text="FOR" ends-in-logo class="highlight" :delay="10 * 100 + 14 * 75 + 500" :speed="180" />
      </div>
    </template>

    <template #aside>
      <div class="spitzenkandidaten-photo">
        <img :src="candidates.spitzenkandidaten.sizes.large" :alt="candidates.spitzenkandidaten.alt">
      </div>
    </template>
  </SitePageHeader>
</template>

<style lang="scss" scoped>
.spitzenkandidaten-photo {
  @include border-left;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.highlight {
  color: var(--primary);
}

.page-header.candidates-header {
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - var(--navbar-safe-area));
  height: calc(100svh - var(--navbar-safe-area));
}
</style>