<script setup>
const year = 2023
</script>

<template>
  <footer class="footer border-top">
    <div class="details p-site">
      <LogoForAll class="logo-forall" />
      <LogoEfa class="logo-efa" mono />
      <div class="details-contact">
        <address class="details-address">
          Boomkwekerijstraat, 11000 Brussels
        </address>
        <div class="details-tel">
          <a href="tel:003225133476">+32 (0) 2513 34 76</a></div>
        <div class="details-emails">
          <a href="mailto:info@e-f-a.org">info@e-f-a.org</a> ·
          <a href="mailto:press@e-f-a.org">press@e-f-a.org</a>
        </div>
      </div>
      <div class="details-legal">
        &copy; {{ year }} EFA – European Free Alliance -
        <a href="https://e-f-a.org/privacy-policy/" target="_blank" class="details-policy">Privacy policy</a>
      </div>
    </div>
    <div class="disclaimer p-site border-top">
      <img class="logo-euparl" src="~/assets/images/logos/euparl.svg" alt="European Parliament" />
      <p>
        With Financial Support of the European Parliament.
        The information on this website concerns only the author,
        the European Parliament is not responsible for the use
        and content of the information.
      </p>
    </div>
    <SiteNewsletter />
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    color: var(--text-color);
    font-size: var(--text-sm);
    display: grid;
    grid-template-columns: 2fr minmax(1fr, 200px);
    grid-template-areas:
      "details newsletter"
      "disclaimer newsletter";

    a {
      color: var(--text-color);

      &:hover {
        color: var(--primary);
      }
    }
  }

  .details {
    grid-area: details;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .logo-efa {
      height: 1.75rem;
      width: auto;
      margin-bottom: .75rem;
    }

    .logo-forall {
      height: 3.5rem;
      width: auto;
      margin-bottom: 2rem;
    }

    &-address {
      font-style: normal;
    }

    &-legal {
      margin-top: .5rem;
    }

    &-policy {
      white-space: nowrap;
    }
  }

  .disclaimer {
    grid-area: disclaimer;
    display: flex;
    gap: 1rem;

    p {
      text-wrap: balance;
      margin: 0;
    }

    .logo-euparl {
      height: 2rem;
    }
  }

  @include media('<lg') {
    .footer {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "details newsletter"
        "disclaimer disclaimer";
      line-height: 1.25;
    }
  }

  @include media('<md') {
    .footer {
      grid-template-columns: 1fr;
      grid-template-areas:
        "newsletter"
        "details"
        "disclaimer";

      .newsletter {
        border-left: 0;
        @include border-bottom;
      }

      .disclaimer {
        font-size: .75rem;
      }
    }
  }
</style>