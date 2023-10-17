<script setup>
const { candidate, parties } = defineProps({
  candidate: {
    type: Object,
    required: true
  },
  parties: {
    type: Object,
    required: true
  }
})

const party = computed(() => parties[candidate.acf.party[0]])
const candidacy = computed(() => party.value ? parties[party.value.acf.candidacy[0]] : null)

const mapState = useMapState()
const hovering = computed(() => mapState.value === candidate.id)

function hover () {
  mapState.value = candidate.id
}

function unhover() {
  mapState.value = null
}
</script>

<template>
  <article
    :id="`candidate-${candidate.id}`"
    :class="['candidate-card', 'p-sm', { hovering }]"
    @mouseenter="hover"
    @mouseleave="unhover"
    tabindex="0">
    <div v-if="candidate.acf.picture" class="candidate-picture">
      <img :src="candidate.acf.picture" alt="">
    </div>

    <h3 class="candidate-name reset-heading" v-html="candidate.title.rendered" />

    <div class="candidate-parties mt-auto">
      <CandidatesParty v-if="party" :party="party" />
      <CandidatesParty v-if="candidacy" :party="candidacy" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.candidate {
  &-card {
    display: flex;
    flex-direction: column;
    gap: var(--site-padding-sm);
    overflow: auto;
    background: var(--white);
    width: calc(300px + 2.5vw);
    height: 100%;
    max-height: 45vh;
    flex-shrink: 0;
    margin-top: auto;

    &.hovering {
      outline: 3px var(--black) solid;
    }

    &:focus-visible {
      outline: 4px var(--primary) solid;
    }
  }

  &-name {
    font-size: var(--text-xl);
  }

  &-picture {
    display: flex;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-parties {
    display: flex;
    gap: var(--site-padding-sm);
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>