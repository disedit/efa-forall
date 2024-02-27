<script setup>
const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/EFAparty/', icon: resolveComponent('IconFacebook') },
  { name: 'X / Twitter', url: 'https://x.com/EFAparty', icon: resolveComponent('IconTwitter') },
  { name: 'Instagram', url: 'https://www.instagram.com/efaparty/', icon: resolveComponent('IconInstagram') },
  { name: 'YouTube', url: 'https://www.youtube.com/user/EUPARTYEFA', icon: resolveComponent('IconYouTube') },
  { name: 'TikTok', url: 'https://www.tiktok.com/@efa_party', icon: resolveComponent('IconTikTok') },
  { name: 'LinkedIn', url: 'https://be.linkedin.com/company/european-free-alliance', icon: resolveComponent('IconLinkedIn') },
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