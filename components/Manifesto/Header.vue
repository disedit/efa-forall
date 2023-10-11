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
      Manifesto
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
.for-all-circle {
  color: var(--primary);

  svg {
    height: 100%;
    width: 100%;
  }
}
</style>