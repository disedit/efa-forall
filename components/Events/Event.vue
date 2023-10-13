<script setup>
const { event } = defineProps({
  event: {
    type: Object,
    required: true
  }
})

const hasPicture = !!event.acf.picture

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
  <article :class="['event', 'p-site', { 'event-has-picture': hasPicture }]">
    <div class="event-picture" v-if="hasPicture">
      <img :src="event.acf.picture.sizes.medium_large" :alt="event.acf.picture.alt" />
    </div>
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
</template>

<style lang="scss" scoped>
.event {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--bg-color);
  min-height: 45vh;
  max-height: 33vw;
  font-size: var(--text-md);
  @include border-right;
  @include border-bottom;
  transition: .25s ease;

  &-datetime {
    grid-area: datetime;
    display: flex;
    justify-content: space-between;
    opacity: .5;
  }

  &-title {
    grid-area: title;
    font-family: var(--base-font);
    text-transform: unset;
    font-weight: 900;
    font-size: var(--headline-story-sm);
    margin: 0;
  }

  &-info {
    grid-area: info;
    margin: 0;
  }

  &-footer {
    grid-area: footer;
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

  &-has-picture {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto 1fr;
    grid-column: span 2;
    column-gap: calc(var(--site-padding) * 2);
    grid-template-areas:
      "picture datetime"
      "picture title"
      "picture info"
      "picture footer";
  }

  &-picture {
    grid-area: picture;
    @include border-right;
    margin: calc(var(--site-padding) * -1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}
</style>