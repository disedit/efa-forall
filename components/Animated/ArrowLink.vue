<template>
  <div class="animated-arrow-link p-site">
    <span><slot /></span>
    <IconArrow />
  </div>
</template>

<style lang="scss" scoped>
.animated-arrow-link {
  @include border-top;
  display: flex;
  justify-content: space-between;
  transition: .25s ease;
  font-size: var(--text-md);
  position: relative;
  overflow: hidden;
  gap: 1rem;

  svg {
    height: 1em;
    width: 1em;
  }

  svg,
  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    background: var(--black);
    left: -2px;
    top: -2px;
    bottom: -2px;
    right: -2px;
    transform: translateX(-100%);
    transition: transform .25s ease;
    z-index: 0;
  }
}
</style>