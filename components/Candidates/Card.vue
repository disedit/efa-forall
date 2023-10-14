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
    :class="['candidate-card', 'p-site', { hovering }]"
    @mouseenter="hover"
    @mouseleave="unhover"
    tabindex="0">
    <h3 class="candidate-name reset-heading" v-html="candidate.title.rendered" />
    
    <div v-if="candidate.acf.picture" class="candidate-picture">
      <img :src="candidate.acf.picture" alt="" height="100">
    </div>

    <CandidatesParty v-if="party" :party="party" />
    <CandidatesParty v-if="candidacy" :party="candidacy" />
  </article>
</template>

<style lang="scss" scoped>
.candidate {
  &-card {
    overflow-y: auto;
    background: var(--white);
    width: 300px;
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
}
</style>