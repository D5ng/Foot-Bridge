import { format, parse } from "date-fns"
import { Swiper, SwiperSlide } from "swiper/react"
import { clsx } from "clsx"
import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { useControllableState } from "@/shared/hooks"
import { getRemainingDaysOfMonth } from "../utils"
import DayCell from "../DayCell/DayCell"

import { swiperContainer, dayCellSlide, swiperWrapper } from "./MonthlyCalender.css"

interface Props {
  swiperContainerClassName?: string
  defaultValue?: Date
  onValueChange?: (date: Date) => void
}

export default function MonthlyCalendar({ swiperContainerClassName, onValueChange, defaultValue }: Props) {
  const [searchParams] = useSearchParams()

  const today = useMemo(() => new Date(), [])
  const remainingDays = getRemainingDaysOfMonth(today)

  const initialDate = searchParams.get("day")
    ? parse(searchParams.get("day")!, "dd", new Date())
    : parse(format(today, "yyyy-MM-dd"), "yyyy-MM-dd", new Date())

  const [selectedDate, setSelectedDate] = useControllableState({
    prop: defaultValue,
    defaultProp: defaultValue ?? initialDate,
    onChange: onValueChange,
  })

  console.log(searchParams.get("day"))

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(parse(format(date, "yyyy-MM-dd"), "yyyy-MM-dd", new Date()))
  }

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
