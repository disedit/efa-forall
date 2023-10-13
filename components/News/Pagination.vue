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
      :class="['button-grid', 'p-site', { loading }]"
    >
      {{ !loading ? 'More news' : 'Loading...' }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.more-stories {
  @include border;
  border-top: 0;
}
</style>
