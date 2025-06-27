import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { matchInfoContainer, matchInfoDate, matchInfoFieldName, matchInfoMatchFormat } from "./MatchFieldInfo.css"

interface Props {
  matchDate: string
  fieldName: string
  matchTime: string
  matchFormat: string
}

export default function MatchFieldInfo({ matchDate, fieldName, matchTime, matchFormat }: Props) {
  return (
    <div className={matchInfoContainer}>
      <div className={matchInfoDate}>
        {format(new Date(matchDate), "M월 d일 EEEE", { locale: ko })} {matchTime}
      </div>
      <h2 className={matchInfoFieldName}>{fieldName}</h2>
      <span className={matchInfoMatchFormat}>{matchFormat.replace(":", "vs")} 매치</span>
    </div>
  )
}
