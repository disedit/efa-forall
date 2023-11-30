<script setup>
const socials = [
  { name: 'Facebook', url: '', icon: resolveComponent('IconFacebook') },
  { name: 'X / Twitter', url: '', icon: resolveComponent('IconTwitter') },
  { name: 'Instagram', url: '', icon: resolveComponent('IconInstagram') },
  { name: 'YouTube', url: '', icon: resolveComponent('IconYouTube') },
  { name: 'TikTok', url: '', icon: resolveComponent('IconTikTok') },
  { name: 'LinkedIn', url: '', icon: resolveComponent('IconLinkedIn') },
]
</script>

<template>
  <ul aria-label="Social networks" class="social-networks list-unstyled">
    <li v-for="social in socials" :key="social.name">
      <a :href="social.url" target="_blank" rel="noopener" :title="social.name" :aria-label="social.name">
        <Component :is="social.icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .social-networks {
    display: flex;
    gap: .5em;
    align-items: center;

    a {
      display: block;
      color: inherit;

      svg {
        display: block;
        height: 1em;
        width: 1em;
      }

      &:hover {
        color: var(--primary);
      }
    }
  }
</style>