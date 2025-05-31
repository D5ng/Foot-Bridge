import { useState } from "react"
import { format } from "date-fns"
import { Swiper, SwiperSlide } from "swiper/react"
import { getRemainingDaysOfMonth } from "./calendar.utils"
import DayCell from "./DayCell"

import { dayCellSlide, wrapper } from "./MonthlyCalendar.css"

// import "./MonthlyCalendar.css"

export default function MonthlyCalendar() {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(today)
  const dates = getRemainingDaysOfMonth(today)

  return (
    <Swiper slidesPerView="auto" grabCursor wrapperClass={wrapper}>
      {dates.map((date) => (
        <SwiperSlide key={format(date, "yyyy-MM-dd")} className={dayCellSlide}>
          <DayCell
            date={date}
            selected={format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")}
            onClick={setSelectedDate}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
