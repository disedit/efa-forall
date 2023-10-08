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

const title = `${chapter.value[0].title.rendered} - 2024 EU Elections Manifesto - EFA European Free Alliance`
useServerSeoMeta({
  title,
  ogTitle: title,
  description: chapter.value[0].exceprt,
  ogDescription: chapter.value[0].exceprt,
  ogImage: '/',
  twitterCard: 'summary_large_image',
})

useHead({ title })
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
    <ManifestoChapter :chapter="chapter[0]" :chapters="chapters" /> 
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