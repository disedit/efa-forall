<script setup>
defineProps({
  fields: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="about-blocks border-bottom">
    <article class="block p-site color-primary">
      <h3 :aria-label="fields.box_1_title">
        <div aria-hidden="true">
          Democracy
          <div class="for-all">for <LogoAll /></div>
        </div>
      </h3>
      <p>{{ fields.box_1_text }}</p>
    </article>
    <article class="block p-site color-secondary">
      <h3 :aria-label="fields.box_2_title">
        <div aria-hidden="true">
          Diversity
          <div class="for-all">for <LogoAll /></div>
        </div>
      </h3>
      <p>{{ fields.box_2_text }}</p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.about-blocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.block {
  h3 {
    line-height: .5;
    margin: .4em 0 .5em;
    font-size: var(--headline-block);

    .for-all {
      color: var(--color);
    }

    .logo-all {
      transform: translateY(.1em);
    }
  }

  p {
    margin: 0;
    font-size: var(--text-xl);
  }

  &:first-child {
    @include border-right;
  }
}
</style>