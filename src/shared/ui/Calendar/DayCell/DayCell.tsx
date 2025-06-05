import { isSameDay } from "date-fns"
import { dayCell, dayNumberStyle, weekdayStyle } from "./DayCell.css"
import type { DayCellVariantType } from "./DayCell.type"
import { getDayName, getDayNumber } from "../utils"

interface Props {
  date: Date
  selected: boolean
  onSelected: (date: Date) => void
}

export default function DayCell({ date, selected, onSelected }: Props) {
  const dayName = getDayName(date)
  const dayNumber = getDayNumber(date, { isPad: true })
  const isToday = isSameDay(new Date(), date)
  const variant: DayCellVariantType = selected ? "selected" : isToday ? "current" : "default"

  return (
    <button className={dayCell({ variant })} onClick={() => onSelected(date)}>
      <div className={selected ? weekdayStyle.selected : weekdayStyle.unselected}>{dayName}</div>
      <div className={selected ? dayNumberStyle.selected : dayNumberStyle.unselected}>{dayNumber}</div>
    </button>
  )
}
