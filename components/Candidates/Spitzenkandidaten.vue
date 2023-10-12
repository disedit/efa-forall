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
    <div class="spitzenkandidaten-cards p-site">
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
  &-picture {
    @include border-top;
    @include border-bottom;

    img {
      display: block;
      width: 100%;
      height: calc(100vh - var(--navbar-safe-area));
      object-fit: cover;
    }
  }

  &-cards {
    display: flex;
    gap: var(--site-padding);
  }
}
</style>