<script setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  title: String,
  thumbnail: Object
})
</script>

<template>
  <div class="og-story story">
    <div class="story-text">
      <div class="story-title">
        <h1>
          {{ title }}
        </h1>
      </div>
      <div class="story-header">
        <LogoEfa class="logo-efa" />
        <LogoForAll class="logo-for-all" />
        <span class="header-title">EU Elections 2024</span>
      </div>
    </div>
    <div class="story-picture">
      <img :src="thumbnail.src" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.story {
  display: flex;
  width: 100%;
  height: 100%;
  color: $white;
  background: $primary;

  &-text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &-header {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 2rem;
    margin-top: auto;

    .logo-efa,
    .logo-for-all {
      height: 2.5rem;
      width: auto;
    }

    .logo-for-all {
      height: 20rem;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: rotate(-8deg);
    }

    svg * {
      fill: white;
    }

    .header-title {
      margin-left: auto;
      font-size: 1.5rem;
    }
  }

  &-picture {
    display: flex;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-title {
    padding: 2rem;

    h1 {
      font-family: DM Sans, sans-serif;
      font-weight: 900;
      font-size: 3.75rem;
      color: $secondary;
      line-height: 1.1;
      margin: 0;
      text-wrap: balance;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      max-width: 100%;
    }
  }
}
</style>