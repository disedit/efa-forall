<script setup>
defineProps({
  fields: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <SitePageHeader>
    <template #title>
      About us
    </template>

    <template #heading>
      {{ fields.headline }}
    </template>

    <template #subheading>
      {{ fields.subheading }}
    </template>

    <template #aside>
      <div class="video">
        <SiteVideo
          video="/video/placeholder.mp4"
          poster="https://tenproposals.e-f-a.org/images/proposals/2.jpg"
        />
      </div>
    </template>
  </SitePageHeader>
</template>

<style lang="scss" scoped>
.video {
  display: flex;
  width: 100%;
  @include border-left;

  .video-player {
    height: 100%;
    width: 100%;
  }
}

@include media('<lg') {
  .page-header {
    min-height: unset;

    :deep(.title) {
      position: static !important;
    }
  }

  .video {
    @include border-top;
    border-left: 0;

    .video-player {
      aspect-ratio: 16 / 9;
    }
  }
}
</style>