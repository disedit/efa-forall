<template>
  <form class="newsletter p-site">
    <p class="newsletter-title headline-font">
      Keep up <br> to date
    </p>

    <div class="newsletter-form" action="">
      <label for="newsletter_email">Your e-mail</label>
      <input
        id="newsletter_email"
        type="email"
        name="EMAIL"
        placeolder="Enter your e-mail"
        required
        class="text-input" />
      <div class="newsletter-legal">
        <label class="checkbox-label">
          <input
            type="checkbox"
            name="policy"
            value="true"
            class="checkbox-input"
          />
          <span>
            I have read and agree to the
            <a href="https://e-f-a.org/privacy-policy/" target="_blank" class="link-black-underlined">
              Terms and Conditions
            </a>
          </span>
        </label>
      </div>
    </div>
    <div class="newsletter-button">
      <button type="submit" class="button button-lg">Subscribe</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .newsletter {
    grid-area: newsletter;
    @include border-left;
    display: flex;
    flex-direction: column;

    &-title {
      font-size: 3rem;
      margin: 0;
      line-height: 1;
    }

    &-form {
      margin: auto 0;

      label {
        display: block;
        margin-bottom: .5rem;
      }

      .text-input {
        width: 100%;
        font-size: var(--text-md);
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: .5em;
      }
    }

    &-button .button {
      font-size: var(--text-md);
    }

    &-legal {
      margin-top: .5rem;
    }
  }
  </style>