<script setup>
const { candidates } = defineProps({
  candidates: {
    type: Array,
    required: true
  },
  parties: {
    type: Object,
    required: true
  }
})

const candidatesWithPos = computed(() => {
  return candidates.map(candidate => {
    const [top, left] = candidate.acf.location_on_map.split(',')
    return {
      id: candidate.id,
      name: candidate.title.rendered,
      party: candidate.acf.party[0] || false,
      top: top,
      left: left
    }
  })
})

const mapState = useMapState()

function hover (id) {
  mapState.value = id
  scrollIntoView(id)
}

function unhover () {
  mapState.value = null
}

function scrollIntoView(id, shouldFocus) {
  const scroller = document.querySelector('#candidate-slider')
  const candidateCard = document.querySelector(`#candidate-${id}`)
  const cardOffset = candidateCard.offsetLeft
  const furtherOffset = window.innerWidth > 1200 ? 28 + 300 + 28 : 16
  scroller.scrollTo({
    left: cardOffset - furtherOffset,
    behavior: 'smooth',
  })
  setTimeout(() => {
    shouldFocus && candidateCard.focus()
  }, 500)
}
</script>

<template>
  <div class="map-items">
    <ul class="list-unstyled">
      <li
        v-for="candidate in candidatesWithPos"
        :key="candidate.id"
      >
        <a :href="`#candidate-${candidate.id}`"
          :id="`marker-${candidate.id}`"
          :class="[
            'map-marker',
            { hovering: mapState === candidate.id },
            { 'tooltip-right': candidate.left > 60 }
          ]"
          :style="{
            top: candidate.top + '%',
            left: candidate.left + '%'
          }"
          @mouseenter="hover(candidate.id)"
          @mouseleave="unhover"
          @click.prevent="scrollIntoView(candidate.id, true)"
          tabindex="-1"
        >
          <div class="name">
            <span v-if="candidate.party && parties[candidate.party]?.acf?.short_name">
              {{ parties[candidate.party]?.acf?.short_name }}
            </span>
            <span v-else-if="candidate.party">
              {{ parties[candidate.party]?.title?.rendered }}
            </span>
            <span v-else>
              {{ candidate.name }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.map-items {
  position: absolute;
  inset: 0;
  z-index: 5;
}

.map-marker {
  display: block;
  position: absolute;
  height: 1em;
  width: 1em;
  background: var(--secondary);
  border-radius: 100%;
  transition: .25s ease-in-out;
  border: .15em var(--secondary) solid;
  text-decoration: none;
  font-size: .95rem;

  &.hovering,
  &:hover,
  &:focus-visible {
    border: .15em var(--black) solid;
    transform: scale(1.5);
    z-index: 100;

    .name {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(1);

    .name {
      opacity: 1;
    }
  }

  &.tooltip-right {
    .name {
      left: auto;
      right: 1.25em;
      text-align: right;
    }
  }

  .name {
    position: absolute;
    left: 1.6em;
    pointer-events: none;
    opacity: 0;
    transition: .25s ease;
    max-width: 100px;
    font-size: .75rem;
    font-weight: 900;
    line-height: 1.2;

    span {
      background: var(--black);
      color: var(--white);
      box-decoration-break: clone;
      padding: .2em .35em;
    }
  }
}

@include media('<lg') {
  .map-marker {
    font-size: .5rem;

    .name {
      font-size: .5rem;
    }
  }
}
</style>