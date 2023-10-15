<script setup>
defineProps({
  party: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <Component
    :is="party.acf.website ? 'a' : 'div'"
    :href="party.acf.website || false"
    :target="party.acf.website ? '_blank' : false"
    class="candidate-party">
    <img
      v-if="party.acf.logo"
      :src="party.acf.logo"
      :alt="party.title.rendered" />
    <span
      v-if="party.acf.show_party_name || !party.acf.logo"
      class="candidate-party-name">
      {{ party.title.rendered }}
    </span>
  </Component>
</template>

<style lang="scss" scoped>
.candidate-party {
  display: flex;
  align-items: center;
  gap: .5em;
  margin-top: .5em;
  flex-shrink: 0;
  color: var(--black);
  text-decoration: none;

  img {
    height: 40px;
  }

  &-name {
    opacity: .5;
  }
}

a.candidate-party:hover {
  text-decoration: underline;
}
</style>