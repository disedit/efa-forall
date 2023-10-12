<script setup>
defineProps({
  candidates: {
    type: Array,
    required: true
  }
})

const { $Draggable } = useNuxtApp()

const cards = ref(null)
const container = ref(null)

onMounted(() => {
  setTimeout(() => {
    $Draggable.create(cards.value, {
      type: 'x',
      inertia: true
    })
  }, 500)
})
</script>

<template>
  <section class="candidate-cards p-site" ref="container">
    <div class="candidate-cards-items" ref="cards">
      <CandidatesCard
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
      />
      <CandidatesCard
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
      />
      <CandidatesCard
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.candidate-cards {
  overflow: hidden;

  &-items {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--site-padding);
  }
}
</style>