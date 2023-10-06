<script setup>
defineProps({
  socials: {
    type: Object,
    required: true
  }
})

const socialNetworkNames = {
  facebook: 'Facebook',
  x: 'X / Twitter',
  instagram: 'Instagram',
  youtube: 'YouTube',
  tiktok: 'TikTok'
}

const socialNetworkIcons = {}
</script>

<template>
  <ul class="candidate-socials list-unstyled">
    <li v-for="social in socials" :key="social.key">
      <a :href="social.url" target="_blank" rel="noopener">
        <span class="visually-hidden">{{ socialNetworkNames[social.key] }}</span>
        {{ social.key }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
