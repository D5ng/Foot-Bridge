import { format, parse } from "date-fns"
import { useState } from "react"

interface Params {
  initialDate?: Date
}

export function useSelectedDate({ initialDate }: Params = {}) {
  const [selectedDate, setSelectedDate] = useState(
    initialDate || parse(format(new Date(), "yyyy-MM-dd"), "yyyy-MM-dd", new Date())
  )

  const selectedDateChange = (date: Date) => {
    setSelectedDate(date)
  }

  return {
    selectedDate,
    selectedDateChange,
  }
}
