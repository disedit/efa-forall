export const useStory = (story) => {
  const featuredmedia = computed(() => (story._embedded && story._embedded['wp:featuredmedia']))

  const thumbnail = computed(() => {
    if (!featuredmedia.value) return false
    return {
      src: featuredmedia.value[0].media_details.sizes.medium.source_url,
      alt: featuredmedia.value[0].alt_text
    }
  })

  const category = computed(() => {
    if (!story._embedded || !story._embedded['wp:term']) return false
    const { name, slug } = story._embedded['wp:term'][0][0]
    return { name, slug }
  })

  const date = computed(() => {
    const postDate = new Date(story.date)
    const day = postDate.getDay().toString().padStart(2, '0')
    const month = (postDate.getMonth() + 1).toString().padStart(2, '0')
    const year = postDate.getFullYear()
    return `${day}.${month}.${year}`
  })

  return { thumbnail, category, date }
}