import { checkPerformance } from "./checkPerfomance"

const freezeDaysType = new Map([
  [1, 0],
  [30, 14],
  [90, 30],
  [365, 60]
])

const calcNewEndDate = (prevEndDate, type) => {
  const endDate = new Date(prevEndDate)
  endDate.setDate(endDate.getDate() + type)
  return endDate
}

export const prolongUser = ({ type, currentUser }) => {
  let editedUser = null
  if (currentUser.isPerformance <= 0) {
    editedUser = {
      ...currentUser,
      type: type > currentUser.type ? type : currentUser.type,
      buyDate: new Date(),
      endDate: calcNewEndDate(new Date(), type),
      freezeTime: freezeDaysType.get(type),
    }
    editedUser.isPerformance = checkPerformance(editedUser)
    return editedUser
  }
  else {
    editedUser = {
      ...currentUser,
      type: type > currentUser.type ? type : currentUser.type,
      endDate: calcNewEndDate(currentUser.endDate, type),
      freezeTime: freezeDaysType.get(type),
    }
    editedUser.isPerformance = checkPerformance(editedUser)
    return editedUser
  }
}

