import { Badge } from "@/shared/ui"
import { matchTeamProfileItem, matchTeamProfileList } from "./MatchTeamProfile.css"

interface Props {
  teamName: string
  averageAge: string
  teamLevel: string
  teamManners: string
}

export default function MatchTeamProfile({ teamName, averageAge, teamLevel, teamManners }: Props) {
  return (
    <ul className={matchTeamProfileList}>
      <li className={matchTeamProfileItem}>
        <span>팀명</span>
        <span>{teamName}</span>
      </li>
      <li className={matchTeamProfileItem}>
        <span>평균 연령대</span>
        <span>{averageAge}</span>
      </li>
      <li className={matchTeamProfileItem}>
        <span>실력</span>
        <Badge>{teamLevel}</Badge>
      </li>
      <li className={matchTeamProfileItem}>
        <span>매너 평가</span>
        <Badge>{teamManners}</Badge>
      </li>
    </ul>
  )
}
