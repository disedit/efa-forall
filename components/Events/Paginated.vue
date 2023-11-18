<script setup>
const { events, limit } = defineProps({
  events: {
    type: Array,
    required: true
  },
  limit: {
    type: Number,
    default: Infinity
  }
})

const showAll = ref(false)

const limitedEvents = computed(() => {
  return !showAll.value ? events.slice(0, limit) : events
})
</script>

<template>
  <div v-if="events.length > 0">
    <div class="events-grid">
      <EventsEvent
        v-for="event in limitedEvents"
        :key="event.id"
        :event="event" />
    </div>
    <div v-if="events.length > limit && !showAll" class="events-more">
      <button class="button-grid p-site" @click="showAll = true">More events</button>
    </div>
  </div>
  <div v-else class="events-empty border p-site">No scheduled events</div>
</template>

<style lang="scss" scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  @include border-top;
  @include border-left;
  grid-auto-flow: dense;
}

.events-more {
  @include border;
  border-top: 0;

  button {
    appearance: none;
  }
}

@include media('<lg') {
  .events-grid {
    border-left: 0;
  }
}
</style>