<script setup>
defineProps({
  fields: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <SitePageHeader class="about-header">
    <template #title>
      About us
    </template>

    <template #heading>
      European<br>
      Free Alliance
    </template>

    <template #subheading>
      <div class="links-in-text" v-html="fields.subheading" />
    </template>

    <template #aside>
      <SiteVideo
        id="AboutHeader"
        :video="{
          desktop: '/video/what-is-efa-43.mp4',
          mobile: '/video/what-is-efa-916.mp4'
        }"
        :poster="{
          desktop: '/video/what-is-efa-43.jpg',
          mobile: '/video/what-is-efa-916.jpg'
        }"
        autoplay
        class="about-video"
        fit="cover"
      />
    </template>
  </SitePageHeader>
</template>

<style lang="scss" scoped>
.about-header:not(.single-column) {
  min-height: calc(100vh - var(--navbar-safe-area)) !important;
  min-height: calc(100svh - var(--navbar-safe-area)) !important;
  grid-template-columns: 1fr 1fr;

  :deep(.heading p) {
    font-size: var(--text-lg);
    line-height: 1.5;
  }
}

.about-video {
  @include border-left;
  height: calc(100vh - var(--navbar-safe-area));
  height: calc(100svh - var(--navbar-safe-area));
  width: 100%;
  display: flex;
  position: sticky;
  top: var(--navbar-safe-area);
  background-image: url(~/assets/images/tile.svg);
  background-size: 100px;
  background-position: center;
}

@include media('<xl') {
  .about-header:not(.single-column) {
    min-height: unset;
    grid-template-columns: 1fr;

    &:not(.collapse) :deep(.heading) {
      padding-bottom: 0;
    }

    :deep(.title) {
      position: static !important;
    }
  }

  .about-video {
    @include border-top;
    border-left: 0;
    width: 100%;
    height: auto;
  }
}
</style>