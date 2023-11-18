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
        <NuxtLink to="/manifesto" class="manifesto-link link-black-to-underlined">
          <span class="icon-holder">
            <IconChevLeft class="icon" />
          </span>
          Manifesto
        </NuxtLink>
    </template>

    <template #heading>
      2024 EU<br>Elections<br>Manifesto
    </template>

    <template #subheading>
      {{ fields.subheading }}
    </template>

    <template #aside>
      <div class="for-all-circle ml-auto p-site">
        <LogoForAll />
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
    position: relative;
    color: var(--primary);
    transition: .3s ease;
    width: 100%;

    svg {
      width: 27vw;
      height: 27vw;
      position: absolute;
      bottom: 2vw;
      right: 2vw;
      transform: rotate(-8deg);
    }
  }
}

.manifesto-link {
  display: flex;
  align-items: center;

  .icon {
    height: .8em;
    width: .8em;
    transform: translateY(-.02em);
  }

  .icon-holder {
    width: 0;
    overflow: hidden;
    flex-shrink: 0;
    transition: width .25s ease;
  }
}

.manifesto-single .icon-holder {
  width: 1.25em;
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