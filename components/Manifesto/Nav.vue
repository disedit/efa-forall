<script setup>
defineProps({
  chapters: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <nav aria-label="Manifesto index" class="manifesto-nav border-bottom">
    <ul class="chapters list-unstyled">
      <li v-for="chapter in chapters">
        <nuxt-link :to="`/manifesto/${chapter.slug}`" class="chapter p-site">
          {{ chapter.title.rendered }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.manifesto-nav {
  .chapters {
    display: flex;
    
    li {
      flex-grow: 1;
      --color: var(--secondary);

      &:not(:last-child) {
        @include border-right;
      }

      &:nth-child(odd) {
        --color: var(--primary);
      }
    }
    
    .chapter {
      display: block;
      text-align: center;
      color: var(--black);
      text-decoration: none;
      transition: .25s ease;

      &:hover,
      &:focus,
      &.router-link-exact-active {
        background: var(--color);
        color: var(--white);
      }

      &:active,
      &.router-link-exact-active:hover {
        background: var(--black);
        color: var(--white);
      }
    }
  }
}
</style>