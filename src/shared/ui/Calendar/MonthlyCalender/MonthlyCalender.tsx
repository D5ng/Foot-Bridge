import { useState } from "react"
import { format } from "date-fns"
import { Swiper, SwiperSlide } from "swiper/react"
import { getRemainingDaysOfMonth } from "../utils"
import DayCell from "../DayCell/DayCell"

import { swiperContainer, dayCellSlide, swiperWrapper } from "./MonthlyCalender.css"

export default function MonthlyCalendar() {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(today)
  const remainingDays = getRemainingDaysOfMonth(today)

  return (
    <Swiper slidesPerView="auto" grabCursor wrapperClass={swiperWrapper} className={swiperContainer}>
      {remainingDays.map((date) => (
        <SwiperSlide key={format(date, "yyyy-MM-dd")} className={dayCellSlide}>
          <DayCell
            date={date}
            selected={format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")}
            onSelected={setSelectedDate}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
