import { useNavigate, useParams } from "react-router"
import {
  MatchFieldInfo,
  MatchThumbnail,
  MatchTeamProfile,
  MatchDescription,
  MatchDetailContainer,
} from "@/features/matchDetail/ui"
import { useMatchDetail } from "@/features/matchDetail/models"
import { NavigationBar, NavigationBarBackButton } from "@/shared/ui"

import { MatchDetailCard, MatchDetailCardTitle } from "@/features/matchDetail/ui/Layout/MatchDetailCard"
import MatchRoleActions from "@/features/matchDetail/ui/MatchRoleActions/MatchRoleActions"
import { navClassName } from "./MatchDetailPage.css"

export default function MatchDetailPage() {
  const { matchId = "" } = useParams()
  const navigate = useNavigate()
  const { data: matchData } = useMatchDetail(matchId)

  if (!matchData) return null

  return (
    <>
      <NavigationBar navClassName={navClassName}>
        <NavigationBarBackButton onClick={() => navigate(-1)} />
      </NavigationBar>
      <main>
        <MatchThumbnail />
        <MatchDetailContainer>
          <MatchFieldInfo
            matchDate={matchData!.match_date}
            fieldName={matchData!.field_name}
            matchTime={matchData!.match_time}
            matchFormat={matchData!.match_format}
          />

          <MatchDetailCard>
            <MatchDetailCardTitle>팀 정보</MatchDetailCardTitle>
            <MatchTeamProfile
              teamName={matchData!.teams.team_name}
              averageAge={matchData!.teams.average_age}
              teamLevel={matchData!.teams.team_level}
              teamManners="☺️ 좋아요"
            />
          </MatchDetailCard>

          <MatchDetailCard>
            <MatchDetailCardTitle>상세 내용</MatchDetailCardTitle>
            <MatchDescription description={matchData.description} />
          </MatchDetailCard>

          <MatchDetailCard>
            <MatchDetailCardTitle>리뷰</MatchDetailCardTitle>
          </MatchDetailCard>

          <MatchRoleActions matchData={matchData} matchId={matchId} />
        </MatchDetailContainer>
      </main>
    </>
  )
}
