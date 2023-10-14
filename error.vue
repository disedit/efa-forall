<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <main class="page">
      <SitePageHeader borderless>
        <template #title>
          Error
        </template>

        <template #heading>
          <div class="visually-hidden">Oops...</div>
          <div aria-hidden="true">
            <AnimatedHomeText text="Ooops..." :speed="100" :delay="250" />
          </div>
        </template>

        <template #subheading>
          <p v-if="error.statusCode === 404">
            We couldn't find the page that you're looking for.
          </p>
          <p v-else>
            {{ error.message }}
          </p>
          <p>
            <nuxt-link to="/">Go back to the homepage</nuxt-link>
          </p>
        </template>
      </SitePageHeader>
    </main>
  </NuxtLayout>
</template>