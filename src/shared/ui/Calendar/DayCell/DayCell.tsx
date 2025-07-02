import { format, isSameDay } from "date-fns"
import { useNavigate } from "react-router"
import { dayCell, dayNumberStyle, weekdayStyle } from "./DayCell.css"
import type { DayCellVariantType } from "./DayCell.type"
import { getDayName, getDayNumber } from "../utils"

interface Props {
  date: Date
  selected: boolean
  onSelected: (date: Date) => void
}

export default function DayCell({ date, selected, onSelected }: Props) {
  const navigate = useNavigate()
  const dayName = getDayName(date)
  const dayNumber = getDayNumber(date, { isPad: true })
  const isToday = isSameDay(new Date(), date)

  const variant: DayCellVariantType = selected ? "selected" : isToday ? "current" : "default"

  const handleSelectedDay = (date: Date) => {
    onSelected(date)
    navigate(`?day=${format(date, "dd")}`)
  }

  return (
    <button type="button" className={dayCell({ variant })} onClick={() => handleSelectedDay(date)}>
      <div className={selected ? weekdayStyle.selected : weekdayStyle.unselected}>{dayName}</div>
      <div className={selected ? dayNumberStyle.selected : dayNumberStyle.unselected}>{dayNumber}</div>
    </button>
  )
}
