import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { Draggable } from 'gsap/Draggable'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)
gsap.registerPlugin(InertiaPlugin)
gsap.registerPlugin(CustomEase)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap)
  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('ScrollTrigger', ScrollTrigger)
  nuxtApp.provide('Draggable', Draggable)
  nuxtApp.provide('CustomEase', CustomEase)
  nuxtApp.hook('page:transition:finish', () => {
    ScrollTrigger.refresh()
  })
})
