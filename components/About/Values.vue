<script setup>
defineProps({
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="values">
    <div class="content p-site">
      <h3>Our<br>values</h3>
      <div class="text" v-html="content" />
    </div>
    <div class="video">
      <div class="placeholder" />
      <nuxt-link to="/manifesto" class="manifesto py-sm p-site">
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
    font-size: var(--headline-block);
    line-height: .9;
    margin-top: .15em;
  }

  .text {
    font-size: var(--text-xl);
    line-height: 1.5;
    max-width: 50ch;

    :deep(p) {
      margin-top: 0;
      margin-bottom: .85em;

      &:last-child {
        margin-bottom: 0;
      }
    }
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
    font-size: var(--text-lg);

    svg {
      height: 1em;
    }

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
}
</style>