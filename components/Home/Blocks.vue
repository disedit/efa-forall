<script setup>
import Rellax from 'rellax'

const { $gsap } = useNuxtApp()

let rellax

onMounted(() => {
  setTimeout(() => {
    rellax = new Rellax('.block-wrapper')

    $gsap.fromTo('.block', {
      y: 100
    }, {
      y: 0,
      duration: 1,
      delay: 3.75,
      stagger: .25,
      ease: 'power3.out'
    })
  }, 500)
})

onUnmounted(() => {
  rellax.destroy()
})
</script>

<template>
  <section class="blocks">
    <HomeBlock to="/about-us" class="about" data-rellax-speed="4">
      <template #title>
        About us
      </template>

      European <br> Free <br> Alliance
    </HomeBlock>
    <HomeBlock to="/manifesto" class="manifesto" data-rellax-speed="2">
      <template #title>
        For all
      </template>

      2024 <br> Election <br> Manifesto
    </HomeBlock>
    <HomeBlock to="/candidates" class="candidates" data-rellax-speed=".5">
      <template #title>
        Candidates
      </template>

      Meet the <br> candidates
    </HomeBlock>
  </section>
</template>

<style lang="scss" scoped>
.blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--site-padding);
  padding: var(--site-padding);
}

.about {
  --background: var(--primary);
  --foreground: var(--white);
  --circle-background: var(--white);
  --circle-foreground: var(--primary);
}

.manifesto {
  --background: var(--secondary);
  --foreground: var(--white);
  --circle-background: var(--white);
  --circle-foreground: var(--secondary);
}

.candidates {
  --background: var(--white);
  --foreground: var(--primary);
  --circle-background: var(--primary);
  --circle-foreground: var(--white);
}
</style>