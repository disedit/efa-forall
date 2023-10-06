<script setup>
defineProps({
  candidates: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="spitzenkandidaten">
    <div class="spitzenkandidaten-picture">
      <img :src="candidates.spitzenkandidaten.sizes.large" :alt="candidates.spitzenkandidaten.alt">
    </div>
    <div class="spitzenkandidaten-cards">
      <CandidatesSpitzenkandidat
        v-for="i in [1,2]"
        :name="candidates[`candidate_${i}_name`]"
        :description="candidates[`candidate_${i}_description`]"
        :picture="candidates[`candidate_${i}_picture`]"
        :socials="candidates[`candidate_${i}_socials`]"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.spitzenkandidaten-cards {
  display: flex;
}
</style>