<script setup>
defineProps({
  candidates: {
    type: Object,
    required: true
  }
})

const { $gsap } = useNuxtApp()
const { y } = useWindowScroll()
const spitzenkandidaten = ref(null)

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

  setTimeout(() => {
    if (y.value === 0) {
      y.value = spitzenkandidaten.value.getBoundingClientRect().top - 65
    }
  }, 5000)
})
</script>

<template>
  <section class="spitzenkandidaten p-site" ref="spitzenkandidaten">
    <h2>Spitzen<wbr>kandidaten</h2>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
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

@include media('<md') {
  .spitzenkandidaten {
    h2 {
      font-size: 3.75rem;
      line-height: 1;
    }

    p {
      margin-bottom: 3rem;
    }

    &-cards {
      grid-template-columns: 1fr;
    }
  }
}
</style>