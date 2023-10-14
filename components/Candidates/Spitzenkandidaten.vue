<script setup>
defineProps({
  candidates: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="spitzenkandidaten p-site">
    <h2>Spitzenkandidaten</h2>
    <p>{{ candidates.subheading }}</p>
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
.spitzenkandidaten {
  &-cards {
    display: flex;
    gap: var(--site-padding);
  }

  h2 {
    font-size: var(--headline-chapter);
    margin: 0;
  }

  p {
    font-size: var(--text-lg);
    text-wrap: balance;
    margin: 0;
    margin-bottom: 10vh;
    max-width: 90ch;
  }
}
</style>