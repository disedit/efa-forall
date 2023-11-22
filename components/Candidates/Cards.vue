<script setup>
defineProps({
  candidates: {
    type: Array,
    required: true
  },
  parties: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <SiteSlider class="candidates-cards p-site" id="candidate-slider">
      <CandidatesCard
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
        :parties="parties"
      />
  </SiteSlider>
</template>

<style lang="scss" scoped>
.candidates-cards {
  padding-top: 4px;
  padding-bottom: 1rem;
}
</style>