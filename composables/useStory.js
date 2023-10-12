export const useStory = (story) => {
  const featuredmedia = story._embedded && story._embedded['wp:featuredmedia']

  const thumbnail = computed(() => {
    if (!featuredmedia) return false
    return {
      src: featuredmedia[0].media_details.sizes.medium_large.source_url,
      alt: featuredmedia[0].alt_text
    }
  })

  const category = computed(() => {
    if (!story._embedded || !story._embedded['wp:term']) return false
    const { name, slug } = story._embedded['wp:term'][0][0]
    return { name, slug }
  })

  const date = computed(() => {
    const { date: thisDate } = useDate(story.date)
    return thisDate
  })

  return { thumbnail, category, date }
}