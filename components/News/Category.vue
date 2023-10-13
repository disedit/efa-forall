<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div :class="['story-category', `category-${category.slug}`]">
    {{ category.name }}
  </div>
</template>

<style lang="scss" scoped>
.story-category {
  display: flex;
  gap: .5em;
  align-items: center;
  color: var(--muted);

  &::after {
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    background: var(--category-color, var(--primary));
    border-radius: 100%;
  }
}

@each $category, $color in $categories {
  .category-#{$category} {
    --category-color: #{$color};
  }
}
</style>