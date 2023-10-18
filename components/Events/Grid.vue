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
  <section class="events p-site pt-0" aria-describedby="upcoming-events">
    <EventsPaginated :events="upcoming" />
  </section>
  <section class="events past-events p-site pt-0" aria-describedby="past-events" v-if="past.length > 0">
    <h2 id="past-events">Past events</h2>
    <EventsPaginated :events="past" :limit="6" />
  </section>
</template>

<style lang="scss" scoped>
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