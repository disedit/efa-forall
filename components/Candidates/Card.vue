<script setup>
defineProps({
  candidate: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="candidate-card">
    <h3 v-html="candidate.title.rendered" />
  </article>
  <article class="candidate-card">
    <h3 v-html="candidate.title.rendered" />
  </article>
</template>

<style lang="scss" scoped>
.candidate-card {
  background: var(--white);
  width: 400px;
  flex-shrink: 0;
  aspect-ratio: 1 / 1.25;
}
</style>