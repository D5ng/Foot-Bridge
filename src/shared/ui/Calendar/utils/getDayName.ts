import { WEEK_DAYS } from "../DayCell/DayCell.constants"

export const getDayName = (date: Date) => {
  const day = date.getDay()
  return WEEK_DAYS[day]
}
