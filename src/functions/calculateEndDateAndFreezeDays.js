import { checkPerformance } from "./checkPerfomance";

const freezeDaysType = new Map([
  [1, 0],
  [30, 14],
  [90, 30],
  [365, 60]
])

export default function calculateEndDateAndFreezeDays(abonements) {
  const newAbonements = abonements.map((a, i) => {
    const endDate = new Date(a.buyDate)
    endDate.setDate(endDate.getDate() + a.type)
    const temp = {
      name: a.name,
      number: i + 1,
      ...a,
      endDate,
      freezeTime: freezeDaysType.get(a.type),
    }
    return {
      ...temp,
      isPerformance: checkPerformance(temp)
    }
  })
  return newAbonements
}