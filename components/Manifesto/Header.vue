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
  <SitePageHeader :class="['manifesto-header', { compact }]" half-half>
    <template #title>
        <NuxtLink to="/manifesto" class="manifesto-link link-black-to-underlined">
          <span class="icon-holder">
            <IconChevLeft class="icon" />
          </span>
          Manifesto
        </NuxtLink>
    </template>

    <template #heading>
      <img src="~/assets/images/manifesto/cover.svg" alt="For All" class="for-all-mobile" />
      2024 EU<br>Elections<br>Manifesto
    </template>

    <template #subheading>
      {{ fields.subheading }}
    </template>

    <template #aside>
      <div class="for-all-circle ml-auto p-site">
        <span class="visually-hidden">For All</span>
      </div>
    </template>
  </SitePageHeader>
</template>

<style lang="scss" scoped>
.manifesto-header:not(.collapse) {
  transition: max-height .5s ease, min-height .5s ease;
  min-height: calc(100vh - var(--navbar-safe-area) - 6.65375rem);
  min-height: calc(100svh - var(--navbar-safe-area) - 6.65375rem);
  max-height: 100vh;
  overflow: hidden;

  :deep(.heading) {
    transition: .3s ease;
  }

  .for-all-circle {
    color: var(--primary);
    transition: .3s ease;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(~/assets/images/manifesto/cover.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    margin: var(--site-padding);

    img {
      height: 100%;
      width: auto;
    }
  }
}

.for-all-mobile {
  display: none;
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
  max-height: 3.1rem !important;
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
  .page-header.half-half.manifesto-header {
    grid-template-columns: 1fr;
    max-height: 200vh;

    :deep(.aside) {
      display: none;
    }

    :deep(.heading) {
      padding: 0;
      text-align: center;
    } 

    :deep(.title) {
      z-index: 100;
    }

    :deep(.heading h2) {
      text-align: center;
      font-family: var(--base-font);
      font-weight: bold;
      text-transform: unset;
      font-size: 2.5rem;
    }

    :deep(.heading p) {
      font-size: var(--text-lg);
      margin-top: .5rem;
      max-width: unset;
    } 
  }

  .for-all-mobile {
    display: block;
    width: 100%;
    margin-bottom: 2rem;
  }

  .compact {
    max-height: 2.534375rem !important;
  }
}
</style>