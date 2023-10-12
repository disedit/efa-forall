<script setup>
/* Retreive Manifesto chapters */
const { $wp } = useNuxtApp()
const { data } = await useAsyncData(
  'manifesto-page',
  () => $wp.pages()
    .param('_fields', 'id,title,acf')
    .slug('manifesto')
)
const manifesto = data.value[0]

const { data: chapters } = await useAsyncData(
  'manifesto-chapters',
  () => $wp.pages()
    .param('_fields', 'id,title,slug,acf')
    .param('order', 'asc')
    .param('parent', manifesto.id)
)

const route = useRoute()
const manifestoIndex = computed(() => route.name === 'manifesto')
</script>

<template>
  <main :class="['manifesto', { 'manifesto-single': !manifestoIndex }]">
    <ManifestoHeader :fields="manifesto.acf" :compact="!manifestoIndex" />
    <ManifestoNav :chapters="chapters" />
    <Transition name="slide">
      <div v-if="manifestoIndex" class="border-bottom">
        <ManifestoLanguages :fields="manifesto.acf" />
      </div>
    </Transition>
    <NuxtPage :manifesto="manifesto" :chapters="chapters" />
  </main>
</template>

<style lang="scss" scoped>
.manifesto-single {
  .manifesto-nav {
    position: sticky;
    top: var(--navbar-safe-area);
    background: var(--bg-color);
    z-index: 500;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease;
  max-height: 3rem;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  border-bottom: 0;
}
</style>