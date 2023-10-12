export const useDate = (date) => {
  const thisDate = new Date(date)
  const day = thisDate.getDate().toString().padStart(2, '0')
  const month = (thisDate.getMonth() + 1).toString().padStart(2, '0')
  const year = thisDate.getFullYear()
  const hour = thisDate.getHours().toString().padStart(2, '0')
  const minutes = thisDate.getMinutes().toString().padStart(2, '0')

  return {
    date: `${day}.${month}.${year}`,
    time: `${hour}:${minutes}`
  }
}
