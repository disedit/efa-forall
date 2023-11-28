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

const tag = computed(() => {
  return event.acf.button_link ? 'a' : 'div'
})
</script>

<template>
  <Component
    :is="tag"
    :class="['event', 'p-site', { 'event-has-picture': hasPicture }]"
    :href="event.acf.button_link"
    target="_blank"
    rel="noopener noreferer">
    <div class="event-picture" v-if="hasPicture">
      <img :src="event.acf.picture.sizes.medium_large" :alt="event.acf.picture.alt" />
    </div>
    <div class="event-datetime">
      <span class="event-date">
        {{ formatDate(event.acf.date) }}
      </span>
      <time :datetime="event.acf.date" class="event-time" v-if="!event.acf.hide_time">
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
        <div class="event-address" v-if="event.acf.address">
          {{ event.acf.address }}
        </div>
        <div class="event-municipality">
          {{ event.acf.municipality }}
        </div>
        <div class="event-country">
          {{ event.acf.country }}
        </div>
      </div>
      <div class="event-button" v-if="event.acf.button_link">
        <span class="button button-lg">
          {{ event.acf.button_text }}
        </span>
      </div>
    </div>
  </Component>
</template>

<style lang="scss" scoped>
.event {
  display: flex;
  flex-direction: column;
  gap: var(--site-padding);
  background: var(--bg-color);
  min-height: 400px;
  max-height: 33vw;
  font-size: var(--text-md);
  @include border-right;
  @include border-bottom;
  transition: .25s ease;
  text-decoration: none;
  color: var(--text-color);

  &-wrapper {
    display: block;
  }

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

  &-address {
    font-size: var(--text-sm);
    opacity: .75;
  }

  &-municipality {
    margin-top: .5rem;
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

@include media('<lg') {
  .event {
    min-height: 40vh;
    max-height: unset;
    font-size: var(--text-lg);
    border-right: 0;

    &-has-picture {
      height: auto;
      grid-column: unset;
      grid-template-columns: 1fr;
      grid-template-rows: 30vh auto auto 1fr 1fr;
      grid-template-areas:
        "picture"
        "datetime"
        "title"
        "info"
        "footer";

      .event-picture {
        @include border-bottom;
        border-right: 0;
      }

      .event-datetime {
        padding-top: var(--site-padding);
      }
    }
  }
}
</style>