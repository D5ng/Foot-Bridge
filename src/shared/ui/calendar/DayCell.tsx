import { format, isSameDay } from "date-fns"
import "./MonthlyCalendar.css"
import { dayCell, dayNumberStyle, weekdayStyle } from "./DayCell.css"

const weekdays = ["일", "월", "화", "수", "목", "금", "토"]

type Props = {
  date: Date
  selected: boolean
  onClick: (date: Date) => void
}

export default function DayCell({ date, selected, onClick }: Props) {
  let variant: "default" | "current" | "selected" = "default"

  const dayName = weekdays[date.getDay()]
  const dayNumber = format(date, "d").padStart(2, "0")
  const today = new Date()
  const isCurrentToday = isSameDay(today, date)

  if (!selected && isCurrentToday) {
    variant = "current"
  }

  if (selected) {
    variant = "selected"
  }

  if (!selected && !isCurrentToday) {
    variant = "default"
  }

  return (
    <button className={`${dayCell({ variant: variant })} ${selected ? "selected" : ""}`} onClick={() => onClick(date)}>
      <div className={selected ? weekdayStyle.selected : weekdayStyle.unselected}>{dayName}</div>
      <div className={selected ? dayNumberStyle.selected : dayNumberStyle.unselected}>{dayNumber}</div>
    </button>
  )
}
