import WPAPI from 'wpapi'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const wp = new WPAPI({
    endpoint: config.public.wpApiEndpoint
  })

  wp.candidates = wp.registerRoute('wp/v2', 'candidate')
  wp.events = wp.registerRoute('wp/v2', 'event')
  wp.parties = wp.registerRoute('wp/v2', 'party')

  return {
    provide: {
      wp
    }
  }
})
