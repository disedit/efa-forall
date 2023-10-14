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
      <h2>Find your candidate</h2>
      <p>{{ text }}</p>
    </div>
    <div class="candidates-map-holder">
      <div class="with-items">
        <img src="~/assets/images/maps/europe.svg" alt="Map of Europe">
        <CandidatesMapItems :candidates="candidates" :parties="parties" />
      </div>
      <div class="blind" />
    </div>
    <div class="candidates-map-cards">
      <CandidatesCards :candidates="candidates" :parties="parties" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.candidates-map {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  &-title {
    grid-area: 1 / 1 / 2 / 2;

    h2 {
      font-size: var(--headline-chapter);
      line-height: .9;
      max-width: 300px;
      margin: 0;
    }

    p {
      font-size: var(--text-lg);
      max-width: 600px;
      margin: 0;
    }
  }

  &-holder {
    position: relative;
    z-index: 2;
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    transform: translateX(15%);

    img {
      position: relative;
      display: block;
      height: calc(100vh - var(--navbar-safe-area));
      z-index: 2;
    }

    .with-items {
      position: relative;
    }

    .blind {
      position: absolute;
      z-index: 0;
      background: linear-gradient(to right, rgba($beige, 0), $beige 50%);
      top: 0;
      right: 0;
      bottom: 15px;
      left: 9%;
    }
  }

  &-cards {
    grid-area: 2 / 1 / 3 / 3;

    .candidates-cards {
      height: 100%;
    }
  }
}
</style>