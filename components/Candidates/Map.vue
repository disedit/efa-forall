<script setup>
defineProps({
  candidates: {
    type: Array,
    required: true
  },
  text: {
    type: String,
    default: null
  },
  parties: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="candidates-map border-top">
    <div class="candidates-map-title p-site">
      <h2>Find your<br> candidate</h2>
      <p>{{ text }}</p>
    </div>
    <div class="candidates-map-interactive">
      <div class="with-items">
        <img src="~/assets/images/maps/europe.svg" alt="Map of Europe">
        <CandidatesMapItems :candidates="candidates" :parties="parties" />
      </div>
    </div>
    <div class="candidates-map-cards">
      <CandidatesCards :candidates="candidates" :parties="parties" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.candidates-map {
  display: grid;
  grid-template-columns:  1fr;
  grid-template-rows: calc(75vh - var(--navbar-safe-area) - var(--site-padding-sm)) 25vh;
  overflow: hidden;
  gap: var(--site-padding-sm);

  &-title {
    grid-area: 1 / 1 / 2 / 2;
    width: 50%;

    h2 {
      font-size: var(--headline-chapter);
      line-height: .9;
      margin: 0;
    }

    p {
      font-size: var(--text-lg);
      max-width: 600px;
      margin: 0;
    }
  }

  &-interactive {
    position: relative;
    z-index: 2;
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    user-select: none;

    img {
      position: relative;
      display: block;
      height: 100%;
      z-index: 2;
    }

    .with-items {
      position: relative;
      height: calc(75vh - var(--navbar-safe-area) - var(--site-padding-sm));
    }
  }

  &-cards {
    grid-area: 2 / 1 / 3 / 2;
    user-select: none;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    .candidates-cards {
      height: 100%;
    }
  }
}

@media (max-aspect-ratio: 4/3) {
  .candidates-map {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    height: auto;
    gap: 0;
    grid-template-areas:
      "title"
      "map"
      "cards";

    &-title {
      grid-area: title;
      width: auto;

      h2, p {
        max-width: unset;
      }
    }

    &-interactive {
      grid-area: map;
      transform: none;
      height: auto;
      align-items: flex-end;

      .with-items {
        width: 100%;
        height: auto;
        transform: scale(1.3);
        margin: 3vh 0 9vh;
      }

      .blind {
        display: none;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    &-cards {
      grid-area: cards;
    }
  }
}
</style>