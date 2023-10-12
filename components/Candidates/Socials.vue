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

const socialNetworkIcons = {
  facebook: resolveComponent('IconFacebook'),
  x: resolveComponent('IconTwitter'),
  instagram: resolveComponent('IconInstagram'),
  tiktok: resolveComponent('IconTikTok')
}
</script>

<template>
  <ul class="candidate-socials list-unstyled">
    <li v-for="social in socials" :key="social.key">
      <a :href="social.url" target="_blank" rel="noopener">
        <span class="visually-hidden">{{ socialNetworkNames[social.key] }}</span>
        <Component :is="socialNetworkIcons[social.key]" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>
