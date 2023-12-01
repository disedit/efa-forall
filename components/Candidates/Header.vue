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
      <div class="visually-hidden">Candidates that will work for all</div>
      <div aria-hidden="true">
        <AnimatedHomeText text="CANDIDATES" :speed="100" :delay="250" />
        <AnimatedHomeText text="THAT WILL WORK" :delay="10 * 100 + 500" />
        <AnimatedHomeText text="FOR" ends-in-logo class="highlight" :delay="10 * 100 + 14 * 75 + 500" :speed="180" />
      </div>
    </template>

    <template #aside>
      <div
        class="spitzenkandidaten-photo"
        :style="{
          backgroundImage: `url(${candidates.spitzenkandidaten.sizes.large})`
        }"
      />
    </template>
  </SitePageHeader>
</template>

<style lang="scss" scoped>
.spitzenkandidaten-photo {
  position: relative;
  display: flex;
  @include border-left;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.highlight {
  color: var(--primary);
}

.page-header.candidates-header {
  grid-template-columns: 1fr 1fr;
}

@include media('<lg') {
  .page-header.candidates-header {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;

    .spitzenkandidaten-photo {
      aspect-ratio: 1;
    }

    :deep(.heading) {
      padding-bottom: 1rem;
    }

    :deep(.heading h2) {
      font-size: 3.75rem;
    }
  }

  .spitzenkandidaten-photo {
    @include border-top;
    border-left: 0;
  }
}
</style>