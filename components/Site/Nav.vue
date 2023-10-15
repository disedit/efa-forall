<script setup>
const menu = [
  { label: 'About us', to: '/about-us' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'Candidates', to: '/candidates' },
  { label: 'News', to: '/news' },
  { label: 'Events', to: '/events' }
]

/* Menu toggler */
const menuOpen = ref(false)
const showMenu = () => {
  menuOpen.value = true
  document.body.classList.add('menu-open')
}
const hideMenu = (index) => {
  menuOpen.value = false
  clickedIndex.value = index || 0
  document.body.classList.remove('menu-open')
}

function toggleMenu () {
  if (menuOpen.value) {
    hideMenu()
  } else {
    showMenu()
  }
}

/* Menu animations */
const { $gsap } = useNuxtApp()
const clickedIndex = ref(0)
let timeline

function beforeEnter(el, done) {
  $gsap.set(el, { y: '-100%' })
}

function onEnter(el, done) {
  $gsap.set('.mobile-menu a div', { y: '100%' })
  $gsap.set('.decoration', { y: '150%' })
  timeline = $gsap.timeline()

  timeline.to(el, {
    y: 0,
    duration: .5,
    ease: 'power4.out',
  }).to('.mobile-menu a div', {
    y: 0,
    duration: .25,
    ease: 'power4.out',
    stagger: .1
  }).to('.decoration', {
    y: 0,
    duration: 2,
    ease: 'power4.out',
    onComplete: done
  }, "-=1")
}

function onLeave (el, done) {
  timeline = $gsap.timeline()
  timeline.to('.mobile-menu a div', {
    y: '100%',
    duration: .25,
    stagger: {
      amount: .25,
      from: 'end'
    },
  }).to(el, {
    y: '-100%',
    duration: .5,
    ease: 'power4.in'
  }).to('.decoration', {
    y: '100%',
    duration: .5,
    ease: 'power4.in',
    onComplete: done
  }, '<')
}

function onEnterCancelled() {
  timeline && timeline.kill()
}

function onLeaveCancelled() {
  timeline && timeline.kill()
}
</script>

<template>
  <header class="nav">
    <NuxtLink to="/" class="nav-brand">
      <LogoEfa class="logo-efa" aria-label="European Free Alliance" />
      <LogoForAll class="logo-for-all" aria-label="For all" />
      <div class="title">EU Elections 2024</div>
    </NuxtLink>

    <nav class="nav-menu" aria-label="Main navigation">
      <NuxtLink
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        :data-hover="item.label">
        {{ item.label }}
      </NuxtLink>
    </nav>
    <a href="/" class="donate">Donate</a>
    <button
      class="nav-toggle"
      @click="toggleMenu"
      :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      aria-controls="mainNav"
      :aria-expanded="menuOpen ? 'true' : 'false'"
    >
      <IconHamburger v-if="!menuOpen" />
      <IconClose v-else />
    </button>
  </header>
  <Transition
    @before-enter="beforeEnter"
    @enter="onEnter"
    @enter-cancelled="onEnterCancelled"
    @leave="onLeave"
    @leave-cancelled="onEnterCancelled">
    <nav
      id="mainNav"
      v-if="menuOpen"
      class="mobile-menu"
      aria-label="Main navigation"
    >
      <NuxtLink
        v-for="(item, i) in menu"
        :key="item.to"
        :to="item.to"
        :data-hover="item.label"
        @click="hideMenu(i)">
        <div>{{ item.label }}</div>
      </NuxtLink>
      <a href="/" target="_blank">
        <div>Donate</div>
      </a>
      <div class="decoration-wrapper">
        <LogoForAll class="decoration" />
      </div>
    </nav>
  </Transition>
  <div class="safe-area" />
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  background: var(--bg-color);
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
  font-size: var(--text-md);
  @include border-bottom;
  transition: .25s ease;
  color: var(--text-color);

  &-brand {
    padding: .75rem var(--site-padding);
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--text-color);
    text-decoration: none;
    @include border-right;
      
    &:hover {
      background: var(--white);
    }
  }

  &-menu {
    display: flex;
    margin: 0 auto;
    align-items: center;

    a {
      position: relative;
      color: var(--text-color);
      text-decoration: none;
      white-space: nowrap;
      padding: 1rem 3vw;

      &::before {
        display: block;
        content: attr(data-hover);
        position: absolute;
        inset: 0;
        opacity: 0;
        pointer-events: none;
        color: var(--primary);
        font-weight: 900;
        display: grid;
        place-items: center;
        letter-spacing: -.01em;
      }

      &:hover:not(.button),
      &.router-link-active {
        color: rgba($white, 0) !important;

        &::before {
          opacity: 1;
        }
      }
    }
  }

  &-toggle {
    display: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    @include border-left;
    margin-left: auto;
    align-self: stretch;
    align-items: center;
    padding: 0 var(--site-padding);
    color: inherit;

    svg {
      height: 1em;
      width: 1em;
    }
  }
}

.donate {
  display: flex;
  background: var(--primary);
  color: var(--white);
  text-decoration: none;
  padding: .75rem 1rem;
  align-items: center;
  font-weight: 900;
  margin-right: var(--site-padding);

  &:hover {
    background: var(--black);
  }
}

.logo-efa {
  height: 2rem;
  width: auto;
}

.logo-for-all {
  height: 2.5rem;
  color: var(--primary);
}

.dark {
  .nav {
    background: rgba($black, .75);
    backdrop-filter: blur(5px);

    &-brand:hover {
      background: rgba($primary, .25);
    }

    a:hover {
      &::before {
        color: var(--white);
      }
    }

    .donate:hover {
      background: var(--white);
      color: var(--primary);
    }
  }

  .logo-for-all {
    color: var(--white);
  }
}

.mobile-menu {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--primary);
  z-index: 10;
  padding: var(--site-padding);
  padding-top: calc(var(--navbar-safe-area) + var(--site-padding));
  flex-direction: column;
  overflow: auto;

  a {
    position: relative;
    color: var(--beige);
    font-family: var(--headline-font);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 15vw;
    overflow: hidden;
    z-index: 5;

    &:active {
      color: var(--white);
    }
  }

  .decoration {
    position: absolute;
    bottom: 5%;
    right: -10%;
    color: var(--secondary);
    width: 80vw;
    height: 80vw;
    width: auto;
    transform: rotate(-5deg);
    z-index: 1;

    &-wrapper {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
  }
}

@include media('<xxl') {
  .nav {
    &-menu a {
      padding: 1rem;
    }
  }
}

@include media('<lg') {
  .nav {
    &-brand {
      padding: .5rem var(--site-padding);
      border-right: 0;
      flex-grow: 1;

      &:hover {
        background: transparent;
      }

      .title {
        margin-left: auto;
      }
    }

    &-toggle {
      display: flex;
    }

    &-menu,
    .donate {
      display: none;
    }
  }

  .mobile-menu {
    display: flex;
  }

  .menu-open {
    .nav {
      --text-color: var(--white);
      --border-color: transparent;
      background: transparent,
    }

    .logo-for-all {
      color: var(--white);
    }
  }

  .logo-efa {
    height: 1.5rem;
    width: auto;
  }

  .logo-for-all {
    height: 2rem;
    color: var(--primary);
  }
}
</style>