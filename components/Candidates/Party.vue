<script setup>
defineProps({
  party: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <Component
    :is="party.acf.website ? 'a' : 'div'"
    :href="party.acf.website || false"
    :target="party.acf.website ? '_blank' : false">
    <img v-if="party.acf.logo" :src="party.acf.logo" :alt="party.title.rendered" height="50" />
    <span v-else>{{ party.title.rendered }}</span>
  </Component>
</template>