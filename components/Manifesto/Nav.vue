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
        <nuxt-link :to="`/manifesto/${chapter.slug}`" class="chapter py-sm px-site">
          {{ chapter.title.rendered }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.manifesto-nav {
  font-size: var(--text-md);

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
    }
  }
}

@include media('<lg') {
  .manifesto-nav {
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    .chapters {
      li {
        flex-shrink: 0;
      }
    }
  }
}
</style>