import { format } from "date-fns"

interface Options {
  isPad?: boolean
}

export const getDayNumber = (date: Date, options: Options = {}) => {
  const getDay = format(date, "d")

  if (!options.isPad) {
    return getDay
  }

  return getDay.padStart(2, "0")
}
