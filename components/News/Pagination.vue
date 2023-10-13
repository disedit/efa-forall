<script setup>
defineProps({
  page: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  loading:  {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="totalPages > page" class="more-stories">
    <button
      @click="!loading ? $emit('load') : null"
      :aria-disabled="loading ? 'true' : null"
      :class="['p-site', { loading }]"
    >
      {{ !loading ? 'Load more' : 'Loading...' }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.more-stories {
  @include border;
  border-top: 0;

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

    &.loading {
      color: rgba($black, .25);
    }
  }
}
</style>
