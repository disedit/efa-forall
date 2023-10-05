<script setup>
const { fields } = defineProps({
  fields: {
    type: Object,
    required: true
  }
})

const text = computed(() => fields.our_values.replaceAll("\n\r", "<br><br>"))
</script>

<template>
  <section class="values">
    <div class="content p-site">
      <h3>Our values</h3>
      <div class="text" v-html="text" />
    </div>
    <div class="video">
      <div class="placeholder" />
      <nuxt-link to="/manifesto" class="manifesto p-site">
        Read the 2024 Manifesto
        <IconArrow />
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.values {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
}

.content {
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  @include border-right;

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 3.5rem);
  }

  .text {
    font-size: var(--text-xl);
    line-height: 1.25;
    max-width: 60ch;
  }
}

.video {
  display: flex;
  flex-direction: column;

  .placeholder {
    background: black;
    height: 100%;
  }

  .manifesto {
    display: flex;
    background: var(--secondary);
    color: var(--black);
    justify-content: space-between;
    text-decoration: none;
    font-size: var(--text-xl);

    svg {
      height: 1em;
    }

    &:hover {
      background: var(--primary);
      color: var(--white);
    }
  }
}
</style>