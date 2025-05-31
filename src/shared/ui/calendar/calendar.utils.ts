import { eachDayOfInterval, endOfMonth } from "date-fns"

/**
 * 오늘부터 이번 달 말까지의 날짜 배열을 반환
 */
export function getRemainingDaysOfMonth(from: Date = new Date()) {
  return eachDayOfInterval({
    start: from,
    end: endOfMonth(from),
  })
}
