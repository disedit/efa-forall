<script setup>
const { socials } = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  picture: {
    type: Object,
    default: null
  },
  socials: {
    type: String,
    default: null
  },
})

const socialLinks = computed(() => socials.split("\r\n").map(item => {
  const [key, url] = item.split(',')
  return { key, url }
}))
</script>

<template>
  <article class="spitzenkandidat">
    <div class="spitzenkandidat-picture">
      <img :src="picture.sizes.large" :alt="picture.alt">
    </div>
    <h3 class="spitzenkandidat-name">{{ name }}</h3>
    <p class="spitzenkandidat-description">{{ description }}</p>
    <CandidatesSocials :socials="socialLinks" class="spitzenkandidat-socials" />
  </article>
</template>

<style lang="scss" scoped>
.spitzenkandidat {
  --background: var(--primary);
  --foreground: var(--white);
  --accent: var(--secondary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "picture name"
    "picture socials"
    "picture description";
  background-color: var(--background);
  color: var(--foreground);
  row-gap: 1rem;

  &:last-child {
    --background: var(--secondary);
    --foreground: var(--black);
    --accent: var(--primary);
  }

  p::selection,
  p::-moz-selection {
    color: var(--white);
    background: var(--secondary);
  }

  &-picture {
    grid-area: picture;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-name {
    grid-area: name;
    padding: var(--site-padding);
    padding-bottom: 0;
    font-family: var(--base-font);
    text-transform: unset;
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: -.03em;
    line-height: 1;
    color: var(--accent);
  }

  &-description {
    grid-area: description;
    padding: var(--site-padding);
    align-self: end;
    margin: 0;
    font-size: var(--text-base);
  }

  &-socials {
    grid-area: socials;
    padding: 0 var(--site-padding);
    display: flex;
    gap: 1em;
    font-size: var(--text-lg);

    :deep(a) {
      color: var(--foreground);
      text-decoration: none;
    }
  }
}

@include media('<lg') {
  .spitzenkandidat {
    grid-template-columns: 1fr;
    grid-template-areas:
      "picture"
      "name"
      "socials"
      "description";
    grid-template-rows: 40vh auto auto auto;

    &-name {
      line-height: 1.15;
      padding-top: 0;
      font-size: 2rem;
    }
  }
}
</style>