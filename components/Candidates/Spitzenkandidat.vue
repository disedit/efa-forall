<script setup>
const { socials } = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  picture: {
    type: Object,
    default: null
  },
  socials: {
    type: String,
    default: null
  },
})

const socialLinks = computed(() => socials.split("\r\n").map(item => {
  const [key, url] = item.split(',')
  return { key, url }
}))
</script>

<template>
  <article class="spitzenkandidat">
    <img :src="picture.sizes.large" :alt="picture.alt">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <CandidatesSocials :socials="socialLinks" />
  </article>
</template>