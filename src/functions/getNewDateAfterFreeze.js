export const getNewDateAfterFreeze = ({ user, isFreezePossibility, numOfFreezeDays }) => {
  if (isFreezePossibility) {
    if (numOfFreezeDays && parseInt(numOfFreezeDays) > 0 && +numOfFreezeDays <= user.freezeTime) {
      const endDate = user.endDate
      endDate.setDate(endDate.getDate() + numOfFreezeDays)
      return endDate
    }
    return null
  }
}