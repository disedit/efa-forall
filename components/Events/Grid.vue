<script setup>
const { events } = defineProps({
  events: {
    type: Array,
    required: true
  }
})

function dateIsInFuture (date) {
  const now = new Date()
  const eventDate = new Date(date)

  return now < eventDate
}

function sortDates (order, events) {
  if (order === 'desc') {
    return events.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  return events.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
}

const upcoming = computed(() => sortDates('desc', [ ...events.filter((event) => dateIsInFuture(event.acf.date)) ]))
const past = computed(() => sortDates('asc', [ ...events.filter((event) => !dateIsInFuture(event.acf.date)) ]))
</script>

<template>
  <section class="p-site pt-0">
    <div class="events-grid">
      <EventsEvent
        v-for="event in upcoming"
        :key="event.id"
        :event="event" />
    </div>

    <h2>Past events</h2>
    <div class="events-grid">
      <EventsEvent
        v-for="event in past"
        :key="event.id"
        :event="event" />
    </div>
  </section>
  
</template>

<style lang="scss" scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  @include border-top;
  @include border-left;
  grid-auto-flow: dense;
}
</style>