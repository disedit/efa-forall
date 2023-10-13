<template>
  <header class="nav">
    <NuxtLink to="/" class="nav-brand">
      <LogoEfa class="logo-efa" aria-label="European Free Alliance" />
      <LogoForAll class="logo-for-all" aria-label="For all" />
      <div class="title">EU Elections 2024</div>
    </NuxtLink>

    <nav class="nav-menu">
      <NuxtLink to="/about-us" data-hover="About us">
        About us
      </NuxtLink>
      <NuxtLink to="/manifesto" data-hover="Manifesto">
        Manifesto
      </NuxtLink>
      <NuxtLink to="/candidates" data-hover="Candidates">
        Candidates
      </NuxtLink>
      <NuxtLink to="/news" data-hover="News">
        News
      </NuxtLink>
      <NuxtLink to="/events" data-hover="Events">
        Events
      </NuxtLink>
    </nav>
    <a href="/" class="donate">Donate</a>
  </header>
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

</style>