<script setup>
defineProps({
  candidates: {
    type: Object,
    required: true
  }
})

const { $gsap } = useNuxtApp()

onMounted(() => {
  setTimeout(() => {
    $gsap.to('.spitzenkandidat', {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      rotate: 0,
      ease: "back.out(1.7)",
      duration: .5,
      stagger: .25,
      scrollTrigger: {
        trigger: '.spitzenkandidaten',
        start: 'top center',
        end: 'top top'
      }
    })
  }, 500)
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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: calc(100vh - var(--navbar-safe-area));

  &-cards {
    display: flex;
    gap: var(--site-padding);
    margin: auto 0;
  }

  h2 {
    font-size: var(--headline-chapter);
    margin: 0;
  }

  p {
    font-size: var(--text-lg);
    text-wrap: balance;
    margin: 0;
    max-width: 90ch;
    margin-bottom: var(--site-padding);
  }
}

.spitzenkandidat {
  transform: translate(10%, 80%) rotate(-10deg) scale(.9);
  opacity: 0;
}
</style>