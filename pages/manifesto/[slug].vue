<script setup>
const config = useRuntimeConfig()
const { $wp } = useNuxtApp()
const { params } = useRoute()
const { data: chapter } = await useAsyncData(
  `manifesto-${params.slug}`,
  () => $wp.pages().slug(params.slug)
)
const { data: chapters } = await useAsyncData(
  'manifesto-chapters',
  () => $wp.pages()
    .param('_fields', 'id,title,slug,acf')
    .param('order', 'asc')
    .param('parent', config.public.manifestoPage)
)

useServerSeoMeta({
  title: 'EFA',
  ogTitle: 'EFA',
  description: 'Desc',
  ogDescription: 'Desc',
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'EFA - For All',
})
</script>

<template>
  <main>
    <SitePageHeader collapse>
      <template #title>
        <nuxt-link to="/manifesto" class="link-black-to-underlined">
          Manifesto
        </nuxt-link>
      </template>
    </SitePageHeader>
    <ManifestoNav :chapters="chapters" />
    <ManifestoChapter :chapter="chapter[0]" /> 
  </main>
</template>

<style lang="scss" scoped>
.manifesto-nav {
  position: sticky;
  top: var(--navbar-safe-area);
  background: var(--bg-color);
  z-index: 500;
}
</style>