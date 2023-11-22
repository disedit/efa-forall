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
    return events.slice().sort((a, b) => new Date(b.acf.date) - new Date(a.acf.date))
  }

  return events.slice().sort((a, b) => new Date(a.acf.date) + new Date(b.acf.date))
}

const upcoming = computed(() => sortDates('asc', [ ...events.filter((event) => dateIsInFuture(event.acf.date)) ]))
const past = computed(() => sortDates('desc', [ ...events.filter((event) => !dateIsInFuture(event.acf.date)) ]))
</script>

<template>
  <section class="events upcoming-events  p-site pt-0" aria-describedby="upcoming-events" v-if="upcoming.length > 0">
    <h2 id="upcoming-events">Upcoming events</h2>
    <EventsPaginated :events="upcoming" />
  </section>
  <section class="events past-events p-site pt-0" aria-describedby="past-events" v-if="past.length > 0">
    <h2 id="past-events">Past events</h2>
    <EventsPaginated :events="past" :limit="6" />
  </section>
</template>

<style lang="scss" scoped>
.upcoming-events h2 {
  font-size: var(--headline-page);
  line-height: 0.9;
  margin: 3rem 0 1rem;
}

.past-events h2 {
  margin-top: 4rem;
  font-size: var(--headline-block);
}

@include media('<lg') {
  .events {
    padding: 0;

    h2 {
      padding: var(--site-padding);
    }
  }

  .past-events {
    :deep(.event:last-child) {
      border-bottom: 0;
    }
  }
}
</style>