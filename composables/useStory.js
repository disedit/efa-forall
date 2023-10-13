export const useStory = (story, size = 'medium_large') => {
  const featuredmedia = story._embedded && story._embedded['wp:featuredmedia']

  const thumbnail = computed(() => {
    if (!featuredmedia) return false
    const thumb = featuredmedia[0].media_details.sizes
    const src = thumb[size]?.source_url
      || thumb.large?.source_url
      || thumb.medium_large?.source_url
      || thumb.thumbnail?.source_url
      || thumb.full?.source_url
    const alt = featuredmedia[0].alt_text

    return {
      src,
      alt
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