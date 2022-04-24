export const checkPerformance = (abonement) => {
  const diff = abonement.endDate - new Date()//difference in ms
  return Math.ceil(diff / (60 * 60 * 24 * 1000))
}