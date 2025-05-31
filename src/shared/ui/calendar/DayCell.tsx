import { format } from "date-fns"
import "./MonthlyCalendar.css"
import { dayCell, dayNumberStyle, weekdayStyle } from "./DayCell.css"

const weekdays = ["일", "월", "화", "수", "목", "금", "토"]

type Props = {
  date: Date
  selected: boolean
  onClick: (date: Date) => void
}

export default function DayCell({ date, selected, onClick }: Props) {
  const dayName = weekdays[date.getDay()]
  const dayNumber = format(date, "d").padStart(2, "0")

  return (
    <button className={`${dayCell({ selected })} ${selected ? "selected" : ""}`} onClick={() => onClick(date)}>
      <div className={selected ? weekdayStyle.selected : weekdayStyle.unselected}>{dayName}</div>
      <div className={selected ? dayNumberStyle.selected : dayNumberStyle.unselected}>{dayNumber}</div>
    </button>
  )
}
