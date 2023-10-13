<script setup>
const { candidate } = defineProps({
  candidate: {
    type: Object,
    required: true
  }
})

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
    <h3 v-html="candidate.title.rendered" />
  </article>
</template>

<style lang="scss" scoped>
.candidate-card {
  background: var(--white);
  width: 300px;
  height: 100%;
  flex-shrink: 0;

  &.hovering {
    outline: 3px var(--black) solid;
  }

  &:focus-visible {
    outline: 4px var(--primary) solid;
  }
}
</style>