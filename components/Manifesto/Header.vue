<script setup>
defineProps({
  fields: {
    type: Object,
    required: true
  },

  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <SitePageHeader :class="['manifesto-header', { compact }]">
    <template #title>
      <nuxt-link to="/manifesto" class="link-black-to-underlined">Manifesto</nuxt-link>
    </template>

    <template #heading>
      2024 EU<br>Elections<br>Manifesto
    </template>

    <template #subheading>
      {{ fields.subheading }}
    </template>

    <template #aside>
      <div class="for-all-circle ml-auto p-site">
        <LogoForAllBig />
      </div>
    </template>
  </SitePageHeader>
</template>

<style lang="scss" scoped>
.manifesto-header {
  transition: max-height .5s ease, min-height .5s ease;
  max-height: 100vh;
  overflow: hidden;

  :deep(.heading) {
    transition: .3s ease;
  }

  .for-all-circle {
  color: var(--primary);
  transition: .3s ease;

  svg {
    height: 100%;
    width: 100%;
  }
}
}

.compact {
  min-height: 0 !important;
  max-height: 3.1rem;
  overflow: hidden;

  :deep(.heading) {
    opacity: 0;
    transform: translateY(20%);
  }

  .for-all-circle {
    opacity: 0;
    transform: translateY(20%);
  }
}

@include media('<lg') {
  .manifesto-header {
    :deep(.aside) {
      display: none;
    }
  }

  .compact {
    max-height: 2.534375rem;
  }
}
</style>