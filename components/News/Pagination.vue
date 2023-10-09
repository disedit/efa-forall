<script setup>
defineProps({
  page: {
    type: Number,
    required: true
  },

  lastPage: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div v-if="lastPage > page" class="more-stories border-top">
    <button @click="$emit('load')" class="p-site">Load more</button>
  </div>
</template>

<style lang="scss" scoped>
.more-stories {
  button {
    appearance: none;
    display: block;
    width: 100%;
    background: transparent;
    border: 0;
    border-radius: 0;
    font-size: var(--text-lg);
    cursor: pointer;
    transition: .25s ease;

    &:hover,
    &:focus {
      background: var(--black);
      color: var(--white);
    }
  }
}
</style>
