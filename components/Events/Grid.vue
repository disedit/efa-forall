<script setup>
defineProps({
  events: {
    type: Array,
    required: true
  }
})

function formatDate (eventDate) {
  const { date } = useDate(eventDate)
  return date
}

function formatTime (eventDate) {
  const { time } = useDate(eventDate)
  return time
}
</script>

<template>
  <section class="p-site pt-0">
    <div class="events-grid">
      <article
        v-for="event in events"
        :key="event.id"
        class="event p-site">
        <div class="event-datetime">
          <span class="event-date">
            {{ formatDate(event.acf.date) }}
          </span>
          <time :datetime="event.acf.date" class="event-time">
            {{ formatTime(event.acf.date) }}
          </time>
        </div>
        <h2 class="event-title" v-html="event.title.rendered" />
        <p v-if="event.acf.info" class="event-info">
          {{ event.acf.info }}
        </p>
        <div class="event-footer">
          <div class="event-details">
            <div class="event-venue">
              {{ event.acf.venue }}
            </div>
            <div class="event-municipality">
              {{ event.acf.municipality }}
            </div>
            <div class="event-country">
              {{ event.acf.country }}
            </div>
          </div>
          <div class="event-button" v-if="event.acf.button_link">
            <a
              :href="event.acf.button_link"
              target="_blank"
              rel="noopener noreferer"
              class="button button-lg">
              {{ event.acf.button_text }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
  
</template>

<style lang="scss" scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @include border;
  background: var(--black);
  gap: 1px;
}

.event {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--bg-color);
  aspect-ratio: 1;
  font-size: var(--text-md);

  &-datetime {
    display: flex;
    justify-content: space-between;
    opacity: .5;
  }

  &-title {
    font-family: var(--base-font);
    text-transform: unset;
    font-weight: bold;
    font-size: var(--headline-story-sm);
    margin: 0;
  }

  &-info {
    margin: 0;
  }

  &-footer {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
  }

  &-button {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  &:hover {
    background: var(--white);
  }
}
</style>