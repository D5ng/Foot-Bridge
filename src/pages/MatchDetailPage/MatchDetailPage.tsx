import { useNavigate, useParams } from "react-router"
import {
  MatchFieldInfo,
  MatchThumbnail,
  MatchTeamProfile,
  MatchDescription,
  MatchDetailContainer,
} from "@/features/matchDetail/ui"
import { useMatchDetail } from "@/features/matchDetail/models"
import { Button, NavigationBar, NavigationBarBackButton } from "@/shared/ui"

import { MatchDetailCard, MatchDetailCardTitle } from "@/features/matchDetail/ui/Layout/MatchDetailCard"
import { matchDetailButtonWrapper, navClassName } from "./MatchDetailPage.css"

export default function MatchDetailPage() {
  const { matchId } = useParams()
  const navigate = useNavigate()

  const { data } = useMatchDetail(matchId || "")

  if (!data) return null

  return (
    <>
      <NavigationBar navClassName={navClassName}>
        <NavigationBarBackButton onClick={() => navigate(-1)} />
      </NavigationBar>
      <main>
        <MatchThumbnail />
        <MatchDetailContainer>
          <MatchFieldInfo
            matchDate={data!.match_date}
            fieldName={data!.field_name}
            matchTime={data!.match_time}
            matchFormat={data!.match_format}
          />

          <MatchDetailCard>
            <MatchDetailCardTitle>팀 정보</MatchDetailCardTitle>
            <MatchTeamProfile
              teamName={data!.teams.team_name}
              averageAge={data!.teams.average_age}
              teamLevel={data!.teams.team_level}
              teamManners="☺️ 좋아요"
            />
          </MatchDetailCard>

          <MatchDetailCard>
            <MatchDetailCardTitle>상세 내용</MatchDetailCardTitle>
            <MatchDescription description={data.description} />
          </MatchDetailCard>

          <MatchDetailCard>
            <MatchDetailCardTitle>리뷰</MatchDetailCardTitle>
          </MatchDetailCard>

          <div className={matchDetailButtonWrapper}>
            <Button>1:1 채팅하기</Button>
          </div>
        </MatchDetailContainer>
      </main>
    </>
  )
}
