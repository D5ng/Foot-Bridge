import { useEffect, useState } from "react"
import { format, parse } from "date-fns"
import { Swiper, SwiperSlide } from "swiper/react"
import { clsx } from "clsx"
import { getRemainingDaysOfMonth } from "../utils"
import DayCell from "../DayCell/DayCell"

import { swiperContainer, dayCellSlide, swiperWrapper } from "./MonthlyCalender.css"

interface Props {
  swiperContainerClassName?: string
  onValueChange?: (date: Date) => void
}

export default function MonthlyCalendar({ swiperContainerClassName, onValueChange }: Props) {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<string>(format(today, "yyyy-MM-dd"))
  const remainingDays = getRemainingDaysOfMonth(today)

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(format(date, "yyyy-MM-dd"))
    onValueChange?.(date)
  }

  useEffect(() => {
    if (onValueChange) {
      onValueChange(parse(selectedDate, "yyyy-MM-dd", new Date()))
    }
  }, [selectedDate, onValueChange])

  return (
    <Swiper
      slidesPerView="auto"
      grabCursor
      wrapperClass={swiperWrapper}
      className={clsx(swiperContainer, swiperContainerClassName)}
    >
      {remainingDays.map((date) => (
        <SwiperSlide key={format(date, "yyyy-MM-dd")} className={dayCellSlide}>
          <DayCell
            date={date}
            selected={format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")}
            onSelected={handleSelectedDate}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
