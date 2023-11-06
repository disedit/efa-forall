<template>
  <form
    class="newsletter p-site validate"
    action="https://e-f-a.us18.list-manage.com/subscribe/post?u=ac6d425391adfe5b91b4c11c5&amp;id=02445d05b4&amp;f_id=007e8ce6f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_self"
  >
    <p class="newsletter-title headline-font">
      Keep up <br> to date
    </p>

    <div class="newsletter-form">
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
            name="MMERGE3"
            value="I have read and agree to the Terms and Conditions."
            class="checkbox-input"
            required
          />
          <span>
            I have read and agree to the
            <a href="https://e-f-a.org/privacy-policy/" target="_blank" class="link-black-underlined">
              Terms and Conditions
            </a>
          </span>
        </label>
      </div>
      <div aria-hidden="true" style="position: absolute; left: -5000px;">
          <input type="text" name="b_ac6d425391adfe5b91b4c11c5_02445d05b4" tabindex="-1" value="">
      </div>
    </div>
    <div class="newsletter-button">
      <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button button-lg" value="Subscribe">
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .newsletter {
    grid-area: newsletter;
    @include border-left;
    display: flex;
    flex-direction: column;
    gap: var(--site-padding);

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