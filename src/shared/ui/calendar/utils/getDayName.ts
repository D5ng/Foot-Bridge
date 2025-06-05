import { WEEK_DAYS } from "../dayCell/constants"

export const getDayName = (date: Date) => {
  const day = date.getDay()
  return WEEK_DAYS[day]
}
